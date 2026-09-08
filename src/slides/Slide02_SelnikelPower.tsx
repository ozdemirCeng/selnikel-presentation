import React from 'react';
import { motion } from 'framer-motion';
import { Award, Factory, Users, CheckCircle, Globe2, ArrowRight } from 'lucide-react';
import { SelnikelInteractiveLogo } from '../components/SelnikelInteractiveLogo';

export const Slide02_SelnikelPower: React.FC = () => {
  const stats = [
    { icon: Award, value: '70+', unit: 'Yıl', label: 'Mühendislik Mirası', desc: '1955’ten bugüne köklü tecrübe' },
    { icon: Factory, value: '24K', unit: 'm²', label: 'Entegre Tesis', desc: 'ASO 1. OSB fabrika yerleşkesi' },
    { icon: Users, value: '200+', unit: 'Kişi', label: 'Uzman Kadro', desc: 'Mühendis ve kıdemli ustalar' },
    { icon: CheckCircle, value: '10K+', unit: 'Proje', label: 'Küresel Çözüm', desc: 'Kazan, brülör ve fan projeleri' },
    { icon: Globe2, value: '67+', unit: 'Ülke', label: 'İhracat Ağı', desc: 'Uluslararası teslimat ve servis' },
  ];

  return (
    <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 overflow-hidden bg-[#FFFFFF]">
      {/* Left Sidebar (35%): Large Dark Brand Column */}
      <div className="lg:col-span-4 bg-slate-950 text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
        <div>
          <SelnikelInteractiveLogo size="sm" />

          <div className="mt-6">
            <span className="text-xs font-mono font-bold text-[#E30613] tracking-widest uppercase">
              02 │ MEVCUT GÜÇ VE ALTYAPI
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 leading-tight">
              Güçlü bir mühendislik temeline sahibiz.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-normal mt-3 leading-relaxed">
              “Karşımızda dönüştürülmesi gereken zayıf bir yapı yok; 70 yılı aşan köklü bir üretim, tasarım ve saha gücü var. Amacım bu devasa güce modern yazılımla çarpan etkisi katmaktır.”
            </p>
          </div>
        </div>

        {/* Real Heritage Photo & Badge */}
        <div className="my-4 rounded-2xl overflow-hidden border border-slate-800 relative group">
          <img
            src="/images/selnikel_heritage.jpg"
            alt="Selnikel Tarihçe"
            className="w-full h-36 object-cover brightness-90 group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-3">
            <span className="text-[11px] font-bold text-amber-400">1955: Selnikel'in İlk Fabrikası</span>
            <p className="text-[10px] text-slate-300">Gelenekten geleceğe endüstriyel süreklilik</p>
          </div>
        </div>

        {/* 3-Phase Value Chain Flow */}
        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            TEK ÇATI ALTINDA ENTEGRE DEĞER ZİNCİRİ:
          </div>
          <div className="space-y-1.5 text-xs font-bold text-white">
            <div className="p-2.5 rounded-xl bg-slate-800 flex items-center justify-between">
              <span>01. Proje & Tasarım</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </div>
            <div className="p-2.5 rounded-xl bg-slate-800 flex items-center justify-between">
              <span>02. İmalat & Test</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </div>
            <div className="p-2.5 rounded-xl bg-[#E30613] text-white flex items-center justify-between">
              <span>03. Montaj & Devreye Alma</span>
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Right Content Area (65%): Photo + 5 Metric Cards */}
      <div className="lg:col-span-8 p-8 md:p-12 flex flex-col justify-between bg-slate-50">
        <div className="flex items-center justify-between pb-3 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">ÖLÇÜLEBİLİR KAPASİTE</span>
            <h3 className="text-xl font-black text-slate-900 mt-0.5">Ağır Sanayide 70 Yıllık Endüstriyel Üstünlük</h3>
          </div>
          <span className="px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-bold">ASO 1. OSB • ANKARA</span>
        </div>

        {/* Top: Modern Boiler Photo Card */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 my-4">
          <div className="md:col-span-6 rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative h-48">
            <img src="/images/boiler.jpg" alt="Endüstriyel Kazan" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 to-transparent p-3 text-white">
              <span className="text-xs font-black text-amber-400">Özel Tasarım Endüstriyel Kazanlar</span>
              <p className="text-[11px] text-slate-200">ASME / EN standartlarında yüksek basınçlı buhar sistemleri</p>
            </div>
          </div>
          <div className="md:col-span-6 rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative h-48">
            <img src="/images/factory.jpg" alt="Fabrika İçi" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 to-transparent p-3 text-white">
              <span className="text-xs font-black text-amber-400">24.000 m² Robotik ve Ağır İmalat</span>
              <p className="text-[11px] text-slate-200">Kendi bünyesinde talaşlı imalat, kaynak ve hidrostatik test</p>
            </div>
          </div>
        </div>

        {/* 5 Big Bold Stat Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#E30613] transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 mb-2">
                  <Icon className="w-4 h-4 text-[#E30613]" />
                </div>
                <div className="text-2xl font-black text-slate-900 tracking-tight">
                  {item.value} <span className="text-xs font-bold text-slate-400">{item.unit}</span>
                </div>
                <div className="text-xs font-bold text-slate-800 mt-0.5 leading-snug">{item.label}</div>
                <div className="text-[10px] text-slate-400 mt-1 leading-tight">{item.desc}</div>
              </motion.div>
            );
          })}
        </div>

        <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 text-xs font-semibold flex items-center justify-between mt-3">
          <span>🎯 <strong>Dijitalleşme Amacı:</strong> 70 yıllık tecrübeyi hafızalardan çıkarıp, yazılımla ölçeklenebilir ve kurumsal hale getirmek.</span>
        </div>
      </div>
    </div>
  );
};
