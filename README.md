# Selnikel Dijital Dönüşüm Stratejisi & Yönetici Sunumu

Bu depo, **Selnikel Isı & Makina Sanayi A.Ş.** için bizzat geliştirdiğim entegre dijital ekosistemin yönetici düzeyindeki strateji sunumunu ve etkileşimli sunum motorunu içerir.

## 🚀 4 Temel Sütun

1. **Sütun 1: Web Sitesi & Dijital Vitrin**
   - 5 Ana Ürün Ailesi & Parametrik Mühendislik Kataloğu
   - Doğru modele 15 saniyede erişim ve %35 hızlı teklif hazırlama
   - 2D/3D CAD çizimleri (DWG/STEP) ve şartname indirme merkezi

2. **Sütun 2: Selnikel Mobil Uygulaması**
   - 200+ personel için kişiselleştirilmiş çalışan ve vardiya portalı
   - Sürücüler için tek dokunuşla sefer modu ve canlı yolcu manifestosu
   - Ankara tünellerinde veri kaybını önleyen SQLite tabanlı çevrimdışı GPS telemetrisi

3. **Sütun 3: Matematiksel Servis Rota Optimizasyonu**
   - 148 çalışan ve 124 kanonik durak ağı
   - Google OR-Tools VRPTW ve Valhalla gerçek yol şebekesi ile filo planlaması
   - 15 hattan 11 hatta düşüş (-4 kiralık araç iptali)
   - Günde -510 km akaryakıt tasarrufu ve **aylık ₺233.000 (yıllık ~₺2.8M) net nakit kazancı**

4. **Sütun 4: Selnikel AI & Mühendislik MCP Motorları**
   - 70 yıllık şirket arşivinde sıfır halüsinasyonlu arama ve kesin kaynakça gösterme
   - 4 saatlik şartname inceleme süresini 5 dakikaya indirme
   - ASME PTC 4, EN ISO 4126, EN 676, AMCA 210 standartlarında 5 termodinamik MCP hesap motoru

---

## 🛠️ Teknoloji Yığını

- **Frontend & Sunum:** React 18, TypeScript, Vite, Tailwind CSS, Framer Motion, Lucide Icons
- **Etkileşim:** MediaPipe Hands (Jest / El Hareketleriyle Temassız Slayt Kontrolü), WebRTC Kamera Desteği
- **Harita & Rota Görselleştirme:** MapLibre GL, Dual-layer Ankara servis şebekesi
- **Mimari & Servisler:** Google OR-Tools VRPTW, Valhalla Routing, FastAPI Backend, SQLite Telemetry Cache

---

## 💻 Kurulum ve Çalıştırma

```bash
# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev

# Üretim derlemesi (Build)
npm run build
```
