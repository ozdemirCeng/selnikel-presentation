import React from 'react';
import { SelnikelInteractiveLogo } from '../../components/SelnikelInteractiveLogo';

export const App04_ROIMethodology: React.FC = () => {
  return (
    <div className="w-full h-full p-8 md:p-12 bg-slate-50 flex flex-col justify-between overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <div className="flex items-center gap-4">
          <SelnikelInteractiveLogo size="sm" />
          <span className="text-slate-300">│</span>
          <div>
            <span className="text-xs font-mono font-bold text-[#E30613] uppercase tracking-wider">
              APPENDIX 04 │ FİNANSAL YÖNTEM
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Gerçek ROI Hesaplama Metodolojisi
            </h2>
          </div>
        </div>
        <span className="px-3 py-1 rounded-full bg-red-100 text-[#E30613] text-xs font-bold">
          Yedek Slayt (Q&A)
        </span>
      </div>

      {/* Main Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-auto py-2">
        <div className="keynote-card p-6 rounded-3xl space-y-3 bg-white border border-slate-200 shadow-sm">
          <div className="text-xs font-bold text-[#E30613] uppercase tracking-wider font-mono">01. YATIRIM GİRDİLERİ (CapEx / OpEx)</div>
          <ul className="space-y-2.5 text-xs text-slate-600">
            <li className="p-3 bg-slate-50 rounded-xl flex justify-between items-center">
              <span className="font-semibold text-slate-900">Yerel Sunucu & Docker Altyapısı</span>
              <span className="font-mono text-slate-500 bg-slate-200 px-2 py-0.5 rounded text-[11px]">[Mevcut Donanım]</span>
            </li>
            <li className="p-3 bg-slate-50 rounded-xl flex justify-between items-center">
              <span className="font-semibold text-slate-900">Geliştirme & Entegrasyon Eforu</span>
              <span className="font-mono text-slate-500 bg-slate-200 px-2 py-0.5 rounded text-[11px]">[Bizzat Kodlandı]</span>
            </li>
            <li className="p-3 bg-slate-50 rounded-xl flex justify-between items-center">
              <span className="font-semibold text-slate-900">Yıllık Dış Lisans & Bulut Maliyeti</span>
              <span className="font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded text-[11px]">[₺0 - Açık Kaynak]</span>
            </li>
          </ul>
        </div>

        <div className="keynote-card p-6 rounded-3xl space-y-3 bg-white border border-slate-200 shadow-sm">
          <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider font-mono">02. YILLIK NET NAKİT KAZANIMLARI</div>
          <ul className="space-y-2.5 text-xs text-slate-600">
            <li className="p-3 bg-emerald-50/70 rounded-xl flex justify-between items-center border border-emerald-100">
              <span className="font-semibold text-slate-900">4 Kiralık Servis Aracı İptali</span>
              <span className="font-mono text-emerald-700 font-bold text-xs">₺2.800.000 / Yıl</span>
            </li>
            <li className="p-3 bg-emerald-50/70 rounded-xl flex justify-between items-center border border-emerald-100">
              <span className="font-semibold text-slate-900">Mühendis Şartname & Hesap Süresi</span>
              <span className="font-mono text-emerald-700 font-bold text-xs">4 Saatten 5 Dk'ya</span>
            </li>
            <li className="p-3 bg-emerald-50/70 rounded-xl flex justify-between items-center border border-emerald-100">
              <span className="font-semibold text-slate-900">Doğru Ürün & %35 Hızlı Satış Teklifi</span>
              <span className="font-mono text-emerald-700 font-bold text-xs">Ek İhracat Cirosu</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Formula & Bottom Footer */}
      <div className="space-y-2">
        <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-sm text-center text-xs font-mono text-slate-600">
          GERİ DÖNÜŞ SÜRESİ (PAYBACK PERIOD) = <strong className="text-slate-900">TOPLAM YAZILIM YATIRIMI / YILLIK NET KAZANÇ</strong> &lt; <span className="text-[#E30613] font-bold">60 GÜN</span>
        </div>
        <div className="p-3 rounded-2xl bg-slate-900 text-white flex items-center justify-between text-xs sm:text-sm">
          <span className="font-bold text-emerald-400">💰 FİNANSAL BULGU:</span>
          <span className="text-slate-300">Yalnızca servis filo küçülmesi bile projenin tüm yatırımını ilk 2 ayında amorti eder.</span>
          <span className="font-mono text-xs px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300">Net Kâr</span>
        </div>
      </div>
    </div>
  );
};
