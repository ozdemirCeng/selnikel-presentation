import React, { useState, useEffect, useCallback } from 'react';
import { SlideContainer } from './components/SlideContainer';
import { PresenterDeckHUD } from './components/PresenterDeckHUD';
import { PresenterNotesModal } from './components/PresenterNotesModal';
import { MagicHandController } from './components/MagicHandController';
import { CORE_SLIDES_METADATA, APPENDIX_SLIDES_METADATA } from './data/slidesContent';

// 12 Core Keynote Slides (Web, Mobil, Rota Optimizasyonu, Selnikel AI)
import { Slide01_Opening } from './slides/Slide01_Opening';
import { Slide02_SelnikelPower } from './slides/Slide02_SelnikelPower';
import { Slide03_FourPillars } from './slides/Slide03_FourPillars';
import { Slide04_Website } from './slides/Slide04_Website';
import { Slide05_MobileApp } from './slides/Slide05_MobileApp';
import { Slide06_MobileDriver } from './slides/Slide06_MobileDriver';
import { Slide07_RouteOptimization } from './slides/Slide07_RouteOptimization';
import { Slide08_RouteCockpit } from './slides/Slide08_RouteCockpit';
import { Slide09_SelnikelAI } from './slides/Slide09_SelnikelAI';
import { Slide10_AIMCPTools } from './slides/Slide10_AIMCPTools';
import { Slide11_IntegratedROI } from './slides/Slide11_IntegratedROI';
import { Slide12_Roadmap } from './slides/Slide12_Roadmap';

// 5 Appendix Backup Slides (Q&A)
import { App01_Architecture } from './slides/appendix/App01_Architecture';
import { App02_BusinessKPIs } from './slides/appendix/App02_BusinessKPIs';
import { App03_PilotRoadmap } from './slides/appendix/App03_PilotRoadmap';
import { App04_ROIMethodology } from './slides/appendix/App04_ROIMethodology';
import { App05_SecurityModel } from './slides/appendix/App05_SecurityModel';

// Safe Error Boundary to prevent black screen on any slide error
class SlideErrorBoundary extends React.Component<
  { children: React.ReactNode; onReset: () => void },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; onReset: () => void }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('Slide presentation render error:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full flex flex-col items-center justify-center bg-slate-950 text-white p-8 text-center select-none">
          <h2 className="text-2xl font-bold text-red-500 mb-2">Sunum Görüntüleme Hatası</h2>
          <p className="text-slate-400 text-sm mb-4 max-w-md">
            Slayt bileşeni yüklenirken bir sorun oluştu. Başa dönüp devam edebilirsiniz.
          </p>
          <button
            onClick={() => {
              this.setState({ hasError: false });
              this.props.onReset();
            }}
            className="px-6 py-2.5 rounded-full bg-[#E30613] text-white font-bold text-sm hover:bg-red-700 transition-colors cursor-pointer"
          >
            İlk Slayta Dön
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isAppendixMode, setIsAppendixMode] = useState<boolean>(false);
  const [appendixIndex, setAppendixIndex] = useState<number>(0);
  const [isNotesOpen, setIsNotesOpen] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const coreSlides = [
    Slide01_Opening,
    Slide02_SelnikelPower,
    Slide03_FourPillars,
    Slide04_Website,
    Slide05_MobileApp,
    Slide06_MobileDriver,
    Slide07_RouteOptimization,
    Slide08_RouteCockpit,
    Slide09_SelnikelAI,
    Slide10_AIMCPTools,
    Slide11_IntegratedROI,
    Slide12_Roadmap,
  ];

  const appendixSlides = [
    App01_Architecture,
    App02_BusinessKPIs,
    App03_PilotRoadmap,
    App04_ROIMethodology,
    App05_SecurityModel,
  ];

  const totalCore = coreSlides.length;
  const totalApp = appendixSlides.length;

  const safeCoreIndex = Math.min(Math.max(0, currentSlideIndex), totalCore - 1);
  const safeAppIndex = Math.min(Math.max(0, appendixIndex), totalApp - 1);

  const currentMetadata = isAppendixMode
    ? (APPENDIX_SLIDES_METADATA[safeAppIndex] || APPENDIX_SLIDES_METADATA[0])
    : (CORE_SLIDES_METADATA[safeCoreIndex] || CORE_SLIDES_METADATA[0]);

  const CurrentSlideComponent = isAppendixMode
    ? (appendixSlides[safeAppIndex] || appendixSlides[0])
    : (coreSlides[safeCoreIndex] || coreSlides[0]);

  const handleNext = useCallback(() => {
    if (isAppendixMode) {
      setAppendixIndex((prev) => Math.min(prev + 1, totalApp - 1));
    } else {
      setCurrentSlideIndex((prev) => Math.min(prev + 1, totalCore - 1));
    }
  }, [isAppendixMode, totalApp, totalCore]);

  const handlePrev = useCallback(() => {
    if (isAppendixMode) {
      setAppendixIndex((prev) => Math.max(prev - 1, 0));
    } else {
      setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
    }
  }, [isAppendixMode]);

  const toggleAppendix = useCallback(() => {
    setIsAppendixMode((prev) => !prev);
  }, []);

  const handleResetToStart = useCallback(() => {
    setIsAppendixMode(false);
    setAppendixIndex(0);
    setCurrentSlideIndex(0);
    setIsNotesOpen(false);
  }, []);

  const toggleNotes = useCallback(() => {
    setIsNotesOpen((prev) => !prev);
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  }, []);

  // Sync fullscreen state with native browser events (e.g. Escape key)
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isNotesOpen) {
        if (e.key === 'Escape' || e.key.toLowerCase() === 'n') {
          e.preventDefault();
          setIsNotesOpen(false);
        }
        return;
      }

      if (isAppendixMode && e.key === 'Escape') {
        e.preventDefault();
        setIsAppendixMode(false);
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault();
          handleNext();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          handlePrev();
          break;
        case 'n':
        case 'N':
          e.preventDefault();
          toggleNotes();
          break;
        case 'a':
        case 'A':
          e.preventDefault();
          toggleAppendix();
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, toggleNotes, toggleAppendix, toggleFullscreen, isNotesOpen, isAppendixMode]);

  return (
    <main className="w-screen h-screen bg-[#0A0D14] flex items-center justify-center p-0 md:p-6 overflow-hidden select-none">
      {/* 16:9 PowerPoint Presentation Canvas */}
      <SlideContainer>
        <SlideErrorBoundary onReset={handleResetToStart}>
          <CurrentSlideComponent />
        </SlideErrorBoundary>
      </SlideContainer>

      {/* Floating Bottom HUD */}
      <PresenterDeckHUD
        currentSlideIndex={isAppendixMode ? safeAppIndex : safeCoreIndex}
        totalSlides={isAppendixMode ? totalApp : totalCore}
        isAppendixMode={isAppendixMode}
        onNext={handleNext}
        onPrev={handlePrev}
        onToggleNotes={toggleNotes}
        onToggleAppendix={toggleAppendix}
        onToggleFullscreen={toggleFullscreen}
        isFullscreen={isFullscreen}
      />

      {/* Presenter Notes Modal */}
      <PresenterNotesModal
        metadata={currentMetadata}
        isOpen={isNotesOpen}
        onClose={() => setIsNotesOpen(false)}
      />

      {/* AI Vision & Hand Gesture Remote Controller */}
      <MagicHandController
        onNext={handleNext}
        onPrev={handlePrev}
        currentSlide={isAppendixMode ? safeAppIndex : safeCoreIndex}
        totalSlides={isAppendixMode ? totalApp : totalCore}
      />
    </main>
  );
};
