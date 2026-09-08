import React from 'react';

export const SelnikelBoilerBlueprint: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <svg className={className} viewBox="0 0 600 360" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Blueprint Grid Lines */}
      <defs>
        <pattern id="cadGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E2E8F0" strokeWidth="0.75" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#cadGrid)" />

      {/* Main Boiler Shell (Outer Cylinder Vessel) */}
      <rect x="120" y="80" width="360" height="190" rx="20" fill="#F8FAFC" stroke="#1E293B" strokeWidth="3" />
      {/* Front & Rear Dish Heads */}
      <path d="M 120 80 Q 95 175 120 270" stroke="#1E293B" strokeWidth="3" fill="#F1F5F9" />
      <path d="M 480 80 Q 505 175 480 270" stroke="#1E293B" strokeWidth="3" fill="#F1F5F9" />

      {/* Internal Furnace Tube (1st Pass - Yanma Hücresi) */}
      <rect x="120" y="165" width="280" height="75" rx="8" fill="#FEF2F2" stroke="#E30613" strokeWidth="2.5" strokeDasharray="6 3" />
      <text x="135" y="210" fill="#E30613" fontSize="10" fontFamily="monospace" fontWeight="bold">1. GEÇİŞ: CEHENNEMLİK (FURNACE)</text>

      {/* Reversal Chamber (Dönüş Odası) */}
      <path d="M 400 165 L 465 150 L 465 240 L 400 240 Z" fill="#FEE2E2" stroke="#E30613" strokeWidth="2" />

      {/* 2nd & 3rd Pass Smoke Tubes Bundles (Duman Boru Demetleri) */}
      <g stroke="#3B82F6" strokeWidth="1.5">
        <line x1="120" y1="105" x2="465" y2="105" />
        <line x1="120" y1="118" x2="465" y2="118" />
        <line x1="120" y1="131" x2="465" y2="131" />
        <line x1="120" y1="144" x2="465" y2="144" />
      </g>
      <text x="135" y="125" fill="#2563EB" fontSize="9" fontFamily="monospace" fontWeight="bold">2. & 3. GEÇİŞ: DUMAN BORULARI (SMOKE TUBES)</text>

      {/* Burner Flange & Mounting Housing (Front) */}
      <rect x="40" y="175" width="60" height="55" rx="4" fill="#0F172A" stroke="#1E293B" strokeWidth="2" />
      <polygon points="100,185 120,180 120,225 100,220" fill="#334155" stroke="#1E293B" strokeWidth="1.5" />
      <text x="45" y="206" fill="#FFFFFF" fontSize="8" fontFamily="monospace" fontWeight="bold">BRÜLÖR</text>

      {/* Steam Dome & Safety Valve Nozzle (Top) */}
      <rect x="270" y="55" width="60" height="25" rx="3" fill="#CBD5E1" stroke="#1E293B" strokeWidth="2" />
      <path d="M 290 55 L 290 35 L 310 35 L 310 55" fill="#E2E8F0" stroke="#1E293B" strokeWidth="2" />
      <line x1="280" y1="35" x2="320" y2="35" stroke="#1E293B" strokeWidth="3" />
      <text x="245" y="45" fill="#0F172A" fontSize="9" fontFamily="monospace" fontWeight="bold">BUHAR ÇIKIŞI</text>

      {/* Exhaust Gas Flue / Smokebox Outlet (Rear Top) */}
      <path d="M 440 80 L 440 45 L 475 45 L 475 80" fill="#E2E8F0" stroke="#1E293B" strokeWidth="2" />
      <text x="445" y="38" fill="#64748B" fontSize="8" fontFamily="monospace" fontWeight="bold">BACA</text>

      {/* Heavy Support Saddles (Ayaklar) */}
      <polygon points="180,270 230,270 240,310 170,310" fill="#334155" stroke="#0F172A" strokeWidth="2" />
      <polygon points="370,270 420,270 430,310 360,310" fill="#334155" stroke="#0F172A" strokeWidth="2" />
      <line x1="140" y1="310" x2="460" y2="310" stroke="#0F172A" strokeWidth="4" />

      {/* Technical Annotation Dimension Arrows */}
      <g stroke="#94A3B8" strokeWidth="1" markerEnd="url(#arrow)">
        <line x1="120" y1="335" x2="480" y2="335" />
        <line x1="120" y1="330" x2="120" y2="340" />
        <line x1="480" y1="330" x2="480" y2="340" />
        <text x="250" y="348" fill="#64748B" fontSize="9" fontFamily="monospace" fontWeight="bold">GÖVDE UZUNLUĞU L = 5.800 mm</text>
      </g>

      {/* Technical Title Stamp (CAD Standard Box) */}
      <g transform="translate(420, 290)">
        <rect width="165" height="55" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
        <line x1="0" y1="18" x2="165" y2="18" stroke="#0F172A" strokeWidth="1" />
        <line x1="0" y1="36" x2="165" y2="36" stroke="#0F172A" strokeWidth="1" />
        <line x1="80" y1="0" x2="80" y2="18" stroke="#0F172A" strokeWidth="1" />
        <text x="8" y="13" fill="#E30613" fontSize="8" fontFamily="monospace" fontWeight="bold">SELNİKEL A.Ş.</text>
        <text x="88" y="13" fill="#0F172A" fontSize="8" fontFamily="monospace" fontWeight="bold">SKB-10 SERİSİ</text>
        <text x="8" y="30" fill="#475569" fontSize="8" fontFamily="monospace">3 GEÇİŞLİ BUHAR KAZANI</text>
        <text x="8" y="48" fill="#64748B" fontSize="7" fontFamily="monospace">ÖLÇEK: 1:25 │ REV: 04</text>
      </g>
    </svg>
  );
};
