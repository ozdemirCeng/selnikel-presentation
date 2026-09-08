import React from 'react';
import { motion } from 'framer-motion';
import { Search, Clock, MessageSquare, Repeat, FileSpreadsheet, Dumbbell } from 'lucide-react';
import { SelnikelInteractiveLogo } from '../components/SelnikelInteractiveLogo';

export const Slide03_ProblemMindset: React.FC = () => {
  const frictions = [
    { icon: Search, num: '01', title: 'ARAMA', desc: 'Çizim, şartname ve parça arama süreleri', color: 'bg-red-100 text-[#E30613]' },
    { icon: Clock, num: '02', title: 'BEKLEME', desc: 'Onay ve malzeme bekleme duraklamaları', color: 'bg-amber-100 text-amber-800' },
    { icon: MessageSquare, num: '03', title: 'TAKİP', desc: 'WhatsApp ve telefonla yapılan manuel takip', color: 'bg-blue-100 text-blue-800' },
    { icon: Repeat, num: '04', title: 'TEKRAR', desc: 'Aynı verinin birden fazla forma girilmesi', color: 'bg-purple-100 text-purple-800' },
    { icon: FileSpreadsheet, num: '05', title: 'AKTARIM', desc: 'Departmanlar arası evrak aktarım kayıpları', color: 'bg-emerald-100 text-emerald-800' },
    { icon: Dumbbell, num: '06', title: 'FİZİKSEL YÜK', desc: 'Ustayı yoran ağır ve tekrarlı iş adımları', color: 'bg-slate-200 text-slate-800' },
  ];

  return (
    <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 overflow-hidden bg-[#FFFFFF]">
      {/* Left Column (40%): Big Hero Section */}
      <div className="lg:col-span-5 bg-gradient-to-br from-slate-950 via-slate-900 to-red-950 text-white p-10 md:p-14 flex flex-col justify-between relative overflow-hidden">
        <div>
          <SelnikelInteractiveLogo size="sm" />

          <div className="mt-8">
            <span className="text-xs font-mono font-bold text-[#E30613] tracking-widest uppercase">
              03 │ PROBLEM ÇERÇEVESİ
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 leading-tight">
              Teknoloji değil, sürtünme arıyoruz.
            </h2>
            <p className="text-lg text-slate-300 font-normal mt-4 leading-relaxed">
              “Bir sürece baktığımda hangi yazılımı yazalım diye değil; nerede arama, bekleme veya tekrar var diye bakıyorum.”
            </p>
          </div>
        </div>

        {/* 4-Tier Decision Filter */}
        <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
          <div className="text-xs font-bold text-[#E30613] uppercase tracking-wider">
            HER PROBLEME YAZILIM VERİLMEZ:
          </div>
          <div className="space-y-2 text-sm text-slate-200 font-bold">
            <div className="p-2.5 rounded-xl bg-slate-800 flex items-center justify-between">
              <span>1. Süreç Değişikliği</span>
              <span className="text-xs text-slate-400 font-mono">EN HIZLI</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-800 flex items-center justify-between">
              <span>2. Aparat & Fikstür</span>
              <span className="text-xs text-slate-400 font-mono">DÜŞÜK MALİYET</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-800 flex items-center justify-between">
              <span>3. Sade Mobil / Web</span>
              <span className="text-xs text-slate-400 font-mono">DİJİTAL AKIŞ</span>
            </div>
            <div className="p-2.5 rounded-xl bg-[#E30613] text-white flex items-center justify-between">
              <span>4. Cobot & AI</span>
              <span className="text-xs text-red-100 font-mono">İLERİ SEVİYE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Content Area (60%): 6 Clean Big Friction Cards */}
      <div className="lg:col-span-7 p-10 md:p-14 flex flex-col justify-between">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <h3 className="text-xl font-black text-slate-900 uppercase tracking-wider">
            Sahadaki 6 Temel Sürtünme Noktası
          </h3>
          <span className="text-sm font-mono font-bold text-slate-400">SLIDE 03 / 11</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-auto py-6">
          {frictions.map((f, idx) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.num}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="ppt-card-white p-5 space-y-3 border-2 border-slate-200 rounded-3xl shadow-sm hover:border-[#E30613] transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-2xl ${f.color} font-bold shadow-inner`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-mono font-black text-slate-400">0{f.num}</span>
                </div>
                <div>
                  <div className="text-lg font-black text-slate-900 group-hover:text-[#E30613] transition-colors">
                    {f.title}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 font-normal mt-1 leading-snug">{f.desc}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-sm text-slate-500 pt-4 border-t border-slate-100 flex items-center justify-between">
          <span>Amaç teknoloji şovu değil; sürtünmeyi doğrudan yok etmektir.</span>
          <span className="font-mono text-slate-400 font-bold">Yalın Süreç</span>
        </div>
      </div>
    </div>
  );
};
