import React from 'react';

export const App04_ROIMethodology: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto w-full space-y-8">
      <div>
        <div className="text-xs font-bold text-[#E30613] tracking-widest uppercase mb-1">
          APPENDIX 04 │ FİNANSAL YÖNTEM
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
          Gerçek ROI Hesaplama Metodolojisi
        </h2>
        <p className="text-base sm:text-lg text-slate-600 font-light mt-1">
          Uygunluk puanı fırsatı gösterir; gerçek yatırım ise finansal fizibilite ile onaylanır.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="keynote-card p-6 sm:p-8 rounded-3xl space-y-4">
          <div className="text-sm font-bold text-[#E30613] uppercase tracking-wider">01. TOPLAM YATIRIM (CapEx / OpEx)</div>
          <ul className="space-y-3 text-xs text-slate-600 font-light">
            <li className="p-3 bg-slate-50 rounded-xl flex justify-between">
              <span className="font-medium text-[#0F172A]">Donanım / Aparat / Sunucu</span>
              <span className="font-mono text-slate-400">[CapEx]</span>
            </li>
            <li className="p-3 bg-slate-50 rounded-xl flex justify-between">
              <span className="font-medium text-[#0F172A]">Geliştirme & Entegrasyon Eforu</span>
              <span className="font-mono text-slate-400">[İç Kaynak]</span>
            </li>
            <li className="p-3 bg-slate-50 rounded-xl flex justify-between">
              <span className="font-medium text-[#0F172A]">Yıllık Bakım & Lisans</span>
              <span className="font-mono text-slate-400">[OpEx]</span>
            </li>
          </ul>
        </div>

        <div className="keynote-card p-6 sm:p-8 rounded-3xl space-y-4">
          <div className="text-sm font-bold text-emerald-700 uppercase tracking-wider">02. YILLIK NET KAZANÇ GİRDİLERİ</div>
          <ul className="space-y-3 text-xs text-slate-600 font-light">
            <li className="p-3 bg-emerald-50/60 rounded-xl flex justify-between border border-emerald-100">
              <span className="font-medium text-[#0F172A]">Kazanılan Adam-Saat Değeri</span>
              <span className="font-mono text-emerald-700 font-bold">Δ Saat × Saat Ücreti</span>
            </li>
            <li className="p-3 bg-emerald-50/60 rounded-xl flex justify-between border border-emerald-100">
              <span className="font-medium text-[#0F172A]">Hata / Rework / Hurda Azalışı</span>
              <span className="font-mono text-emerald-700 font-bold">Δ Kalite Maliyeti</span>
            </li>
            <li className="p-3 bg-emerald-50/60 rounded-xl flex justify-between border border-emerald-100">
              <span className="font-medium text-[#0F172A]">Kapasite & Teslimat Artışı</span>
              <span className="font-mono text-emerald-700 font-bold">Ek Ciro Katkısı</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm text-center text-xs sm:text-sm font-mono text-slate-600">
        YATIRIM GERİ DÖNÜŞ SÜRESİ (PAYBACK PERIOD) = <strong className="text-[#0F172A]">TOPLAM YATIRIM / YILLIK NET KAZANÇ</strong>
      </div>
    </div>
  );
};
