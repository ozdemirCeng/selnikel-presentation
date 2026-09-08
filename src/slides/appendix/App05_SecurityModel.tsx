import React from 'react';

export const App05_SecurityModel: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto w-full space-y-8">
      <div>
        <div className="text-xs font-bold text-[#E30613] tracking-widest uppercase mb-1">
          APPENDIX 05 │ SİBER GÜVENLİK
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
          Güvenlik, Yerel Veri ve İzin Modeli
        </h2>
        <p className="text-base sm:text-lg text-slate-600 font-light mt-1">
          Şirket verisi ve teknik hafıza şirket duvarları içinde kalır (Zero Data Leakage).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="keynote-card p-6 rounded-3xl space-y-3">
          <div className="text-xs font-bold text-[#E30613] uppercase tracking-wider">01. YEREL / ON-PREMISE</div>
          <div className="text-lg font-bold text-[#0F172A]">Şirket İçi Saklama</div>
          <p className="text-xs text-slate-600 font-light leading-relaxed">
            Tüm PDF şartnameleri, CAD çizimleri ve arıza kayıtları yerel sunucularda saklanır. Dış bulut bağımlılığı sıfırdır.
          </p>
        </div>

        <div className="keynote-card p-6 rounded-3xl space-y-3">
          <div className="text-xs font-bold text-[#E30613] uppercase tracking-wider">02. ROL TABANLI ERİŞİM</div>
          <div className="text-lg font-bold text-[#0F172A]">RBAC Yetkilendirme</div>
          <p className="text-xs text-slate-600 font-light leading-relaxed">
            Her çalışan yalnızca kendi departman ve yetki seviyesindeki teknik doküman ve kayıtları görüntüleyebilir.
          </p>
        </div>

        <div className="keynote-card p-6 rounded-3xl space-y-3">
          <div className="text-xs font-bold text-[#E30613] uppercase tracking-wider">03. DENETLENEBİLİR İZLER</div>
          <div className="text-lg font-bold text-[#0F172A]">Audit Log Sistemi</div>
          <p className="text-xs text-slate-600 font-light leading-relaxed">
            Her sorgulama, doküman görüntüleme ve bildirim işlemi değiştirilemez şekilde kayıt altına alınır.
          </p>
        </div>
      </div>
    </div>
  );
};
