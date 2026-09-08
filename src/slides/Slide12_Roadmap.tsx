import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { SelnikelInteractiveLogo } from '../components/SelnikelInteractiveLogo';

export const Slide12_Roadmap: React.FC = () => {
  const steps = [
    {
      phase: 'AŞAMA 01',
      title: 'Saha Pilotu & Canlı Seferler',
      desc: 'Geliştirdiğim mobil uygulamanın servis şoförleri ve öncü personelle sahada canlı biniş denemelerinin başlatılması.',
      time: '1. - 2. Hafta',
      color: 'border-blue-500 bg-blue-50 text-blue-700'
    },
    {
      phase: 'AŞAMA 02',
      title: 'Filo Optimizasyonu & ₺233K Net Tasarruf',
      desc: '15 hattan 11 hatta geçişin yapılması, 4 kiralık aracın sözleşmesinin sonlandırılması ve doğrudan nakit tasarrufun başlaması.',
      time: '3. - 4. Hafta',
      color: 'border-emerald-500 bg-emerald-50 text-emerald-700'
    },
    {
      phase: 'AŞAMA 03',
      title: 'Dijital İkiz & Otomatik Şartname Motoru',
      desc: 'Selnikel AI ile 200 sayfalık şartnameleri 3 dakikada okuyan teklif motoru ve fabrika test istasyonları için hafif IoT dijital ikizi.',
      time: '2. Ay ve Sonrası',
      color: 'border-amber-500 bg-amber-50 text-amber-700'
    }
  ];

  return (
    <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 overflow-hidden bg-slate-950 text-white">
      {/* Left Column (55%): Vision & 3 Phases */}
      <div className="lg:col-span-7 p-8 md:p-14 flex flex-col justify-between relative z-10">
        <div>
          <div className="flex items-center gap-4">
            <SelnikelInteractiveLogo size="sm" />
            <span className="text-slate-600">│</span>
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 font-bold text-xs font-mono uppercase">
              12 │ KAPANIŞ VE GELECEK VİZYONU
            </span>
          </div>

          <div className="mt-6 space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Geleneksel Mühendisliğin Gücü + Modern Yazılımın Hızı
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-xl">
              Geliştirdiğim 4 çalışan sistemle bugün somut kazanımlar elde ettik; bu sağlam zemin üzerinde yarın neleri başarabileceğimizin 3 aşamalı yol haritası:
            </p>
          </div>
        </div>

        {/* 3 Step Deployment Cards */}
        <div className="space-y-3 my-4">
          {steps.map((st, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: idx * 0.1 }}
              className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between"
            >
              <div className="flex items-center gap-3.5">
                <span className={`px-2.5 py-1 rounded-lg text-xs font-black font-mono border ${st.color}`}>
                  {st.phase}
                </span>
                <div>
                  <h4 className="text-sm font-black text-white">{st.title}</h4>
                  <p className="text-xs text-slate-400 mt-0.5">{st.desc}</p>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-lg whitespace-nowrap ml-2">
                {st.time}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="text-xs text-slate-500 font-mono pt-3 border-t border-slate-800">
          Selnikel Isı & Makina Sanayi A.Ş. • Mühendislik & Yazılım Çözümü • 2026
        </div>
      </div>

      {/* Right Column (45%): Headquarters Photo & Bold Callout */}
      <div className="lg:col-span-5 relative overflow-hidden flex flex-col justify-between p-8 md:p-12">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hq.jpg"
            alt="Selnikel Genel Merkez"
            className="w-full h-full object-cover brightness-[0.55] contrast-[1.15]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent"></div>
        </div>

        <div className="relative z-10 flex justify-end">
          <div className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-bold text-white flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Bugün Kazanılan Güç ➔ Yarının Vizyonu</span>
          </div>
        </div>

        {/* Closing Decision Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative z-10 p-6 rounded-3xl bg-slate-900/90 backdrop-blur-xl border border-white/20 shadow-2xl space-y-3.5"
        >
          <span className="text-xs font-mono font-bold text-[#E30613] tracking-widest uppercase">
            YÖNETİCİ VİZYON ÇAĞRISI
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
            “Geleceğin sanayisinde sadece makineler değil, o makineleri yöneten dijital hafıza kazanır.”
          </h3>
          
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200 space-y-1.5">
            <div><strong>Bugün Ne Kazandık?</strong> Yıllık ~₺2.8M net nakit tasarrufu, %35 hızlı teklif, sıfır kağıt ve sıfır bilgi kaybı.</div>
            <div><strong>Yarın Ne Yapabiliriz?</strong> Canlı trafikli dinamik rota, IoT destekli fabrika dijital ikizi ve otomatik ihale teklif motoru.</div>
          </div>

          <div className="p-3 rounded-xl bg-white/10 border border-white/15 flex items-center justify-between text-xs font-bold">
            <span className="text-amber-400 font-mono">Tüm Sistemler Doğrulandı</span>
            <span className="text-white">Devreye Almaya Hazır ✔</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
