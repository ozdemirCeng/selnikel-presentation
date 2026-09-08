import React from 'react';
import { motion } from 'framer-motion';

interface MountainPeakProps {
  milestones: {
    num: string;
    label: string;
    sub: string;
    x: number;
    y: number;
    color: string;
  }[];
}

export const MountainPeakGraphic: React.FC<MountainPeakProps> = ({ milestones }) => {
  return (
    <div className="relative w-full h-[320px] sm:h-[360px] flex items-center justify-center overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 800 360" fill="none" preserveAspectRatio="xMidYMid meet">
        {/* Background Subtle Mountain Range */}
        <polygon points="50,360 220,120 380,360" fill="#E2E8F0" opacity="0.6" />
        <polygon points="200,120 220,120 260,180 200,180" fill="#CBD5E1" opacity="0.8" />

        <polygon points="420,360 600,80 760,360" fill="#E2E8F0" opacity="0.6" />
        <polygon points="570,80 600,80 650,150 580,150" fill="#CBD5E1" opacity="0.8" />

        {/* Foreground Main Majestic Mountain Peaks */}
        {/* Left Shoulder Peak */}
        <polygon points="0,360 200,160 420,360" fill="#94A3B8" />
        {/* Left Snow Cap */}
        <polygon points="175,160 200,160 235,210 205,200 190,215 170,195" fill="#FFFFFF" />

        {/* Center Main Peak (Highest Summit) */}
        <polygon points="180,360 400,40 640,360" fill="#475569" />
        {/* Center Snow Cap with Shading */}
        <polygon points="350,40 400,40 460,130 430,115 410,135 385,115 365,130 345,100" fill="#FFFFFF" />
        <polygon points="400,40 460,130 430,115 410,135 400,40" fill="#E2E8F0" />

        {/* Right Shoulder Peak */}
        <polygon points="380,360 580,140 800,360" fill="#64748B" />
        {/* Right Snow Cap */}
        <polygon points="545,140 580,140 620,195 595,185 575,200 550,180" fill="#FFFFFF" />

        {/* Elevation Guide Lines */}
        <line x1="40" y1="280" x2="760" y2="280" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="6 6" />
        <line x1="40" y1="200" x2="760" y2="200" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="6 6" />
        <line x1="40" y1="120" x2="760" y2="120" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="6 6" />

        {/* Summit Flag at Top Peak (400, 40) */}
        <g transform="translate(400, 40)">
          <line x1="0" y1="0" x2="0" y2="-45" stroke="#E30613" strokeWidth="3" />
          <polygon points="0,-45 35,-32 0,-20" fill="#E30613" />
          <circle cx="0" cy="-45" r="4" fill="#E30613" />
        </g>
      </svg>

      {/* Milestone Callout Badges with Dynamic Pin Points */}
      {milestones.map((m, idx) => (
        <motion.div
          key={m.num}
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.15 }}
          className="absolute z-20"
          style={{ left: `${m.x}%`, top: `${m.y}%` }}
        >
          <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm p-2.5 px-3 rounded-2xl shadow-xl border-2 border-slate-200 hover:border-[#E30613] transition-all cursor-default group">
            <div className={`w-7 h-7 rounded-xl ${m.color} text-white flex items-center justify-center font-black text-xs shadow-md`}>
              {m.num}
            </div>
            <div>
              <div className="text-xs font-black text-slate-900 group-hover:text-[#E30613] transition-colors whitespace-nowrap">
                {m.label}
              </div>
              <div className="text-[10px] text-slate-500 font-medium whitespace-nowrap">{m.sub}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
