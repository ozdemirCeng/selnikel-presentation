import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Sparkles } from 'lucide-react';
import { SelnikelInteractiveLogo } from '../components/SelnikelInteractiveLogo';

export const Slide11_IntegratedROI: React.FC = () => {
  const roiPillars = [
    {
      id: '01',
      title: 'WEB SİTESİ',
      badge: 'DİJİTAL VİTRİN',
      metric: '%35 HIZLI TEKLİF',
      metricSub: '15 Saniyede Şartnameye Erişim',
      color: 'border-blue-500 text-blue-600 bg-blue-50',
      metricColor: 'text-blue-600',
      before: 'Statik sayfalar, arama filtresi yok; eksik şartnameyle günler süren teklif süreci.',
      after: 'Dinamik parametrik katalog, 2D/3D CAD indirme ve doğrulanmış teknik talep formu.',
      future: 'Online CPQ Fiyat Motoru & 3D Patlatılmış Parça'
    },
    {
      id: '02',
      title: 'MOBİL PORTAL',
      badge: 'PERSONEL & SÜRÜCÜ',
      metric: '%0 YOLCU KAÇIRMA',
      metricSub: 'Sıfır Kağıt & Canlı Takip',
      color: 'border-cyan-500 text-cyan-600 bg-cyan-50',
      metricColor: 'text-cyan-600',
      before: 'Fiziksel kağıt izinler, durakta bekleme karmaşası ve tünellerde kopan GPS sinyali.',
      after: 'Kişisel çalışan portalı, şoför canlı yolcu manifestosu ve kesintisiz offline GPS.',
      future: 'Turnike/Yemekhane QR Kod & Fotoğraflı Arıza Bildirimi'
    },
    {
      id: '03',
      title: 'ROTA MOTORU',
      badge: 'NET NAKİT KAZANCI',
      metric: '₺233.000 / AY',
      metricSub: 'Yıllık ~2.8 Milyon TL Tasarruf',
      color: 'border-emerald-500 text-emerald-600 bg-emerald-50',
      metricColor: 'text-emerald-600',
      before: '15 dağınık hat, günde 1.262 km yol, yorulan personel ve yüksek kiralık filo faturası.',
      after: '11 optimize hat (-4 araç iptali), günde 510 km daha az yol (-%40.4 akaryakıt).',
      future: 'Canlı Ankara Trafik Entegrasyonu & Dinamik Rota'
    },
    {
      id: '04',
      title: 'SELNİKEL AI',
      badge: 'KURUMSAL HAFIZA',
      metric: '4 SAAT ➔ 5 DK',
      metricSub: 'Sıfır Halüsinasyon & Sıfır Hata',
      color: 'border-amber-500 text-amber-600 bg-amber-50',
      metricColor: 'text-amber-600',
      before: '70 yıllık hafızanın dağınık olması, uzun şartname taramaları ve manuel Excel hataları.',
      after: 'Kaynak gösteren kapalı devre RAG altyapısı ve 5 ASME/EN MCP termodinamik motoru.',
      future: 'Sesli Arıza Teşhisi & Fabrika PLC Canlı Dijital İkiz'
    }
  ];

  return (
    <div className="w-full h-full p-8 md:p-12 bg-slate-50 flex flex-col justify-between overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <div className="flex items-center gap-4">
          <SelnikelInteractiveLogo size="sm" />
          <span className="text-slate-300">│</span>
          <div>
            <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">11 │ DEĞER VE GETİRİ (ROI)</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">4 Sütunun Entegre Şirket Katma Değeri</h2>
          </div>
        </div>
        <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">Entegre Şirket Bilançosu</span>
      </div>

      {/* 4 ROI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-auto py-2">
        {roiPillars.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: idx * 0.08 }}
            className="p-4 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between"
          >
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-2">
                <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-black border uppercase font-mono tracking-wider ${item.color}`}>
                  {item.badge}
                </span>
                <span className="text-xs font-bold text-slate-400 font-mono">0{idx + 1}</span>
              </div>
              <h3 className="text-sm font-black text-slate-900 mb-3">{item.title}</h3>

              {/* Big Bold Impact Number */}
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 mb-3 text-center">
                <div className={`text-xl font-black tracking-tight ${item.metricColor}`}>
                  {item.metric}
                </div>
                <div className="text-[10px] font-bold text-slate-600 mt-0.5">
                  {item.metricSub}
                </div>
              </div>

              {/* Before / After Comparison */}
              <div className="space-y-2 text-[11px]">
                <div className="p-2 rounded-xl bg-red-50/70 border border-red-100 text-slate-700 leading-snug">
                  <span className="font-bold text-red-600 mr-1">Önce:</span>
                  {item.before}
                </div>
                <div className="p-2 rounded-xl bg-emerald-50/70 border border-emerald-100 text-slate-800 font-medium leading-snug">
                  <span className="font-bold text-emerald-700 mr-1">Şimdi:</span>
                  {item.after}
                </div>
              </div>
            </div>

            {/* Future Vision Footer */}
            <div className="pt-2 mt-3 border-t border-slate-100">
              <div className="flex items-center gap-1.5 text-[10px] text-purple-700 font-bold">
                <Sparkles className="w-3 h-3 text-purple-600 flex-shrink-0" />
                <span className="truncate">Gelecek: {item.future}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Big Impact Callout Banner */}
      <div className="p-3.5 rounded-2xl bg-slate-950 text-white flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs sm:text-sm font-black text-white">
              TOPLAM ETKİ: Yıllık ~2.8 Milyon TL Net Tasarruf + %35 Hızlı Satış + 10x Mühendislik Hızı
            </div>
            <div className="text-[11px] text-slate-400">
              Maliyet çıkaran bir harcama değil; ilk aydan itibaren şirkete net nakit kazandıran ve operasyonu hızlandıran entegre yapı.
            </div>
          </div>
        </div>
        <span className="px-3.5 py-1.5 rounded-xl bg-[#E30613] text-white text-xs font-black whitespace-nowrap">
          Geri Dönüş: &lt; 60 Gün
        </span>
      </div>
    </div>
  );
};
