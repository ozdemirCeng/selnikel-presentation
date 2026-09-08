import React from 'react';
import { SelnikelInteractiveLogo } from '../../components/SelnikelInteractiveLogo';

export const App01_Architecture: React.FC = () => {
  return (
    <div className="w-full h-full p-8 md:p-12 bg-slate-50 flex flex-col justify-between overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <div className="flex items-center gap-4">
          <SelnikelInteractiveLogo size="sm" />
          <span className="text-slate-300">│</span>
          <div>
            <span className="text-xs font-mono font-bold text-[#E30613] uppercase tracking-wider">
              APPENDIX 01 │ SİSTEM MİMARİSİ
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Katmanlı Entegre Yazılım Mimarisi
            </h2>
          </div>
        </div>
        <span className="px-3 py-1 rounded-full bg-red-100 text-[#E30613] text-xs font-bold">
          Yedek Slayt (Q&A)
        </span>
      </div>

      {/* Main 3 Architecture Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-auto py-2">
        <div className="keynote-card p-6 rounded-3xl space-y-3 bg-white border border-slate-200 shadow-sm">
          <div className="text-xs font-bold text-[#E30613] uppercase tracking-wider font-mono">01. KULLANICI KATMANI</div>
          <div className="text-lg font-black text-slate-900">Selnikel One Web & Mobil Portal</div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            200+ çalışan, saha mühendisleri ve servis şoförleri için tek dokunuşla çalışan hafif arayüz ve yönetim kokpiti.
          </p>
          <div className="pt-2 border-t border-slate-100 text-[11px] font-mono text-slate-400">
            Teknoloji: React 18 / Next.js / PWA
          </div>
        </div>

        <div className="keynote-card p-6 rounded-3xl space-y-3 bg-white border border-slate-200 shadow-sm">
          <div className="text-xs font-bold text-blue-600 uppercase tracking-wider font-mono">02. SERVİS VE ZEKA KATMANI</div>
          <div className="text-lg font-black text-slate-900">API Gateway & RAG Motoru</div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Role-based yetkilendirme, Google OR-Tools rota optimizasyonu ve kaynak gösteren kapalı devre kurumsal RAG.
          </p>
          <div className="pt-2 border-t border-slate-100 text-[11px] font-mono text-slate-400">
            Teknoloji: FastAPI / Qdrant / OR-Tools
          </div>
        </div>

        <div className="keynote-card p-6 rounded-3xl space-y-3 bg-white border border-slate-200 shadow-sm">
          <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider font-mono">03. VERİ VE DONANIM KATMANI</div>
          <div className="text-lg font-black text-slate-900">Mevcut ERP & Yerel Dosya Arşivi</div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Mevcut yatırımı çöpe atmadan; stok, sipariş ve 70 yıllık teknik çizim sunucularına doğrudan güvenli yerel bağlantı.
          </p>
          <div className="pt-2 border-t border-slate-100 text-[11px] font-mono text-slate-400">
            Teknoloji: Yerel Ağ / SQLite Cache / Docker
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="p-3 rounded-2xl bg-slate-900 text-white flex items-center justify-between text-xs sm:text-sm">
        <span className="font-bold text-red-400">🏗️ MİMARİ İLKE:</span>
        <span className="text-slate-300">Sıfırdan pahalı ERP değişimi değil; var olan kurumsal altyapıya hız ve zeka katan modüler ekosistem.</span>
        <span className="font-mono text-xs px-2.5 py-1 rounded bg-white/10 text-white">Sıfır Altyapı Riski</span>
      </div>
    </div>
  );
};
