import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Zap, Sparkles, ArrowRight } from 'lucide-react';
import { SelnikelInteractiveLogo } from '../components/SelnikelInteractiveLogo';

export const Slide05_MobileApp: React.FC = () => {
  return (
    <div className="w-full h-full p-8 md:p-12 bg-slate-50 flex flex-col justify-between overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <div className="flex items-center gap-4">
          <SelnikelInteractiveLogo size="sm" />
          <span className="text-slate-300">│</span>
          <div>
            <span className="text-xs font-mono font-bold text-cyan-600 uppercase tracking-wider">05 │ SÜTUN 2: MOBİL PORTAL</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Selnikel Mobil: Çalışan ve Saha Portalı</h2>
          </div>
        </div>
        <span className="px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold">200+ Çalışan • Android & iOS</span>
      </div>

      {/* Main Grid: Left Screenshots (45%), Right Clean Cards (55%) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto py-2 items-center">
        {/* Left: 2 High-Res Mobile Screenshots */}
        <div className="lg:col-span-5 flex items-center justify-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-44 rounded-3xl overflow-hidden border-4 border-slate-900 shadow-xl bg-white relative"
          >
            <img src="/images/mobile_login.png" alt="Mobil Giriş" className="w-full h-auto object-cover" />
            <div className="p-2 text-center bg-slate-900 text-white text-[10px] font-bold">
              Güvenli Kurumsal Giriş
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="w-48 rounded-3xl overflow-hidden border-4 border-slate-900 shadow-2xl bg-white relative -mt-3"
          >
            <img src="/images/mobile_employee.png" alt="Çalışan Paneli" className="w-full h-auto object-cover" />
            <div className="p-2 text-center bg-[#E30613] text-white text-[10px] font-bold">
              EMP001 • Ahmet Yılmaz
            </div>
          </motion.div>
        </div>

        {/* Right: 3 Clean Executive Cards */}
        <div className="lg:col-span-7 space-y-3.5">
          {/* Card 1: Employee Control */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono font-bold text-cyan-600 uppercase tracking-wider flex items-center gap-1.5">
                <UserCheck className="w-4 h-4" /> KİŞİYE ÖZEL ÇALIŞAN PORTALI
              </span>
              <span className="px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-800 text-[11px] font-bold">Tek Ekran</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Ahmet Yılmaz örneği: Atanmış servis durağı, tahmini varış saati, araç plakası ve kalan izin günleri doğrudan cebinde. "Hangi servise bineceğim?" karmaşası sona erdi.
            </p>
          </div>

          {/* Card 2: Zero Paper */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono font-bold text-emerald-600 uppercase tracking-wider flex items-center gap-1.5">
                <Zap className="w-4 h-4" /> SIFIR KAĞIT & ANLIK İK SENKRONİZASYONU
              </span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">Sıfır Bürokrasi</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Fiziksel kağıt izin formları ve ıslak imza kuyrukları bitti. İK onayları anlık işlenir; fabrika acil duyuruları push bildirimle tüm çalışanlara aynı anda ulaşır.
            </p>
          </div>

          {/* Card 3: Future Next Steps */}
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200/80 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-cyan-600 text-white flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-black text-cyan-900 uppercase tracking-wider">GELECEK VİZYONU</span>
                <p className="text-xs text-cyan-800 font-medium mt-0.5">Turnike & Yemekhane QR Kod Geçişi • Sahadan Fotoğraflı Arıza Bildirimi</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-cyan-600 flex-shrink-0" />
          </div>
        </div>
      </div>

      {/* Bottom Value Banner */}
      <div className="p-3 rounded-2xl bg-slate-900 text-white flex items-center justify-between text-xs sm:text-sm">
        <span className="font-bold text-cyan-300">👥 SÜTUN 2 (PERSONEL):</span>
        <span className="text-slate-300">200'den fazla çalışanı tek dijital çatı altında toplayarak belirsizlikleri ve kağıt israfını sıfırlayan kurumsal merkez.</span>
        <span className="font-mono text-xs px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-300">Pixel 7 E2E Doğrulandı</span>
      </div>
    </div>
  );
};
