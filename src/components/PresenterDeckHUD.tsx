import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  BookOpen,
  FileText,
} from 'lucide-react';
import { SelnikelInteractiveLogo } from './SelnikelInteractiveLogo';

interface PresenterDeckHUDProps {
  currentSlideIndex: number;
  totalSlides: number;
  isAppendixMode: boolean;
  onNext: () => void;
  onPrev: () => void;
  onToggleNotes: () => void;
  onToggleAppendix: () => void;
  onToggleFullscreen: () => void;
  isFullscreen: boolean;
}

export const PresenterDeckHUD: React.FC<PresenterDeckHUDProps> = ({
  currentSlideIndex,
  totalSlides,
  isAppendixMode,
  onNext,
  onPrev,
  onToggleNotes,
  onToggleAppendix,
  onToggleFullscreen,
  isFullscreen,
}) => {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 select-none">
      <div className="bg-slate-900/90 backdrop-blur-md text-white border border-slate-700/80 px-4 py-2 rounded-full shadow-2xl flex items-center gap-3 text-xs">
        {/* Interactive Mini Logo */}
        <div className="hidden sm:flex items-center pr-2 border-r border-slate-700">
          <SelnikelInteractiveLogo size="sm" showText={false} />
        </div>

        {/* Slide Counter */}
        <div className="flex items-center gap-1 font-mono font-bold">
          <span className="text-[#E30613]">{currentSlideIndex + 1}</span>
          <span className="text-slate-500">/</span>
          <span className="text-slate-400">{totalSlides}</span>
          {isAppendixMode && (
            <span className="ml-1 px-1.5 py-0.5 rounded bg-blue-900/60 text-blue-300 text-[10px]">
              EK
            </span>
          )}
        </div>

        <div className="h-4 w-px bg-slate-700" />

        {/* Prev / Next Buttons */}
        <div className="flex items-center gap-1">
          <button
            onClick={onPrev}
            disabled={currentSlideIndex === 0}
            className="p-1.5 rounded-full hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            title="Önceki Slayt (Sol Ok / Backspace)"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={onNext}
            disabled={currentSlideIndex === totalSlides - 1}
            className="p-1.5 rounded-full hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            title="Sonraki Slayt (Sağ Ok / Boşluk)"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="h-4 w-px bg-slate-700" />

        {/* Presenter Notes Modal Trigger */}
        <button
          onClick={onToggleNotes}
          className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors font-medium"
          title="Yönetici Savunma Notları (N tuşu)"
        >
          <FileText className="w-3.5 h-3.5 text-[#E30613]" />
          <span className="hidden sm:inline">Notlar</span>
          <kbd className="text-[10px] font-mono text-slate-400 bg-slate-900 px-1 rounded">N</kbd>
        </button>

        {/* Appendix Toggle Trigger */}
        <button
          onClick={onToggleAppendix}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-full transition-colors font-medium ${
            isAppendixMode
              ? 'bg-[#E30613] text-white'
              : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
          }`}
          title="Ek Slaytlar / Soru-Cevap (A tuşu)"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Ek Slaytlar</span>
          <kbd className="text-[10px] font-mono text-slate-400 bg-slate-900 px-1 rounded">A</kbd>
        </button>

        {/* Fullscreen Trigger */}
        <button
          onClick={onToggleFullscreen}
          className="p-1.5 rounded-full hover:bg-slate-800 text-slate-300 transition-colors"
          title="Tam Ekran (F tuşu)"
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
};
