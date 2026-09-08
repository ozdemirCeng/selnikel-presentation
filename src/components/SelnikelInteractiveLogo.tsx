import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

interface SelnikelLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

type EyeState = 'open' | 'squint' | 'blink';

export const SelnikelInteractiveLogo: React.FC<SelnikelLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMouseActive, setIsMouseActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [idleGaze, setIdleGaze] = useState({ x: 0, y: 0 });
  const [eyeState, setEyeState] = useState<EyeState>('open');

  const lastMouseMoveRef = useRef(Date.now());
  const mouseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isInteractingRef = useRef(false);

  // 1. Continuous Smooth Mouse Tracking (No snapping)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      lastMouseMoveRef.current = Date.now();
      isInteractingRef.current = true;
      setIsMouseActive(true);

      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;

      const rawDistance = Math.sqrt(nx * nx + ny * ny);
      const clampedDistance = Math.min(13, rawDistance * 11);
      const angle = Math.atan2(ny, nx);

      setMousePos({
        x: Math.cos(angle) * clampedDistance,
        y: Math.sin(angle) * clampedDistance * 0.85,
      });

      if (mouseTimeoutRef.current) clearTimeout(mouseTimeoutRef.current);
      mouseTimeoutRef.current = setTimeout(() => {
        setIsMouseActive(false);
        isInteractingRef.current = false;
      }, 3500);
    };

    // Vision / Handpose Target Event Listener
    const handleVisionTarget = (e: Event) => {
      const custom = e as CustomEvent<{ x: number; y: number; active?: boolean }>;
      if (!custom.detail) return;
      lastMouseMoveRef.current = Date.now();
      isInteractingRef.current = true;
      setIsMouseActive(true);

      const nx = Math.max(-1.2, Math.min(1.2, custom.detail.x));
      const ny = Math.max(-1.2, Math.min(1.2, custom.detail.y));

      const rawDistance = Math.sqrt(nx * nx + ny * ny);
      const clampedDistance = Math.min(13, rawDistance * 11);
      const angle = Math.atan2(ny, nx);

      setMousePos({
        x: Math.cos(angle) * clampedDistance,
        y: Math.sin(angle) * clampedDistance * 0.85,
      });

      if (mouseTimeoutRef.current) clearTimeout(mouseTimeoutRef.current);
      mouseTimeoutRef.current = setTimeout(() => {
        setIsMouseActive(false);
        isInteractingRef.current = false;
      }, 2500);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('selnikel-vision-target', handleVisionTarget);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('selnikel-vision-target', handleVisionTarget);
      if (mouseTimeoutRef.current) clearTimeout(mouseTimeoutRef.current);
    };
  }, []);

  // 2. Autonomous Relaxed State Machine (Calm, Infrequent Actions)
  const scheduleNextBehavior = useCallback(() => {
    const calmDelay = 7000 + Math.random() * 9000;

    const timeout = setTimeout(() => {
      if (isHovered) {
        scheduleNextBehavior();
        return;
      }

      const roll = Math.random();

      if (roll < 0.45) {
        // Option A: Bazen kısık bakıp birkaç saniye (3.5s) duracak
        setEyeState('squint');
        const squintDuration = 3200 + Math.random() * 1600;

        setTimeout(() => {
          setEyeState('open');
          scheduleNextBehavior();
        }, squintDuration);

      } else if (roll < 0.80) {
        // Option B: Arada bir yavaşça göz kırpacak
        setEyeState('blink');

        setTimeout(() => {
          setEyeState('open');
          scheduleNextBehavior();
        }, 380);

      } else {
        // Option C: Dingin bir şekilde sakince yeni bir yöne süzülecek
        const angle = Math.random() * Math.PI * 2;
        const radius = 2 + Math.random() * 5.5;
        setIdleGaze({
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * radius * 0.75,
        });

        scheduleNextBehavior();
      }
    }, calmDelay);

    return () => clearTimeout(timeout);
  }, [isHovered]);

  useEffect(() => {
    const cleanup = scheduleNextBehavior();
    return cleanup;
  }, [scheduleNextBehavior]);

  // Coordinate preserves continuous smooth trajectory (Never snaps to 0 on hover)
  const activeX = isMouseActive ? mousePos.x : idleGaze.x;
  const activeY = isMouseActive ? mousePos.y : idleGaze.y;

  // Eye closure logic:
  // - When touched / hovered by mouse: Closes gently shut as a natural touch reflex!
  // - When blinking: Closes smoothly
  // - When squinting: Narrows to 4.5px
  // - When open: Full 22px
  const isClosed = isHovered || eyeState === 'blink';
  const isSquinting = !isHovered && eyeState === 'squint';

  const getWhitePupilRy = () => {
    if (isClosed) return 0.2;
    if (isSquinting) return 4.5;
    return 22;
  };

  const scaleMap = {
    sm: 'scale-90 origin-left',
    md: 'scale-115 origin-left',
    lg: 'scale-160 origin-left',
  };

  return (
    <div
      className={`flex items-center gap-3.5 select-none ${scaleMap[size]} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Brand Wordmark */}
      {showText && (
        <div className="flex flex-col justify-center relative select-none">
          <span className="text-[10px] font-mono font-bold text-slate-500 tracking-wider absolute -top-2.5 right-1">
            1955
          </span>
          <span className="text-2xl sm:text-3xl font-black tracking-tight text-[#1E293B] font-sans">
            Selnikel
          </span>
        </div>
      )}

      {/* Pristine 3D Crimson Emblem with Touch Reflex & Continuous Smooth Motion */}
      <div className="relative w-11 h-11 flex-shrink-0 cursor-pointer">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg overflow-visible">
          <defs>
            {/* Deep 3D Red Radial Sphere */}
            <radialGradient id="selnikel3DOrb" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#FF333D" />
              <stop offset="45%" stopColor="#E30613" />
              <stop offset="85%" stopColor="#A30008" />
              <stop offset="100%" stopColor="#6E0005" />
            </radialGradient>
          </defs>

          {/* Bottom Depth Crescent Shadow */}
          <path
            d="M 22 78 C 42 98, 76 96, 94 76 C 84 86, 62 93, 36 86 C 26 83, 20 80, 18 76 Z"
            fill="#0F172A"
            opacity="0.9"
          />

          {/* Solid 3D Crimson Sphere (Never deforms) */}
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="url(#selnikel3DOrb)"
          />

          {/* Ambient Glass Highlight Arc */}
          <path
            d="M 24 32 C 30 20, 45 15, 65 17"
            stroke="#FFFFFF"
            strokeWidth="3.5"
            strokeLinecap="round"
            opacity="0.45"
            fill="none"
          />

          {/* Direct Morphing of the White Pupil with Continuous Coordinates */}
          <g>
            {/* Main White Pupil Ellipse */}
            <motion.ellipse
              cx={52 + activeX}
              cy={isSquinting ? 57 + activeY * 0.5 : 56 + activeY}
              animate={{
                rx: isSquinting ? 23.5 : 22,
                ry: getWhitePupilRy(),
                opacity: isClosed ? 0 : 1,
              }}
              transition={{
                duration: isClosed ? 0.25 : 0.35,
                ease: [0.25, 1, 0.4, 1],
              }}
              fill="#FFFFFF"
            />

            {/* Specular Highlight that Preserves Continuous Tracking */}
            <motion.circle
              cx={46 + activeX * 0.65}
              cy={isSquinting ? 56 : 49 + activeY * 0.65}
              animate={{
                r: isSquinting ? 2.5 : 5.5,
                opacity: isClosed ? 0 : 0.95,
              }}
              transition={{
                duration: 0.25,
              }}
              fill="#FFFFFF"
            />

            {/* Secondary Micro Sparkle */}
            {!isSquinting && !isClosed && (
              <motion.circle
                cx={55 + activeX * 0.75}
                cy={62 + activeY * 0.75}
                r="2.2"
                fill="#FFFFFF"
                opacity="0.75"
              />
            )}
          </g>
        </svg>
      </div>
    </div>
  );
};
