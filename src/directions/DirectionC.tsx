import React from 'react';
import { QrCode, AlertCircle, FileSearch, Sparkles } from 'lucide-react';

// Direction C - Slide 01
export const DirectionC_Slide01: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center text-center px-6 md:px-16 max-w-5xl mx-auto">
      <div className="p-2 px-4 rounded bg-[#161C26] border border-[#232B3B] text-xs font-bold text-slate-300 mb-8 uppercase tracking-wider">
        Ölçeklenebilirlik & Mühendislik
      </div>

      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-8">
        “Selnikel büyüdükçe, bugünkü çalışma biçimleri{' '}
        <span className="text-[#0284C7]">aynı hız ve kaliteyle</span> ölçeklenebilir mi?”
      </h1>

      <p className="text-base md:text-lg text-slate-400 max-w-2xl font-normal leading-relaxed mb-10">
        Var olan 70 yıllık tecrübeyi değiştirmeden, teknolojiyle operasyonel sürtünmeleri azaltma planı.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-2xl text-xs font-mono">
        <div className="p-3 rounded bg-[#121620] border border-[#1E2535] text-slate-300 font-bold">
          01. GÖZLEM
        </div>
        <div className="p-3 rounded bg-[#121620] border border-[#1E2535] text-slate-300 font-bold">
          02. ÖLÇÜM
        </div>
        <div className="p-3 rounded bg-[#121620] border border-[#1E2535] text-slate-300 font-bold">
          03. TEKNOLOJİ
        </div>
        <div className="p-3 rounded bg-[#0284C7]/20 border border-[#0284C7]/50 text-cyan-300 font-bold">
          04. SONUÇ
        </div>
      </div>
    </div>
  );
};

// Direction C - Slide 06 (Selnikel One)
export const DirectionC_Slide06: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left Mockup */}
        <div className="md:col-span-5 flex justify-center">
          <div className="w-[280px] rounded-2xl bg-[#121620] border border-[#232B3B] p-5 shadow-xl">
            <div className="flex justify-between items-center pb-3 mb-4 border-b border-[#232B3B]">
              <span className="text-xs font-bold text-white uppercase tracking-wider">Selnikel One</span>
              <span className="text-[10px] text-emerald-400 font-mono">AKTİF</span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-3 bg-[#18202D] rounded border border-[#2A3446] text-white flex items-center gap-3">
                <QrCode className="w-4 h-4 text-[#0284C7]" />
                <span className="font-semibold">Ekipman QR Tara</span>
              </div>
              <div className="p-3 bg-[#18202D] rounded border border-[#2A3446] text-white flex items-center gap-3">
                <AlertCircle className="w-4 h-4 text-amber-400" />
                <span className="font-semibold">Arıza / Talep Bildir</span>
              </div>
              <div className="p-3 bg-[#18202D] rounded border border-[#2A3446] text-white flex items-center gap-3">
                <FileSearch className="w-4 h-4 text-cyan-400" />
                <span className="font-semibold">Teknik Doküman Bul</span>
              </div>
              <div className="p-3 bg-[#18202D] rounded border border-[#2A3446] text-white flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="font-semibold">Selnikel AI Asistan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Info */}
        <div className="md:col-span-7 space-y-4">
          <span className="text-xs font-bold text-[#0284C7] uppercase tracking-wider">
            06 │ ORTAK ARAYÜZ KATMANI
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Selnikel One
          </h2>
          <p className="text-base text-slate-300 font-light leading-relaxed">
            Çalışan açısından karmaşık yazılımları aradan çıkarıp işi 3 saniyelik sade adımlara indiren giriş kapısı.
          </p>

          <div className="space-y-3 pt-2">
            <div className="p-3.5 bg-[#121620] border border-[#1E2535] rounded-xl text-xs text-slate-300">
              <strong className="text-white">Hafif Katman:</strong> Mevcut ERP ve sunucuları değiştirmeden üzerine bağlanır.
            </div>
            <div className="p-3.5 bg-[#121620] border border-[#1E2535] rounded-xl text-xs text-slate-300">
              <strong className="text-white">Sahada Hız:</strong> Ustaların bilgisayar başına gitme beklemesini bitirir.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Direction C - Slide 10 (Önerilen İlk Adım)
export const DirectionC_Slide10: React.FC = () => {
  const steps = [
    { num: '01', title: 'GÖZLEM', desc: 'Gerçek süreçteki sürtünmeleri sahada incele' },
    { num: '02', title: 'PİLOT', desc: 'Tek bir problemde küçük prototip geliştir' },
    { num: '03', title: 'ÖLÇÜM', desc: 'Faydayı ve zaman kazancını veriye dök' },
    { num: '04', title: 'KARAR', desc: 'Ölçülen sonuca göre ölçeklendir veya bırak' },
  ];

  return (
    <div className="h-full flex flex-col justify-center px-6 md:px-16 max-w-6xl mx-auto w-full">
      <div className="mb-8">
        <span className="text-xs font-bold text-[#0284C7] uppercase tracking-wider">
          10 │ EYLEM PLANI
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-1">
          Önce küçük ölçekte kanıtlayalım.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {steps.map((s) => (
          <div key={s.num} className="p-5 rounded-xl bg-[#121620] border border-[#1E2535] flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold text-[#0284C7] font-mono mb-2">{s.num}</div>
              <div className="text-lg font-bold text-white mb-2">{s.title}</div>
              <p className="text-xs text-slate-400 font-light">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 rounded-lg bg-[#161C26] border border-[#232B3B] text-xs text-slate-300">
        Yönetimden beklenen: <strong className="text-white">doğru pilot alanına erişim</strong> ve kontrollü çalışma izni.
      </div>
    </div>
  );
};
