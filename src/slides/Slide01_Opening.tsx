import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { SelnikelInteractiveLogo } from '../components/SelnikelInteractiveLogo';

export const Slide01_Opening: React.FC = () => {
  return (
    <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 overflow-hidden bg-[#FFFFFF]">
      {/* Left Column (58%): Large Executive Keynote Headline */}
      <div className="lg:col-span-7 p-10 md:p-14 lg:p-16 flex flex-col justify-between z-10">
        {/* Top Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-5"
        >
          <SelnikelInteractiveLogo size="md" />
          <span className="text-slate-300 text-lg">│</span>
          <span className="px-4 py-1.5 rounded-full bg-red-50 text-[#E30613] font-black text-sm tracking-wider uppercase border border-red-100">
            YÖNETİCİ STRATEJİ SUNUMU
          </span>
        </motion.div>

        {/* Big Bold Core Question */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6 my-auto py-6"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-sm font-bold text-slate-800">
            <span className="w-3 h-3 rounded-full bg-[#E30613] animate-pulse"></span>
            <span>Gözlem → Ölçüm → Teknoloji → Sonuç</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.14]">
            “Selnikel büyüdükçe, bugünkü çalışma biçimleri{' '}
            <span className="text-[#E30613] relative inline-block">
              aynı hız ve kaliteyle
              <span className="absolute -bottom-1.5 left-0 w-full h-2 bg-[#E30613]/20 rounded-full"></span>
            </span>{' '}
            ölçeklenebilir mi?”
          </h1>

          <p className="text-xl sm:text-2xl text-slate-600 font-normal leading-relaxed max-w-2xl">
            70 yıllık güçlü üretim altyapımız için bizzat geliştirip çalışır hale getirdiğim 4 somut dijital sütun.
          </p>
        </motion.div>

        {/* Bottom 4-Phase Clean Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-100"
        >
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="text-xs font-mono font-bold text-slate-400">01</div>
            <div className="text-sm font-black text-slate-900 mt-0.5">GÖZLEM</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="text-xs font-mono font-bold text-slate-400">02</div>
            <div className="text-sm font-black text-slate-900 mt-0.5">ÖLÇÜM</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="text-xs font-mono font-bold text-slate-400">03</div>
            <div className="text-sm font-black text-slate-900 mt-0.5">TEKNOLOJİ</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#E30613] text-white shadow-md">
            <div className="text-xs font-mono font-bold text-red-200">04</div>
            <div className="text-sm font-black text-white mt-0.5">SONUÇ</div>
          </div>
        </motion.div>
      </div>

      {/* Right Column (42%): Clean Real Photo Card with Big Scale Metrics */}
      <div className="lg:col-span-5 relative overflow-hidden flex flex-col justify-between p-10 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/factory.jpg"
            alt="Selnikel Factory"
            className="w-full h-full object-cover brightness-[0.55] contrast-[1.15]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
        </div>

        {/* Top Tag */}
        <div className="relative z-10 flex justify-end">
          <div className="px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-sm font-bold text-white flex items-center gap-2.5 shadow-lg">
            <Award className="w-5 h-5 text-[#E30613]" />
            <span>1955'ten Bugüne Ağır Sanayi</span>
          </div>
        </div>

        {/* Big Scale Metric Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative z-10 p-6 sm:p-8 rounded-3xl bg-slate-950/85 backdrop-blur-xl border border-white/20 shadow-2xl space-y-6"
        >
          <div>
            <div className="text-xs font-mono font-bold tracking-widest text-[#E30613] uppercase">
              ENTEGRE İMALAT GÜCÜ
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white mt-1">
              Selnikel Isı & Makina A.Ş.
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-white/10 border border-white/15">
              <span className="text-slate-300 text-xs font-medium">Tecrübe</span>
              <div className="text-4xl font-black text-white mt-1">71 <span className="text-base font-normal text-slate-300">Yıl</span></div>
            </div>
            <div className="p-4 rounded-2xl bg-white/10 border border-white/15">
              <span className="text-slate-300 text-xs font-medium">Fabrika</span>
              <div className="text-4xl font-black text-white mt-1">24K <span className="text-base font-normal text-slate-300">m²</span></div>
            </div>
            <div className="p-4 rounded-2xl bg-white/10 border border-white/15">
              <span className="text-slate-300 text-xs font-medium">İhracat</span>
              <div className="text-4xl font-black text-white mt-1">67+ <span className="text-base font-normal text-slate-300">Ülke</span></div>
            </div>
            <div className="p-4 rounded-2xl bg-white/10 border border-white/15">
              <span className="text-slate-300 text-xs font-medium">Kadro</span>
              <div className="text-4xl font-black text-white mt-1">200+</div>
            </div>
          </div>

          <p className="text-sm text-slate-200 font-medium leading-snug">
            Proje + İmalat + Montaj tek çatı altında tam entegre. Tüm sistemler prototip aşamasını geçmiş, bizzat çalışır halde test edilmiştir.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
