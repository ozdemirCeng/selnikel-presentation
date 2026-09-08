import React from 'react';
import { SelnikelInteractiveLogo } from '../../components/SelnikelInteractiveLogo';

export const App05_SecurityModel: React.FC = () => {
  return (
    <div className="w-full h-full p-8 md:p-12 bg-slate-50 flex flex-col justify-between overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <div className="flex items-center gap-4">
          <SelnikelInteractiveLogo size="sm" />
          <span className="text-slate-300">│</span>
          <div>
            <span className="text-xs font-mono font-bold text-[#E30613] uppercase tracking-wider">
              APPENDIX 05 │ SİBER GÜVENLİK
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Güvenlik, Yerel Veri ve İzin Modeli
            </h2>
          </div>
        </div>
        <span className="px-3 py-1 rounded-full bg-red-100 text-[#E30613] text-xs font-bold">
          Yedek Slayt (Q&A)
        </span>
      </div>

      {/* Main 3 Security Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-auto py-2">
        <div className="keynote-card p-6 rounded-3xl space-y-3 bg-white border border-slate-200 shadow-sm">
          <div className="text-xs font-bold text-[#E30613] uppercase tracking-wider font-mono">01. YEREL / ON-PREMISE</div>
          <div className="text-lg font-black text-slate-900">Kapalı Devre Veri Saklama</div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Tüm PDF şartnameleri, CAD çizimleri ve arıza kayıtları şirket yerel sunucularında saklanır. Dış bulutlara veri sızma riski sıfırdır.
          </p>
          <div className="pt-2 border-t border-slate-100 text-[11px] font-mono text-emerald-600 font-bold">
            Zero Data Leakage Garantisi
          </div>
        </div>

        <div className="keynote-card p-6 rounded-3xl space-y-3 bg-white border border-slate-200 shadow-sm">
          <div className="text-xs font-bold text-blue-600 uppercase tracking-wider font-mono">02. ROL TABANLI ERİŞİM</div>
          <div className="text-lg font-black text-slate-900">RBAC & JWT Yetkilendirme</div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Şoför, çalışan, bakım ustası ve fabrika müdürü rollerine göre ayrıştırılmış erişim; hiç kimse yetkisi dışındaki veriyi göremez.
          </p>
          <div className="pt-2 border-t border-slate-100 text-[11px] font-mono text-blue-600 font-bold">
            Departman Bazlı İzolasyon
          </div>
        </div>

        <div className="keynote-card p-6 rounded-3xl space-y-3 bg-white border border-slate-200 shadow-sm">
          <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider font-mono">03. DENETLENEBİLİR İZLER</div>
          <div className="text-lg font-black text-slate-900">Değiştirilemez Audit Logları</div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Tüm AI sorguları, belge indirmeleri ve şoför GPS telemetrisi zaman damgasıyla imzalanarak yerel log veritabanında saklanır.
          </p>
          <div className="pt-2 border-t border-slate-100 text-[11px] font-mono text-slate-500 font-bold">
            Tam Hukuki & Teknik Denetim
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="p-3 rounded-2xl bg-slate-900 text-white flex items-center justify-between text-xs sm:text-sm">
        <span className="font-bold text-red-400">🛡️ GÜVENLİK İLKESİ:</span>
        <span className="text-slate-300">Selnikel'in 70 yıllık teknik birikimi ve ticari sırları şirket sınırları dışına asla çıkamaz.</span>
        <span className="font-mono text-xs px-2.5 py-1 rounded bg-white/10 text-white">%100 Yerel Ağ</span>
      </div>
    </div>
  );
};
