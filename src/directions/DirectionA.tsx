import React from 'react';
import { QrCode, AlertCircle, FileSearch, Sparkles } from 'lucide-react';

// Direction A - Slide 01
export const DirectionA_Slide01: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center text-center px-6 md:px-16 max-w-5xl mx-auto">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 mb-8 uppercase tracking-widest">
        <span className="w-2 h-2 rounded-full bg-[#E30613]"></span>
        <span>Stratejik Mühendislik Tezi</span>
      </div>

      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-8">
        “Selnikel büyüdükçe, bugünkü çalışma biçimleri{' '}
        <span className="text-white underline decoration-[#E30613] decoration-4 underline-offset-8">
          aynı hız ve kaliteyle
        </span>{' '}
        ölçeklenebilir mi?”
      </h1>

      <p className="text-lg md:text-xl text-slate-400 max-w-3xl font-light leading-relaxed mb-10">
        Teknoloji satmaya değil; 70 yıllık mühendislik gücümüzün nerelerde daha fazla değer üretebileceğine bakmaya geldik.
      </p>

      {/* 4-Step Flow */}
      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 font-sans text-sm">
        <div className="px-4 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-slate-200 font-bold">
          01. GÖZLEM
        </div>
        <span className="text-slate-600 font-bold">→</span>
        <div className="px-4 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-slate-200 font-bold">
          02. ÖLÇÜM
        </div>
        <span className="text-slate-600 font-bold">→</span>
        <div className="px-4 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-slate-200 font-bold">
          03. TEKNOLOJİ
        </div>
        <span className="text-slate-600 font-bold">→</span>
        <div className="px-4 py-2 rounded-lg bg-[#E30613]/20 border border-[#E30613]/50 text-white font-extrabold">
          04. SONUÇ
        </div>
      </div>
    </div>
  );
};

// Direction A - Slide 06 (Selnikel One)
export const DirectionA_Slide06: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center px-4 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Side: Clean Phone Mockup */}
        <div className="md:col-span-5 flex justify-center">
          <div className="w-[280px] sm:w-[300px] rounded-[36px] bg-[#12151C] border-2 border-slate-700/80 p-5 shadow-2xl">
            <div className="w-20 h-3.5 bg-slate-800 rounded-full mx-auto mb-5"></div>

            <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
              <div>
                <div className="text-[10px] font-bold text-slate-400 tracking-wider">SELNİKEL ONE</div>
                <div className="text-sm font-extrabold text-white">Saha & Bakım Portalı</div>
              </div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="p-3 rounded-xl bg-[#E30613]/10 border border-[#E30613]/30 text-white flex items-center gap-3">
                <QrCode className="w-5 h-5 text-[#E30613]" />
                <div>
                  <div className="font-bold">QR TARA</div>
                  <div className="text-[10px] text-slate-400">Ekipman & Parça Tanı</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-slate-200 flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-amber-400" />
                <div>
                  <div className="font-bold">TALEP / ARIZA BİLDİR</div>
                  <div className="text-[10px] text-slate-400">Fotoğraf + Kısa Açıklama</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-slate-200 flex items-center gap-3">
                <FileSearch className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="font-bold">DOKÜMAN ARA</div>
                  <div className="text-[10px] text-slate-400">Teknik Çizim & Şartname</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-slate-200 flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <div>
                  <div className="font-bold">SELNİKEL AI</div>
                  <div className="text-[10px] text-slate-400">Kurumsal Bilgi Asistanı</div>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/10 text-center text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              [Sentetik Prototip Arayüzü]
            </div>
          </div>
        </div>

        {/* Right Side: Executive Narrative */}
        <div className="md:col-span-7 space-y-6">
          <div>
            <span className="text-xs font-bold text-[#E30613] tracking-widest uppercase">
              06 │ İLK DİJİTAL KATMAN
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-1 tracking-tight">
              Selnikel One
            </h2>
            <p className="text-lg text-slate-300 font-light mt-2">
              Çalışan ile şirket sistemleri arasındaki en sade giriş noktası.
            </p>
          </div>

          <div className="space-y-4 text-sm text-slate-300">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
              <h4 className="font-bold text-white text-base mb-1">Yeni Bir ERP Değil</h4>
              <p className="text-slate-400 text-sm">
                Mevcut sistemleri değiştirmek veya çöpe atmak yerine; sahadaki ustanın ve mühendisin bilgiye 3 saniyede ulaşmasını sağlayan ortak mobil katman.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
              <h4 className="font-bold text-white text-base mb-1">Noktasında Bilgi ve Bildirim</h4>
              <p className="text-slate-400 text-sm">
                Bilgisayar başına gitme zorunluluğunu ortadan kaldırarak arıza, talep ve parça bilgilerini doğrudan imalat sahasında çözer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Direction A - Slide 10 (Önerilen İlk Adım)
export const DirectionA_Slide10: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'GÖZLEM',
      sub: 'Gerçek süreci yerinde gör',
      desc: 'Sürtünme ve bekleme noktalarını sahada ustalarla tespit et.',
    },
    {
      num: '02',
      title: 'PİLOT',
      sub: 'Tek bir problemi çöz',
      desc: 'Düşük riskli, yüksek etkili tek bir kullanım senaryosu geliştir.',
    },
    {
      num: '03',
      title: 'ÖLÇÜM',
      sub: 'Faydayı veriye dönüştür',
      desc: 'Zaman kazancı ve hata azalmasını somut sayılarla raporla.',
    },
    {
      num: '04',
      title: 'KARAR',
      sub: 'Ölçeklendir veya bırak',
      desc: 'Kanıtlanmış sonuca göre yatırımı büyütme kararı al.',
    },
  ];

  return (
    <div className="h-full flex flex-col justify-center px-4 md:px-12 max-w-6xl mx-auto w-full">
      {/* Top Tag & Big Title */}
      <div className="mb-10 text-center md:text-left">
        <span className="text-xs font-bold text-[#E30613] tracking-widest uppercase">
          10 │ ÖNERİLEN İLK ADIM
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-1 tracking-tight">
          Önce küçük ölçekte kanıtlayalım.
        </h2>
        <p className="text-slate-400 text-base font-light mt-2">
          Büyük vaatler veya bütçeler yerine, 4 adımlı kontrollü ilerleme modeli.
        </p>
      </div>

      {/* 4-Step Horizontal Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {steps.map((s) => (
          <div
            key={s.num}
            className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="text-xs font-mono font-bold text-[#E30613] mb-3">
                {s.num}
              </div>
              <div className="text-xl font-extrabold text-white mb-1 tracking-tight">
                {s.title}
              </div>
              <div className="text-xs font-bold text-slate-300 mb-3">{s.sub}</div>
              <p className="text-xs text-slate-400 leading-relaxed font-light">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Single Executive Request Thesis */}
      <div className="p-5 rounded-xl bg-[#E30613]/10 border border-[#E30613]/30 text-center">
        <div className="text-sm sm:text-base font-bold text-white">
          Yönetimden beklenen: <span className="text-[#E30613] underline font-extrabold">doğru pilot alanına erişim</span> ve kontrollü çalışma izni.
        </div>
      </div>
    </div>
  );
};
