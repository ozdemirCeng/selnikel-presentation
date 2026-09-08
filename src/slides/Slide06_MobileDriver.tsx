import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';
import { SelnikelInteractiveLogo } from '../components/SelnikelInteractiveLogo';

export const Slide06_MobileDriver: React.FC = () => {
  return (
    <div className="w-full h-full p-8 md:p-12 bg-slate-50 flex flex-col justify-between overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <div className="flex items-center gap-4">
          <SelnikelInteractiveLogo size="sm" />
          <span className="text-slate-300">│</span>
          <div>
            <span className="text-xs font-mono font-bold text-cyan-600 uppercase tracking-wider">06 │ SÜTUN 2: SÜRÜCÜ & TELEMETRİ</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Sürücü Aktif Sefer Modu & Kesintisiz GPS</h2>
          </div>
        </div>
        <span className="px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold">11 Araç • Kesintisiz Sefer</span>
      </div>

      {/* Main Grid: 3 Mobile Screenshots (Left 42%) + 3 Clean Executive Cards (Right 58%) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto py-2 items-center">
        {/* Left: 3 Screenshots */}
        <div className="lg:col-span-5 grid grid-cols-3 gap-2.5">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            className="rounded-2xl overflow-hidden border-2 border-slate-800 shadow-md bg-white flex flex-col"
          >
            <div className="bg-slate-900 text-white p-1 text-center text-[10px] font-bold">1. Sefer Başlat</div>
            <img src="/images/mobile_driver.png" alt="Sürücü Ekranı" className="w-full h-auto object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="rounded-2xl overflow-hidden border-2 border-slate-800 shadow-md bg-white flex flex-col"
          >
            <div className="bg-cyan-600 text-white p-1 text-center text-[10px] font-bold">2. Yolcu Listesi</div>
            <img src="/images/mobile_manifest.png" alt="Yolcu Listesi" className="w-full h-auto object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, delay: 0.2 }}
            className="rounded-2xl overflow-hidden border-2 border-slate-800 shadow-md bg-white flex flex-col"
          >
            <div className="bg-emerald-600 text-white p-1 text-center text-[10px] font-bold">3. Telemetri</div>
            <img src="/images/mobile_telemetry.png" alt="Telemetri Durumu" className="w-full h-auto object-cover" />
          </motion.div>
        </div>

        {/* Right: 3 Clean Executive Cards */}
        <div className="lg:col-span-7 space-y-3.5">
          {/* Card 1: Canlı Yolcu Manifestosu */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono font-bold text-cyan-600 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-600" /> DİNAMİK YOLCU MANİFESTOSU
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                %0 Yolcu Kaçırma
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Hangi durakta hangi personelin bineceği şoförün ekranına anlık düşer. Durakta gereksiz bekleme biter; servisi kaçıran veya geride kalan personel riski sıfırlanır.
            </p>
          </div>

          {/* Card 2: Offline GPS Telemetrisi */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono font-bold text-emerald-600 uppercase tracking-wider flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-emerald-600" /> KESİNTİSİZ OFFLINE GPS MOTORU
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-100 text-cyan-800 text-[11px] font-bold">
                Sıfır Veri Kaybı
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Ankara tünellerinde ve kırsal hatlarda GSM sinyali kopsa bile telemetri yerel SQLite veritabanında tamponlanır; şebeke geldiğinde fabrikaya eksiksiz senkronize edilir.
            </p>
          </div>

          {/* Card 3: Gelecek Vizyonu */}
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200/80 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-cyan-600 text-white flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-black text-cyan-950 uppercase tracking-wider">GELECEK VİZYONU</span>
                <p className="text-xs text-cyan-900 font-medium mt-0.5">
                  OCR ile benzinlik yakıt fişlerinin otomatik taranması • Şoföre canlı sesli akıllı rota asistanı
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="p-3 rounded-2xl bg-slate-900 text-white flex items-center justify-between text-xs sm:text-sm">
        <span className="font-bold text-cyan-400">🛡️ SÜTUN 2 (SÜRÜCÜ):</span>
        <span className="text-slate-300">Rotadan sapmalar, belirsiz beklemeler ve bilgi kayıpları bitti; 11 araç fabrikadan canlı denetlenebilir hale geldi.</span>
        <span className="font-mono text-xs px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-300">Doğrulanmış Saha Testi</span>
      </div>
    </div>
  );
};
