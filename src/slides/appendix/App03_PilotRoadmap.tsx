import React from 'react';

export const App03_PilotRoadmap: React.FC = () => {
  const weeks = [
    { week: '1-2. Hafta', title: 'Gözlem & Keşif', desc: 'Sahada yerinde inceleme, darboğaz ve sürtünme noktalarının net tespiti' },
    { week: '3-4. Hafta', title: 'MVP Geliştirme', desc: 'Seçilen tek use-case için sade prototipin ve arayüzün kurulması' },
    { week: '5. Hafta', title: 'Saha Testi', desc: 'Gerçek operatör ve mühendislerle sahada kullanım, geri bildirimlerin toplanması' },
    { week: '6. Hafta', title: 'Ölçüm & Karar', desc: 'Zaman ve hata metriklerinin analizi, yönetime somut ROI ve ölçekleme raporu' },
  ];

  return (
    <div className="max-w-6xl mx-auto w-full space-y-8">
      <div>
        <div className="text-xs font-bold text-[#E30613] tracking-widest uppercase mb-1">
          APPENDIX 03 │ EYLEM PLANI
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
          6 Haftalık Pilot Yol Haritası
        </h2>
        <p className="text-base sm:text-lg text-slate-600 font-light mt-1">
          Düşük riskli, hızlı ve ölçülebilir sonuç üreten çevik uygulama süreci.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {weeks.map((w, idx) => (
          <div key={idx} className="keynote-card p-6 rounded-3xl flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold text-[#E30613] uppercase tracking-wider mb-1">{w.week}</div>
              <div className="text-lg font-bold text-[#0F172A] mb-2">{w.title}</div>
              <p className="text-xs text-slate-600 font-light leading-relaxed">{w.desc}</p>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-100 text-xs font-mono font-bold text-slate-400">
              FAZ #{idx + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
