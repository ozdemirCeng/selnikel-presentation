import React from 'react';
import { ConcentricTargetGraphic } from '../components/graphics/ConcentricTargetGraphic';

export const Slide05_OpportunityMap: React.FC = () => {
  const layers = [
    {
      title: '01. BİLGİ & HAFIZA (Çekirdek)',
      sub: 'Teknik çizim, şartname, 71 yıllık teknik arşiv ve servis tecrübesi aktarımı.',
      tag: 'KAYIPSIZ ARŞİV',
      color: 'bg-[#E30613]',
    },
    {
      title: '02. SÜREÇ & AKIŞ',
      sub: 'Saha talep ve arıza bildirimleri, şeffaf sipariş ve montaj iş takibi.',
      tag: 'HIZLI İLETİŞİM',
      color: 'bg-slate-700',
    },
    {
      title: '03. ÜRETİM & METOT',
      sub: 'Fiziksel yük ve tekrar analizi, mekanik aparat ve fikstür ihtiyaçları.',
      tag: 'ERGONOMİ & KALİTE',
      color: 'bg-slate-600',
    },
    {
      title: '04. VERİ & KOKPİT (Dış Çerçeve)',
      sub: 'Plansız duruş analizi, departman iş yükü ve hislere değil veriye dayalı kararlar.',
      tag: 'ŞEFFAF ÖLÇÜM',
      color: 'bg-slate-500',
    },
  ];

  return (
    <div className="w-full h-full p-8 md:p-12 lg:p-14 flex flex-col justify-between bg-[#FFFFFF]">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-3 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#E30613] tracking-widest uppercase">
            <span className="w-2.5 h-2.5 rounded-sm bg-[#E30613]"></span>
            <span>05 │ STRATEJİK FIRSAT HARİTASI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-1">
            Dört katmanda stratejik odak çemberi.
          </h2>
        </div>
        <div className="text-xs font-mono text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 self-start font-bold">
          CONCENTRIC TARGET MODEL
        </div>
      </div>

      {/* SlideModel Style Concentric Bullseye Vector Illustration */}
      <div className="my-auto">
        <ConcentricTargetGraphic layers={layers} />
      </div>

      {/* Bottom Footer */}
      <div className="text-xs text-slate-500 pt-3 border-t border-slate-100 flex items-center justify-between">
        <span>Selnikel operasyonel mükemmellik ve dijital odak katmanları.</span>
        <span className="font-mono text-slate-400 font-bold">SLIDE 05 / 11</span>
      </div>
    </div>
  );
};
