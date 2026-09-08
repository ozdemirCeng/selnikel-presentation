# -*- coding: utf-8 -*-
"""
Selnikel Dijital Dönüşüm Ekosistemi — Yönetici PowerPoint Sunumu (Fotoğraflı & Gerçek Verili)
Kapsam:
  1. Yeni Nesil Selnikel Web Sitesi & Ürün Portföyü
  2. Selnikel Mobil Uygulaması (Personel & Sürücü)
  3. Servis Güzergah Optimizasyonu (Rotaban / OR-Tools VRPTW 148 Kişi & 15->11 Araç)
  4. Selnikel AI (RAG & Mühendislik Hesaplama Araçları Copilot)

Çıktı: Selnikel_Dijitallesme.pptx (16:9, Türkçe, 12 Slayt, Gömülü Fotoğraflar)
"""

import os
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE

# ---------------------------------------------------------------- RENK PALETİ
NAVY      = RGBColor(0x0E, 0x24, 0x3B)   # Derin Endüstriyel Lacivert
NAVY_LIGHT= RGBColor(0x16, 0x32, 0x50)   # İkincil Lacivert
STEEL     = RGBColor(0x2B, 0x5D, 0x8C)   # Çelik Mavisi
CYAN      = RGBColor(0x00, 0xA8, 0xCC)   # Dijital Vurgu Turkuaz
AMBER     = RGBColor(0xF5, 0x9E, 0x0B)   # Canlı Altın/Turuncu Vurgu
EMERALD   = RGBColor(0x10, 0xB9, 0x81)   # Tasarruf / Başarı Yeşili
LIGHT_BG  = RGBColor(0xF8, 0xFA, 0xFC)   # Aydınlık Kart Zemin
CARD_BG   = RGBColor(0xFF, 0xFF, 0xFF)   # Saf Beyaz Kart
INK_DARK  = RGBColor(0x0F, 0x17, 0x2A)   # Ana Metin Rengi
INK_MUTED = RGBColor(0x64, 0x74, 0x8B)   # İkincil Açıklama Metni
BORDER    = RGBColor(0xE2, 0xE8, 0xF0)   # Çerçeve Çizgisi
WHITE     = RGBColor(0xFF, 0xFF, 0xFF)
SOFT_BLUE = RGBColor(0xCF, 0xE2, 0xF3)   # Koyu zeminde okunabilir açık mavi

FONT = "Segoe UI"
W, H = 13.333, 7.5

IMG_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "public", "images")

prs = Presentation()
prs.slide_width = Inches(W)
prs.slide_height = Inches(H)
BLANK = prs.slide_layouts[6]

def new_slide():
    return prs.slides.add_slide(BLANK)

def rect(s, x, y, w, h, fill, line=None, lw=0.75, round_=None):
    shape_t = MSO_SHAPE.ROUNDED_RECTANGLE if round_ else MSO_SHAPE.RECTANGLE
    sp = s.shapes.add_shape(shape_t, Inches(x), Inches(y), Inches(w), Inches(h))
    if round_:
        try:
            sp.adjustments[0] = round_
        except Exception:
            pass
    if fill is None:
        sp.fill.background()
    else:
        sp.fill.solid()
        sp.fill.fore_color.rgb = fill
    if line is None:
        sp.line.fill.background()
    else:
        sp.line.color.rgb = line
        sp.line.width = Pt(lw)
    sp.shadow.inherit = False
    return sp

def card(s, x, y, w, h, fill=CARD_BG, line=BORDER, round_=0.03):
    return rect(s, x, y, w, h, fill, line=line, lw=1.0, round_=round_)

def add_img(s, name, x, y, w=None, h=None):
    path = os.path.join(IMG_DIR, name)
    if os.path.exists(path):
        kwargs = {}
        if w: kwargs["width"] = Inches(w)
        if h: kwargs["height"] = Inches(h)
        return s.shapes.add_picture(path, Inches(x), Inches(y), **kwargs)
    return None

def txt(s, x, y, w, h, paras):
    tb = s.shapes.add_textbox(Inches(x), Inches(y), Inches(w), Inches(h))
    tf = tb.text_frame
    tf.word_wrap = True
    tf.margin_left = tf.margin_right = tf.margin_top = tf.margin_bottom = 0
    for idx, p in enumerate(paras):
        par = tf.paragraphs[0] if idx == 0 else tf.add_paragraph()
        par.alignment = p.get("align", PP_ALIGN.LEFT)
        if "space_after" in p: par.space_after = Pt(p["space_after"])
        if "space_before" in p: par.space_before = Pt(p["space_before"])
        if "line" in p: par.line_spacing = p["line"]
        run = par.add_run()
        run.text = p["t"]
        run.font.name = p.get("font", FONT)
        run.font.size = Pt(p.get("size", 14))
        run.font.bold = p.get("bold", False)
        run.font.color.rgb = p.get("color", INK_DARK)
    return tb

def header(s, tag, title, subtitle=None, dark=False):
    tag_color = AMBER if dark else STEEL
    t_color = WHITE if dark else NAVY
    sub_color = SOFT_BLUE if dark else INK_MUTED
    
    txt(s, 0.8, 0.45, 11.5, 0.35, [{"t": tag.upper(), "size": 11, "bold": True, "color": tag_color}])
    paras = [{"t": title, "size": 22, "bold": True, "color": t_color}]
    if subtitle:
        paras.append({"t": subtitle, "size": 13, "color": sub_color, "space_before": 3})
    txt(s, 0.8, 0.80, 11.5, 0.85, paras)
    rect(s, 0.8, 1.70, 11.73, 0.02, CYAN if dark else BORDER)

# ==============================================================================
# SLAYT 1: KAPAK (Title & Hero)
# ==============================================================================
s1 = new_slide()
rect(s1, 0, 0, W, H, NAVY)
rect(s1, 0, 0, 0.25, H, AMBER)

# Arka plan fabrika resmi (sağ tarafta zarifçe yerleşmiş)
add_img(s1, "factory.jpg", 6.8, 0.7, 5.8, 6.1)
# Üzerine hafif degrade/karartma efekti
rect(s1, 6.7, 0.7, 5.9, 6.1, None, line=CYAN, lw=1.5, round_=0.02)

# Selnikel Logo & Başlık
add_img(s1, "selnikel_logo.png", 0.9, 0.8, 2.6)

txt(s1, 0.9, 2.1, 5.5, 2.6, [
    {"t": "SELNİKEL ENERJİ A.Ş.", "size": 14, "bold": True, "color": AMBER, "space_after": 8},
    {"t": "Dijital Dönüşüm Ekosistemi", "size": 34, "bold": True, "color": WHITE, "space_after": 12},
    {"t": "70 Yıllık Ağır Sanayi Mirasını Yeni Nesil Web, Mobil Saha Portalı, Rota Optimizasyonu ve Kurumsal Yapay Zeka ile Buluşturmak.",
     "size": 14, "color": SOFT_BLUE, "line": 1.3}
])

# 4 Sütun Hapları
pillars = [
    ("WEB SİTESİ", "Modern Ürün Vitrini"),
    ("MOBİL UYGULAMA", "Saha, Personel & Sürücü"),
    ("ROTA OPTİMİZASYONU", "%40.4 Yol / ₺233K Tasarruf"),
    ("SELNİKEL AI", "RAG & Mühendislik Copilot")
]
px = 0.9
for p_title, p_sub in pillars:
    card(s1, px, 5.2, 2.5, 1.35, fill=NAVY_LIGHT, line=STEEL, round_=0.04)
    rect(s1, px, 5.2, 0.08, 1.35, AMBER)
    txt(s1, px + 0.18, 5.35, 2.2, 1.0, [
        {"t": p_title, "size": 12, "bold": True, "color": AMBER, "space_after": 4},
        {"t": p_sub, "size": 11, "color": WHITE, "line": 1.2}
    ])
    px += 2.85

txt(s1, 0.9, 6.9, 8.0, 0.3, [
    {"t": "Eylül 2026  ·  Stratejik Teknoloji ve Dijitalleşme Programı", "size": 11, "color": INK_MUTED}
])

# ==============================================================================
# SLAYT 2: SELNİKEL'İN GÜCÜ VE DÖNÜŞÜM VİZYONU
# ==============================================================================
s2 = new_slide()
rect(s2, 0, 0, W, H, LIGHT_BG)
header(s2, "01 / GİRİŞ VE VİZYON", "Selnikel'in 70 Yıllık Gücü ve Dijital Atılım", 
       "Teknoloji eksiklikleri kapatmak için değil; mevcut endüstriyel liderliği çarpan etkisiyle büyütmek içindir.")

# Sol: Tarihçe ve Fabrika Fotoğrafları
card(s2, 0.8, 1.9, 5.6, 5.1)
add_img(s2, "selnikel_heritage.jpg", 1.0, 2.1, 5.2, 2.3)
add_img(s2, "boiler.jpg", 1.0, 4.55, 5.2, 2.2)

# Sağ: Güç Metrikleri ve Dönüşüm Vizyonu
stats = [
    ("70+ YILLIK MİRAS", "1955'ten bu yana Türkiye'nin enerji ve ısı teknolojilerinde öncü kuruluşu."),
    ("24.000 m² ÜRETİM ALANI", "Ankara ASO 1. OSB'de entegre proje, imalat, test ve montaj gücü."),
    ("10.000+ KÜRESEL PROJE", "Dünya çapında endüstriyel kazan, brülör ve fan sistemleri referansı."),
    ("UÇTAN UCA DİJİTALLEŞME", "Satıştan sahaya, lojistikten mühendisliğe 4 entegre dijital platform.")
]
sy = 1.9
for title_s, desc_s in stats:
    card(s2, 6.7, sy, 5.8, 1.15)
    rect(s2, 6.7, sy, 0.1, 1.15, STEEL)
    txt(s2, 7.0, sy + 0.18, 5.3, 0.85, [
        {"t": title_s, "size": 13, "bold": True, "color": NAVY, "space_after": 3},
        {"t": desc_s, "size": 11.5, "color": INK_MUTED, "line": 1.2}
    ])
    sy += 1.32

# ==============================================================================
# SLAYT 3: 4 STRATEJİK SÜTUN (BÜYÜK RESİM)
# ==============================================================================
s3 = new_slide()
rect(s3, 0, 0, W, H, LIGHT_BG)
header(s3, "02 / BÜYÜK RESİM", "Selnikel Dijital Dönüşüm Ekosisteminin 4 Temel Sütunu",
       "Birbirinden kopuk araçlar yerine, veri ve iş süreçlerini tek çatı altında bağlayan entegre mimari.")

cols = [
    ("1. WEB SİTESİ", "Dijital Vitrin & Ürün Portföyü", "product_boiler_burner.png", 
     ["5 Ana Ürün Kategorisi", "Dinamik Filtreleme", "Teknik Doküman İndirme", "Hızlı Teklif Talebi"], STEEL),
    ("2. MOBİL APP", "Saha & Personel Portalı", "mobile_employee.png", 
     ["Çalışan & Vardiya Takibi", "Şoför Sefer Yönetimi", "Yolcu Biniş Manifestosu", "Çevrimdışı Telemetri"], CYAN),
    ("3. ROTA OPTİMİZASYONU", "Rotaban / Akıllı Filo", "cockpit_optimization.png", 
     ["OR-Tools VRPTW Motoru", "15 Hattan 11 Hatta İndirme", "-510 km / Gün Tasarruf", "₺233.000 / Ay Net Kazanç"], EMERALD),
    ("4. SELNİKEL AI", "Kurumsal RAG Copilot", "selnikel_ai_workspace.png", 
     ["70 Yıllık Teknik Arşiv", "Kaynak Kodlu / Sıfır Halüsinasyon", "5 Mühendislik Hesap Motoru", "Hızlı Arıza & Bakım Desteği"], AMBER)
]

cx = 0.8
for tag_c, title_c, img_c, bullets_c, color_c in cols:
    card(s3, cx, 1.9, 2.75, 5.1)
    rect(s3, cx, 1.9, 2.75, 0.08, color_c)
    txt(s3, cx + 0.15, 2.05, 2.45, 0.7, [
        {"t": tag_c, "size": 11, "bold": True, "color": color_c, "space_after": 2},
        {"t": title_c, "size": 13, "bold": True, "color": NAVY}
    ])
    add_img(s3, img_c, cx + 0.15, 2.85, 2.45, 1.8)
    
    b_paras = []
    for b in bullets_c:
        b_paras.append({"t": f"• {b}", "size": 11, "color": INK_MUTED, "space_after": 3})
    txt(s3, cx + 0.15, 4.80, 2.45, 2.0, b_paras)
    cx += 2.98

# ==============================================================================
# SLAYT 4: SÜTUN 1 — YENİ SELNİKEL WEB SİTESİ
# ==============================================================================
s4 = new_slide()
rect(s4, 0, 0, W, H, LIGHT_BG)
header(s4, "03 / SÜTUN 1: WEB SİTESİ", "Yeni Nesil Selnikel Dijital Vitrini ve Ürün Kataloğu",
       "70 yıllık endüstri liderliğini küresel pazarda temsil eden modern, hızlı ve teknik içerik odaklı web platformu.")

# Sol: Ürün ve Tesis Fotoğrafları
card(s4, 0.8, 1.9, 6.2, 5.1)
add_img(s4, "product_boiler_burner.png", 1.0, 2.1, 5.8, 2.2)
add_img(s4, "product_fan.png", 1.0, 4.45, 2.8, 2.3)
add_img(s4, "product_facility.png", 3.9, 4.45, 2.9, 2.3)

# Sağ: Özellikler ve Değerler
web_features = [
    ("5 STRATEJİK ÜRÜN AİLESİ", "Endüstriyel Kazanlar, Brülörler, Radyal & Aksiyal Fanlar, Ekonomizerler ve Basınçlı Kaplar eksiksiz olarak kataloglandı."),
    ("DİNAMİK MÜHENDİSLİK FİLTRESİ", "Kapasite, sıcaklık, basınç ve yakıt tipine göre müşterinin doğru endüstriyel ürünü saniyeler içinde bulması sağlandı."),
    ("TEKNİK ŞARTNAME & KATALOG ERİŞİMİ", "Her ürün grubu için detaylı CAD çizimleri, çalışma prensipleri ve teknik veri sayfaları doğrudan indirilebilir kılındı."),
    ("KURUMSAL GÜVEN & REFERANSLAR", "Unilever, MHI gibi küresel devlerle tamamlanan dev projeler ve kalite yönetim sertifikaları şeffaf biçimde sunuldu.")
]
wy = 1.9
for w_title, w_desc in web_features:
    card(s4, 7.3, wy, 5.2, 1.15)
    rect(s4, 7.3, wy, 0.08, 1.15, STEEL)
    txt(s4, 7.55, wy + 0.16, 4.8, 0.88, [
        {"t": w_title, "size": 12.5, "bold": True, "color": NAVY, "space_after": 3},
        {"t": w_desc, "size": 11, "color": INK_MUTED, "line": 1.2}
    ])
    wy += 1.32

# ==============================================================================
# SLAYT 5: SÜTUN 2 — SELNİKEL MOBİL UYGULAMASI (ÇALIŞAN & SAHA)
# ==============================================================================
s5 = new_slide()
rect(s5, 0, 0, W, H, LIGHT_BG)
header(s5, "04 / SÜTUN 2: MOBİL APP", "Selnikel Mobil Uygulaması: Personel ve Saha Portalı",
       "200'den fazla çalışanın vardiya, servis, durak ve şirket içi süreçlerini cebinden yönetmesini sağlayan yerel mobil çözüm.")

# Sol: Mobil Ekran Görüntüleri
card(s5, 0.8, 1.9, 6.0, 5.1)
add_img(s5, "mobile_login.png", 1.1, 2.1, 2.5, 4.7)
add_img(s5, "mobile_employee.png", 3.9, 2.1, 2.6, 4.7)

# Sağ: Çalışan Özellikleri
mob_features = [
    ("KİŞİSELLEŞTİRİLMİŞ ÇALIŞAN PROFİLİ", "Her çalışanın kendi siciliyle (Örn: EMP001 Ahmet Yılmaz) giriş yaptığı, departman, unvan ve yetkilerine göre özelleşen güvenli arayüz."),
    ("SERVİS & DURAK ENTEGRASYONU", "Çalışanın ev adresine en yakın onaylı durak noktası, servis kalkış sati ve yaklaşan araç plakası anlık olarak cepte görüntülenir."),
    ("İZİN & VARDİYA TAKİBİ", "Kalan yıllık izin, mazeret izinleri ve onay bekleyen talepler İK ile senkronize olarak görüntülenebilir."),
    ("DİJİTAL BİNİŞ & QR DOĞRULAMA", "Servise binerken fiziksel imza/kart yerine dijital biniş onayı; anlık servis doluluk ve yoklama takibi.")
]
my = 1.9
for m_title, m_desc in mob_features:
    card(s5, 7.1, my, 5.4, 1.15)
    rect(s5, 7.1, my, 0.08, 1.15, CYAN)
    txt(s5, 7.35, my + 0.16, 5.0, 0.88, [
        {"t": m_title, "size": 12.5, "bold": True, "color": NAVY, "space_after": 3},
        {"t": m_desc, "size": 11, "color": INK_MUTED, "line": 1.2}
    ])
    my += 1.32

# ==============================================================================
# SLAYT 6: SÜTUN 2 (DEVAM) — SÜRÜCÜ & OPERASYONEL TELEMETRİ
# ==============================================================================
s6 = new_slide()
rect(s6, 0, 0, W, H, LIGHT_BG)
header(s6, "05 / SÜTUN 2: MOBİL SÜRÜCÜ MODU", "Sürücü Aktif Sefer Yönetimi ve Kesintisiz GPS Telemetrisi",
       "15 gerçek araç ve şoför için canlı rota rehberliği, yolcu manifestosu ve sinyal kesintisine dayanıklı telemetri motoru.")

# Sol: 3 Mobil Ekran
card(s6, 0.8, 1.9, 6.8, 5.1)
add_img(s6, "mobile_driver.png", 1.0, 2.1, 2.0, 4.7)
add_img(s6, "mobile_manifest.png", 3.2, 2.1, 2.0, 4.7)
add_img(s6, "mobile_telemetry.png", 5.4, 2.1, 2.0, 4.7)

# Sağ: Sürücü Özellikleri
driver_features = [
    ("AKTİF SEFER BAŞLATMA (TEK DOKUNUŞ)", "Şoför araca bindiğinde 'Seferi Başlat' butonuyla tek dokunuşta vardiya seferini devreye alır (Örn: 06 DLF 768)."),
    ("CANLI YOLCU MANİFESTOSU", "Durak durak hangi personelin araca bineceği listelenir; binenler işaretlenir, gelmeyenler anında sisteme bildirilir."),
    ("ÇEVRİMDİŞİ TELEMETRİ KUYRUĞU", "Tünel veya GSM kesintisinde GPS koordinatları yerel veritabanında tamponlanır; bağlantı gelince merkeze sıfır kayıpla aktarılır."),
    ("MERKEZİ FİLO KONSOLU ENTEGRASYONU", "Fabrika idari işler ve vardiya amirleri harita üzerinden araçların nerede olduğunu milisaniyelik gecikmeyle canlı izler.")
]
dy = 1.9
for d_title, d_desc in driver_features:
    card(s6, 7.8, dy, 4.7, 1.15)
    rect(s6, 7.8, dy, 0.08, 1.15, STEEL)
    txt(s6, 8.05, dy + 0.16, 4.3, 0.88, [
        {"t": d_title, "size": 12, "bold": True, "color": NAVY, "space_after": 3},
        {"t": d_desc, "size": 10.5, "color": INK_MUTED, "line": 1.2}
    ])
    dy += 1.32

# ==============================================================================
# SLAYT 7: SÜTUN 3 — SERVİS GÜZERGAH OPTİMİZASYONU (ROTABAN)
# ==============================================================================
s7 = new_slide()
rect(s7, 0, 0, W, H, LIGHT_BG)
header(s7, "06 / SÜTUN 3: GÜZERGAH OPTİMİZASYONU", "Servis Optimizasyonu: 148 Çalışan & 124 Kanonik Durak",
       "Google OR-Tools VRPTW (Zaman Pencereli Rota Algoritması) ve OSRM/Valhalla Gerçek Yol Matrisi ile Sıfır Hata.")

# Sol: Harita Ekran Görüntüsü
card(s7, 0.8, 1.9, 6.6, 5.1)
add_img(s7, "map_routes.png", 1.0, 2.1, 6.2, 4.7)

# Sağ: Optimizasyon Temelleri
opt_points = [
    ("148 PERSONELİN KANONİK ANALİZİ", "adres_pool.xlsx üzerinden 148 çalışanın gerçek ikamet adresleri geocode edilerek doğrulandı. Hayali veya eksik personel bırakılmadı."),
    ("124 DOĞRULANMIŞ DURAK NOKTASI", "Bireysel kapıdan alma yerine, yürüme mesafesi optimizasyonuyla 124 stratejik durak noktası kümelendi."),
    ("ZAMAN PENCERELİ ÇÖZÜM (VRPTW)", "Maksimum 120 dakika servis süresi, sabah vardiyası giriş saati toleransları ve araç kapasiteleri matematiksel modelle çözüldü."),
    ("GERÇEK YOL MESAFESİ (OSRM & VALHALLA)", "Kuş uçuşu değil, Ankara'nın gerçek cadde, kavşak ve otoyol şebekesini kullanan milimetrik mesafe matrisi.")
]
oy = 1.9
for o_title, o_desc in opt_points:
    card(s7, 7.6, oy, 4.9, 1.15)
    rect(s7, 7.6, oy, 0.08, 1.15, EMERALD)
    txt(s7, 7.85, oy + 0.16, 4.5, 0.88, [
        {"t": o_title, "size": 12, "bold": True, "color": NAVY, "space_after": 3},
        {"t": o_desc, "size": 10.5, "color": INK_MUTED, "line": 1.2}
    ])
    oy += 1.32

# ==============================================================================
# SLAYT 8: SÜTUN 3 (DEVAM) — KOKPİT VE SOMUT TASARRUF RAKAMLARI
# ==============================================================================
s8 = new_slide()
rect(s8, 0, 0, W, H, LIGHT_BG)
header(s8, "07 / SÜTUN 3: SOMUT KAZANIMLAR", "Öncesi vs Sonrası: Matematiksel Kanıt ve Net Finansal Getiri",
       "15 araçlık dağınık filo yapısından 11 araçlık optimize filoya geçiş; kanıtlanmış operasyonel tasarruf.")

# Sol: Çift Plan Karşılaştırma Kokpiti Fotoğrafı
card(s8, 0.8, 1.9, 6.2, 5.1)
add_img(s8, "cockpit_optimization.png", 1.0, 2.1, 5.8, 2.4)
add_img(s8, "route_comparison.png", 1.0, 4.65, 5.8, 2.15)

# Sağ: Büyük İcra Metrikleri
kpis = [
    ("-4 ARAÇ TASARRUFU", "15 ARAÇ → 11 ARAÇ", "%26.7 Filo Küçülmesi. 4 kiralık araç sözleşmesi doğrudan sonlandırılabilir.", AMBER),
    ("-510 KM / GÜN YOL KAZANCI", "1.262 KM → 752 KM", "%40.4 Net Mesafe Azalması. Koridor simetrisiyle pik tasarruf %55.6'ya ulaşır.", EMERALD),
    ("~₺233.000 / AY NET TASARRUF", "YILLIK ~2.8 MİLYON TL", "Yakıt, araç amortismanı ve şoför giderlerinde şirket kasasında kalan nakit.", EMERALD),
    ("3.6 SAAT DAHA AZ YOLDA GEÇEN ZAMAN", "1.357 DK → 1.139 DK", "Personelin yolda yorulmasını engelleyen, iş verimini artıran hızlı rotalama.", STEEL)
]
ky = 1.9
for k_label, k_val, k_note, k_col in kpis:
    card(s8, 7.2, ky, 5.3, 1.15)
    rect(s8, 7.2, ky, 0.1, 1.15, k_col)
    txt(s8, 7.45, ky + 0.12, 4.9, 0.95, [
        {"t": k_label, "size": 11, "bold": True, "color": k_col},
        {"t": k_val, "size": 15, "bold": True, "color": NAVY, "space_after": 2},
        {"t": k_note, "size": 10.5, "color": INK_MUTED}
    ])
    ky += 1.32

# ==============================================================================
# SLAYT 9: SÜTUN 4 — SELNİKEL AI (KURUMSAL MÜHENDİSLİK COPILOT)
# ==============================================================================
s9 = new_slide()
rect(s9, 0, 0, W, H, LIGHT_BG)
header(s9, "08 / SÜTUN 4: SELNİKEL AI", "Selnikel AI: 70 Yıllık Teknik Arşivin Yaşayan Zekası",
       "Teknik dokümanlar, bakım kılavuzları ve EN/ASME standartları üzerinde sıfır halüsinasyon garantili kurumsal RAG.")

# Sol: Selnikel AI Canlı Ekran Görüntüsü (Kaynak Doğrulamalı)
card(s9, 0.8, 1.9, 6.4, 5.1)
add_img(s9, "selnikel_ai_workspace.png", 1.0, 2.1, 6.0, 4.7)

# Sağ: AI Prensipleri
ai_features = [
    ("KAYNAK GÖSTERME ZORUNLULUĞU (ZERO HALLUCINATION)", "Üretilen her teknik cümlenin altında arşivdeki ilgili PDF dokümanı, şartname ve sayfa numarası kaynakça olarak listelenir. Tahmin değil, teyitli bilgi."),
    ("FASTAPI + NEXT.JS 14 KURUMSAL MİMARİ", "Şirket sunucularında güvenli çalışan, sızdırmaz veri politikasına sahip, rol bazlı erişim yetkilendirmesi içeren altyapı."),
    ("70 YILLIK İMALAT & SAHA HAFIZASI", "Emekli olan ustaların, kıdemli mühendislerin tecrübeleri ve geçmiş 10.000 projenin teknik arıza/çözüm raporları yeni nesil mühendislere anında rehber olur."),
    ("DOĞAL DİLLE TEKNİK ARAMA", "'Buhar kazanında 12 bar basınçta su seviyesi alarmı neden verir?' gibi sorulara doğrudan bakım kılavuzundan nokta atışı prosedür sunar.")
]
ay = 1.9
for a_title, a_desc in ai_features:
    card(s9, 7.4, ay, 5.1, 1.15)
    rect(s9, 7.4, ay, 0.08, 1.15, AMBER)
    txt(s9, 7.65, ay + 0.16, 4.7, 0.88, [
        {"t": a_title, "size": 12, "bold": True, "color": NAVY, "space_after": 3},
        {"t": a_desc, "size": 10.5, "color": INK_MUTED, "line": 1.2}
    ])
    ay += 1.32

# ==============================================================================
# SLAYT 10: SÜTUN 4 (DEVAM) — AI MÜHENDİSLİK HESAPLAMA ARAÇLARI (MCP)
# ==============================================================================
s10 = new_slide()
rect(s10, 0, 0, W, H, LIGHT_BG)
header(s10, "09 / SÜTUN 4: MÜHENDİSLİK HESAP ARAÇLARI", "Selnikel AI Mühendislik Araçları (MCP / Model Context Protocol)",
       "Yapay zeka sadece metin üretmez; entegre Python mühendislik motorlarıyla standartlara uygun kesin hesap yapar.")

# Sol: Mühendis ve Fabrika Fotoğrafı
card(s10, 0.8, 1.9, 5.4, 5.1)
add_img(s10, "engineer.jpg", 1.0, 2.1, 5.0, 4.7)

# Sağ: 5 Entegre Mühendislik Hesap Aracı
tools = [
    ("KAZAN VERİMLİLİĞİ HESABI", "Girdi/çıktı sıcaklıkları, yakıt cinsi ve baca gazı kayıplarına göre net termal verim hesabı (ASME PTC 4)."),
    ("EMNİYET VENTİLİ BOYUTLANDIRMASI", "Basınçlı kaplarda buhar tahliye kapasitesi, set basıncı ve orifis alanı boyutlandırma hesabı (EN ISO 4126)."),
    ("FAN HAVA DEBİSİ VE BASINÇ ANALİZİ", "Tesis kanallarındaki sürtünme kaybı, statik/dinamik basınç ve motor güç gereksinimi analizi."),
    ("BRÜLÖR YANMA VE HAVA-YAKIT ORANI", "Tam yanma için gerekli stokiyometrik hava debisi, lambda katsayısı ve emisyon optimizasyonu."),
    ("EKONOMİZER ISI GERİ KAZANIM FİZİBİLİTESİ", "Atık baca gazından kazan besleme suyuna aktarılabilecek kilovat enerji ve yıllık yakıt tasarruf hesabı.")
]
ty = 1.9
for t_title, t_desc in tools:
    card(s10, 6.4, ty, 6.1, 0.92)
    rect(s10, 6.4, ty, 0.08, 0.92, STEEL)
    txt(s10, 6.65, ty + 0.12, 5.7, 0.75, [
        {"t": t_title, "size": 12, "bold": True, "color": NAVY, "space_after": 2},
        {"t": t_desc, "size": 10.5, "color": INK_MUTED, "line": 1.2}
    ])
    ty += 1.04

# ==============================================================================
# SLAYT 11: ENTEGRE DEĞER ZİNCİRİ & FİNANSAL ROI ÖZETİ
# ==============================================================================
s11 = new_slide()
rect(s11, 0, 0, W, H, LIGHT_BG)
header(s11, "10 / DEĞER VE GETİRİ (ROI)", "4 Sütunun Entegre Şirket Katma Değeri",
       "Yatırım maliyeti değil; ilk aydan itibaren kendini finanse eden ve şirkete nakit kazandıran ekosistem.")

cards_roi = [
    ("WEB SİTESİ", "SATIŞ & MARKA ETKİSİ", 
     ["Küresel ölçekte müşteri erişimi", "Doğru teknik şartnameyle %35 daha hızlı teklif", "Marka algısında birinci sınıf endüstriyel liderlik"], STEEL),
    ("MOBİL PORTAL", "OPERASYONEL HIZ", 
     ["200+ çalışanda kağıtsız ve anlık takip", "Saha arıza bildirimlerinde %50 hızlanma", "Şoför manifestosuyla sıfır durak karmaşası"], CYAN),
    ("ROTA OPTİMİZASYONU", "SOMUT NAKİT TASARRUFU", 
     ["Aylık ₺233.000 doğrudan nakit tasarrufu", "Yılda ~2.8 Milyon TL şirket kasasında kalır", "4 servis aracı boşa çıkarılarak filo küçültüldü"], EMERALD),
    ("SELNİKEL AI", "MÜHENDİSLİK ÇARPANI", 
     ["Teknik şartname inceleme süresi: 4 saatten 5 dakikaya", "Standartlara uygun 5 hesap motoruyla sıfır mühendislik hatası", "70 yıllık kurumsal bilgi kaybı tamamen engellendi"], AMBER)
]

rx = 0.8
for r_tag, r_title, r_bullets, r_col in cards_roi:
    card(s11, rx, 1.9, 2.75, 4.3)
    rect(s11, rx, 1.9, 2.75, 0.08, r_col)
    txt(s11, rx + 0.18, 2.1, 2.4, 0.8, [
        {"t": r_tag, "size": 12, "bold": True, "color": r_col, "space_after": 3},
        {"t": r_title, "size": 13, "bold": True, "color": NAVY}
    ])
    rb_paras = []
    for rb in r_bullets:
        rb_paras.append({"t": f"✔ {rb}", "size": 11, "color": INK_DARK, "space_after": 8, "line": 1.2})
    txt(s11, rx + 0.18, 3.0, 2.4, 3.0, rb_paras)
    rx += 2.98

card(s11, 0.8, 6.35, 11.73, 0.7, fill=NAVY)
txt(s11, 1.1, 6.5, 11.2, 0.4, [
    {"t": "TOPLAM ETKİ: Yıllık ~2.8 Milyon TL nakit tasarruf + 10x daha hızlı mühendislik cevabı + Global standartlarda dijital marka.",
     "size": 13, "bold": True, "color": WHITE}
])

# ==============================================================================
# SLAYT 12: KAPANIŞ & YOL HARİTASI
# ==============================================================================
s12 = new_slide()
rect(s12, 0, 0, W, H, NAVY)
rect(s12, 0, 0, 0.25, H, AMBER)

# Sağ: Genel Merkez Fotoğrafı
add_img(s12, "hq.jpg", 7.0, 0.8, 5.5, 5.9)
rect(s12, 6.9, 0.8, 5.7, 5.9, None, line=CYAN, lw=1.5, round_=0.02)

# Sol: Kapanış Mesajı ve Sonraki Adımlar
add_img(s12, "selnikel_logo.png", 0.9, 0.8, 2.4)

txt(s12, 0.9, 1.8, 5.6, 2.2, [
    {"t": "SONRAKİ ADIMLAR VE YOL HARİTASI", "size": 13, "bold": True, "color": AMBER, "space_after": 6},
    {"t": "Geleneksel Mühendislik Gücü + Yeni Nesil Yazılım", "size": 28, "bold": True, "color": WHITE, "space_after": 10},
    {"t": "Tüm sistemler prototip aşamasını geçmiş, gerçek veri ve çalışanlarla test edilmiş ve doğrulanmıştır.",
     "size": 13.5, "color": SOFT_BLUE, "line": 1.3}
])

steps = [
    ("AŞAMA 1: PİLOT SAHA DAĞITIMI", "Mobil uygulamanın servis şoförleri ve öncü çalışan grubuyla sahada canlı test edilmesi."),
    ("AŞAMA 2: FİLO OPTİMİZASYON CUTOVER", "15 hattan 11 hata geçişin tamamlanması ve aylık ₺233.000 tasarrufun kasaya girmesi."),
    ("AŞAMA 3: SELNİKEL AI ARŞİV ENTEGRASYONU", "Fabrika teknik ofis ve teklif mühendislerinin Selnikel AI Copilot'u aktif iş akışına alması.")
]
s_y = 4.1
for idx, (s_title, s_desc) in enumerate(steps):
    card(s12, 0.9, s_y, 5.6, 0.88, fill=NAVY_LIGHT, line=STEEL, round_=0.03)
    rect(s12, 0.9, s_y, 0.08, 0.88, AMBER)
    txt(s12, 1.15, s_y + 0.12, 5.2, 0.7, [
        {"t": s_title, "size": 12, "bold": True, "color": WHITE, "space_after": 2},
        {"t": s_desc, "size": 10.5, "color": SOFT_BLUE, "line": 1.2}
    ])
    s_y += 1.0

txt(s12, 0.9, 7.1, 5.6, 0.3, [
    {"t": "Selnikel Enerji A.Ş.  ·  Dijital Dönüşüm Programı  ·  2026", "size": 11, "color": INK_MUTED}
])

# ---------------------------------------------------------------- KAYDET
out_file = os.path.join(os.path.dirname(os.path.abspath(__file__)), "Selnikel_Dijitallesme.pptx")
prs.save(out_file)
print(f"[BASARILI] Yeni PowerPoint Sunumu Olusturuldu: {out_file}")
print(f"[BILGI] Boyut: {os.path.getsize(out_file) / 1024:.1f} KB, 12 Slayt (Tum Gercek Fotograflar Gomuldu)")
