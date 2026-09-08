import React from 'react';

export const App01_Architecture: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto w-full space-y-8">
      <div>
        <div className="text-xs font-bold text-[#E30613] tracking-widest uppercase mb-1">
          APPENDIX 01 │ SİSTEM MİMARİSİ
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
          Katmanlı Yazılım Mimarisi
        </h2>
        <p className="text-base sm:text-lg text-slate-600 font-light mt-1">
          Mevcut ERP ve sunucuları değiştirmeden üzerine bağlanan hafif katman.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="keynote-card p-6 rounded-3xl space-y-3">
          <div className="text-xs font-bold text-[#E30613] uppercase tracking-wider">01. KULLANICI KATMANI</div>
          <div className="text-lg font-bold text-[#0F172A]">Selnikel One Web & PWA</div>
          <p className="text-xs text-slate-600 font-light leading-relaxed">
            Mobil & tablet uyumlu hafif çalışan arayüzü ve yönetim paneli.
          </p>
        </div>

        <div className="keynote-card p-6 rounded-3xl space-y-3">
          <div className="text-xs font-bold text-[#E30613] uppercase tracking-wider">02. SERVİS KATMANI</div>
          <div className="text-lg font-bold text-[#0F172A]">API Gateway & AI RAG</div>
          <p className="text-xs text-slate-600 font-light leading-relaxed">
            Yetkilendirme, veri yönlendirme ve şirket içi kaynaklı arama motoru.
          </p>
        </div>

        <div className="keynote-card p-6 rounded-3xl space-y-3">
          <div className="text-xs font-bold text-[#E30613] uppercase tracking-wider">03. KURUMSAL SİSTEMLER</div>
          <div className="text-lg font-bold text-[#0F172A]">Mevcut ERP & Dosya Arşivi</div>
          <p className="text-xs text-slate-600 font-light leading-relaxed">
            Mevcut yatırımı koruyarak stok, sipariş ve teknik çizim sunucularına doğrudan bağlantı.
          </p>
        </div>
      </div>
    </div>
  );
};
