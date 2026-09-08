import React from 'react';
import { CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';
import { SelnikelInteractiveLogo } from '../components/SelnikelInteractiveLogo';

export const Slide07_RouteOptimization: React.FC = () => {
  return (
    <div className="w-full h-full p-8 md:p-12 bg-slate-50 flex flex-col justify-between overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <div className="flex items-center gap-4">
          <SelnikelInteractiveLogo size="sm" />
          <span className="text-slate-300">│</span>
          <div>
            <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-wider">07 │ SÜTUN 3: GÜZERGAH MOTORU</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Servis Optimizasyonu: 148 Kişi & 124 Durak</h2>
          </div>
        </div>
        <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">Google OR-Tools VRPTW</span>
      </div>

      {/* Main Grid: Left Map (48%), Right 3 Clean Executive Cards (52%) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto py-2 items-center">
        {/* Left: MapLibre GL Live Map Screenshot */}
        <div className="lg:col-span-6 rounded-3xl overflow-hidden border-2 border-slate-200 shadow-md bg-white relative h-[360px]">
          <img src="/images/map_routes.png" alt="Ankara Rota Şebekesi" className="w-full h-full object-cover" />
          <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md text-white text-xs font-bold flex items-center gap-2 shadow-lg">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span>MapLibre GL • Ankara 124 Kanonik Durak Ağı</span>
          </div>
          <div className="absolute bottom-3 right-3 px-3 py-1 rounded-lg bg-white/90 backdrop-blur-md text-slate-800 text-[11px] font-bold shadow">
            Tüm Hatlar ASO 1. OSB Varışlı
          </div>
        </div>

        {/* Right: 3 Clean Executive Cards */}
        <div className="lg:col-span-6 space-y-3.5">
          {/* Card 1: Matematiksel Hat Dağılımı */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono font-bold text-emerald-600 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> MATEMATİKSEL FİLO KÜÇÜLMESİ
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[11px] font-bold">
                15 Hat ➔ 11 Hat
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              148 personelin ev adresleri geocode edilerek 124 güvenli durak oluşturuldu. OR-Tools VRPTW algoritması ile 4 kiralık araç boşa çıkarıldı; hat sayısı 11'e indirildi.
            </p>
          </div>

          {/* Card 2: Günlük Kilometre ve Süre Tasarrufu */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono font-bold text-blue-600 uppercase tracking-wider flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-blue-600" /> GÜNLÜK 510 KM TASARRUF
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                -%40.4 Akaryakıt
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Günlük sefer mesafesi 1.262 km'den 752 km'ye geriledi. Personel serviste günde toplam 3.6 saat daha az vakit harcar; sabah vardiyasına çok daha dinç başlar.
            </p>
          </div>

          {/* Card 3: Gelecek Vizyonu */}
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/80 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-black text-emerald-950 uppercase tracking-wider">GELECEK VİZYONU</span>
                <p className="text-xs text-emerald-900 font-medium mt-0.5">
                  Ankara anlık trafik API entegrasyonu • Yeni personeller için tek tıkla dinamik rota yeniden dağıtımı
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="p-3 rounded-2xl bg-slate-900 text-white flex items-center justify-between text-xs sm:text-sm">
        <span className="font-bold text-emerald-400">📍 SÜTUN 3 (ROTA MOTORU):</span>
        <span className="text-slate-300">Sezgisel güzergah devri kapandı; matematiksel algoritma her personeli minimum sürede fabrikaya ulaştırır.</span>
        <span className="font-mono text-xs px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300">124 Durak Doğrulandı</span>
      </div>
    </div>
  );
};
