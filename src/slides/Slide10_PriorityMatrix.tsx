import React from 'react';
import { WindingRoadmapGraphic } from '../components/graphics/WindingRoadmapGraphic';

export const Slide10_PriorityMatrix: React.FC = () => {
  const stations = [
    {
      num: '01',
      title: 'GÖZLEM',
      sub: 'Saha Keşfi',
      desc: 'Sürtünme ve bekleme noktalarını sahada ustalarla doğrudan tespit et.',
      x: 14,
      y: 75,
      color: 'bg-[#E30613]',
    },
    {
      num: '02',
      title: 'PİLOT',
      sub: 'Tek Use-Case',
      desc: 'Düşük riskli, yüksek etkili tek bir pilot senaryo geliştir.',
      x: 39,
      y: 25,
      color: 'bg-blue-600',
    },
    {
      num: '03',
      title: 'ÖLÇÜM',
      sub: 'Somut Veri',
      desc: 'Zaman kazancı ve hata azalmasını somut sayılarla ortaya koy.',
      x: 64,
      y: 75,
      color: 'bg-amber-600',
    },
    {
      num: '04',
      title: 'KARAR',
      sub: 'Ölçekleme',
      desc: 'Kanıtlanmış sonuca göre yatırımı büyütme kararı al.',
      x: 88,
      y: 25,
      color: 'bg-emerald-600',
    },
  ];

  return (
    <div className="w-full h-full p-8 md:p-12 lg:p-14 flex flex-col justify-between bg-[#FFFFFF]">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-3 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#E30613] tracking-widest uppercase">
            <span className="w-2.5 h-2.5 rounded-sm bg-[#E30613]"></span>
            <span>10 │ EYLEM PLANI & YÖNETİM TALEBİ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-1">
            Önce küçük ölçekte kanıtlayalım.
          </h2>
        </div>
        <div className="text-xs font-mono text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 self-start font-bold">
          WINDING ROADMAP MODEL
        </div>
      </div>

      {/* SlideModel Style Curvy Winding Snake Roadmap */}
      <div className="my-auto">
        <WindingRoadmapGraphic stations={stations} />
      </div>

      {/* Single Executive Request Thesis Banner */}
      <div className="ppt-card-white p-4 sm:p-5 flex items-center justify-between gap-4 text-xs sm:text-sm bg-slate-50 border-2 border-slate-200 rounded-2xl">
        <div className="text-slate-800 font-medium">
          Yönetimden beklenen: <strong className="text-slate-900 font-black underline decoration-[#E30613] decoration-2">doğru pilot alanına erişim</strong> ve kontrollü çalışma izni.
        </div>
        <span className="hidden md:inline px-4 py-2 bg-white text-[#E30613] rounded-xl text-xs font-bold font-mono border border-slate-200 shadow-sm">
          SIFIR RİSKLİ BAŞLANGIÇ
        </span>
      </div>
    </div>
  );
};
