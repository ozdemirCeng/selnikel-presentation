import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SelnikelInteractiveLogo } from '../components/SelnikelInteractiveLogo';

export const Slide03_FourPillars: React.FC = () => {
  const pillars = [
    {
      id: '01',
      tag: 'SÜTUN 1',
      title: 'YENİ WEB SİTESİ',
      subtitle: 'Dijital Vitrin & Ürün Portföyü',
      image: '/images/product_boiler_burner.png',
      badge: 'Küresel Erişim',
      color: 'border-blue-500 text-blue-600 bg-blue-50',
      bullets: [
        '5 Ana Ürün Ailesi & Dinamik Mühendislik Kataloğu',
        'Kapasite, Basınç & Yakıt Parametrik Filtresi',
        '2D/3D CAD & Teknik Şartname İndirme',
        'Doğru Ürüne 15sn Erişim • %35 Hızlı Teklif'
      ]
    },
    {
      id: '02',
      tag: 'SÜTUN 2',
      title: 'SELNİKEL MOBİL APP',
      subtitle: 'Saha, Çalışan & Sürücü Portalı',
      image: '/images/mobile_employee.png',
      badge: '200+ Çalışan',
      color: 'border-cyan-500 text-cyan-600 bg-cyan-50',
      bullets: [
        'Kişisel Çalışan Ekranı • Kalan İzin & Vardiya',
        'Atanmış Servis Durağı & Canlı Plaka',
        'Şoför Sefer Modu & Canlı Yolcu Manifestosu',
        'Tünellerde Kopmayan Offline GPS Telemetrisi'
      ]
    },
    {
      id: '03',
      tag: 'SÜTUN 3',
      title: 'ROTA OPTİMİZASYONU',
      subtitle: 'Rotaban / OR-Tools VRPTW',
      image: '/images/cockpit_optimization.png',
      badge: '₺233.000 / Ay Net Kazanç',
      color: 'border-emerald-500 text-emerald-600 bg-emerald-50',
      bullets: [
        '148 Personel & 124 Kanonik Güvenli Durak',
        '15 Hattan 11 Hatta Düşüş (-4 Kiralık Araç İptali)',
        'Günde 510 km Daha Az Yol (-%40.4 Akaryakıt)',
        'Yıllık ~2.8 Milyon TL Doğrudan Nakit Tasarrufu'
      ]
    },
    {
      id: '04',
      tag: 'SÜTUN 4',
      title: 'SELNİKEL AI',
      subtitle: 'Kurumsal RAG & Mühendislik Copilot',
      image: '/images/selnikel_ai_workspace.png',
      badge: 'Sıfır Halüsinasyon',
      color: 'border-amber-500 text-amber-600 bg-amber-50',
      bullets: [
        '70 Yıllık Teknik Arşivde Sıfır Halüsinasyonlu Arama',
        'Her Yanıtta Doğrulanmış Kaynakça Gösterme',
        'ASME & EN Standartlarında 5 Termodinamik MCP Motoru',
        'Şartname İnceleme & Hesap: 4 Saatten 5 Dk’ya'
      ]
    }
  ];

  return (
    <div className="w-full h-full p-8 md:p-12 bg-slate-50 flex flex-col justify-between overflow-hidden">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <div className="flex items-center gap-4">
          <SelnikelInteractiveLogo size="sm" />
          <span className="text-slate-300">│</span>
          <div>
            <span className="text-xs font-mono font-bold text-[#E30613] uppercase tracking-wider">03 │ BÜYÜK RESİM</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">4 Stratejik Sütun: Entegre Dijital Ekosistem</h2>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-200 text-xs font-bold text-slate-700">
          <span>Sorun ➔ Çözüm ➔ Kazanım ➔ Gelecek</span>
        </div>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-auto py-2">
        {pillars.map((p, idx) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bg-white rounded-3xl p-4 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group"
          >
            {/* Top Badge */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-black border ${p.color}`}>
                  {p.tag}
                </span>
                <span className="text-xs font-bold text-slate-400 font-mono">0{idx + 1}</span>
              </div>
              <h3 className="text-lg font-black text-slate-900 leading-tight">{p.title}</h3>
              <p className="text-xs text-slate-500 mt-0.5">{p.subtitle}</p>

              {/* Image Preview */}
              <div className="my-3 rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 h-32 relative">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-bold text-white">
                  {p.badge}
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-1.5 text-xs text-slate-700">
                {p.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-emerald-500 font-bold mt-0.5">✔</span>
                    <span className="leading-snug">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-800">
              <span className="text-slate-400 font-mono">Detaylı İncele</span>
              <ArrowUpRight className="w-4 h-4 text-[#E30613]" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Value Banner */}
      <div className="p-3 rounded-2xl bg-slate-950 text-white flex items-center justify-between text-xs sm:text-sm">
        <span className="font-bold text-amber-400">⚡ STRATEJİK DEĞER:</span>
        <span className="text-slate-300">Ayrı ayrı bağımsız yazılımlar değil, şirketin tüm omurgasını birbirine bağlayan tek ekosistem.</span>
        <span className="font-mono text-xs px-2.5 py-1 rounded bg-white/10 text-white">4 Platform • 1 Hedef</span>
      </div>
    </div>
  );
};
