import React, { useState } from 'react';
import { MountainPeakGraphic } from '../components/graphics/MountainPeakGraphic';
import { AlertTriangle, Sliders } from 'lucide-react';
import { AUTOMATION_FACTORS_DEFAULT } from '../data/syntheticData';

export const Slide09_AutomationMethod: React.FC = () => {
  const [factors, setFactors] = useState(AUTOMATION_FACTORS_DEFAULT);

  const computeScore = () => {
    let totalScore = 0;
    factors.forEach((f) => {
      if (f.id === 'process_variation') {
        totalScore += (100 - f.value) * f.weight;
      } else {
        totalScore += f.value * f.weight;
      }
    });
    return Math.round(totalScore);
  };

  const score = computeScore();

  const mountainMilestones = [
    { num: '01', label: 'Süreç Analizi', sub: 'Fiziksel Yük & Tekrar', x: 10, y: 55, color: 'bg-slate-700' },
    { num: '02', label: 'Fikstür & Aparat', sub: 'Düşük Maliyetli Çözüm', x: 28, y: 35, color: 'bg-blue-600' },
    { num: '03', label: `Zirve: %${score} Uygunluk`, sub: score >= 75 ? 'Cobot / Otomasyon Adayı' : 'Süreç İnceleme', x: 42, y: 2, color: 'bg-[#E30613]' },
    { num: '04', label: 'Finansal ROI', sub: 'Geri Dönüş & Fizibilite', x: 70, y: 40, color: 'bg-emerald-600' },
  ];

  return (
    <div className="w-full h-full p-8 md:p-12 lg:p-14 flex flex-col justify-between bg-[#FFFFFF]">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-3 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#E30613] tracking-widest uppercase">
            <Sliders className="w-3.5 h-3.5" />
            <span>09 │ ÜRETİM METOT & OTOMASYON ZİRVESİ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-1">
            Neyi otomatikleştireceğimize nasıl karar veririz?
          </h2>
        </div>
        <div className="text-xs font-mono text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 self-start font-bold">
          MOUNTAIN ELEVATION MODEL
        </div>
      </div>

      {/* SlideModel Style Mountain Peak Summit Graphic */}
      <div className="my-auto">
        <MountainPeakGraphic milestones={mountainMilestones} />
      </div>

      {/* Bottom Sliders & Disclaimer Banner */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center pt-2 border-t border-slate-100">
        <div className="md:col-span-8 flex flex-wrap items-center gap-3 text-xs">
          {factors.map((f) => (
            <div key={f.id} className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl">
              <span className="font-bold text-slate-700">{f.label}:</span>
              <input
                type="range"
                min="0"
                max="100"
                value={f.value}
                onChange={(e) => {
                  const newVal = parseInt(e.target.value, 10);
                  setFactors((prev) =>
                    prev.map((item) => (item.id === f.id ? { ...item, value: newVal } : item))
                  );
                }}
                className="w-16 h-1.5 bg-slate-200 rounded appearance-none cursor-pointer accent-[#E30613]"
              />
              <span className="font-mono font-black text-[#E30613]">%{f.value}</span>
            </div>
          ))}
        </div>

        <div className="md:col-span-4 flex items-center gap-2 text-[11px] text-slate-600 bg-amber-50 p-2 rounded-xl border border-amber-200">
          <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
          <span>Önce robot değil; en düşük maliyetli doğru mühendislik çözümü.</span>
        </div>
      </div>
    </div>
  );
};
