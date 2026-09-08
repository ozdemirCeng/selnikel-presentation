import React from 'react';
import { Search, Sparkles, FileText, CheckCircle } from 'lucide-react';
import { SYNTHETIC_KNOWLEDGE_DOCS } from '../data/syntheticData';

export const Slide08_SelnikelAI: React.FC = () => {
  const docs = SYNTHETIC_KNOWLEDGE_DOCS;

  return (
    <div className="w-full h-full p-8 md:p-12 lg:p-14 flex flex-col justify-between bg-[#FFFFFF]">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-3 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#E30613] tracking-widest uppercase">
            <span className="w-2.5 h-2.5 rounded-sm bg-[#E30613]"></span>
            <span>08 │ KURUMSAL BİLGİ & AI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-1">
            “Bilgi var. Peki bulunabiliyor mu?”
          </h2>
        </div>
        <div className="text-xs font-mono text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 self-start font-bold">
          [SENTETİK DEMO VERİSİ]
        </div>
      </div>

      {/* Main Search Bar Console */}
      <div className="ppt-card-white p-3.5 flex items-center justify-between gap-4 text-sm border-2 border-slate-200 rounded-2xl shadow-sm my-1">
        <div className="flex items-center gap-3 text-slate-900">
          <Search className="w-5 h-5 text-[#E30613] flex-shrink-0" />
          <span className="font-semibold text-slate-800">“Radyal fan yatak çalışma sıcaklığı ve montaj toleransı nedir?”</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 flex-shrink-0 font-bold">
          <CheckCircle className="w-4 h-4 text-emerald-600" />
          <span>3 Kaynak Doğrulandı</span>
        </div>
      </div>

      {/* Answer & Real Industrial Photo Split */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 my-auto py-1 items-stretch">
        {/* Left (60%): Grounded AI Answer + Citations */}
        <div className="md:col-span-7 space-y-3 flex flex-col justify-between">
          <div className="ppt-card-white p-5 space-y-2.5 border-2 border-slate-200 rounded-2xl shadow-sm">
            <div className="flex items-center gap-2 text-xs font-bold text-[#E30613] uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Doğrulanmış Teknik Yanıt</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
              Radyal ağır hizmet fanlarında sürekli rejim yatak çalışma sıcaklığı azami <strong className="text-slate-900 font-bold bg-amber-100 px-1.5 py-0.5 rounded border border-amber-200">85°C</strong> olmalıdır. 90°C üzeri kritik eşik olup, yağlama viskozitesi düşeceğinden acil rulman revizyonu gereklidir.
            </p>
            <div className="text-[11px] text-slate-500 font-mono pt-2 border-t border-slate-100 flex items-center justify-between">
              <span>Karar yetkisi: Mühendis onayında</span>
              <span className="text-emerald-700 font-bold">Halüsinasyon Riski: %0 (RAG)</span>
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Doğrulanan Arşiv Dokümanları
            </div>
            {docs.slice(0, 2).map((d) => (
              <div key={d.id} className="ppt-card-white p-2.5 px-3 flex items-center justify-between text-xs border border-slate-200 rounded-xl">
                <div className="flex items-center gap-2 text-slate-900 font-bold">
                  <FileText className="w-3.5 h-3.5 text-[#E30613]" />
                  <span>{d.docCode}</span>
                  <span className="text-slate-500 font-normal text-[11px]">({d.title})</span>
                </div>
                <span className="text-emerald-700 font-mono font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 text-[10px]">
                  Sayfa {d.pageNumber}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right (40%): Real High-Resolution Industrial Equipment Photo */}
        <div className="md:col-span-5 relative rounded-2xl overflow-hidden shadow-lg border-2 border-slate-200 min-h-[220px]">
          <img
            src="/images/boiler.jpg"
            alt="Selnikel Industrial Equipment"
            className="w-full h-full object-cover brightness-[0.7] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
          <div className="absolute bottom-3 left-3 right-3 text-white">
            <div className="text-[10px] font-mono font-bold text-[#E30613] uppercase">ARŞİV EŞLEŞMESİ</div>
            <div className="text-xs font-extrabold">Endüstriyel Kazan & Ağır Fan Arşivi</div>
            <div className="text-[10px] text-slate-300">71 Yıllık Teknik Şartnameler & Kılavuzlar</div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-xs text-slate-500 pt-3 border-t border-slate-100 flex items-center justify-between">
        <span>Yapay zeka cevap uydurmaz; 71 yıllık şirket arşivini saniyeler içinde mühendise getirir.</span>
        <span className="font-mono text-slate-400 font-bold">SLIDE 08 / 11</span>
      </div>
    </div>
  );
};
