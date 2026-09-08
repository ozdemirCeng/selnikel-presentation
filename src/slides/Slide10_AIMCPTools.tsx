import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, Flame, ShieldAlert, Wind, Zap } from 'lucide-react';
import { SelnikelInteractiveLogo } from '../components/SelnikelInteractiveLogo';

export const Slide10_AIMCPTools: React.FC = () => {
  const tools = [
    {
      icon: Flame,
      tag: 'ASME PTC 4',
      name: 'Kazan Verimliliği Hesabı',
      desc: 'Buhar çıkışı, yakıt tüketimi, baca gazı sıcaklığı ve yanma kayıplarına göre net termal verim hesabı.',
      color: 'text-amber-600 bg-amber-50 border-amber-200'
    },
    {
      icon: ShieldAlert,
      tag: 'EN ISO 4126',
      name: 'Emniyet Ventili Boyutlandırma',
      desc: 'Buhar ve sıcak su kazanlarında aşırı basınç riskine karşı orifis alanı ve deşarj kapasitesi hesabı.',
      color: 'text-red-600 bg-red-50 border-red-200'
    },
    {
      icon: Wind,
      tag: 'AMCA 210',
      name: 'Fan Hava Debisi & Basınç Analizi',
      desc: 'Kanal sürtünme kayıpları, statik/dinamik basınç gereksinimi ve motor kilovat optimizasyonu.',
      color: 'text-blue-600 bg-blue-50 border-blue-200'
    },
    {
      icon: Zap,
      tag: 'EN 676 / EN 267',
      name: 'Brülör Yanma & Hava-Yakıt Oranı',
      desc: 'Stokiyometrik hava debisi, lambda katsayısı, baca gazı O2/CO2 analizi ve emisyon kontrolü.',
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200'
    },
    {
      icon: Calculator,
      tag: 'ISI TRANSFERİ',
      name: 'Ekonomizer Geri Kazanım Fizibilitesi',
      desc: 'Atık baca gazından besleme suyuna aktarılabilecek kilovat enerji ve yıllık yakıt tasarruf hesabı.',
      color: 'text-purple-600 bg-purple-50 border-purple-200'
    }
  ];

  return (
    <div className="w-full h-full p-8 md:p-12 bg-slate-50 flex flex-col justify-between overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <div className="flex items-center gap-4">
          <SelnikelInteractiveLogo size="sm" />
          <span className="text-slate-300">│</span>
          <div>
            <span className="text-xs font-mono font-bold text-amber-600 uppercase tracking-wider">10 │ SÜTUN 4: HESAP MOTORLARI</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Selnikel AI Mühendislik Araçları (MCP Motorları)</h2>
          </div>
        </div>
        <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">5 Termodinamik MCP Motoru</span>
      </div>

      {/* Main Grid: Left Executive Overview (38%), Right 5 Engineering Tools (62%) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto py-2 items-center">
        {/* Left: Transformation Summary Card */}
        <div className="lg:col-span-5 rounded-3xl p-6 bg-slate-900 text-white shadow-lg space-y-4 flex flex-col justify-between h-full">
          <div>
            <div className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest mb-1.5">
              MÜHENDİSLİK HESAP ALTYAPISI
            </div>
            <h3 className="text-xl font-black text-white leading-snug">
              Manuel Excel Hatalarına Son: Kodlanmış Mühendislik Zekası
            </h3>
          </div>

          <div className="space-y-3">
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-[11px] font-bold text-amber-400 block uppercase font-mono">
                Sıfır Formül Hatası & Standart Uyum
              </span>
              <p className="text-slate-300 text-xs leading-relaxed mt-1">
                ASME PTC 4, EN ISO 4126 ve EN 676 standartları doğrudan Python hesap fonksiyonlarına döküldü; excel hücre kayması ve formül hataları bitti.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-[11px] font-bold text-emerald-400 block uppercase font-mono">
                Anında Satış Teklifine Entegrasyon
              </span>
              <p className="text-slate-300 text-xs leading-relaxed mt-1">
                Saatler süren kazan verimi ve ventil boyutlandırma hesapları saniyeler içinde tamamlanır ve doğrudan satış teklifine aktarılır.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30">
              <span className="text-[11px] font-bold text-amber-300 block uppercase font-mono">
                Gelecek: Dijital İkiz & Canlı PLC Testi
              </span>
              <p className="text-slate-300 text-xs leading-relaxed mt-1">
                Fabrika test istasyonundaki PLC sensörlerine bağlanarak canlı test verileriyle otomatik dijital ikiz sertifikasyonu.
              </p>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>Standart: ASME & EN & ISO</span>
            <span className="text-emerald-400 font-bold">5 Motor Aktif</span>
          </div>
        </div>

        {/* Right: 5 MCP Engineering Tools */}
        <div className="lg:col-span-7 space-y-2.5">
          {tools.map((t, idx) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.07 }}
                className="p-3 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between hover:border-slate-400 transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${t.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs sm:text-sm font-black text-slate-900">{t.name}</h4>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-slate-100 text-slate-600 border border-slate-200">
                        {t.tag}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{t.desc}</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-600 font-mono hidden sm:inline-block px-2.5 py-1 rounded bg-emerald-50 border border-emerald-100">
                  Aktif MCP
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="p-3 rounded-2xl bg-slate-900 text-white flex items-center justify-between text-xs sm:text-sm">
        <span className="font-bold text-amber-400">⚙️ HASSASİYET VE STANDART:</span>
        <span className="text-slate-300">ASME, EN ve TSE standartlarına tam uyumlu matematiksel algoritmalar; sıfır hata payı.</span>
        <span className="font-mono text-xs px-2.5 py-1 rounded bg-white/10 text-white">Doğrulanmış Formüller</span>
      </div>
    </div>
  );
};
