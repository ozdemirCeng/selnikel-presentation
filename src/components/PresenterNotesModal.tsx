import React from 'react';
import { X, Clock, HelpCircle, ShieldAlert, Sparkles } from 'lucide-react';
import { SlideMetadata } from '../types';

interface PresenterNotesModalProps {
  metadata: SlideMetadata;
  isOpen: boolean;
  onClose: () => void;
}

export const PresenterNotesModal: React.FC<PresenterNotesModalProps> = ({
  metadata,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-3xl bg-[#141720] border border-white/10 rounded-3xl shadow-2xl p-6 md:p-8 font-sans max-h-[85vh] overflow-y-auto text-white">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-[#E30613]/10 text-[#E30613]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-slate-400 font-bold">
                <span>SLAYT {metadata.slideNumber}</span>
                <span>│</span>
                <span className="flex items-center gap-1 text-amber-400">
                  <Clock className="w-3.5 h-3.5" /> ~{metadata.estimatedSeconds} saniye
                </span>
              </div>
              <h3 className="text-lg font-extrabold text-white mt-0.5">{metadata.title}</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Speaker Script */}
        <div className="mb-6">
          <h4 className="text-xs font-bold text-[#E30613] uppercase tracking-wider mb-2">
            🎙️ Sahnede Söylenecek Cümleler
          </h4>
          <div className="space-y-3 bg-black/40 p-5 rounded-2xl border border-white/5 text-slate-200 text-sm leading-relaxed">
            {metadata.speakerScript.map((script, idx) => (
              <p key={idx} className="font-medium italic border-l-2 border-[#E30613] pl-3">
                {script}
              </p>
            ))}
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="mb-6 bg-emerald-950/20 p-4 rounded-2xl border border-emerald-500/30">
          <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
            🎯 Hedef Zihinsel Etki (Takeaway)
          </h4>
          <p className="text-sm font-semibold text-emerald-300">{metadata.keyTakeaway}</p>
        </div>

        {/* CEO Defense Playbook */}
        {metadata.ceoDefenseQuestion && (
          <div className="bg-amber-950/20 border border-amber-500/30 p-5 rounded-2xl">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-amber-400" />
              <span>CEO / Yönetim Olası İtirazı & Savunma</span>
            </h4>
            <div className="space-y-2 text-xs md:text-sm">
              <div className="flex items-start gap-2 text-amber-200 font-bold">
                <HelpCircle className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <span>Soru: {metadata.ceoDefenseQuestion}</span>
              </div>
              <div className="bg-black/40 p-3.5 rounded-xl border border-amber-500/20 text-slate-300 italic leading-relaxed">
                {metadata.ceoDefenseAnswer}
              </div>
            </div>
          </div>
        )}

        {/* Footer Hint */}
        <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center text-xs font-sans text-slate-500">
          <span>Kapatmak için [Esc] veya [N] tuşuna basınız</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold transition-colors"
          >
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
};
