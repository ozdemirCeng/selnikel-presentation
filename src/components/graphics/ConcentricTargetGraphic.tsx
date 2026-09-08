import React from 'react';
import { motion } from 'framer-motion';

interface ConcentricLayer {
  title: string;
  sub: string;
  tag: string;
  color: string;
}

interface ConcentricTargetProps {
  layers: ConcentricLayer[];
}

export const ConcentricTargetGraphic: React.FC<ConcentricTargetProps> = ({ layers }) => {
  return (
    <div className="relative w-full h-[340px] sm:h-[380px] flex items-center justify-center">
      <svg className="w-full h-full" viewBox="0 0 800 380" fill="none" preserveAspectRatio="xMidYMid meet">
        {/* Concentric Rings Centered at (300, 190) */}
        <g transform="translate(280, 190)">
          {/* Outermost Ring 4: Veri & Kokpit */}
          <motion.circle
            r="150"
            fill="#E2E8F0"
            opacity="0.5"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          />
          {/* Ring 3: Üretim & Metot */}
          <motion.circle
            r="115"
            fill="#CBD5E1"
            opacity="0.7"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          />
          {/* Ring 2: Süreç & Akış */}
          <motion.circle
            r="80"
            fill="#94A3B8"
            opacity="0.9"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          {/* Innermost Core: Bilgi & Hafıza */}
          <motion.circle
            r="45"
            fill="#E30613"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />

          <circle cx="0" cy="0" r="10" fill="#FFFFFF" />

          {/* Radial Pointer Lines to Callouts */}
          <path d="M 0 -45 L 80 -120 L 220 -120" stroke="#E30613" strokeWidth="2" strokeDasharray="4 4" fill="none" />
          <path d="M 55 -55 L 140 -50 L 220 -50" stroke="#64748B" strokeWidth="2" strokeDasharray="4 4" fill="none" />
          <path d="M 80 80 L 160 50 L 220 50" stroke="#64748B" strokeWidth="2" strokeDasharray="4 4" fill="none" />
          <path d="M 0 150 L 100 130 L 220 130" stroke="#64748B" strokeWidth="2" strokeDasharray="4 4" fill="none" />
        </g>
      </svg>

      {/* 4 Callout Cards on the Right Side */}
      <div className="absolute right-4 sm:right-8 w-72 sm:w-80 space-y-2.5 z-20">
        {layers.map((l, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className={`p-3.5 rounded-2xl border-2 transition-all shadow-md bg-white/95 backdrop-blur-sm ${
              idx === 0 ? 'border-[#E30613] bg-red-50/40' : 'border-slate-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className={`px-2 py-0.5 rounded-full ${l.color} text-white font-black text-[10px]`}>
                KATMAN {idx + 1}
              </span>
              <span className="text-[10px] font-mono font-bold text-slate-500">{l.tag}</span>
            </div>
            <div className="text-sm font-black text-slate-900 mt-1">{l.title}</div>
            <div className="text-xs text-slate-600 font-normal mt-0.5">{l.sub}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
