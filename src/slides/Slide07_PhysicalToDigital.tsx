import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { QrCode, ArrowRight, Camera, CheckCircle2 } from 'lucide-react';
import { SYNTHETIC_EQUIPMENT, SYNTHETIC_TICKETS } from '../data/syntheticData';

export const Slide07_PhysicalToDigital: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const eq = SYNTHETIC_EQUIPMENT[0];
  const ticket = SYNTHETIC_TICKETS[0];

  const steps = [
    { num: '01', title: 'QR Tara', sub: 'Ekipman Tanıma' },
    { num: '02', title: 'Kimlik & Doküman', sub: 'Anında Geçmiş' },
    { num: '03', title: 'Bildirim Aç', sub: 'Fotoğraf + Not' },
    { num: '04', title: 'Yönetim Takibi', sub: 'Anlık Görünürlük' },
  ];

  return (
    <div className="w-full h-full p-8 md:p-12 lg:p-14 flex flex-col justify-between bg-[#FFFFFF]">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#E30613] tracking-widest uppercase">
            <span className="w-2.5 h-2.5 rounded-sm bg-[#E30613]"></span>
            <span>07 │ CANLI AKIŞ MODELİ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2">
            Fiziksel dünya → dijital dünya.
          </h2>
        </div>
        <div className="text-xs font-mono text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 self-start font-bold">
          [SENTETİK DEMO VERİSİ]
        </div>
      </div>

      {/* 4 Interactive Process Step Buttons (Portfolio Timeline Style) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 my-3">
        {steps.map((s, idx) => (
          <button
            key={idx}
            onClick={() => setActiveStep(idx)}
            className={`text-left p-4 rounded-2xl border-2 transition-all relative overflow-hidden ${
              activeStep === idx
                ? 'bg-[#E30613] border-[#E30613] text-white shadow-lg'
                : 'ppt-card-white text-slate-700 hover:border-slate-400'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-black opacity-80">ADIM {s.num}</span>
              {activeStep === idx && (
                <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
              )}
            </div>
            <div className="text-base font-extrabold mt-1">{s.title}</div>
            <div className="text-xs opacity-80 mt-0.5">{s.sub}</div>
          </button>
        ))}
      </div>

      {/* Interactive Step Content Box */}
      <motion.div
        key={activeStep}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="ppt-card-white p-7 border-2 border-slate-200 rounded-3xl shadow-md my-auto"
      >
        {activeStep === 0 && (
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="p-5 rounded-2xl bg-red-50 text-[#E30613] border border-red-200 shadow-inner">
                <QrCode className="w-12 h-12" />
              </div>
              <div>
                <h4 className="text-xl font-extrabold text-slate-900">1. Adım: Sahada Metal Karekodu Okutma</h4>
                <p className="text-sm text-slate-600 font-normal mt-1">
                  Usta veya operatör, tezgah veya kazanın üzerindeki metal karekodu cep telefonuyla okutur.
                </p>
                <div className="text-xs font-mono text-slate-600 mt-3 flex items-center gap-2">
                  <span>Okunan Ekipman Kodu:</span>
                  <strong className="text-slate-900 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">{eq.code}</strong>
                </div>
              </div>
            </div>
            <button
              onClick={() => setActiveStep(1)}
              className="px-6 py-3 bg-[#E30613] text-white font-bold rounded-xl text-xs flex items-center gap-2 hover:bg-red-700 transition-all shadow-md flex-shrink-0"
            >
              <span>İlerle</span> <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {activeStep === 1 && (
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-3 flex-1">
              <h4 className="text-xl font-extrabold text-slate-900">2. Adım: Ekipman Kimliği ve Geçmişi</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 font-medium">Ekipman:</span>
                  <div className="text-slate-900 font-bold text-sm mt-0.5">{eq.name}</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 font-medium">Konum:</span>
                  <div className="text-slate-900 font-bold text-sm mt-0.5">{eq.location}</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 font-medium">Sorumlu:</span>
                  <div className="text-slate-900 font-bold text-sm mt-0.5">{eq.responsibleEngineer}</div>
                </div>
              </div>
            </div>
            <button
              onClick={() => setActiveStep(2)}
              className="px-6 py-3 bg-[#E30613] text-white font-bold rounded-xl text-xs flex items-center gap-2 hover:bg-red-700 transition-all shadow-md flex-shrink-0"
            >
              <span>Bildirim Aç</span> <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {activeStep === 2 && (
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="p-5 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200 shadow-inner">
                <Camera className="w-10 h-10" />
              </div>
              <div>
                <h4 className="text-xl font-extrabold text-slate-900">3. Adım: Fotoğraf ve Kısa Not ile Bildirim</h4>
                <p className="text-sm text-slate-800 mt-1 font-medium bg-amber-50/60 p-2.5 rounded-lg border border-amber-200">
                  “Spindle ekseninde mikron seviyesinde titreşim artışı gözlendi. Yağ basıncı kontrol edilmeli.”
                </p>
                <div className="text-xs font-mono text-slate-500 mt-2">Kategori: Mekanik Bakım │ Öncelik: Yüksek</div>
              </div>
            </div>
            <button
              onClick={() => setActiveStep(3)}
              className="px-6 py-3 bg-[#E30613] text-white font-bold rounded-xl text-xs flex items-center gap-2 hover:bg-red-700 transition-all shadow-md flex-shrink-0"
            >
              <span>Gönder & Takip Et</span> <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {activeStep === 3 && (
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="p-5 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div>
                <h4 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                  <span>4. Adım: Kayıt Yönetim Kokpitine Düştü</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-mono font-bold">CANLI</span>
                </h4>
                <p className="text-sm text-slate-600 font-normal mt-1">
                  Talep <strong className="text-slate-900 font-mono text-base">{ticket.ticketNumber}</strong> numarasıyla ilgili mühendise anında atandı.
                </p>
              </div>
            </div>
            <button
              onClick={() => setActiveStep(0)}
              className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs transition-colors font-bold border border-slate-200"
            >
              Başa Dön
            </button>
          </div>
        )}
      </motion.div>

      {/* Bottom Footer */}
      <div className="text-xs text-slate-500 pt-3 border-t border-slate-100 flex items-center justify-between">
        <span>Fiziksel ekipman ile dijital yönetim arasındaki 3 saniyelik köprü.</span>
        <span className="font-mono text-slate-400 font-bold">SLIDE 07 / 11</span>
      </div>
    </div>
  );
};
