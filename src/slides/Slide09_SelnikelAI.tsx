import React from 'react';
import { CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';
import { SelnikelInteractiveLogo } from '../components/SelnikelInteractiveLogo';

export const Slide09_SelnikelAI: React.FC = () => {
  return (
    <div className="w-full h-full p-8 md:p-12 bg-slate-50 flex flex-col justify-between overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <div className="flex items-center gap-4">
          <SelnikelInteractiveLogo size="sm" />
          <span className="text-slate-300">│</span>
          <div>
            <span className="text-xs font-mono font-bold text-amber-600 uppercase tracking-wider">09 │ SÜTUN 4: KURUMSAL YAPAY ZEKA</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Selnikel AI: 70 Yıllık Teknik Arşivin Yaşayan Zekası</h2>
          </div>
        </div>
        <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">Yerel Sunucu • Sıfır Halüsinasyon</span>
      </div>

      {/* Main Grid: Left AI Workspace (48%), Right 3 Clean Executive Cards (52%) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto py-2 items-center">
        {/* Left: Real AI Workspace Screenshot with Citations */}
        <div className="lg:col-span-6 rounded-3xl overflow-hidden border-2 border-slate-200 shadow-md bg-white relative">
          <div className="bg-slate-900 text-white px-4 py-2 text-xs font-bold flex items-center justify-between">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
              Selnikel AI Mühendislik Çalışma Alanı (Canlı)
            </span>
            <span className="text-emerald-400 font-mono text-[11px]">Sources Verified</span>
          </div>
          <img src="/images/selnikel_ai_workspace.png" alt="Selnikel AI Arayüzü" className="w-full h-[330px] object-cover object-top" />
          <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-slate-950/85 backdrop-blur-md text-white text-[11px] flex items-center justify-between">
            <span>🔍 <strong>Sorgu:</strong> "Buhar kazanında 12 bar basınçta su seviyesi alarmı neden verir?"</span>
            <span className="text-amber-400 font-bold">Kaynak: Kazan_Bakim_Rev04.pdf (s. 42)</span>
          </div>
        </div>

        {/* Right: 3 Clean Executive Cards */}
        <div className="lg:col-span-6 space-y-3.5">
          {/* Card 1: Kaynak Gösteren Sıfır Halüsinasyon */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono font-bold text-amber-600 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-600" /> KAYNAK GÖSTEREN KURUMSAL ZEKA
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                Zero Hallucination
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Selnikel AI yalnızca şirket sunucularındaki onaylı PDF, teknik şartname ve servis kılavuzlarını kaynak göstererek yanıtlar; asla tahmin veya uydurma yapmaz.
            </p>
          </div>

          {/* Card 2: 70 Yıllık Arşivde 5 Dakikada Erişim */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono font-bold text-blue-600 uppercase tracking-wider flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-blue-600" /> 70 YILLIK ARŞİVDE 5 DAKİKADA ERİŞİM
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[11px] font-bold">
                4 Saatten 5 Dk'ya
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Yüzlerce sayfalık kazan bakım kılavuzları ve teknik şartnameler saniyeler içinde taranır. Yeni bir mühendisin Selnikel standartlarını öğrenme süresi 6 aydan 2 haftaya iner.
            </p>
          </div>

          {/* Card 3: Gelecek Vizyonu */}
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/80 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-amber-600 text-white flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-black text-amber-950 uppercase tracking-wider">GELECEK VİZYONU</span>
                <p className="text-xs text-amber-900 font-medium mt-0.5">
                  Saha ustaları için sesli arıza teşhisi • Geçmiş 10.000 projenin teknik çizimlerinin görsel araması
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="p-3 rounded-2xl bg-slate-900 text-white flex items-center justify-between text-xs sm:text-sm">
        <span className="font-bold text-amber-400">🧠 SÜTUN 4 (YAPAY ZEKA):</span>
        <span className="text-slate-300">Usta ve mühendis hafızasındaki 70 yıllık birikim, şirket sunucularında kalıcı kurumsal sermayeye dönüştü.</span>
        <span className="font-mono text-xs px-2.5 py-1 rounded bg-amber-500/20 text-amber-300">Sıfır Bilgi Kaybı</span>
      </div>
    </div>
  );
};
