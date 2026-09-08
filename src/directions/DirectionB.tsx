import React from 'react';
import { QrCode, AlertCircle, FileSearch, Sparkles } from 'lucide-react';

// Direction B - Slide 01
export const DirectionB_Slide01: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center px-6 md:px-16 max-w-6xl mx-auto w-full">
      <div className="border-l-4 border-[#E30613] pl-6 md:pl-10 space-y-6">
        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
          SELNİKEL × STRATEJİ
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[1.05]">
          Büyüdükçe,<br />
          aynı hız ve kalitede<br />
          <span className="text-slate-400 font-light">yönetilebilir mi?</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed pt-2">
          70 yıllık üretim gücümüzün sınırlarını zorlamak için yeni araçlara değil, sürtünmesiz süreçlere ihtiyacımız var.
        </p>

        <div className="pt-6 flex items-center gap-4 text-xs font-mono text-slate-400">
          <span className="text-white font-bold">GÖZLEM</span>
          <span>→</span>
          <span className="text-white font-bold">ÖLÇÜM</span>
          <span>→</span>
          <span className="text-white font-bold">TEKNOLOJİ</span>
          <span>→</span>
          <span className="text-[#E30613] font-bold">SONUÇ</span>
        </div>
      </div>
    </div>
  );
};

// Direction B - Slide 06 (Selnikel One)
export const DirectionB_Slide06: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left Editorial Narrative */}
        <div className="md:col-span-7 space-y-6">
          <div className="text-xs font-bold text-[#E30613] tracking-widest uppercase">
            06 │ DİJİTAL KATMAN
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tighter">
            Selnikel One
          </h2>
          <p className="text-xl text-slate-300 font-light leading-relaxed">
            Çalışanın cebindeki karmaşayı bitiren sade arayüz.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider mb-1">01. ERP Değil</div>
              <p className="text-xs text-slate-400">Mevcut sistemleri değiştirmeden tek ekranda toplayan katman.</p>
            </div>
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider mb-1">02. 3 Saniye Kuralı</div>
              <p className="text-xs text-slate-400">Arıza veya dokümana bilgisayara gitmeden anında erişim.</p>
            </div>
          </div>
        </div>

        {/* Right Phone Visual */}
        <div className="md:col-span-5 flex justify-center">
          <div className="w-[260px] sm:w-[280px] rounded-[32px] bg-[#0A0A0A] border border-white/20 p-5 shadow-2xl">
            <div className="flex justify-between items-center pb-3 mb-4 border-b border-white/10 text-xs">
              <span className="font-extrabold tracking-wider text-white">SELNİKEL ONE</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-3 bg-white/5 rounded-xl text-white font-bold flex items-center gap-3">
                <QrCode className="w-4 h-4 text-[#E30613]" /> QR Tara
              </div>
              <div className="p-3 bg-white/5 rounded-xl text-white font-bold flex items-center gap-3">
                <AlertCircle className="w-4 h-4 text-amber-400" /> Talep Bildir
              </div>
              <div className="p-3 bg-white/5 rounded-xl text-white font-bold flex items-center gap-3">
                <FileSearch className="w-4 h-4 text-cyan-400" /> Doküman Ara
              </div>
              <div className="p-3 bg-white/5 rounded-xl text-white font-bold flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-purple-400" /> Selnikel AI
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Direction B - Slide 10 (Önerilen İlk Adım)
export const DirectionB_Slide10: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center px-6 md:px-16 max-w-6xl mx-auto w-full">
      <div className="mb-10">
        <div className="text-xs font-bold text-[#E30613] tracking-widest uppercase mb-2">
          10 │ EYLEM PLANI
        </div>
        <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tighter">
          Önce küçük ölçekte kanıtlayalım.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-6 border-y border-white/10 mb-8">
        <div>
          <div className="text-2xl font-black text-white font-mono mb-1">01</div>
          <div className="text-sm font-bold text-white uppercase tracking-wider mb-2">Gözlem</div>
          <p className="text-xs text-slate-400 font-light">Sahadaki gerçek süreç ve sürtünme noktalarını doğrudan gör.</p>
        </div>

        <div>
          <div className="text-2xl font-black text-white font-mono mb-1">02</div>
          <div className="text-sm font-bold text-white uppercase tracking-wider mb-2">Pilot</div>
          <p className="text-xs text-slate-400 font-light">Tek bir problemi çözen küçük ve risksiz prototip geliştir.</p>
        </div>

        <div>
          <div className="text-2xl font-black text-white font-mono mb-1">03</div>
          <div className="text-sm font-bold text-white uppercase tracking-wider mb-2">Ölçüm</div>
          <p className="text-xs text-slate-400 font-light">Zaman kazancı ve hata düşüşünü sayılarla ortaya koy.</p>
        </div>

        <div>
          <div className="text-2xl font-black text-white font-mono mb-1">04</div>
          <div className="text-sm font-bold text-[#E30613] uppercase tracking-wider mb-2">Karar</div>
          <p className="text-xs text-slate-400 font-light">Ölçülen somut sonuca göre ölçeklendir veya sonlandır.</p>
        </div>
      </div>

      <div className="text-sm md:text-base text-slate-300 font-medium">
        Yönetimden beklenen: <strong className="text-white">doğru pilot alanına erişim</strong> ve kontrollü çalışma alanı.
      </div>
    </div>
  );
};
