import React, { useState } from 'react';

export const Slide11Final: React.FC = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <div
      onClick={() => setRevealed(!revealed)}
      className="h-full flex flex-col justify-center items-center text-center px-6 md:px-16 cursor-pointer select-none"
    >
      {!revealed ? (
        <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
          <div className="w-12 h-1 bg-[#E30613] mx-auto rounded-full"></div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight">
            DAHA FAZLA TEKNOLOJİ?
          </h1>
          <p className="text-sm font-mono text-slate-500 tracking-widest uppercase">
            [Tıklayarak veya Gesture ile Finali Açın]
          </p>
        </div>
      ) : (
        <div className="space-y-6 animate-in zoom-in-95 fade-in duration-500">
          <div className="w-16 h-1.5 bg-[#E30613] mx-auto rounded-full"></div>
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black text-white tracking-tight leading-tight">
            DOĞRU PROBLEME<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
              DOĞRU TEKNOLOJİ.
            </span>
          </h1>
          <div className="pt-4 font-mono text-sm tracking-widest text-slate-400 uppercase">
            SELNİKEL × TEKNOLOJİ
          </div>
        </div>
      )}
    </div>
  );
};
