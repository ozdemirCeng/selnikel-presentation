import React from 'react';
import { SelnikelInteractiveLogo } from '../../components/SelnikelInteractiveLogo';

export const App03_PilotRoadmap: React.FC = () => {
  const weeks = [
    { week: '1-2. Hafta', title: 'Saha Pilotu & Test', desc: 'Geliştirilen mobil uygulamanın servis şoförleri ve öncü personelle sahada canlı biniş denemeleri.' },
    { week: '3-4. Hafta', title: 'Filo Optimizasyonu', desc: '15 hattan 11 hatta geçişin yapılması, 4 kiralık aracın sözleşmesinin iptali ve ₺233K tasarruf.' },
    { week: '5. Hafta', title: 'Selnikel AI Devreye Alma', desc: '70 yıllık teknik arşivin mühendislik ve teklif departmanlarının günlük kullanımına açılması.' },
    { week: '6. Hafta', title: 'Ölçüm & Yönetim Raporu', desc: 'Yakıt, zaman ve teklif hızı metriklerinin konsolide edilerek yönetime net finansal getiri sunumu.' },
  ];

  return (
    <div className="w-full h-full p-8 md:p-12 bg-slate-50 flex flex-col justify-between overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <div className="flex items-center gap-4">
          <SelnikelInteractiveLogo size="sm" />
          <span className="text-slate-300">│</span>
          <div>
            <span className="text-xs font-mono font-bold text-[#E30613] uppercase tracking-wider">
              APPENDIX 03 │ EYLEM PLANI
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              6 Haftalık Canlı Pilot Yol Haritası
            </h2>
          </div>
        </div>
        <span className="px-3 py-1 rounded-full bg-red-100 text-[#E30613] text-xs font-bold">
          Yedek Slayt (Q&A)
        </span>
      </div>

      {/* 4 Phases Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 my-auto py-2">
        {weeks.map((w, idx) => (
          <div key={idx} className="keynote-card p-5 rounded-3xl flex flex-col justify-between bg-white border border-slate-200 shadow-sm">
            <div>
              <div className="text-xs font-bold text-[#E30613] uppercase tracking-wider mb-1 font-mono">{w.week}</div>
              <div className="text-base font-black text-slate-900 mb-2">{w.title}</div>
              <p className="text-xs text-slate-600 leading-relaxed">{w.desc}</p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono font-bold text-slate-400 flex items-center justify-between">
              <span>FAZ #{idx + 1}</span>
              <span className="text-emerald-600">Onaylı Plan</span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Footer */}
      <div className="p-3 rounded-2xl bg-slate-900 text-white flex items-center justify-between text-xs sm:text-sm">
        <span className="font-bold text-amber-400">⏱️ YÖNTEM:</span>
        <span className="text-slate-300">Aylarca süren teorik planlar değil; 6 haftada şirket kasasında somut nakit tasarrufu üreten çevik geçiş.</span>
        <span className="font-mono text-xs px-2.5 py-1 rounded bg-amber-500/20 text-amber-300">Hızlı Geri Dönüş</span>
      </div>
    </div>
  );
};
