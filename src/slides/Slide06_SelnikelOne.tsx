import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { QrCode, AlertCircle, FileSearch, Sparkles, Check } from 'lucide-react';

export const Slide06_SelnikelOne: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'qr' | 'ticket' | 'doc' | 'ai'>('qr');

  return (
    <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 overflow-hidden bg-[#FFFFFF]">
      {/* Left Column (50%): Product Editorial & Value Proposition */}
      <div className="lg:col-span-6 p-8 md:p-12 lg:p-14 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#E30613] tracking-widest uppercase">
            <span className="w-2.5 h-2.5 rounded-sm bg-[#E30613]"></span>
            <span>06 │ İLK SOMUT DİJİTAL KATMAN</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mt-4 tracking-tight">
            Selnikel One
          </h2>
          <p className="text-xl text-slate-600 font-light mt-1">
            Çalışanın cebindeki dijital giriş kapısı.
          </p>
        </div>

        <div className="space-y-4 my-auto py-4">
          <div className="ppt-card-white p-5 space-y-1.5 border-2 border-slate-200 rounded-2xl shadow-sm">
            <div className="flex items-center gap-2.5 font-black text-slate-900 text-sm">
              <span className="w-3 h-3 rounded-full bg-[#E30613]"></span>
              <span>Yeni bir ERP veya karmaşık yazılım değil:</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed pl-5">
              Mevcut sistemleri değiştirmeden, çalışanın cebindeki karmaşayı bitiren ortak ve sade arayüz katmanı.
            </p>
          </div>

          <div className="ppt-card-white p-5 space-y-1.5 border-2 border-slate-200 rounded-2xl shadow-sm">
            <div className="flex items-center gap-2.5 font-black text-slate-900 text-sm">
              <span className="w-3 h-3 rounded-full bg-[#E30613]"></span>
              <span>Sahada 3 saniyede noktasında erişim:</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed pl-5">
              Ustanın veya mühendisin bilgisayar başına gitme beklemesini kaldırarak sahada noktasında bilgi ve bildirim sağlar.
            </p>
          </div>
        </div>

        <div className="text-xs text-slate-500 pt-3 border-t border-slate-100 flex items-center justify-between">
          <span>SLIDE 06 / 11 │ SELNİKEL ONE SAHA PORTALI</span>
          <span className="font-mono text-slate-400 font-bold">SENTETİK PROTOTİP</span>
        </div>
      </div>

      {/* Right Column (50%): Angled Colored Backdrop with Interactive Smartphone (Invictus Style) */}
      <div className="lg:col-span-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-8 md:p-12 flex items-center justify-center relative overflow-hidden">
        {/* Background Decorative Rings */}
        <div className="absolute w-96 h-96 rounded-full border border-white/5 pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-[310px] sm:w-[330px] rounded-[42px] bg-slate-950 border-4 border-slate-700 p-4 shadow-2xl relative text-white z-10"
        >
          {/* Dynamic Island */}
          <div className="w-20 h-4 bg-slate-900 rounded-full mx-auto mb-4 border border-slate-800"></div>

          {/* App Header */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
            <div>
              <div className="text-[10px] font-bold text-slate-400 tracking-wider">SELNİKEL ONE</div>
              <div className="text-sm font-extrabold text-white">Saha & Bakım Portalı</div>
            </div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
          </div>

          {/* 4 Interactive App Buttons */}
          <div className="space-y-2 text-xs">
            <button
              onClick={() => setActiveTab('qr')}
              className={`w-full p-3 rounded-xl flex items-center justify-between text-left transition-all ${
                activeTab === 'qr'
                  ? 'bg-[#E30613] text-white shadow-lg'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <QrCode className="w-4 h-4" />
                <div>
                  <div className="font-bold text-xs">QR TARA</div>
                  <div className="text-[9px] opacity-80">Ekipman Tanı & Geçmiş</div>
                </div>
              </div>
              {activeTab === 'qr' && <Check className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setActiveTab('ticket')}
              className={`w-full p-3 rounded-xl flex items-center justify-between text-left transition-all ${
                activeTab === 'ticket'
                  ? 'bg-[#E30613] text-white shadow-lg'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <AlertCircle className="w-4 h-4" />
                <div>
                  <div className="font-bold text-xs">ARIZA / TALEP BİLDİR</div>
                  <div className="text-[9px] opacity-80">Fotoğraf + Kısa Not</div>
                </div>
              </div>
              {activeTab === 'ticket' && <Check className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setActiveTab('doc')}
              className={`w-full p-3 rounded-xl flex items-center justify-between text-left transition-all ${
                activeTab === 'doc'
                  ? 'bg-[#E30613] text-white shadow-lg'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <FileSearch className="w-4 h-4" />
                <div>
                  <div className="font-bold text-xs">DOKÜMAN ARA</div>
                  <div className="text-[9px] opacity-80">Teknik Çizim & Şartname</div>
                </div>
              </div>
              {activeTab === 'doc' && <Check className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setActiveTab('ai')}
              className={`w-full p-3 rounded-xl flex items-center justify-between text-left transition-all ${
                activeTab === 'ai'
                  ? 'bg-[#E30613] text-white shadow-lg'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4" />
                <div>
                  <div className="font-bold text-xs">SELNİKEL AI</div>
                  <div className="text-[9px] opacity-80">Doğrulanmış Bilgi Asistanı</div>
                </div>
              </div>
              {activeTab === 'ai' && <Check className="w-4 h-4" />}
            </button>
          </div>

          <div className="mt-4 pt-2.5 border-t border-slate-800 text-center text-[10px] text-slate-400 font-mono">
            [SENTETİK DEMO PROTOTİPİ]
          </div>
        </motion.div>
      </div>
    </div>
  );
};
