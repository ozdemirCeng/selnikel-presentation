import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle } from 'lucide-react';
import { SelnikelInteractiveLogo } from '../components/SelnikelInteractiveLogo';

export const Slide11_FinalCall: React.FC = () => {
  return (
    <div className="w-full h-full p-8 md:p-12 lg:p-14 flex flex-col justify-between bg-[#FFFFFF]">
      {/* Top Mindset Comparison (SlideModel Contrast Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Left: Wrong Approach */}
        <div className="p-4 rounded-2xl bg-red-50/70 border-2 border-red-200 space-y-1.5 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-bold text-red-700 uppercase tracking-wider">
            <XCircle className="w-4 h-4 text-[#E30613]" />
            <span>Ezbere Dijitalleşme</span>
          </div>
          <p className="text-xs text-slate-600 font-normal leading-relaxed">
            Büyük yazılım bütçeleri, sahaya uymayan karmaşık sistemler ve belirsiz fayda iddiaları.
          </p>
        </div>

        {/* Right: Selnikel Approach */}
        <div className="p-4 rounded-2xl bg-emerald-50/70 border-2 border-emerald-200 space-y-1.5 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>Selnikel Mühendislik Yaklaşımı</span>
          </div>
          <p className="text-xs text-slate-600 font-normal leading-relaxed">
            Sahada yerinde gözlem, tek bir sürtünmeyi çözme ve ölçülebilir somut zaman/maliyet kazanımı.
          </p>
        </div>
      </div>

      {/* Center Grand Climax Box with Official Selnikel Interactive Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="ppt-card-white p-8 sm:p-12 text-center space-y-4 shadow-2xl border-2 border-slate-200 rounded-3xl bg-slate-50 my-auto relative overflow-hidden flex flex-col items-center"
      >
        <div className="w-20 h-1.5 bg-[#E30613] mx-auto rounded-full"></div>

        {/* Official Interactive Logo Centered */}
        <SelnikelInteractiveLogo size="lg" className="justify-center py-2" />

        <div className="text-xs font-mono text-slate-500 uppercase tracking-widest font-black">
          TEMEL MÜHENDİSLİK FELSEFESİ
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.08]">
          DOĞRU PROBLEME<br />
          <span className="text-[#E30613] relative inline-block">
            DOĞRU TEKNOLOJİ.
            <span className="absolute -bottom-2 left-0 w-full h-2 bg-[#E30613]/20 rounded-full"></span>
          </span>
        </h1>
      </motion.div>

      {/* 3 Concrete Action Pillars on Pedestal Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        <div className="ppt-card-white p-4 flex items-center gap-3.5 border-2 border-slate-200 rounded-2xl shadow-sm hover:border-[#E30613] transition-all">
          <span className="w-8 h-8 rounded-full bg-red-100 text-[#E30613] flex items-center justify-center font-mono font-black text-xs shadow-inner">01</span>
          <div>
            <div className="font-extrabold text-slate-900 text-sm">Saha Keşfi</div>
            <div className="text-slate-500 text-[11px]">Sürtünme ve bekleme analizi</div>
          </div>
        </div>

        <div className="ppt-card-white p-4 flex items-center gap-3.5 border-2 border-slate-200 rounded-2xl shadow-sm hover:border-[#E30613] transition-all">
          <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-mono font-black text-xs shadow-inner">02</span>
          <div>
            <div className="font-extrabold text-slate-900 text-sm">Pilot Uygulama</div>
            <div className="text-slate-500 text-[11px]">Düşük riskli tek use-case</div>
          </div>
        </div>

        <div className="ppt-card-white p-4 flex items-center gap-3.5 border-2 border-slate-200 rounded-2xl shadow-sm hover:border-[#E30613] transition-all">
          <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-mono font-black text-xs shadow-inner">03</span>
          <div>
            <div className="font-extrabold text-slate-900 text-sm">Ölçüm & Karar</div>
            <div className="text-slate-500 text-[11px]">Veriye dayalı ölçekleme</div>
          </div>
        </div>
      </div>
    </div>
  );
};
