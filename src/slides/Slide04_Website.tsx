import React from 'react';
import { motion } from 'framer-motion';
import { Search, FileDown, ArrowRight, Sparkles } from 'lucide-react';
import { SelnikelInteractiveLogo } from '../components/SelnikelInteractiveLogo';

export const Slide04_Website: React.FC = () => {
  const products = [
    { name: 'Endüstriyel Kazanlar', desc: 'Buhar, kızgın su & atık ısı', image: '/images/product_boiler_burner.png' },
    { name: 'Endüstriyel Brülörler', desc: 'Monoblok & düoblok yüksek verim', image: '/images/boiler.jpg' },
    { name: 'Endüstriyel Fanlar', desc: 'Ağır sanayi radyal & aksiyal', image: '/images/product_fan.png' },
    { name: 'Ekonomizer Sistemleri', desc: 'Baca gazından atık ısı geri kazanımı', image: '/images/product_facility.png' },
  ];

  return (
    <div className="w-full h-full p-8 md:p-12 bg-slate-50 flex flex-col justify-between overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <div className="flex items-center gap-4">
          <SelnikelInteractiveLogo size="sm" />
          <span className="text-slate-300">│</span>
          <div>
            <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">04 │ SÜTUN 1: DİJİTAL VİTRİN</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Yeni Nesil Selnikel Web Sitesi & Dinamik Katalog</h2>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold">5 Ürün Grubu • Küresel Pazar</span>
        </div>
      </div>

      {/* Main Grid: Left Products (45%), Right Clean Impact Pillars (55%) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto py-2 items-center">
        {/* Left: 4 Product Cards */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
          {products.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:border-blue-500 transition-all flex flex-col justify-between group"
            >
              <div className="h-28 overflow-hidden relative bg-slate-100">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-slate-950/80 text-[10px] font-bold text-white">
                  0{idx + 1}
                </div>
              </div>
              <div className="p-3">
                <h4 className="text-xs sm:text-sm font-black text-slate-900 leading-snug">{item.name}</h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right: 3 Clean, Punchy Executive Cards */}
        <div className="lg:col-span-7 space-y-3.5">
          {/* Card 1: Transformation */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono font-bold text-blue-600 uppercase tracking-wider flex items-center gap-1.5">
                <Search className="w-4 h-4" /> DİNAMİK MÜHENDİSLİK FİLTRESİ
              </span>
              <span className="text-[11px] font-bold text-slate-400 font-mono">Statik PDF ➔ Anlık Arama</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Müşteriler; buhar kapasitesi (ton/h), yakıt cinsi, basınç ve debi kriterlerini seçerek <strong>15 saniyede</strong> doğru Selnikel modeline ve teknik şartnamesine ulaşır.
            </p>
          </div>

          {/* Card 2: Speed & CAD */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono font-bold text-emerald-600 uppercase tracking-wider flex items-center gap-1.5">
                <FileDown className="w-4 h-4" /> 2D/3D CAD & ŞARTNAME MERKEZİ
              </span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">%35 Hızlı Teklif</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Teknik çizimler ve sertifikalar tek tıkla indirilir. Parametresi doğrulanmış talep formu sayesinde satış ofisinin teklif hazırlama süresi 3 kat hızlanır.
            </p>
          </div>

          {/* Card 3: Future Next Steps */}
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/80 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-black text-blue-900 uppercase tracking-wider">GELECEK VİZYONU</span>
                <p className="text-xs text-blue-800 font-medium mt-0.5">3D Parça Patlatma Simülasyonu & Online CPQ Teklif Konfigüratörü</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
          </div>
        </div>
      </div>

      {/* Bottom Summary Footer */}
      <div className="p-3 rounded-2xl bg-slate-900 text-white flex items-center justify-between text-xs sm:text-sm">
        <span className="font-bold text-blue-400">🌐 SÜTUN 1:</span>
        <span className="text-slate-300">Statik bir web sayfası değil; müşteriyi doğrudan doğru ürüne götüren ve teklif sürecini %35 hızlandıran dinamik vitrin.</span>
        <span className="font-mono text-xs px-2.5 py-1 rounded bg-blue-500/20 text-blue-300">Canlı & Hazır</span>
      </div>
    </div>
  );
};
