import React from 'react';

export const SelnikelFanBlueprint: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <svg className={className} viewBox="0 0 600 360" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Blueprint Grid Lines */}
      <defs>
        <pattern id="fanCadGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E2E8F0" strokeWidth="0.75" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#fanCadGrid)" />

      {/* Centrifugal Fan Spiral Scroll Casing (Salyangoz Gövde) */}
      <path
        d="M 280 60 C 420 60, 480 140, 480 240 L 480 300 L 400 300 L 400 240 C 400 180, 360 140, 280 140 C 200 140, 140 190, 140 250 C 140 310, 200 340, 280 340 C 340 340, 390 320, 410 290"
        fill="#F8FAFC"
        stroke="#1E293B"
        strokeWidth="3.5"
      />

      {/* Fan Outlet Flange (Basma Ağzı Flanşı) */}
      <rect x="400" y="295" width="80" height="15" fill="#334155" stroke="#0F172A" strokeWidth="2" />
      <line x1="390" y1="310" x2="490" y2="310" stroke="#0F172A" strokeWidth="3" />
      <text x="410" y="325" fill="#0F172A" fontSize="9" fontFamily="monospace" fontWeight="bold">ÇIKIŞ FLANŞI</text>

      {/* Impeller Wheel (Çark ve Geriye Eğimli Kanatlar) */}
      <circle cx="280" cy="240" r="85" fill="#FEF2F2" stroke="#E30613" strokeWidth="2" strokeDasharray="4 2" />
      <circle cx="280" cy="240" r="30" fill="#CBD5E1" stroke="#1E293B" strokeWidth="2" />
      <circle cx="280" cy="240" r="10" fill="#E30613" />

      {/* Curved Impeller Blades (Radyal Kanatlar) */}
      <path d="M 280 210 Q 255 190, 235 170" stroke="#E30613" strokeWidth="2.5" />
      <path d="M 305 225 Q 335 210, 355 195" stroke="#E30613" strokeWidth="2.5" />
      <path d="M 305 255 Q 335 270, 350 295" stroke="#E30613" strokeWidth="2.5" />
      <path d="M 280 270 Q 255 290, 230 310" stroke="#E30613" strokeWidth="2.5" />
      <path d="M 255 240 Q 225 240, 195 240" stroke="#E30613" strokeWidth="2.5" />
      <text x="215" y="235" fill="#E30613" fontSize="8" fontFamily="monospace" fontWeight="bold">ÇARK (IMPELLER)</text>

      {/* Drive Shaft & Bearing Pedestal (Yataklama ve Mil) */}
      <rect x="70" y="232" width="180" height="16" fill="#64748B" stroke="#0F172A" strokeWidth="2" />
      <rect x="90" y="215" width="45" height="50" rx="4" fill="#334155" stroke="#0F172A" strokeWidth="2" />
      <text x="94" y="280" fill="#475569" fontSize="8" fontFamily="monospace" fontWeight="bold">SN RULMAN YATAĞI</text>

      {/* Electric Motor Coupling Bed (Motor Şasesi) */}
      <rect x="30" y="290" width="130" height="20" fill="#CBD5E1" stroke="#0F172A" strokeWidth="2" />
      <line x1="20" y1="310" x2="170" y2="310" stroke="#0F172A" strokeWidth="3" />
      <text x="50" y="325" fill="#64748B" fontSize="8" fontFamily="monospace" fontWeight="bold">MOTOR ŞASESİ</text>

      {/* Technical Title Stamp (CAD Standard Box) */}
      <g transform="translate(420, 20)">
        <rect width="165" height="55" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
        <line x1="0" y1="18" x2="165" y2="18" stroke="#0F172A" strokeWidth="1" />
        <line x1="0" y1="36" x2="165" y2="36" stroke="#0F172A" strokeWidth="1" />
        <line x1="80" y1="0" x2="80" y2="18" stroke="#0F172A" strokeWidth="1" />
        <text x="8" y="13" fill="#E30613" fontSize="8" fontFamily="monospace" fontWeight="bold">SELNİKEL A.Ş.</text>
        <text x="88" y="13" fill="#0F172A" fontSize="8" fontFamily="monospace" fontWeight="bold">RF-1400 SERİSİ</text>
        <text x="8" y="30" fill="#475569" fontSize="8" fontFamily="monospace">AĞIR HİZMET RADYAL FAN</text>
        <text x="8" y="48" fill="#64748B" fontSize="7" fontFamily="monospace">DEBİ: 85.000 m³/h │ BASINÇ: 4.200 Pa</text>
      </g>
    </svg>
  );
};
