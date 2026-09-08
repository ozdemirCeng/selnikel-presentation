import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, TrendingUp, Zap } from 'lucide-react';
import { SelnikelInteractiveLogo } from '../components/SelnikelInteractiveLogo';

export const Slide04_WorldEvidence: React.FC = () => {
  return (
    <div className="w-full h-full p-10 md:p-14 flex flex-col justify-between bg-[#FFFFFF]">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-6">
          <SelnikelInteractiveLogo size="sm" />
          <div>
            <span className="text-xs font-mono font-bold text-[#E30613] tracking-widest uppercase">
              04 │ DÜNYA ÖRNEKLERİ & KANIT
            </span>
            <h2 className="text-4xl font-black text-slate-900 mt-1">
              Yüksek çeşitlilik dijitalleşmeye engel değil.
            </h2>
          </div>
        </div>
        <div className="text-sm font-mono text-slate-700 bg-slate-100 px-4 py-2 rounded-xl border border-slate-200 self-start font-bold">
          WEF Global Lighthouse
        </div>
      </div>

      {/* 2 Large Side-by-Side SlideModel Case Study Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-auto py-6">
        {/* Case 1: Agilent */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="ppt-card-white p-8 space-y-6 border-2 border-slate-200 rounded-3xl shadow-lg"
        >
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-red-50 text-[#E30613]">
                <Zap className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900">Agilent Technologies</h3>
                <p className="text-sm text-slate-500 font-mono">Penang Tesisleri</p>
              </div>
            </div>
            <span className="px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 font-bold text-xs font-mono">
              High-Mix / Low-Volume
            </span>
          </div>

          <div className="grid grid-cols-2 gap-6 py-2">
            <div className="p-5 rounded-2xl bg-red-50 border border-red-100 text-center space-y-1">
              <div className="text-5xl sm:text-6xl font-black text-[#E30613] font-sans">+%40</div>
              <div className="text-sm font-black text-slate-900">Üretkenlik Artışı</div>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
              <div className="text-5xl sm:text-6xl font-black text-slate-900 font-sans">-%48</div>
              <div className="text-sm font-black text-slate-700">Teslim Süresi</div>
            </div>
          </div>

          <p className="text-base text-slate-700 font-medium leading-relaxed">
            Siparişe özel karmaşık cihaz üretiminde dijital takip ile <strong className="text-slate-900 font-black">-%32 maliyet avantajı</strong> sağlandı.
          </p>
        </motion.div>

        {/* Case 2: Mettler-Toledo */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="ppt-card-white p-8 space-y-6 border-2 border-slate-200 rounded-3xl shadow-lg"
        >
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-blue-50 text-blue-700">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900">Mettler-Toledo</h3>
                <p className="text-sm text-slate-500 font-mono">Ağır İmalat Fabrikası</p>
              </div>
            </div>
            <span className="px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 font-bold text-xs font-mono">
              Özelleştirilmiş Üretim
            </span>
          </div>

          <div className="grid grid-cols-2 gap-6 py-2">
            <div className="p-5 rounded-2xl bg-blue-50 border border-blue-100 text-center space-y-1">
              <div className="text-5xl sm:text-6xl font-black text-blue-800 font-sans">%98,4</div>
              <div className="text-sm font-black text-slate-900">Zamanında Teslimat</div>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
              <div className="text-5xl sm:text-6xl font-black text-slate-900 font-sans">-%22</div>
              <div className="text-sm font-black text-slate-700">Döngü Süresi</div>
            </div>
          </div>

          <p className="text-base text-slate-700 font-medium leading-relaxed">
            Siparişlerinin <strong className="text-slate-900 font-black">%34,8'i tek ürünlük</strong> olan ağır tesis, dinamik iş akışlarıyla zirveye çıktı.
          </p>
        </motion.div>
      </div>

      {/* McKinsey Warning Banner */}
      <div className="ppt-card-white p-5 flex flex-col md:flex-row items-center justify-between gap-4 text-base bg-amber-50 border-2 border-amber-200 rounded-2xl">
        <div className="flex items-center gap-3 text-slate-900">
          <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
          <span>
            <strong className="font-black">McKinsey Uyarısı:</strong> “Yanlış probleme doğru teknoloji kötü yatırımdır. <strong className="text-[#E30613] font-black">Önce fizibilite, sonra teknoloji.</strong>”
          </span>
        </div>
        <span className="px-4 py-2 bg-white text-slate-900 rounded-xl text-sm font-black font-mono border border-amber-300 shadow-sm">
          FİZİBİLİTE ÖNCELİĞİ
        </span>
      </div>
    </div>
  );
};
