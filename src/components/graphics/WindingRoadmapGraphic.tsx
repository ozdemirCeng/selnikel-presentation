import React from 'react';
import { motion } from 'framer-motion';

interface RoadmapStation {
  num: string;
  title: string;
  sub: string;
  desc: string;
  x: number; // percentage from left
  y: number; // percentage from top
  color: string;
}

interface WindingRoadmapProps {
  stations: RoadmapStation[];
}

export const WindingRoadmapGraphic: React.FC<WindingRoadmapProps> = ({ stations }) => {
  return (
    <div className="relative w-full h-[340px] sm:h-[380px] flex items-center justify-center">
      <svg className="w-full h-full" viewBox="0 0 900 380" fill="none" preserveAspectRatio="xMidYMid meet">
        {/* Curvy S-Path Background Shadow */}
        <path
          d="M 50 190 Q 200 60, 350 190 T 650 190 T 850 190"
          stroke="#E2E8F0"
          strokeWidth="38"
          strokeLinecap="round"
          fill="none"
        />

        {/* Curvy S-Path Main Asphalt / Solid Ribbon */}
        <path
          d="M 50 190 Q 200 60, 350 190 T 650 190 T 850 190"
          stroke="#1E293B"
          strokeWidth="28"
          strokeLinecap="round"
          fill="none"
        />

        {/* Dashed Center Road Line */}
        <path
          d="M 50 190 Q 200 60, 350 190 T 650 190 T 850 190"
          stroke="#FFFFFF"
          strokeWidth="3"
          strokeDasharray="12 12"
          fill="none"
        />

        {/* Animated Glowing Trail Line */}
        <motion.path
          d="M 50 190 Q 200 60, 350 190 T 650 190 T 850 190"
          stroke="#E30613"
          strokeWidth="6"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* Station Visual Pin Nodes on Path */}
        <circle cx="120" cy="145" r="14" fill="#E30613" stroke="#FFFFFF" strokeWidth="4" />
        <circle cx="350" cy="190" r="14" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="4" />
        <circle cx="580" cy="235" r="14" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="4" />
        <circle cx="800" cy="190" r="16" fill="#10B981" stroke="#FFFFFF" strokeWidth="5" />
      </svg>

      {/* Station Callout Cards Placed Above & Below Road */}
      {stations.map((s, idx) => (
        <motion.div
          key={s.num}
          initial={{ opacity: 0, scale: 0.9, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.15 }}
          className="absolute z-20"
          style={{ left: `${s.x}%`, top: `${s.y}%`, transform: 'translate(-50%, -50%)' }}
        >
          <div className="w-48 sm:w-56 ppt-card-white p-4 space-y-1.5 border-2 border-slate-200 hover:border-[#E30613] transition-all rounded-2xl shadow-xl bg-white/95 backdrop-blur-sm group">
            <div className="flex items-center justify-between">
              <span className={`px-2.5 py-0.5 rounded-full ${s.color} text-white font-black text-xs shadow-sm`}>
                FAZ {s.num}
              </span>
              <span className="text-[10px] font-mono text-slate-400 font-bold">KONTROLLÜ</span>
            </div>
            <div className="text-sm font-black text-slate-900 group-hover:text-[#E30613] transition-colors">
              {s.title}
            </div>
            <div className="text-[11px] font-bold text-[#E30613] uppercase tracking-wider">{s.sub}</div>
            <p className="text-[11px] text-slate-600 font-normal leading-snug pt-1 border-t border-slate-100">{s.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
