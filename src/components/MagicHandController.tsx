import React, { useState, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Hands, Results } from '@mediapipe/hands';
import { CameraOff, Sparkles, Eye, Minimize2, Maximize2, AlertCircle } from 'lucide-react';

interface MagicHandControllerProps {
  onNext: () => void;
  onPrev: () => void;
  currentSlide: number;
  totalSlides: number;
}

export const MagicHandController: React.FC<MagicHandControllerProps> = ({
  onNext,
  onPrev,
  currentSlide,
  totalSlides,
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string>('Kamera kapalı');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [pointerPos, setPointerPos] = useState<{ x: number; y: number; visible: boolean }>({ x: 0, y: 0, visible: false });
  const [slideFlash, setSlideFlash] = useState<'right' | 'left' | null>(null);

  // References
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const handsRef = useRef<Hands | null>(null);
  const animFrameIdRef = useRef<number | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Motion history sample for dual-hand gestures
  interface HandSample {
    x: number;
    y: number;
    time: number;
  }

  // Ref wrappers to avoid stale closures
  const onNextRef = useRef(onNext);
  const onPrevRef = useRef(onPrev);
  useEffect(() => {
    onNextRef.current = onNext;
    onPrevRef.current = onPrev;
  });

  const lastActionTimeRef = useRef<number>(0);
  const lastHandSeenTimeRef = useRef<number>(0);
  const smoothGazeRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const audioCtxRef = useRef<AudioContext | null>(null);
  const isProcessingFrameRef = useRef<boolean>(false);

  // Independent motion history buffers for both hands and single hand
  const leftHandHistoryRef = useRef<HandSample[]>([]);
  const rightHandHistoryRef = useRef<HandSample[]>([]);
  const singleHandHistoryRef = useRef<HandSample[]>([]);

  // Sound Synthesizer (Crisp subtle click/whoosh)
  const playSound = useCallback((type: 'next' | 'prev') => {
    try {
      if (!audioCtxRef.current) {
        const AudioContextClass =
          window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioContextClass();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;
      if (type === 'next') {
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.exponentialRampToValueAtTime(1200, now + 0.12);
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);
      } else {
        osc.frequency.setValueAtTime(1200, now);
        osc.frequency.exponentialRampToValueAtTime(600, now + 0.12);
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);
      }
      osc.start(now);
      osc.stop(now + 0.14);
    } catch {
      // Audio restricted before user gesture
    }
  }, []);

  // Slide trigger with guard
  const triggerSlide = useCallback(
    (direction: 'next' | 'prev') => {
      const now = Date.now();
      if (now - lastActionTimeRef.current < 850) return;
      lastActionTimeRef.current = now;

      // Clear all gesture tracking buffers on trigger
      leftHandHistoryRef.current = [];
      rightHandHistoryRef.current = [];
      singleHandHistoryRef.current = [];

      if (direction === 'next') {
        setStatusMessage('Sonraki Slayt');
        setSlideFlash('right');
        playSound('next');
        onNextRef.current();
      } else {
        setStatusMessage('Önceki Slayt');
        setSlideFlash('left');
        playSound('prev');
        onPrevRef.current();
      }

      setTimeout(() => setSlideFlash(null), 350);
    },
    [playSound]
  );

  // Main Hand Tracking Callback (Handles 1 Hand or 2 Hands seamlessly)
  const onResults = useCallback(
    (results: Results) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.save();
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const now = Date.now();
      const handsLandmarks = results.multiHandLandmarks;

      if (!handsLandmarks || handsLandmarks.length === 0) {
        // No hands detected this frame
        setPointerPos((prev) => (prev.visible ? { ...prev, visible: false } : prev));

        if (now - lastHandSeenTimeRef.current > 1200) {
          setStatusMessage('El aranıyor...');
          // Return gaze to center smoothly
          smoothGazeRef.current.x = smoothGazeRef.current.x * 0.9;
          smoothGazeRef.current.y = smoothGazeRef.current.y * 0.9;
          window.dispatchEvent(
            new CustomEvent('selnikel-vision-target', {
              detail: { x: smoothGazeRef.current.x, y: smoothGazeRef.current.y, active: false },
            })
          );
        }
        ctx.restore();
        return;
      }

      lastHandSeenTimeRef.current = now;

      // 1. Parse all detected hands
      const parsedHands = handsLandmarks.map((landmarks) => {
        const wrist = landmarks[0];
        const indexTip = landmarks[8];
        const indexPip = landmarks[6];
        const middleTip = landmarks[12];
        const middlePip = landmarks[10];
        const ringTip = landmarks[16];
        const ringPip = landmarks[14];
        const pinkyTip = landmarks[20];
        const pinkyPip = landmarks[18];
        const palmCenter = landmarks[9];

        // Mirrored X coordinates
        const mirroredX = 1 - palmCenter.x;
        const y = palmCenter.y;
        const mirroredIndexX = 1 - indexTip.x;
        const indexY = indexTip.y;

        const isExtended = (tip: { x: number; y: number }, pip: { x: number; y: number }) => {
          const dTip = Math.hypot(tip.x - wrist.x, tip.y - wrist.y);
          const dPip = Math.hypot(pip.x - wrist.x, pip.y - wrist.y);
          return dTip > dPip * 1.15;
        };

        const indexOpen = isExtended(indexTip, indexPip);
        const middleOpen = isExtended(middleTip, middlePip);
        const ringOpen = isExtended(ringTip, ringPip);
        const pinkyOpen = isExtended(pinkyTip, pinkyPip);

        // Pointing gesture: ONLY index finger extended, other 3 curled into palm
        const isPointing = indexOpen && !middleOpen && !ringOpen && !pinkyOpen;

        return {
          landmarks,
          mirroredX,
          y,
          mirroredIndexX,
          indexY,
          isPointing,
        };
      });

      // 2. Draw Skeletons for ALL detected hands in PIP HUD
      const connections = [
        [0, 1], [1, 2], [2, 3], [3, 4], // thumb
        [0, 5], [5, 6], [6, 7], [7, 8], // index
        [0, 9], [9, 10], [10, 11], [11, 12], // middle
        [0, 13], [13, 14], [14, 15], [15, 16], // ring
        [0, 17], [17, 18], [18, 19], [19, 20], // pinky
        [5, 9], [9, 13], [13, 17], // palm
      ];

      parsedHands.forEach((hand) => {
        const isRightHandSide = hand.mirroredX >= 0.5;
        // Cyan for Right side, Emerald for Left side
        ctx.strokeStyle = isRightHandSide ? '#00F0FF' : '#10B981';
        ctx.lineWidth = 2.5;

        for (const [i, j] of connections) {
          const p1 = hand.landmarks[i];
          const p2 = hand.landmarks[j];
          ctx.beginPath();
          ctx.moveTo(p1.x * canvas.width, p1.y * canvas.height);
          ctx.lineTo(p2.x * canvas.width, p2.y * canvas.height);
          ctx.stroke();
        }

        for (const pt of hand.landmarks) {
          ctx.beginPath();
          ctx.arc(pt.x * canvas.width, pt.y * canvas.height, 3.5, 0, 2 * Math.PI);
          ctx.fillStyle = '#E30613';
          ctx.fill();
        }
      });

      // 3. Laser Pointer Mode (Zero text labels, clean red laser pinpoint)
      const pointingHand = parsedHands.find((h) => h.isPointing);
      if (pointingHand) {
        const rx = Math.max(0.02, Math.min(0.98, 0.5 + (pointingHand.mirroredIndexX - 0.5) * 1.85));
        const ry = Math.max(0.02, Math.min(0.98, 0.45 + (pointingHand.indexY - 0.45) * 1.65));

        setPointerPos({
          x: rx * window.innerWidth,
          y: ry * window.innerHeight,
          visible: true,
        });

        // Eye tracking locks smoothly onto the laser pointer
        const rawGazeX = (rx - 0.5) * 2.2;
        const rawGazeY = (ry - 0.5) * 2.0;
        smoothGazeRef.current.x = smoothGazeRef.current.x * 0.85 + rawGazeX * 0.15;
        smoothGazeRef.current.y = smoothGazeRef.current.y * 0.85 + rawGazeY * 0.15;

        window.dispatchEvent(
          new CustomEvent('selnikel-vision-target', {
            detail: {
              x: smoothGazeRef.current.x,
              y: smoothGazeRef.current.y,
              active: true,
            },
          })
        );

        setStatusMessage('İşaretçi');
        ctx.restore();
        return; // Suppress slide triggers while presenter is pointing
      }

      setPointerPos((prev) => (prev.visible ? { ...prev, visible: false } : prev));

      // 4. Selnikel Logo Eye Tracking (Tracks the dominant / higher active hand)
      const dominantHand = parsedHands.reduce(
        (prev, curr) => (curr.y < prev.y ? curr : prev),
        parsedHands[0]
      );
      const rawGazeX = (dominantHand.mirroredX - 0.5) * 2.2;
      const rawGazeY = (dominantHand.y - 0.5) * 2.0;
      smoothGazeRef.current.x = smoothGazeRef.current.x * 0.82 + rawGazeX * 0.18;
      smoothGazeRef.current.y = smoothGazeRef.current.y * 0.82 + rawGazeY * 0.18;

      window.dispatchEvent(
        new CustomEvent('selnikel-vision-target', {
          detail: {
            x: smoothGazeRef.current.x,
            y: smoothGazeRef.current.y,
            active: true,
          },
        })
      );

      // 5. Dual-Hand and Single-Hand Slide Gestures
      const isCooldown = now - lastActionTimeRef.current < 850;

      if (parsedHands.length >= 2) {
        // Sort two hands spatially: Left Hand (smaller mirroredX) & Right Hand (larger mirroredX)
        const leftHand = parsedHands[0].mirroredX < parsedHands[1].mirroredX ? parsedHands[0] : parsedHands[1];
        const rightHand = parsedHands[0].mirroredX < parsedHands[1].mirroredX ? parsedHands[1] : parsedHands[0];

        const leftHistory = leftHandHistoryRef.current;
        const rightHistory = rightHandHistoryRef.current;

        leftHistory.push({ x: leftHand.mirroredX, y: leftHand.y, time: now });
        rightHistory.push({ x: rightHand.mirroredX, y: rightHand.y, time: now });

        while (leftHistory.length > 0 && now - leftHistory[0].time > 400) leftHistory.shift();
        while (rightHistory.length > 0 && now - rightHistory[0].time > 400) rightHistory.shift();

        if (!isCooldown) {
          setStatusMessage('2 El Algılandı (Hazır)');

          // Check Right Hand for NEXT slide
          if (rightHistory.length >= 2) {
            const oldestR = rightHistory[0];
            const dxR = rightHand.mirroredX - oldestR.x;
            const dyR = rightHand.y - oldestR.y;
            const dtR = now - oldestR.time;

            const isRightSwipe = dtR >= 90 && dxR > 0.12 && Math.abs(dxR) > 1.1 * Math.abs(dyR);
            const isRightZonePush = oldestR.x < 0.65 && rightHand.mirroredX > 0.72;

            if (isRightSwipe || isRightZonePush) {
              triggerSlide('next');
              ctx.restore();
              return;
            }
          }

          // Check Left Hand for PREV slide
          if (leftHistory.length >= 2) {
            const oldestL = leftHistory[0];
            const dxL = leftHand.mirroredX - oldestL.x;
            const dyL = leftHand.y - oldestL.y;
            const dtL = now - oldestL.time;

            const isLeftSwipe = dtL >= 90 && dxL < -0.12 && Math.abs(dxL) > 1.1 * Math.abs(dyL);
            const isLeftZonePush = oldestL.x > 0.35 && leftHand.mirroredX < 0.28;

            if (isLeftSwipe || isLeftZonePush) {
              triggerSlide('prev');
              ctx.restore();
              return;
            }
          }
        }
      } else {
        // Single Hand detected
        const singleHand = parsedHands[0];
        const singleHistory = singleHandHistoryRef.current;

        singleHistory.push({ x: singleHand.mirroredX, y: singleHand.y, time: now });
        while (singleHistory.length > 0 && now - singleHistory[0].time > 400) singleHistory.shift();

        if (!isCooldown) {
          setStatusMessage('1 El Algılandı (Hazır)');

          if (singleHistory.length >= 2) {
            const oldest = singleHistory[0];
            const dx = singleHand.mirroredX - oldest.x;
            const dy = singleHand.y - oldest.y;
            const dt = now - oldest.time;

            if (dt >= 90 && Math.abs(dx) > 1.1 * Math.abs(dy)) {
              if (dx > 0.13 || (oldest.x < 0.62 && singleHand.mirroredX > 0.72)) {
                triggerSlide('next');
                ctx.restore();
                return;
              } else if (dx < -0.13 || (oldest.x > 0.38 && singleHand.mirroredX < 0.28)) {
                triggerSlide('prev');
                ctx.restore();
                return;
              }
            }
          }
        }
      }

      ctx.restore();
    },
    [triggerSlide]
  );

  // Ref wrapper for onResults to ensure MediaPipe always runs the freshest version
  const onResultsRef = useRef(onResults);
  useEffect(() => {
    onResultsRef.current = onResults;
  });

  // Main Camera Loop
  const startProcessingLoop = useCallback(() => {
    const loop = async () => {
      const video = videoRef.current;
      if (video && video.readyState >= 2 && !video.paused) {
        if (handsRef.current && !isProcessingFrameRef.current) {
          isProcessingFrameRef.current = true;
          try {
            await handsRef.current.send({ image: video });
          } catch (e) {
            console.warn('Frame send warning:', e);
          } finally {
            isProcessingFrameRef.current = false;
          }
        }
      }
      animFrameIdRef.current = requestAnimationFrame(loop);
    };

    animFrameIdRef.current = requestAnimationFrame(loop);
  }, []);

  // Start Camera
  const startCamera = useCallback(async () => {
    setErrorMessage(null);
    setStatusMessage('Kamera başlatılıyor...');

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 640 },
          height: { ideal: 480 },
          facingMode: 'user',
        },
        audio: false,
      });

      streamRef.current = stream;

      const video = videoRef.current;
      if (video) {
        video.srcObject = stream;
        video.setAttribute('playsinline', 'true');
        video.muted = true;
        await video.play();
      }

      setIsActive(true);
      setStatusMessage('Kamera Aktif');

      // Local MediaPipe Hands with high sensitivity (0.30) for 2-4m distance & dim projector room
      const hands = new Hands({
        locateFile: (file) => `/mediapipe/hands/${file}`,
      });

      hands.setOptions({
        maxNumHands: 2, // Catch both hands simultaneously
        modelComplexity: 1,
        minDetectionConfidence: 0.30,
        minTrackingConfidence: 0.30,
      });

      hands.onResults((res) => onResultsRef.current(res));
      handsRef.current = hands;

      startProcessingLoop();
    } catch (err: unknown) {
      console.error('Kamera hatası:', err);
      const errorObj = err as { name?: string; message?: string };
      if (errorObj?.name === 'NotAllowedError') {
        setErrorMessage('Kamera izni verilmedi.');
      } else {
        setErrorMessage('Kamera açılamadı: ' + (errorObj?.message || 'Bilinmeyen hata'));
      }
      setIsActive(false);
      setStatusMessage('Kamera kapalı');
    }
  }, [startProcessingLoop]);

  // Stop Camera
  const stopCamera = useCallback(() => {
    if (animFrameIdRef.current) {
      cancelAnimationFrame(animFrameIdRef.current);
      animFrameIdRef.current = null;
    }

    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }

    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }

    if (handsRef.current) {
      handsRef.current.close();
      handsRef.current = null;
    }

    setIsActive(false);
    setStatusMessage('Kamera kapalı');
    setPointerPos((prev) => ({ ...prev, visible: false }));
    leftHandHistoryRef.current = [];
    rightHandHistoryRef.current = [];
    singleHandHistoryRef.current = [];
  }, []);

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, [stopCamera]);

  return (
    <>
      {/* Permanent hidden video element */}
      <video ref={videoRef} className="hidden" playsInline muted />

      {/* 1. Subtle, Clean Edge Flash on Slide Change (No text labels!) */}
      <AnimatePresence>
        {slideFlash === 'right' && (
          <motion.div
            initial={{ opacity: 0.7 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-y-0 right-0 w-36 bg-gradient-to-l from-cyan-400/40 to-transparent pointer-events-none z-[100]"
          />
        )}
        {slideFlash === 'left' && (
          <motion.div
            initial={{ opacity: 0.7 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-y-0 left-0 w-36 bg-gradient-to-r from-red-500/40 to-transparent pointer-events-none z-[100]"
          />
        )}
      </AnimatePresence>

      {/* 2. Pure Clean Physical-Style Laser Dot (NO TEXT LABELS) */}
      {pointerPos.visible && (
        <div
          className="fixed pointer-events-none z-[99] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
          style={{ left: `${pointerPos.x}px`, top: `${pointerPos.y}px` }}
        >
          {/* Outer glowing halo */}
          <div className="w-10 h-10 rounded-full border border-red-500 bg-red-500/20 animate-ping absolute -inset-1" />
          {/* Intense bright red/crimson laser pinpoint */}
          <div className="w-7 h-7 rounded-full bg-red-600/80 shadow-[0_0_20px_#FF0020] flex items-center justify-center border border-white/80">
            <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#FFF]" />
          </div>
        </div>
      )}

      {/* 3. Floating Minimal Control HUD */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 select-none">
        {/* Error notification if permission denied */}
        {errorMessage && (
          <div className="p-3 rounded-2xl bg-red-950/95 border border-red-500 text-red-200 text-xs shadow-xl flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-400" />
            <span>{errorMessage}</span>
            <button onClick={() => setErrorMessage(null)} className="ml-2 font-bold text-white">✕</button>
          </div>
        )}

        {/* Live Camera PIP Preview (Compact & Clean) */}
        <AnimatePresence>
          {isActive && !isMinimized && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              className="relative rounded-2xl overflow-hidden border border-white/20 bg-slate-950 shadow-2xl w-56 backdrop-blur-md"
            >
              {/* Header */}
              <div className="px-3 py-2 bg-slate-900/90 flex items-center justify-between text-white text-xs border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-[11px] font-bold">Kamera</span>
                </div>
                <button
                  onClick={() => setIsMinimized(true)}
                  className="p-1 text-slate-400 hover:text-white"
                  title="Küçült"
                >
                  <Minimize2 className="w-3 h-3" />
                </button>
              </div>

              {/* Video & Skeleton */}
              <div className="relative w-full h-36 bg-black overflow-hidden">
                {videoRef.current?.srcObject && (
                  <video
                    ref={(node) => {
                      if (node && videoRef.current?.srcObject && node.srcObject !== videoRef.current.srcObject) {
                        node.srcObject = videoRef.current.srcObject;
                        node.play().catch(() => {});
                      }
                    }}
                    className="absolute inset-0 w-full h-full object-cover transform -scale-x-100 opacity-60"
                    playsInline
                    muted
                  />
                )}
                <canvas
                  ref={canvasRef}
                  width={320}
                  height={240}
                  className="absolute inset-0 w-full h-full object-cover transform -scale-x-100 z-10"
                />

                {/* Visual Zone Guides */}
                <div className="absolute inset-0 pointer-events-none flex z-20">
                  <div className="w-[30%] border-r border-red-500/20 bg-red-500/5 flex items-center justify-center text-[9px] font-mono text-red-300">
                    GERİ
                  </div>
                  <div className="w-[40%] flex items-center justify-center text-[9px] font-mono text-slate-400/40">
                    ORTA
                  </div>
                  <div className="w-[30%] border-l border-cyan-500/20 bg-cyan-500/5 flex items-center justify-center text-[9px] font-mono text-cyan-300">
                    İLERİ
                  </div>
                </div>
              </div>

              {/* Footer status */}
              <div className="px-3 py-1.5 bg-slate-900 text-center text-[10px] font-mono text-slate-300 border-t border-white/10">
                {statusMessage}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Button Bar */}
        <div className="flex items-center gap-2 bg-slate-950/90 backdrop-blur-xl p-2 rounded-full border border-white/20 shadow-2xl">
          {/* Camera Button */}
          <button
            onClick={isActive ? stopCamera : startCamera}
            className={`px-4 py-2 rounded-full text-xs font-bold font-mono flex items-center gap-2 transition-all cursor-pointer ${
              isActive
                ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_#00F0FF]'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            {isActive ? (
              <>
                <CameraOff className="w-4 h-4" />
                <span>Kapat</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>El Kontrolünü Başlat</span>
              </>
            )}
          </button>

          {/* Slide Indicator */}
          {isActive && (
            <div className="px-3 py-1.5 rounded-full bg-white/10 text-xs font-mono text-slate-300">
              {String(currentSlide + 1).padStart(2, '0')}/{String(totalSlides).padStart(2, '0')}
            </div>
          )}

          {/* Maximize preview if minimized */}
          {isActive && isMinimized && (
            <button
              onClick={() => setIsMinimized(false)}
              className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 cursor-pointer"
              title="Kamera Önizlemesini Aç"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          )}

          {/* Selnikel eye indicator */}
          <div
            className={`p-2 rounded-full flex items-center justify-center transition-colors ${
              isActive ? 'bg-[#E30613] text-white animate-pulse' : 'bg-white/5 text-slate-500'
            }`}
            title="Göz Takibi Aktif"
          >
            <Eye className="w-4 h-4" />
          </div>
        </div>
      </div>
    </>
  );
};
