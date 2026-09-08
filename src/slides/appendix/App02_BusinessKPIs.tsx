import React from 'react';

export const App02_BusinessKPIs: React.FC = () => {
  const kpis = [
    { title: 'Bilgiye Ulaşma Süresi', before: '15–30 dakika', target: '< 15 saniye', unit: 'Arama Hızı' },
    { title: 'Arıza / Talep Kapanma Çevrimi', before: '4–8 saat', target: '< 60 dakika', unit: 'Çözüm Süresi' },
    { title: 'Mükerrer Manuel Veri Girişi', before: '3–4 farklı form', target: 'Tek Noktadan Otomatik', unit: 'İşlem Adedi' },
    { title: 'Montaj / İmalat Bekleme Süresi', before: 'Gözlemsel darboğaz', target: '%20–30 Azalma', unit: 'Lead Time' },
  ];

  return (
    <div className="max-w-6xl mx-auto w-full space-y-8">
      <div>
        <div className="text-xs font-bold text-[#E30613] tracking-widest uppercase mb-1">
          APPENDIX 02 │ İŞ METRİKLERİ
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
          Başarı Kriterleri ve İş KPI’ları
        </h2>
        <p className="text-base sm:text-lg text-slate-600 font-light mt-1">
          Bir teknoloji bu iş metriklerinde ölçülebilir iyileşme sağlamıyorsa başarılı sayılmaz.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {kpis.map((k, idx) => (
          <div key={idx} className="keynote-card p-6 rounded-3xl space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-[#0F172A]">{k.title}</span>
              <span className="text-xs font-mono font-bold bg-slate-100 px-2.5 py-1 rounded-lg text-slate-600">{k.unit}</span>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
              <div className="p-3 bg-slate-50 rounded-xl">
                <span className="text-xs text-slate-500 font-light">Mevcut Durum:</span>
                <div className="text-base font-bold text-[#0F172A] mt-0.5">{k.before}</div>
              </div>
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                <span className="text-xs text-emerald-800 font-light">Pilot Hedefi:</span>
                <div className="text-base font-bold text-emerald-700 mt-0.5">{k.target}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
