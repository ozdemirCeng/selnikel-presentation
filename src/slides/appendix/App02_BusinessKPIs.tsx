import React from 'react';
import { SelnikelInteractiveLogo } from '../../components/SelnikelInteractiveLogo';

export const App02_BusinessKPIs: React.FC = () => {
  const kpis = [
    { title: 'Teknik Bilgiye Ulaşma Süresi', before: '15–30 dakika (Arşiv)', target: '< 15 saniye (Selnikel AI)', unit: 'Arama Hızı' },
    { title: 'Arıza / Talep Kapanma Çevrimi', before: '4–8 saat (Manuel)', target: '< 60 dakika (Mobil & Push)', unit: 'Çözüm Süresi' },
    { title: 'Mükerrer Manuel Veri Girişi', before: '3–4 farklı kağıt form', target: 'Tek Noktadan Dijital', unit: 'İşlem Adedi' },
    { title: 'Servis Güzergah Süresi & Yol', before: '1.262 km / Gün (15 Hat)', target: '752 km / Gün (11 Hat)', unit: 'Filo Verimi' },
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
              APPENDIX 02 │ İŞ METRİKLERİ
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Başarı Kriterleri ve Ölçülebilir İş KPI’ları
            </h2>
          </div>
        </div>
        <span className="px-3 py-1 rounded-full bg-red-100 text-[#E30613] text-xs font-bold">
          Yedek Slayt (Q&A)
        </span>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-auto py-2">
        {kpis.map((k, idx) => (
          <div key={idx} className="keynote-card p-5 rounded-3xl space-y-3 bg-white border border-slate-200 shadow-sm">
            <div className="flex justify-between items-center">
              <span className="text-base font-black text-slate-900">{k.title}</span>
              <span className="text-xs font-mono font-bold bg-slate-100 px-2.5 py-1 rounded-lg text-slate-700">{k.unit}</span>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100">
              <div className="p-3 bg-red-50/70 rounded-2xl border border-red-100">
                <span className="text-[11px] text-red-600 font-bold block">Önceki Durum:</span>
                <div className="text-sm font-black text-slate-800 mt-0.5">{k.before}</div>
              </div>
              <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200">
                <span className="text-[11px] text-emerald-800 font-bold block">Hedeflenen Seviye:</span>
                <div className="text-sm font-black text-emerald-700 mt-0.5">{k.target}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Footer */}
      <div className="p-3 rounded-2xl bg-slate-900 text-white flex items-center justify-between text-xs sm:text-sm">
        <span className="font-bold text-emerald-400">📊 PERFORMANS İLKESİ:</span>
        <span className="text-slate-300">Bir teknoloji sahada bu somut metriklerde ölçülebilir iyileşme sağlamıyorsa başarılı sayılmaz.</span>
        <span className="font-mono text-xs px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300">Ölçülebilir Çıktı</span>
      </div>
    </div>
  );
};
