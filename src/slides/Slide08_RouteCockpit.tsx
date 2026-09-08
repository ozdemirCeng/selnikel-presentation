import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, DollarSign, Clock, Truck } from 'lucide-react';
import { SelnikelInteractiveLogo } from '../components/SelnikelInteractiveLogo';

export const Slide08_RouteCockpit: React.FC = () => {
  const kpis = [
    {
      icon: Truck,
      tag: 'FİLO KÜÇÜLMESİ',
      val: '-4 ARAÇ',
      sub: '15 Hat → 11 Hat',
      desc: '%26.7 Filo Tasarrufu. 4 kiralık araç sözleşmesi doğrudan iptal edilebilir.',
      color: 'text-amber-500 bg-amber-50 border-amber-200'
    },
    {
      icon: TrendingDown,
      tag: 'YOL VE YAKIT',
      val: '-510 KM / GÜN',
      sub: '1.262 km → 752 km',
      desc: '%40.4 Günlük Mesafe Tasarrufu. Koridor simetrisiyle pik tasarruf %55.6.',
      color: 'text-emerald-500 bg-emerald-50 border-emerald-200'
    },
    {
      icon: DollarSign,
      tag: 'NET NAKİT KAZANCI',
      val: '₺233.000 / AY',
      sub: 'Yıllık ~2.8 Milyon TL',
      desc: 'Şirket kasasında kalan doğrudan nakit. Yatırım ilk aydan itibaren kâr yazar.',
      color: 'text-blue-500 bg-blue-50 border-blue-200'
    },
    {
      icon: Clock,
      tag: 'YOLCULUK SÜRESİ',
      val: '-3.6 SAAT / GÜN',
      sub: '1.357 dk → 1.139 dk',
      desc: 'Personel serviste daha az yorulur, sabah mesaiye daha dinç başlar.',
      color: 'text-purple-500 bg-purple-50 border-purple-200'
    },
  ];

  return (
    <div className="w-full h-full p-8 md:p-12 bg-slate-50 flex flex-col justify-between overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <div className="flex items-center gap-4">
          <SelnikelInteractiveLogo size="sm" />
          <span className="text-slate-300">│</span>
          <div>
            <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-wider">08 │ SÜTUN 3: SOMUT KAZANIMLAR</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Optimizasyon Kokpiti: Matematiksel Kanıt & Finansal Getiri</h2>
          </div>
        </div>
        <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">Yıllık ~₺2.8M Net Tasarruf</span>
      </div>

      {/* Main Grid: Left 2 Cockpit Screenshots (55%), Right 4 KPI Cards (45%) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto py-2 items-center">
        {/* Left: 2 Cockpit Screenshots */}
        <div className="lg:col-span-7 space-y-3">
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
            <div className="bg-slate-900 text-white px-3 py-1.5 text-xs font-bold flex items-center justify-between">
              <span>Optimizasyon Karşılaştırma Kokpiti (Çift Plan)</span>
              <span className="text-emerald-400 font-mono">11 Feasible Routes</span>
            </div>
            <img src="/images/cockpit_optimization.png" alt="Kokpit Ekranı" className="w-full h-44 object-cover object-top" />
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
            <div className="bg-slate-900 text-white px-3 py-1.5 text-xs font-bold flex items-center justify-between">
              <span>Mevcut (15 Hat) vs Optimize (11 Hat) Rota Çakıştırması</span>
              <span className="text-blue-400 font-mono">MapLibre Dual-Layer</span>
            </div>
            <img src="/images/route_comparison.png" alt="Karşılaştırmalı Hatlar" className="w-full h-40 object-cover object-top" />
          </div>
        </div>

        {/* Right: 4 High-Impact KPI Metric Cards */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {kpis.map((k, idx) => {
            const Icon = k.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-black tracking-wider text-slate-400 uppercase font-mono">{k.tag}</span>
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${k.color}`}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div className="text-xl font-black text-slate-900 leading-tight">{k.val}</div>
                  <div className="text-xs font-bold text-slate-600 mt-0.5">{k.sub}</div>
                </div>
                <p className="text-[11px] text-slate-500 mt-2 leading-relaxed border-t border-slate-100 pt-2">
                  {k.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="p-3 rounded-2xl bg-slate-900 text-white flex items-center justify-between text-xs sm:text-sm">
        <span className="font-bold text-emerald-400">💰 NET BİLANÇO ETKİSİ:</span>
        <span className="text-slate-300">Yalnızca servis güzergah optimizasyonu bile projenin tüm yazılım maliyetini 2. ayında tamamen karşılar.</span>
        <span className="font-mono text-xs px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300">Geri Dönüş: &lt; 60 Gün</span>
      </div>
    </div>
  );
};
