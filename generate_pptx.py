#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Selnikel Staj Bitirme Sunumu — Executive White / Light Theme
Ömer Faruk Özdemir | Kocaeli Üniversitesi Bilgisayar Mühendisliği 4. Sınıf
Selnikel Enerji IT Departmanı
"""

import sys
from pathlib import Path
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE

# Paths
SCRIPT_DIR = Path(__file__).resolve().parent
IMG_DIR = SCRIPT_DIR / "public" / "images"
OUTPUT = SCRIPT_DIR / "Selnikel_Staj_Sunumu_OmerFarukOzdemir.pptx"

# Colors - 100% Light & Clean Theme
WHITE        = RGBColor(0xFF, 0xFF, 0xFF)
BG_LIGHT     = RGBColor(0xFA, 0xFA, 0xF9)  # Ultra soft slate-50 / stone-50
CARD_BG      = RGBColor(0xFF, 0xFF, 0xFF)
BORDER_COLOR = RGBColor(0xE2, 0xE8, 0xF0)  # Slate-200 border
BORDER_SUBTLE= RGBColor(0xEB, 0xEE, 0xF2)

TEXT_TITLE   = RGBColor(0x0F, 0x17, 0x2A)  # Slate-900 bold
TEXT_BODY    = RGBColor(0x33, 0x41, 0x55)  # Slate-700
TEXT_MUTED   = RGBColor(0x64, 0x74, 0x8B)  # Slate-500
TEXT_LIGHT   = RGBColor(0x94, 0xA3, 0xB8)  # Slate-400

RED_BRAND    = RGBColor(0xE3, 0x06, 0x13)  # Selnikel Red
RED_LIGHT    = RGBColor(0xFE, 0xF2, 0xF2)  # Red-50
RED_BORDER   = RGBColor(0xFE, 0xCD, 0xCD)

BLUE_BRAND   = RGBColor(0x02, 0x84, 0xC7)  # Sky-600
BLUE_LIGHT   = RGBColor(0xF0, 0xF9, 0xFF)
BLUE_BORDER  = RGBColor(0xBA, 0xE6, 0xFD)

AMBER_BRAND  = RGBColor(0xD9, 0x77, 0x06)  # Amber-600
AMBER_LIGHT  = RGBColor(0xFF, 0xFB, 0xEB)
AMBER_BORDER = RGBColor(0xFD, 0xE6, 0x8A)

GREEN_BRAND  = RGBColor(0x05, 0x96, 0x69)  # Emerald-600
GREEN_LIGHT  = RGBColor(0xEC, 0xFD, 0xF5)
GREEN_BORDER = RGBColor(0xA7, 0xF3, 0xD0)

SLATE_LIGHT  = RGBColor(0xF1, 0xF5, 0xF9)

SLIDE_W = Inches(13.333)
SLIDE_H = Inches(7.5)

prs = Presentation()
prs.slide_width = SLIDE_W
prs.slide_height = SLIDE_H
TOTAL_SLIDES = 17

def set_slide_bg(slide, color=BG_LIGHT):
    bg = slide.background
    fill = bg.fill
    fill.solid()
    fill.fore_color.rgb = color

def add_header(slide, kicker: str, title: str, subtitle: str = "", kicker_color=RED_BRAND):
    """Clean standard header on top-left, logo on top-right. Zero collision possible."""
    # Top-right Logo
    logo_path = IMG_DIR / "selnikel_logo.png"
    if logo_path.exists():
        # Width 2.1 in, height ~0.46 in
        slide.shapes.add_picture(str(logo_path), Inches(10.5), Inches(0.42), width=Inches(2.0))

    # Top-left Kicker (Small category badge/text)
    tb_kicker = slide.shapes.add_textbox(Inches(0.8), Inches(0.4), Inches(8.5), Inches(0.3))
    tf_k = tb_kicker.text_frame
    tf_k.margin_left = tf_k.margin_top = tf_k.margin_right = tf_k.margin_bottom = 0
    p_k = tf_k.paragraphs[0]
    r_k = p_k.add_run()
    r_k.text = kicker.upper()
    r_k.font.size = Pt(10)
    r_k.font.bold = True
    r_k.font.color.rgb = kicker_color
    r_k.font.name = "Arial"

    # Title
    tb_title = slide.shapes.add_textbox(Inches(0.8), Inches(0.68), Inches(9.2), Inches(0.45))
    tf_t = tb_title.text_frame
    tf_t.margin_left = tf_t.margin_top = tf_t.margin_right = tf_t.margin_bottom = 0
    p_t = tf_t.paragraphs[0]
    r_t = p_t.add_run()
    r_t.text = title
    r_t.font.size = Pt(22)
    r_t.font.bold = True
    r_t.font.color.rgb = TEXT_TITLE
    r_t.font.name = "Arial"

    # Subtitle (optional)
    if subtitle:
        tb_sub = slide.shapes.add_textbox(Inches(0.8), Inches(1.15), Inches(9.2), Inches(0.28))
        tf_s = tb_sub.text_frame
        tf_s.margin_left = tf_s.margin_top = tf_s.margin_right = tf_s.margin_bottom = 0
        p_s = tf_s.paragraphs[0]
        r_s = p_s.add_run()
        r_s.text = subtitle
        r_s.font.size = Pt(11)
        r_s.font.color.rgb = TEXT_MUTED
        r_s.font.name = "Arial"

def add_footer(slide, slide_num: int):
    """Subtle, light footer: thin divider line + clean gray text. NO DARK BARS."""
    # Divider line at y = 6.95
    line = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0.8), Inches(6.92), Inches(11.733), Pt(1))
    line.fill.solid()
    line.fill.fore_color.rgb = BORDER_COLOR
    line.line.fill.background()

    # Left text
    tb_l = slide.shapes.add_textbox(Inches(0.8), Inches(7.0), Inches(8.0), Inches(0.35))
    tf_l = tb_l.text_frame
    tf_l.margin_left = tf_l.margin_top = tf_l.margin_right = tf_l.margin_bottom = 0
    p_l = tf_l.paragraphs[0]
    r_l = p_l.add_run()
    r_l.text = "Selnikel Enerji A.Ş.  •  Bilgi Teknolojileri (IT) Staj Projeleri Sunumu"
    r_l.font.size = Pt(9)
    r_l.font.color.rgb = TEXT_LIGHT
    r_l.font.name = "Arial"

    # Right text
    tb_r = slide.shapes.add_textbox(Inches(8.8), Inches(7.0), Inches(3.733), Inches(0.35))
    tf_r = tb_r.text_frame
    tf_r.margin_left = tf_r.margin_top = tf_r.margin_right = tf_r.margin_bottom = 0
    p_r = tf_r.paragraphs[0]
    p_r.alignment = PP_ALIGN.RIGHT
    r_r = p_r.add_run()
    r_r.text = f"Ömer Faruk Özdemir  |  Slayt {slide_num} / {TOTAL_SLIDES}"
    r_r.font.size = Pt(9)
    r_r.font.bold = True
    r_r.font.color.rgb = TEXT_LIGHT
    r_r.font.name = "Arial"

def create_card(slide, left, top, width, height, bg_color=WHITE, border_color=BORDER_COLOR):
    """Creates a pristine white card box with crisp border."""
    card = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, top, width, height)
    card.fill.solid()
    card.fill.fore_color.rgb = bg_color
    if border_color:
        card.line.color.rgb = border_color
        card.line.width = Pt(1)
    else:
        card.line.fill.background()
    return card

# ══════════════════════════════════════════════════════════════
# SLIDE 1: KAPAK (Clean, White Corporate Cover)
# ══════════════════════════════════════════════════════════════
s1 = prs.slides.add_slide(prs.slide_layouts[6])
set_slide_bg(s1, WHITE)

# Left Selnikel Red accent line
red_strip = s1.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0), Inches(0), Inches(0.18), SLIDE_H)
red_strip.fill.solid()
red_strip.fill.fore_color.rgb = RED_BRAND
red_strip.line.fill.background()

# Top Logo
logo_path = IMG_DIR / "selnikel_logo.png"
if logo_path.exists():
    s1.shapes.add_picture(str(logo_path), Inches(0.8), Inches(0.6), width=Inches(2.6))

# Main Title & Subtitle in Left Area
tb_t1 = s1.shapes.add_textbox(Inches(0.8), Inches(1.8), Inches(6.8), Inches(1.8))
tf_t1 = tb_t1.text_frame
tf_t1.word_wrap = True
tf_t1.margin_left = tf_t1.margin_top = tf_t1.margin_right = tf_t1.margin_bottom = 0

p1 = tf_t1.paragraphs[0]
r1 = p1.add_run()
r1.text = "Selnikel'de Görülen Sorunlar\nve Geliştirilen Çözümler"
r1.font.size = Pt(32)
r1.font.bold = True
r1.font.color.rgb = TEXT_TITLE
r1.font.name = "Arial"

p2 = tf_t1.add_paragraph()
p2.space_before = Pt(12)
r2 = p2.add_run()
r2.text = "Bilgi Teknolojileri Departmanı Staj Bitirme Raporu & 3 Proje Sunumu"
r2.font.size = Pt(14)
r2.font.color.rgb = RED_BRAND
r2.font.bold = True
r2.font.name = "Arial"

# Presenter Info Box (Card)
card_pres = create_card(s1, Inches(0.8), Inches(3.9), Inches(6.5), Inches(1.8), bg_color=BG_LIGHT, border_color=BORDER_COLOR)
tb_pres = s1.shapes.add_textbox(Inches(1.1), Inches(4.1), Inches(6.0), Inches(1.4))
tf_p = tb_pres.text_frame
tf_p.word_wrap = True
tf_p.margin_left = tf_p.margin_top = tf_p.margin_right = tf_p.margin_bottom = 0

pp1 = tf_p.paragraphs[0]
rr1 = pp1.add_run()
rr1.text = "Sunumu Yapan: "
rr1.font.size = Pt(11)
rr1.font.color.rgb = TEXT_MUTED
rr1_b = pp1.add_run()
rr1_b.text = "Ömer Faruk Özdemir"
rr1_b.font.size = Pt(13)
rr1_b.font.bold = True
rr1_b.font.color.rgb = TEXT_TITLE

pp2 = tf_p.add_paragraph()
pp2.space_before = Pt(4)
rr2 = pp2.add_run()
rr2.text = "Üniversite: "
rr2.font.size = Pt(11)
rr2.font.color.rgb = TEXT_MUTED
rr2_b = pp2.add_run()
rr2_b.text = "Kocaeli Üniversitesi — Bilgisayar Mühendisliği (4. Sınıf)"
rr2_b.font.size = Pt(11)
rr2_b.font.bold = True
rr2_b.font.color.rgb = TEXT_BODY

pp3 = tf_p.add_paragraph()
pp3.space_before = Pt(4)
rr3 = pp3.add_run()
rr3.text = "Bölüm: "
rr3.font.size = Pt(11)
rr3.font.color.rgb = TEXT_MUTED
rr3_b = pp3.add_run()
rr3_b.text = "Selnikel Enerji A.Ş. IT Bölümü (Yazılım Stajı)"
rr3_b.font.size = Pt(11)
rr3_b.font.bold = True
rr3_b.font.color.rgb = TEXT_BODY

pp4 = tf_p.add_paragraph()
pp4.space_before = Pt(4)
rr4 = pp4.add_run()
rr4.text = "Tarih: "
rr4.font.size = Pt(10)
rr4.font.color.rgb = TEXT_MUTED
rr4_b = pp4.add_run()
rr4_b.text = "Eylül 2026"
rr4_b.font.size = Pt(10)
rr4_b.font.color.rgb = TEXT_BODY

# 3 Project Pills on Left Bottom
pills = [
    ("Proje 1: Kurumsal Web Platformu", BLUE_LIGHT, BLUE_BRAND, BLUE_BORDER),
    ("Proje 2: Selnikel AI Mühendislik Asistanı", AMBER_LIGHT, AMBER_BRAND, AMBER_BORDER),
    ("Proje 3: Selnikel One Fabrika Platformu", GREEN_LIGHT, GREEN_BRAND, GREEN_BORDER),
]
for i, (ptext, pbg, pcol, pbdr) in enumerate(pills):
    px = Inches(0.8 + i * 2.2)
    py = Inches(5.95)
    create_card(s1, px, py, Inches(2.1), Inches(0.4), bg_color=pbg, border_color=pbdr)
    tbp = s1.shapes.add_textbox(px, py + Inches(0.08), Inches(2.1), Inches(0.25))
    tbp.text_frame.margin_left = tbp.text_frame.margin_right = 0
    p = tbp.text_frame.paragraphs[0]
    p.alignment = PP_ALIGN.CENTER
    r = p.add_run()
    r.text = ptext
    r.font.size = Pt(8.5)
    r.font.bold = True
    r.font.color.rgb = pcol

# Right Picture (HQ / Factory image with clean rounded card frame)
hq_path = IMG_DIR / "hq.jpg"
if hq_path.exists():
    card_img = create_card(s1, Inches(7.7), Inches(1.2), Inches(4.8), Inches(5.15), bg_color=WHITE, border_color=BORDER_COLOR)
    s1.shapes.add_picture(str(hq_path), Inches(7.8), Inches(1.3), width=Inches(4.6), height=Inches(4.95))

# Footer
add_footer(s1, 1)

# ══════════════════════════════════════════════════════════════
# SLIDE 2: HAKKIMDA & STAJ KAPSAMI (3 PROJE ÖZETİ)
# ══════════════════════════════════════════════════════════════
s2 = prs.slides.add_slide(prs.slide_layouts[6])
set_slide_bg(s2, BG_LIGHT)
add_header(s2, "GİRİŞ & KAPSAM", "Staj Sürecinde Tespit Edilen İhtiyaçlar ve 3 Proje",
           "Selnikel'in kurumsal vitrini, teknik mühendislik hafızası ve fabrika içi saha operasyonları")

# Top Intro Card
create_card(s2, Inches(0.8), Inches(1.55), Inches(11.733), Inches(0.95), bg_color=WHITE, border_color=BORDER_COLOR)
tb_intro = s2.shapes.add_textbox(Inches(1.0), Inches(1.65), Inches(11.333), Inches(0.75))
tf_in = tb_intro.text_frame
tf_in.word_wrap = True
tf_in.margin_left = tf_in.margin_top = tf_in.margin_right = tf_in.margin_bottom = 0
p_in = tf_in.paragraphs[0]
r_in = p_in.add_run()
r_in.text = "Selnikel IT departmanındaki stajım süresince fabrikayı, teknik ofisleri ve mevcut yazılımları yerinde inceledim. Yönetimimiz tarafından belirtilen 'Selnikel'de görebildiğiniz sorunları tespit edip çözümler geliştirin' hedefi doğrultusunda 3 temel operasyonel darboğazı adresleyen 3 tam fonksiyonel proje geliştirdim:"
r_in.font.size = Pt(11)
r_in.font.color.rgb = TEXT_BODY

# 3 Project Big Cards (Side by side)
projs = [
    ("PROJE 1", "Kurumsal Web Platformu", BLUE_BRAND, BLUE_LIGHT, BLUE_BORDER,
     "Eski WordPress (selnikel.com) sitesindeki yavaşlık, güvenlik açıkları ve mobilde taşma sorunlarına son verildi.",
     [
         "Next.js 16 Enterprise mimarisine geçiş",
         "Açılış hızı 4.5 sn'den 1 sn altına indi (%97 hız)",
         "0 veritabanı, 0 SQL Injection açığı",
         "5 dilde eşzamanlı yayın & Mühendislik talep formları"
     ]),
    ("PROJE 2", "Selnikel AI Mühendislik Zekası", AMBER_BRAND, AMBER_LIGHT, AMBER_BORDER,
     "Teknik kılavuzları saatlerce arama ve ChatGPT'nin mühendislik hesaplarında uydurma (halüsinasyon) sorununu çözdü.",
     [
         "1.600+ kurumsal teknik şartname ve föy hafızası",
         "Kaynak gösteren (sayfa ve paragraf kanıtlı) RAG sistemi",
         "Çift kapılı doğrulama (Fail-Closed, uydurma yasak)",
         "5 adet canlı MCP termodinamik mühendislik motoru"
     ]),
    ("PROJE 3", "Selnikel One Fabrika Platformu", GREEN_BRAND, GREEN_LIGHT, GREEN_BORDER,
     "Fabrika servis araçlarının bilinmezliği, kağıt izin/değerlendirme formları ve atölye iş takibindeki dağınıklığı bitirdi.",
     [
         "Kendi servis filomuz için canlı GPS takibi",
         "IFS Cloud ERP entegre mobil turnike & mesai takibi",
         "Ustabaşı & atölye birim bazlı dijital görev atama",
         "360° İK arkadaş değerlendirme ve fabrika yaşam modülü"
     ]),
]

for i, (kck, ptitle, pcol, pbg, pbdr, psum, pitems) in enumerate(projs):
    cx = Inches(0.8 + i * 4.0)
    cy = Inches(2.65)
    cw = Inches(3.733)
    ch = Inches(4.1)

    create_card(s2, cx, cy, cw, ch, bg_color=WHITE, border_color=BORDER_COLOR)

    # Top color banner inside card
    top_bar = s2.shapes.add_shape(MSO_SHAPE.RECTANGLE, cx, cy, cw, Inches(0.4))
    top_bar.fill.solid()
    top_bar.fill.fore_color.rgb = pbg
    top_bar.line.color.rgb = pbdr
    top_bar.line.width = Pt(1)

    tb_k = s2.shapes.add_textbox(cx + Inches(0.2), cy + Inches(0.08), cw - Inches(0.4), Inches(0.25))
    tb_k.text_frame.margin_left = tb_k.text_frame.margin_right = 0
    pk = tb_k.text_frame.paragraphs[0]
    rk = pk.add_run()
    rk.text = kck
    rk.font.size = Pt(9)
    rk.font.bold = True
    rk.font.color.rgb = pcol

    # Title
    tb_t = s2.shapes.add_textbox(cx + Inches(0.2), cy + Inches(0.5), cw - Inches(0.4), Inches(0.4))
    tb_t.text_frame.margin_left = tb_t.text_frame.margin_right = 0
    pt = tb_t.text_frame.paragraphs[0]
    rt = pt.add_run()
    rt.text = ptitle
    rt.font.size = Pt(13)
    rt.font.bold = True
    rt.font.color.rgb = TEXT_TITLE

    # Summary
    tb_s = s2.shapes.add_textbox(cx + Inches(0.2), cy + Inches(0.95), cw - Inches(0.4), Inches(0.65))
    tb_s.text_frame.word_wrap = True
    tb_s.text_frame.margin_left = tb_s.text_frame.margin_right = 0
    ps = tb_s.text_frame.paragraphs[0]
    rs = ps.add_run()
    rs.text = psum
    rs.font.size = Pt(10)
    rs.font.color.rgb = TEXT_MUTED

    # Bullet items
    tb_b = s2.shapes.add_textbox(cx + Inches(0.2), cy + Inches(1.7), cw - Inches(0.4), Inches(2.2))
    tf_b = tb_b.text_frame
    tf_b.word_wrap = True
    tf_b.margin_left = tf_b.margin_right = 0
    for j, item in enumerate(pitems):
        p = tf_b.paragraphs[0] if j == 0 else tf_b.add_paragraph()
        p.space_before = Pt(6)
        r_chk = p.add_run()
        r_chk.text = "✓ "
        r_chk.font.bold = True
        r_chk.font.color.rgb = pcol
        r_txt = p.add_run()
        r_txt.text = item
        r_txt.font.size = Pt(9.5)
        r_txt.font.color.rgb = TEXT_BODY

add_footer(s2, 2)

# ══════════════════════════════════════════════════════════════
# SLIDE 3: PROJE 1 KAPAK & YÖNETİM METRİKLERİ
# ══════════════════════════════════════════════════════════════
s3 = prs.slides.add_slide(prs.slide_layouts[6])
set_slide_bg(s3, BG_LIGHT)
add_header(s3, "PROJE 1: KURUMSAL WEB PLATFORMU", "Eski selnikel.com (WordPress) → Yeni Next.js 16 Enterprise",
           "Yönetim Kuruluna Somut Performans ve Güvenlik Karşılaştırması", kicker_color=BLUE_BRAND)

# 4 Big Metric Stat Cards
metrics = [
    ("⚡ %97", "Daha Hızlı Yanıt", "Eski 2.500 ms → Yeni 25 ms", "Tıklandığı anda içerik ekranda", BLUE_BRAND, BLUE_LIGHT, BLUE_BORDER),
    ("📱 92 - 96", "Google PageSpeed Mobil", "Eski 28-35 → Yeni 96", "Google aramalarında üst sıraya yerleşme", GREEN_BRAND, GREEN_LIGHT, GREEN_BORDER),
    ("🛡️ 0 Açık", "Siber Güvenlik Riski", "0 SQL, 0 Açık (Penetrasyon Onaylı)", "Brute-force kilidi & PBKDF2 şifreleme", RED_BRAND, RED_LIGHT, RED_BORDER),
    ("🌍 5 Dil", "Küresel İhracat Vitrini", "TR, EN, DE, RU, AR (RTL)", "67 ülkeye 1 sn altında kurumsal vitrin", AMBER_BRAND, AMBER_LIGHT, AMBER_BORDER),
]

for i, (val, title, comp, impact, col, bg, bdr) in enumerate(metrics):
    mx = Inches(0.8 + i * 3.0)
    my = Inches(1.6)
    mw = Inches(2.75)
    mh = Inches(2.2)

    create_card(s3, mx, my, mw, mh, bg_color=WHITE, border_color=BORDER_COLOR)

    # Accent top border
    top_line = s3.shapes.add_shape(MSO_SHAPE.RECTANGLE, mx, my, mw, Inches(0.06))
    top_line.fill.solid()
    top_line.fill.fore_color.rgb = col
    top_line.line.fill.background()

    tb = s3.shapes.add_textbox(mx + Inches(0.15), my + Inches(0.15), mw - Inches(0.3), mh - Inches(0.3))
    tf = tb.text_frame
    tf.word_wrap = True
    tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0

    p_val = tf.paragraphs[0]
    r_v = p_val.add_run()
    r_v.text = val
    r_v.font.size = Pt(24)
    r_v.font.bold = True
    r_v.font.color.rgb = col

    p_t = tf.add_paragraph()
    p_t.space_before = Pt(4)
    r_t = p_t.add_run()
    r_t.text = title
    r_t.font.size = Pt(12)
    r_t.font.bold = True
    r_t.font.color.rgb = TEXT_TITLE

    p_c = tf.add_paragraph()
    p_c.space_before = Pt(4)
    r_c = p_c.add_run()
    r_c.text = comp
    r_c.font.size = Pt(9)
    r_c.font.color.rgb = TEXT_MUTED

    p_i = tf.add_paragraph()
    p_i.space_before = Pt(4)
    r_i = p_i.add_run()
    r_i.text = impact
    r_i.font.size = Pt(9)
    r_i.font.bold = True
    r_i.font.color.rgb = TEXT_BODY

# Lower Section: Architecture Flow Comparison
create_card(s3, Inches(0.8), Inches(4.0), Inches(5.7), Inches(2.7), bg_color=WHITE, border_color=BORDER_COLOR)
# Header badge inside
create_card(s3, Inches(1.0), Inches(4.15), Inches(2.2), Inches(0.32), bg_color=RED_LIGHT, border_color=RED_BORDER)
tb_e = s3.shapes.add_textbox(Inches(1.0), Inches(4.2), Inches(2.2), Inches(0.25))
tb_e.text_frame.margin_left = tb_e.text_frame.margin_right = 0
pe = tb_e.text_frame.paragraphs[0]
pe.alignment = PP_ALIGN.CENTER
re = pe.add_run()
re.text = "ESKİ SİTE MİMARİSİ (WordPress)"
re.font.size = Pt(8.5)
re.font.bold = True
re.font.color.rgb = RED_BRAND

tb_eb = s3.shapes.add_textbox(Inches(1.0), Inches(4.6), Inches(5.3), Inches(2.0))
tf_eb = tb_eb.text_frame
tf_eb.word_wrap = True
tf_eb.margin_left = tf_eb.margin_right = 0
eb_points = [
    "PHP + Apache + MySQL monolitik yapı",
    "Her sayfa açılışında ağır SQL sorguları ve veritabanı yükü",
    "20-30 anlık kullanıcıda CPU %100 ve 504 Gateway Timeout",
    "Aylık eklenti açıkları, güncelleme bağımlılığı ve çökme riski",
    "Veritabanı kapandığı an tüm site 7/24 erişilemez hale gelir"
]
for j, pt in enumerate(eb_points):
    p = tf_eb.paragraphs[0] if j == 0 else tf_eb.add_paragraph()
    p.space_before = Pt(4)
    r_x = p.add_run()
    r_x.text = "✗ "
    r_x.font.bold = True
    r_x.font.color.rgb = RED_BRAND
    r_t = p.add_run()
    r_t.text = pt
    r_t.font.size = Pt(9.5)
    r_t.font.color.rgb = TEXT_BODY

# Right side: NEW ARCHITECTURE
create_card(s3, Inches(6.8), Inches(4.0), Inches(5.7), Inches(2.7), bg_color=WHITE, border_color=BORDER_COLOR)
create_card(s3, Inches(7.0), Inches(4.15), Inches(2.5), Inches(0.32), bg_color=GREEN_LIGHT, border_color=GREEN_BORDER)
tb_y = s3.shapes.add_textbox(Inches(7.0), Inches(4.2), Inches(2.5), Inches(0.25))
tb_y.text_frame.margin_left = tb_y.text_frame.margin_right = 0
py = tb_y.text_frame.paragraphs[0]
py.alignment = PP_ALIGN.CENTER
ry = py.add_run()
ry.text = "YENİ NESİL MİMARİ (Next.js 16)"
ry.font.size = Pt(8.5)
ry.font.bold = True
ry.font.color.rgb = GREEN_BRAND

tb_yb = s3.shapes.add_textbox(Inches(7.0), Inches(4.6), Inches(5.3), Inches(2.0))
tf_yb = tb_yb.text_frame
tf_yb.word_wrap = True
tf_yb.margin_left = tf_yb.margin_right = 0
yb_points = [
    "Edge Global CDN üzerinden 417 önceden derlenmiş statik sayfa",
    "Saniyede 388 istek altında sıfır hata (3.901 istek yük testi teyitli)",
    "0 SQL açığı — atomik anahtar-değer (KV) veri saklama mimarisi",
    "Veritabanı dursa bile tüm site %100 kesintisiz yayında (SLA güvencesi)",
    "Full HD WebP görsellerle sayfa ağırlığı 15 MB'tan 1.8 MB'a indi"
]
for j, pt in enumerate(yb_points):
    p = tf_yb.paragraphs[0] if j == 0 else tf_yb.add_paragraph()
    p.space_before = Pt(4)
    r_x = p.add_run()
    r_x.text = "✓ "
    r_x.font.bold = True
    r_x.font.color.rgb = GREEN_BRAND
    r_t = p.add_run()
    r_t.text = pt
    r_t.font.size = Pt(9.5)
    r_t.font.color.rgb = TEXT_BODY

add_footer(s3, 3)

# ══════════════════════════════════════════════════════════════
# SLIDE 4: PROJE 1 — ESKİ SİTEDEKİ KRONİK SORUNLAR
# ══════════════════════════════════════════════════════════════
s4 = prs.slides.add_slide(prs.slide_layouts[6])
set_slide_bg(s4, BG_LIGHT)
add_header(s4, "PROJE 1: MEVCUT DURUM ANALİZİ", "Eski selnikel.com Sitesinde Ne Sorunlar Vardı?",
           "Fabrika yönetimi ve müşterilerin karşılaştığı teknik ve operasyonel engeller", kicker_color=RED_BRAND)

probs = [
    ("1. Yavaş Açılış Hızı (4.5 – 7.0 Saniye)",
     "Araştırmalara göre ziyaretçilerin %53'ü 3 saniyeden uzun süren siteleri terk eder. 67 ülkeye ihracat yapan bir fabrikanın müşterileri sayfayı beklemeden kapatıyordu."),
    ("2. Güvenlik Açıkları & Eklenti Riskleri",
     "WordPress dünyadaki siber saldırıların 1 numaralı hedefidir. Brute-force saldırıları, SQL Injection riskleri ve PHP sürüm çakışmaları şirketi sürekli savunmasız bırakıyordu."),
    ("3. Mobilde Bozuk ve Taşmış Sayfalar",
     "Tablolar cep telefonundan taşıyor, butonlara tıklanamıyordu. Google PageSpeed mobil skoru 100 üzerinden 28-35 seviyesinde kalarak SEO'da alt sıralara itiyordu."),
    ("4. Yalnızca Türkçe (Yabancı Dil Yokluğu)",
     "Almanya, Rusya veya Orta Doğu'daki bir fabrika müdürü siteye girdiğinde Türkçe ile karşılaşıyordu. Çok dilli kurumsal vitrin eksikliği ihracat itibarını zedeliyordu."),
    ("5. Yalnızca Genel Bir İletişim Kutusu",
     "Teknik ürün formu yoktu. Müşteri 'kazan almak istiyorum' diye yazıyor; debi, basınç, yakıt cinsi gibi teknik veriler günlerce süren telefon trafiğiyle toplanıyordu."),
    ("6. Aylık Bakım & Lisans Maliyetleri",
     "WordPress çekirdeği, ücretli eklenti lisansları, çöken MySQL servisleri ve veritabanı şişmeleri nedeniyle IT ekibi sürekli bakım hamallığıyla uğraşıyordu.")
]

for i, (title, desc) in enumerate(probs):
    row = i // 2
    col = i % 2
    cx = Inches(0.8 + col * 5.95)
    cy = Inches(1.6 + row * 1.7)
    cw = Inches(5.78)
    ch = Inches(1.55)

    create_card(s4, cx, cy, cw, ch, bg_color=WHITE, border_color=BORDER_COLOR)

    # Red bar on left
    lbar = s4.shapes.add_shape(MSO_SHAPE.RECTANGLE, cx, cy, Inches(0.06), ch)
    lbar.fill.solid()
    lbar.fill.fore_color.rgb = RED_BRAND
    lbar.line.fill.background()

    tb = s4.shapes.add_textbox(cx + Inches(0.2), cy + Inches(0.12), cw - Inches(0.35), ch - Inches(0.2))
    tf = tb.text_frame
    tf.word_wrap = True
    tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0

    p1 = tf.paragraphs[0]
    r1 = p1.add_run()
    r1.text = title
    r1.font.size = Pt(11.5)
    r1.font.bold = True
    r1.font.color.rgb = RED_BRAND

    p2 = tf.add_paragraph()
    p2.space_before = Pt(4)
    r2 = p2.add_run()
    r2.text = desc
    r2.font.size = Pt(9.5)
    r2.font.color.rgb = TEXT_BODY

add_footer(s4, 4)

# ══════════════════════════════════════════════════════════════
# SLIDE 5: PROJE 1 — ESKİ VS YENİ KARŞILAŞTIRMA TABLOSU
# ══════════════════════════════════════════════════════════════
s5 = prs.slides.add_slide(prs.slide_layouts[6])
set_slide_bg(s5, BG_LIGHT)
add_header(s5, "PROJE 1: PERFORMANS & ROI KARŞILAŞTIRMASI", "Eski Site vs Yeni Platform: Somut Karşılaştırma",
           "Gerçek test ve ölçüm verileriyle karar verici açısından elde edilen kazançlar", kicker_color=BLUE_BRAND)

# Table headers
col_widths = [Inches(2.5), Inches(3.2), Inches(3.2), Inches(2.833)]
col_x = [Inches(0.8), Inches(3.3), Inches(6.5), Inches(9.7)]
headers = ["PERFORMANS METRİĞİ", "ESKİ SİTE (WordPress)", "YENİ PLATFORM (Next.js 16)", "KARAR VERİCİYE KAZANCI"]
hdr_colors = [SLATE_LIGHT, RED_LIGHT, GREEN_LIGHT, BLUE_LIGHT]
hdr_text_colors = [TEXT_TITLE, RED_BRAND, GREEN_BRAND, BLUE_BRAND]

for i in range(4):
    create_card(s5, col_x[i], Inches(1.55), col_widths[i], Inches(0.42), bg_color=hdr_colors[i], border_color=BORDER_COLOR)
    tb = s5.shapes.add_textbox(col_x[i] + Inches(0.1), Inches(1.63), col_widths[i] - Inches(0.2), Inches(0.3))
    tb.text_frame.margin_left = tb.text_frame.margin_right = 0
    p = tb.text_frame.paragraphs[0]
    r = p.add_run()
    r.text = headers[i]
    r.font.size = Pt(9.5)
    r.font.bold = True
    r.font.color.rgb = hdr_text_colors[i]

# Table Rows
rows_data = [
    ("İlk Yanıt Süresi (TTFB)", "800 ms – 2.500 ms (Ağır SQL)", "25 ms – 50 ms (Edge CDN)", "%97 Daha Hızlı. Tıklandığı an ekranda."),
    ("Sayfa Tam Açılış (LCP)", "4,5 – 7,0 saniye", "< 1,1 saniye", "Ziyaretçi terk oranı %60 azaldı."),
    ("Google PageSpeed Skoru", "Mobil: 28-35 / Masaüstü: 55", "Mobil: 92-96 / Masaüstü: 98-100", "Google aramalarında üst sıraya yerleşme."),
    ("Eşzamanlı Yük Dayanımı", "20-30 kullanıcıda CPU %100", "Saniyede 388 istek (0 hata)", "Fuar ve lansmanlarda çökme tarihe karıştı."),
    ("Sayfa Ağırlığı & Görseller", "8 – 15 MB (Ağır PNG/JPG)", "1,2 – 2,5 MB (%100 WebP)", "Mobilde kota tüketimi %80 azaldı."),
    ("Siber Güvenlik Açığı", "Eklenti & SQL injection riski", "0 SQL, 0 Açık (Penetrasyon Onaylı)", "%100 Veri Güvenliği ve Siber Koruma."),
    ("İş Sürekliliği (SLA)", "Veritabanı çökerse site kapanır", "417 Statik Sayfa (Her zaman açık)", "%99,99 Kesintisiz Hizmet Garantisi.")
]

for row_idx, rdata in enumerate(rows_data):
    ry = Inches(2.05 + row_idx * 0.67)
    rbg = WHITE if row_idx % 2 == 0 else BG_LIGHT

    for col_idx in range(4):
        create_card(s5, col_x[col_idx], ry, col_widths[col_idx], Inches(0.62), bg_color=rbg, border_color=BORDER_COLOR)
        tb = s5.shapes.add_textbox(col_x[col_idx] + Inches(0.12), ry + Inches(0.1), col_widths[col_idx] - Inches(0.24), Inches(0.48))
        tf = tb.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0
        p = tf.paragraphs[0]
        r = p.add_run()
        r.text = rdata[col_idx]
        r.font.size = Pt(9)

        if col_idx == 0:
            r.font.bold = True
            r.font.color.rgb = TEXT_TITLE
        elif col_idx == 1:
            r.font.color.rgb = RED_BRAND
        elif col_idx == 2:
            r.font.bold = True
            r.font.color.rgb = GREEN_BRAND
        else:
            r.font.bold = True
            r.font.color.rgb = BLUE_BRAND

add_footer(s5, 5)

# ══════════════════════════════════════════════════════════════
# SLIDE 6: PROJE 1 — ÜRÜN KATALOĞU & YENİ ÖZELLİKLER
# ══════════════════════════════════════════════════════════════
s6 = prs.slides.add_slide(prs.slide_layouts[6])
set_slide_bg(s6, BG_LIGHT)
add_header(s6, "PROJE 1: SIFIRDAN EKLENEN ÖZELLİKLER", "Dinamik Ürün Kataloğu ve Mühendislik Araçları",
           "Müşterilerin teknik şartnameye uygun ürünü 15 saniyede bulmasını sağlayan yeni altyapı", kicker_color=BLUE_BRAND)

# 4 Product Cards
prods = [
    ("boiler.jpg", "Endüstriyel Kazanlar", "Buhar, kızgın su & atık ısı kazanları", "Kapasite, basınç ve yakıt cinsi filtreli"),
    ("product_boiler_burner.png", "Endüstriyel Brülörler", "Monoblok & duoblok yüksek verimli brülörler", "Gaz, motorin ve çift yakıt seçenekleri"),
    ("product_fan.png", "Endüstriyel Fanlar", "Ağır sanayi radyal & aksiyal fan sistemleri", "Debi, statik basınç ve ATEX filtreli"),
    ("product_facility.png", "Ekonomizer Sistemleri", "Baca gazından atık ısı geri kazanımı", "Kazan verimini %4-7 artıran sistemler"),
]

for i, (pimg, pname, pdesc, pfeat) in enumerate(prods):
    cx = Inches(0.8 + i * 3.0)
    cy = Inches(1.55)
    cw = Inches(2.75)
    ch = Inches(3.2)

    create_card(s6, cx, cy, cw, ch, bg_color=WHITE, border_color=BORDER_COLOR)

    # Product image
    img_p = IMG_DIR / pimg
    if img_p.exists():
        s6.shapes.add_picture(str(img_p), cx + Inches(0.15), cy + Inches(0.15), width=cw - Inches(0.3), height=Inches(1.5))

    tb = s6.shapes.add_textbox(cx + Inches(0.15), cy + Inches(1.75), cw - Inches(0.3), Inches(1.3))
    tf = tb.text_frame
    tf.word_wrap = True
    tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0

    p1 = tf.paragraphs[0]
    r1 = p1.add_run()
    r1.text = pname
    r1.font.size = Pt(11)
    r1.font.bold = True
    r1.font.color.rgb = TEXT_TITLE

    p2 = tf.add_paragraph()
    p2.space_before = Pt(3)
    r2 = p2.add_run()
    r2.text = pdesc
    r2.font.size = Pt(8.5)
    r2.font.color.rgb = TEXT_MUTED

    p3 = tf.add_paragraph()
    p3.space_before = Pt(3)
    r3 = p3.add_run()
    r3.text = "✓ " + pfeat
    r3.font.size = Pt(8.5)
    r3.font.bold = True
    r3.font.color.rgb = BLUE_BRAND

# Lower Feature Highlights (3 wide cards)
feats = [
    ("Mühendislik Talep Formları", "Basit bir 'iletişim kutusu' yerine; buhar debisi, çalışma basıncı, yakıt cinsi ve fan statik basıncı alanlarını içeren formlar sayesinde satış ekibine doğrudan eksiksiz şartname düşer. Teklif süreci %35 hızlandı."),
    ("Anlık Canlı Arama & 2D/3D CAD", "Kullanıcı klavyeden yazarken sayfa yenilenmeden parça, kılavuz veya şartname anında listelenir. Mühendisler 2D/3D CAD çizimlerini doğrudan indirebilir."),
    ("5 Dilde Tam Eşzamanlı i18n & RTL", "Türkçe, İngilizce, Almanca, Rusça ve Arapça (sağdan sola tam RTL desteği) 38 rotanın tamamında senkronize çalışır. Yönetim panelinden tek tıkla otomatik teknik çeviri.")
]

for i, (ftitle, fdesc) in enumerate(feats):
    cx = Inches(0.8 + i * 4.0)
    cy = Inches(4.9)
    cw = Inches(3.733)
    ch = Inches(1.8)

    create_card(s6, cx, cy, cw, ch, bg_color=WHITE, border_color=BORDER_COLOR)

    # Little blue accent pill
    create_card(s6, cx + Inches(0.15), cy + Inches(0.12), Inches(0.3), Inches(0.05), bg_color=BLUE_BRAND)

    tb = s6.shapes.add_textbox(cx + Inches(0.15), cy + Inches(0.22), cw - Inches(0.3), ch - Inches(0.3))
    tf = tb.text_frame
    tf.word_wrap = True
    tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0

    p1 = tf.paragraphs[0]
    r1 = p1.add_run()
    r1.text = ftitle
    r1.font.size = Pt(11)
    r1.font.bold = True
    r1.font.color.rgb = TEXT_TITLE

    p2 = tf.add_paragraph()
    p2.space_before = Pt(4)
    r2 = p2.add_run()
    r2.text = fdesc
    r2.font.size = Pt(9)
    r2.font.color.rgb = TEXT_BODY

add_footer(s6, 6)

# ══════════════════════════════════════════════════════════════
# SLIDE 7: PROJE 2 KAPAK — SELNİKEL AI
# ══════════════════════════════════════════════════════════════
s7 = prs.slides.add_slide(prs.slide_layouts[6])
set_slide_bg(s7, BG_LIGHT)
add_header(s7, "PROJE 2: KURUMSAL YAPAY ZEKA", "Selnikel AI — RAG & MCP Destekli Mühendislik Asistanı",
           "Şirketin 70 Yıllık Teknik Hafızasını Sıfır Halüsinasyonla Dijital Sermayeye Dönüştüren Sistem", kicker_color=AMBER_BRAND)

# 4 Stat Cards
ai_metrics = [
    ("🧠 1.600+", "Teknik Belge Hafızası", "Kazan, brülör, fan şartnameleri", "Şirket içi onaylı dokümanlar", AMBER_BRAND, AMBER_LIGHT, AMBER_BORDER),
    ("⚡ 4 Saatten 5 Dk'ya", "Şartname & Arıza İnceleme", "200 sayfalık PDF saniyede taranır", "Mühendislerin öğrenme süresi kısaldı", BLUE_BRAND, BLUE_LIGHT, BLUE_BORDER),
    ("🎯 Sıfır Halüsinasyon", "Fail-Closed Çift Doğrulama", "Kanıt yoksa konuşmaz, uydurmaz", "Tıklanabilir sayfa/paragraf delili", GREEN_BRAND, GREEN_LIGHT, GREEN_BORDER),
    ("🔧 5 MCP Motoru", "Termodinamik Hesaplayıcılar", "ASME, ISO, AMCA standartlarında", "Mühendislik hesapları sıfır hatayla", RED_BRAND, RED_LIGHT, RED_BORDER),
]

for i, (val, title, comp, impact, col, bg, bdr) in enumerate(ai_metrics):
    mx = Inches(0.8 + i * 3.0)
    my = Inches(1.6)
    mw = Inches(2.75)
    mh = Inches(2.1)

    create_card(s7, mx, my, mw, mh, bg_color=WHITE, border_color=BORDER_COLOR)

    top_line = s7.shapes.add_shape(MSO_SHAPE.RECTANGLE, mx, my, mw, Inches(0.06))
    top_line.fill.solid()
    top_line.fill.fore_color.rgb = col
    top_line.line.fill.background()

    tb = s7.shapes.add_textbox(mx + Inches(0.15), my + Inches(0.15), mw - Inches(0.3), mh - Inches(0.3))
    tf = tb.text_frame
    tf.word_wrap = True
    tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0

    p_val = tf.paragraphs[0]
    r_v = p_val.add_run()
    r_v.text = val
    r_v.font.size = Pt(21)
    r_v.font.bold = True
    r_v.font.color.rgb = col

    p_t = tf.add_paragraph()
    p_t.space_before = Pt(4)
    r_t = p_t.add_run()
    r_t.text = title
    r_t.font.size = Pt(11)
    r_t.font.bold = True
    r_t.font.color.rgb = TEXT_TITLE

    p_c = tf.add_paragraph()
    p_c.space_before = Pt(4)
    r_c = p_c.add_run()
    r_c.text = comp
    r_c.font.size = Pt(9)
    r_c.font.color.rgb = TEXT_MUTED

    p_i = tf.add_paragraph()
    p_i.space_before = Pt(4)
    r_i = p_i.add_run()
    r_i.text = impact
    r_i.font.size = Pt(9)
    r_i.font.bold = True
    r_i.font.color.rgb = TEXT_BODY

# Lower Section: Why we built Selnikel AI?
create_card(s7, Inches(0.8), Inches(3.9), Inches(11.733), Inches(2.8), bg_color=WHITE, border_color=BORDER_COLOR)

tb_why = s7.shapes.add_textbox(Inches(1.1), Inches(4.05), Inches(11.133), Inches(2.5))
tf_w = tb_why.text_frame
tf_w.word_wrap = True
tf_w.margin_left = tf_w.margin_right = 0

pw_t = tf_w.paragraphs[0]
rw_t = pw_t.add_run()
rw_t.text = "Şirkette Yapay Zeka Kullanan Mühendislerin Yaşadığı İki Büyük Sorun:"
rw_t.font.size = Pt(13)
rw_t.font.bold = True
rw_t.font.color.rgb = TEXT_TITLE

p_w1 = tf_w.add_paragraph()
p_w1.space_before = Pt(8)
r_w1_t = p_w1.add_run()
r_w1_t.text = "1. Yavaşlık ve Dosya Hamallığı: "
r_w1_t.font.bold = True
r_w1_t.font.size = Pt(10.5)
r_w1_t.font.color.rgb = RED_BRAND
r_w1_d = p_w1.add_run()
r_w1_d.text = "Çalışan her soru sorduğunda 50-100 sayfalık PDF'i tekrar tekrar ChatGPT'ye yüklemek zorunda kalıyordu. Yükleme dakikalar sürüyor, tarayıcı kapanınca her şey siliniyor, 5 gün önce sorulan bir konuya dönüldüğünde sil baştan dosya aranıyordu."
r_w1_d.font.size = Pt(10)
r_w1_d.font.color.rgb = TEXT_BODY

p_w2 = tf_w.add_paragraph()
p_w2.space_before = Pt(6)
r_w2_t = p_w2.add_run()
r_w2_t.text = "2. Belirsizlik ve Güvensizlik (Halüsinasyon): "
r_w2_t.font.bold = True
r_w2_t.font.size = Pt(10.5)
r_w2_t.font.color.rgb = RED_BRAND
r_w2_d = p_w2.add_run()
r_w2_d.text = "Klasik yapay zekalar olasılık hesaplayan metin tahmincileridir. Bir kazan basıncını tablodan okuyamadığı an 'uydurur' ya da 'Genelde sanayi standardı 10-16 bar civarındadır' gibi yuvarlak laflar eder. Mühendislikte bir tolerans veya revizyon farkı yüz binlerce Euro'luk hata demektir; dolayısıyla çalışan genel LLM çıktısına güvenip imza atamaz."
r_w2_d.font.size = Pt(10)
r_w2_d.font.color.rgb = TEXT_BODY

p_w3 = tf_w.add_paragraph()
p_w3.space_before = Pt(6)
r_w3 = p_w3.add_run()
r_w3.text = "Çözüm: Şirket ortak ağını sürekli dinleyen, kanıt sayfalarını gösteren RAG mimarisi ve hesap motorları (MCP) geliştirdik."
r_w3.font.size = Pt(10)
r_w3.font.bold = True
r_w3.font.color.rgb = GREEN_BRAND

add_footer(s7, 7)

# ══════════════════════════════════════════════════════════════
# SLIDE 8: PROJE 2 — AI MİMARİSİ (3 ADIMDA NASIL ÇALIŞIYOR?)
# ══════════════════════════════════════════════════════════════
s8 = prs.slides.add_slide(prs.slide_layouts[6])
set_slide_bg(s8, BG_LIGHT)
add_header(s8, "PROJE 2: TEKNİK ÇÖZÜM MİMARİSİ", "Selnikel AI Nasıl Çalışıyor? (3 Aşamalı Güvenlikli RAG)",
           "Şirket kütüphanesini açıp doğrudan ilgili sayfayı okuyan ve delillendiren altyapı", kicker_color=AMBER_BRAND)

steps = [
    ("AŞAMA 1", "Akıllı Doküman Parçalama & GPU OCR", BLUE_BRAND, BLUE_LIGHT, BLUE_BORDER,
     "Klasik yapay zekalar PDF'leri dümdüz metin olarak çeker; fakat bir Selnikel şartnamesindeki kritik veri hücre hücre tablolarda ve teknik föylerdedir.",
     [
         "Docling ve RapidOCR ile GPU üzerinde tarama",
         "Tablolar parçalanmaz; kolon hiyerarşisi ve hücre koordinatları korunur",
         "Taranmış resimler dahi üzerindeki tolerans değerleriyle indekslenir",
         "Şirket ortak ağındaki 1.600+ doküman hazır bekletilir"
     ]),
    ("AŞAMA 2", "Hibrit Kurumsal Hafıza (Qdrant + BGE-M3)", AMBER_BRAND, AMBER_LIGHT, AMBER_BORDER,
     "Dokümanlar taranıp şirketin yerel vektör veritabanına aktarılır; hem anlamsal hem tam kod eşleşmesi yapılır.",
     [
         "Anlamsal Arama: 'aşırı basınç koruması' arandığında belgedeki 'emniyet ventili açma basıncı'nı bulur",
         "Kelimesi Kelimesine BM25: 'EN 12953-3' veya 'SEL-2024-V02' gibi teknik standartları birebir yakalar",
         "Hız Farkı: Dosya yükleme beklemesi sıfır; 1.600 dokümanda 150-300 ms içinde arama tamamlanır",
         "Ağdaki klasörlerde revizyon yapıldığı anda hafıza otomatik güncellenir"
     ]),
    ("AŞAMA 3", "Çift Kapılı Doğrulama (Fail-Closed)", GREEN_BRAND, GREEN_LIGHT, GREEN_BORDER,
     "Sistemimizin en büyük farkı güvenlik öncelikli çalışmasıdır; hiçbir zaman tahmin yürütmez.",
     [
         "Ön Kapı: Soru şirket belgeleriyle %100 eşleşmiyorsa 'Bu konuyla ilgili doğrulanmış şirket belgesi bulunamadı' der. Uydurma sıfırdır.",
         "Son Kapı: Cevap üretildiğinde validate_numeric_claims servisi metindeki sayıları (16 bar, 250 °C) belgedeki orijinal hücreyle teyit eder.",
         "Tıklanabilir Kanıt: Çıktının altında orijinal PDF'in sayfası ve paragrafı rozet olarak sunulur.",
         "Mühendis cevabı denetlemek için saniyeler içinde kaynak sayfaya bakar."
     ]),
]

for i, (kck, stitle, scol, sbg, sbdr, sdesc, sitems) in enumerate(steps):
    cx = Inches(0.8 + i * 4.0)
    cy = Inches(1.55)
    cw = Inches(3.733)
    ch = Inches(5.15)

    create_card(s8, cx, cy, cw, ch, bg_color=WHITE, border_color=BORDER_COLOR)

    # Top step banner
    top_bar = s8.shapes.add_shape(MSO_SHAPE.RECTANGLE, cx, cy, cw, Inches(0.4))
    top_bar.fill.solid()
    top_bar.fill.fore_color.rgb = sbg
    top_bar.line.color.rgb = sbdr
    top_bar.line.width = Pt(1)

    tb_k = s8.shapes.add_textbox(cx + Inches(0.2), cy + Inches(0.08), cw - Inches(0.4), Inches(0.25))
    tb_k.text_frame.margin_left = tb_k.text_frame.margin_right = 0
    pk = tb_k.text_frame.paragraphs[0]
    rk = pk.add_run()
    rk.text = kck
    rk.font.size = Pt(9)
    rk.font.bold = True
    rk.font.color.rgb = scol

    # Title
    tb_t = s8.shapes.add_textbox(cx + Inches(0.2), cy + Inches(0.5), cw - Inches(0.4), Inches(0.6))
    tb_t.text_frame.word_wrap = True
    tb_t.text_frame.margin_left = tb_t.text_frame.margin_right = 0
    pt = tb_t.text_frame.paragraphs[0]
    rt = pt.add_run()
    rt.text = stitle
    rt.font.size = Pt(12)
    rt.font.bold = True
    rt.font.color.rgb = TEXT_TITLE

    # Description
    tb_d = s8.shapes.add_textbox(cx + Inches(0.2), cy + Inches(1.15), cw - Inches(0.4), Inches(0.85))
    tb_d.text_frame.word_wrap = True
    tb_d.text_frame.margin_left = tb_d.text_frame.margin_right = 0
    pd = tb_d.text_frame.paragraphs[0]
    rd = pd.add_run()
    rd.text = sdesc
    rd.font.size = Pt(9)
    rd.font.color.rgb = TEXT_MUTED

    # Bullet items
    tb_b = s8.shapes.add_textbox(cx + Inches(0.2), cy + Inches(2.1), cw - Inches(0.4), Inches(2.9))
    tf_b = tb_b.text_frame
    tf_b.word_wrap = True
    tf_b.margin_left = tf_b.margin_right = 0
    for j, item in enumerate(sitems):
        p = tf_b.paragraphs[0] if j == 0 else tf_b.add_paragraph()
        p.space_before = Pt(6)
        r_chk = p.add_run()
        r_chk.text = "• "
        r_chk.font.bold = True
        r_chk.font.color.rgb = scol
        r_txt = p.add_run()
        r_txt.text = item
        r_txt.font.size = Pt(9)
        r_txt.font.color.rgb = TEXT_BODY

add_footer(s8, 8)

# ══════════════════════════════════════════════════════════════
# SLIDE 9: PROJE 2 — AI CANLI ARAYÜZÜ & MCP MOTORLARI
# ══════════════════════════════════════════════════════════════
s9 = prs.slides.add_slide(prs.slide_layouts[6])
set_slide_bg(s9, BG_LIGHT)
add_header(s9, "PROJE 2: CANLI SİSTEM & MCP ARAÇLARI", "Selnikel AI Arayüzü ve 5 Termodinamik Hesap Motoru",
           "RAG yapay zekanın hafızası ise, MCP onun eli, ayağı ve mühendislik işlem yeteneğidir", kicker_color=AMBER_BRAND)

# Left: AI Workspace Picture in Card
create_card(s9, Inches(0.8), Inches(1.55), Inches(6.5), Inches(5.15), bg_color=WHITE, border_color=BORDER_COLOR)

# Title inside card
tb_lt = s9.shapes.add_textbox(Inches(1.0), Inches(1.7), Inches(6.1), Inches(0.35))
tb_lt.text_frame.margin_left = tb_lt.text_frame.margin_right = 0
plt = tb_lt.text_frame.paragraphs[0]
rlt = plt.add_run()
rlt.text = "Canlı Mühendislik Çalışma Alanı (Web Arayüzü)"
rlt.font.size = Pt(12)
rlt.font.bold = True
rlt.font.color.rgb = TEXT_TITLE

ai_ws_path = IMG_DIR / "selnikel_ai_workspace.png"
if ai_ws_path.exists():
    s9.shapes.add_picture(str(ai_ws_path), Inches(1.0), Inches(2.1), width=Inches(6.1), height=Inches(3.7))

# Caption under screenshot
tb_cap = s9.shapes.add_textbox(Inches(1.0), Inches(5.9), Inches(6.1), Inches(0.65))
tf_cap = tb_cap.text_frame
tf_cap.word_wrap = True
tf_cap.margin_left = tf_cap.margin_right = 0
p_cap = tf_cap.paragraphs[0]
r_cap1 = p_cap.add_run()
r_cap1.text = "Örnek Sorgu: "
r_cap1.font.bold = True
r_cap1.font.size = Pt(9)
r_cap1.font.color.rgb = AMBER_BRAND
r_cap2 = p_cap.add_run()
r_cap2.text = '"12 bar buhar kazanında su seviyesi alarmı neden verir?"\n'
r_cap2.font.size = Pt(9)
r_cap2.font.color.rgb = TEXT_BODY
r_cap3 = p_cap.add_run()
r_cap3.text = "Kaynak Delili: Kazan_Bakim_Rev04.pdf (Sayfa 42, Tablo 3) — Milisaniyede yanıt."
r_cap3.font.size = Pt(8.5)
r_cap3.font.bold = True
r_cap3.font.color.rgb = GREEN_BRAND

# Right: 5 MCP Thermodynamic Engines
create_card(s9, Inches(7.5), Inches(1.55), Inches(5.033), Inches(5.15), bg_color=WHITE, border_color=BORDER_COLOR)

tb_rt = s9.shapes.add_textbox(Inches(7.7), Inches(1.7), Inches(4.6), Inches(0.65))
tb_rt.text_frame.word_wrap = True
tb_rt.text_frame.margin_left = tb_rt.text_frame.margin_right = 0
prt = tb_rt.text_frame.paragraphs[0]
rrt = prt.add_run()
rrt.text = "5 Adet Geliştirilen MCP Mühendislik Motoru"
rrt.font.size = Pt(12)
rrt.font.bold = True
rrt.font.color.rgb = TEXT_TITLE
prt2 = tb_rt.text_frame.add_paragraph()
prt2.space_before = Pt(2)
rrt2 = prt2.add_run()
rrt2.text = "Mühendislerin saatlerce formül çözmesini engelleyen araçlar:"
rrt2.font.size = Pt(9)
rrt2.font.color.rgb = TEXT_MUTED

mcp_list = [
    ("1. Kazan Verimlilik Motoru (calculate_boiler_efficiency)", "ASME PTC 4 standardına göre baca gazı kayıpları ve radyasyon kayıplarıyla net verim hesaplar."),
    ("2. Emniyet Ventili Boyutlandırma (safety_valve_sizing)", "EN ISO 4126 standardına uygun orifis alanı ve tahliye kapasitesi boyutlandırması."),
    ("3. Endüstriyel Fan Debisi & Basınç (calculate_fan_airflow)", "AMCA 210 standardına göre gaz yoğunluğu, statik basınç ve gerekli motor gücü hesabı."),
    ("4. Brülör Yanma & Stokiyometri (burner_combustion)", "Doğalgaz ve fuel-oil yakıtlarında teorik hava ihtiyacı ve baca gazı emisyon kontrolü."),
    ("5. Ekonomizer Isı Geri Kazanımı (economizer_recovery)", "Baca gazından geri kazanılan ısı miktarı ve yıllık doğalgaz tasarruf tutarı.")
]

for idx, (mtitle, mdesc) in enumerate(mcp_list):
    my = Inches(2.45 + idx * 0.82)
    create_card(s9, Inches(7.7), my, Inches(4.633), Inches(0.75), bg_color=BG_LIGHT, border_color=BORDER_COLOR)

    tb_m = s9.shapes.add_textbox(Inches(7.85), my + Inches(0.08), Inches(4.333), Inches(0.6))
    tf_m = tb_m.text_frame
    tf_m.word_wrap = True
    tf_m.margin_left = tf_m.margin_top = tf_m.margin_right = tf_m.margin_bottom = 0

    pm1 = tf_m.paragraphs[0]
    rm1 = pm1.add_run()
    rm1.text = mtitle
    rm1.font.size = Pt(9.5)
    rm1.font.bold = True
    rm1.font.color.rgb = AMBER_BRAND

    pm2 = tf_m.add_paragraph()
    pm2.space_before = Pt(2)
    rm2 = pm2.add_run()
    rm2.text = mdesc
    rm2.font.size = Pt(8.5)
    rm2.font.color.rgb = TEXT_BODY

add_footer(s9, 9)

# ══════════════════════════════════════════════════════════════
# SLIDE 10: PROJE 2 — CHATGPT VS SELNİKEL AI
# ══════════════════════════════════════════════════════════════
s10 = prs.slides.add_slide(prs.slide_layouts[6])
set_slide_bg(s10, BG_LIGHT)
add_header(s10, "PROJE 2: SOMUT KAZANIM ANALİZİ", "Normal Yapay Zeka (ChatGPT) vs Selnikel AI",
           "Şirketin ve mühendislerin iş yapış biçiminde yaratılan net farklar", kicker_color=AMBER_BRAND)

col_w_10 = [Inches(2.5), Inches(4.5), Inches(4.733)]
col_x_10 = [Inches(0.8), Inches(3.3), Inches(7.8)]
hdr_10 = ["KRİTİK KONU", "GENEL YAPAY ZEKA (ChatGPT vb.)", "SELNİKEL AI (RAG + MCP)"]
hdr_bg_10 = [SLATE_LIGHT, RED_LIGHT, GREEN_LIGHT]
hdr_col_10 = [TEXT_TITLE, RED_BRAND, GREEN_BRAND]

for i in range(3):
    create_card(s10, col_x_10[i], Inches(1.55), col_w_10[i], Inches(0.42), bg_color=hdr_bg_10[i], border_color=BORDER_COLOR)
    tb = s10.shapes.add_textbox(col_x_10[i] + Inches(0.1), Inches(1.63), col_w_10[i] - Inches(0.2), Inches(0.3))
    tb.text_frame.margin_left = tb.text_frame.margin_right = 0
    p = tb.text_frame.paragraphs[0]
    r = p.add_run()
    r.text = hdr_10[i]
    r.font.size = Pt(9.5)
    r.font.bold = True
    r.font.color.rgb = hdr_col_10[i]

comp_data_10 = [
    ("Zaman & Hız", "Her soru için 50-100 MB dosya yükle, bekle. Sohbet bitince hafıza silinir, sil baştan yükle.", "Şirket hafızası hazır bekler. Soru sorulduğu an 2 saniyede doğrudan teknik cevap gelir."),
    ("Doğruluk & Güvenilirlik", "Taranmış PDF'leri ve tabloları kaçırır; emin olmadığı yerde 'tahmin yürütür' (halüsinasyon riski).", "Tablo ve taranmış belgeleri GPU OCR ile okur. Kanıt yoksa konuşmaz, asla uydurmaz."),
    ("Hesap Verilebilirlik (Kanıt)", "Cevabın nereden geldiği belirsizdir. Mühendis doğrulamak için yine yüzlerce sayfa dosya arar.", "Cevabın yanına tıklanabilir sayfa, paragraf ve tablo rozeti koyar. Tıklayan orijinal kanıtı görür."),
    ("Kurumsal Güncellik", "Ağdaki dosya değiştiğinde yapay zekanın haberi olmaz; eski hatalı veriyi anlatmaya devam eder.", "sync_folder MCP ile klasörleri canlı izler; Rev.03 yüklendiği an tüm şirket için güncellenir."),
    ("Mühendislik Hesapları", "20 sekmeli karmaşık Excel tablolarını ve formülleri çözemez; kaba tahmin yürütür.", "5 adet MCP motoruyla kazan verimi, emniyet ventili ve fan debisini ASME/ISO standartlarında çözer.")
]

for row_idx, rdata in enumerate(comp_data_10):
    ry = Inches(2.05 + row_idx * 0.88)
    rbg = WHITE if row_idx % 2 == 0 else BG_LIGHT

    for col_idx in range(3):
        create_card(s10, col_x_10[col_idx], ry, col_w_10[col_idx], Inches(0.82), bg_color=rbg, border_color=BORDER_COLOR)
        tb = s10.shapes.add_textbox(col_x_10[col_idx] + Inches(0.12), ry + Inches(0.08), col_w_10[col_idx] - Inches(0.24), Inches(0.66))
        tf = tb.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0
        p = tf.paragraphs[0]
        r = p.add_run()
        r.text = rdata[col_idx]
        r.font.size = Pt(9)

        if col_idx == 0:
            r.font.bold = True
            r.font.color.rgb = TEXT_TITLE
        elif col_idx == 1:
            r.font.color.rgb = RED_BRAND
        else:
            r.font.bold = True
            r.font.color.rgb = GREEN_BRAND

add_footer(s10, 10)

# ══════════════════════════════════════════════════════════════
# SLIDE 11: PROJE 3 KAPAK — SELNİKEL ONE
# ══════════════════════════════════════════════════════════════
s11 = prs.slides.add_slide(prs.slide_layouts[6])
set_slide_bg(s11, BG_LIGHT)
add_header(s11, "PROJE 3: FABRİKA, LOJİSTİK & İK PLATFORMU", "Selnikel One — Kurumsal Dijital Yönetim Omurgası",
           '"Birlikte, Yolunda." — İmalat çarklarını, servis filosunu ve çalışan refahını tek masada buluşturan sistem', kicker_color=GREEN_BRAND)

# Top Big Philosophy Card
create_card(s11, Inches(0.8), Inches(1.55), Inches(11.733), Inches(1.15), bg_color=WHITE, border_color=BORDER_COLOR)
tb_phil = s11.shapes.add_textbox(Inches(1.1), Inches(1.68), Inches(11.133), Inches(0.9))
tf_ph = tb_phil.text_frame
tf_ph.word_wrap = True
tf_ph.margin_left = tf_ph.margin_right = 0

pph1 = tf_ph.paragraphs[0]
rph1 = pph1.add_run()
rph1.text = "Selnikel One Neden Geliştirildi?"
rph1.font.size = Pt(13)
rph1.font.bold = True
rph1.font.color.rgb = GREEN_BRAND

pph2 = tf_ph.add_paragraph()
pph2.space_before = Pt(4)
rph2 = pph2.add_run()
rph2.text = "Selnikel bünyesinde sahadaki imalat birimlerinden personel servislerine, İK formlarından yemekhane ve sağlık randevularına kadar yürütülen süreçler birbirinden kopuk veya basılı kağıtlarla yönetiliyordu. Amacımız; üretim kayıplarını engellemek, servis araçlarında yakıt tasarrufu sağlamak ve çalışan bağlılığını tek bir kurumsal süper-uygulamada (All-in-One Platform) toplamaktır."
rph2.font.size = Pt(10)
rph2.font.color.rgb = TEXT_BODY

# 5 Module Big Cards
mods = [
    ("MODÜL 1", "Servis Filosu & Canlı GPS", GREEN_BRAND, GREEN_LIGHT, GREEN_BORDER,
     "Kendi servislerimizin canlı takibi. İzinli personelin durağı güzergahtan otomatik elenir; şoför en kısa yakıt rotasından gider."),
    ("MODÜL 2", "IFS ERP Entegre PDKS", BLUE_BRAND, BLUE_LIGHT, BLUE_BORDER,
     "Turnike kart hareketleri cebe iner. Çalışan günlük mesai süresini (7s 23dk) ve 14 günlük giriş-çıkış geçmişini şeffafça görür."),
    ("MODÜL 3", "Atölye Görev Takibi", AMBER_BRAND, AMBER_LIGHT, AMBER_BORDER,
     "Kazan, brülör, kaynak şefleri tek tıkla iş atar. Usta telefondan 'Başla' ve 'Bitti' der; malzeme eksikliği anında fark edilir."),
    ("MODÜL 4", "İK Form Motoru", RED_BRAND, RED_LIGHT, RED_BORDER,
     "Yıllık 360° çalışma arkadaşı değerlendirmesi, eğitim talepleri ve İSG bildirimleri kağıt yerine anlık dijital toplanır."),
    ("MODÜL 5", "Fabrika Yaşamı", RGBColor(0x7C, 0x3A, 0xED), RGBColor(0xF5, 0xF3, 0xFF), RGBColor(0xDD, 0xD6, 0xFE),
     "Günlük 4 kap yemek menüsü & alerjenler, gizli psikolog/diyetisyen randevusu ve anonim öneri/şikayet kanalı."),
]

for i, (kck, mtitle, mcol, mbg, mbdr, mdesc) in enumerate(mods):
    cx = Inches(0.8 + i * 2.4)
    cy = Inches(2.9)
    cw = Inches(2.18)
    ch = Inches(3.8)

    create_card(s11, cx, cy, cw, ch, bg_color=WHITE, border_color=BORDER_COLOR)

    top_bar = s11.shapes.add_shape(MSO_SHAPE.RECTANGLE, cx, cy, cw, Inches(0.35))
    top_bar.fill.solid()
    top_bar.fill.fore_color.rgb = mbg
    top_bar.line.color.rgb = mbdr
    top_bar.line.width = Pt(1)

    tb_k = s11.shapes.add_textbox(cx + Inches(0.1), cy + Inches(0.06), cw - Inches(0.2), Inches(0.25))
    tb_k.text_frame.margin_left = tb_k.text_frame.margin_right = 0
    pk = tb_k.text_frame.paragraphs[0]
    pk.alignment = PP_ALIGN.CENTER
    rk = pk.add_run()
    rk.text = kck
    rk.font.size = Pt(8.5)
    rk.font.bold = True
    rk.font.color.rgb = mcol

    tb_t = s11.shapes.add_textbox(cx + Inches(0.12), cy + Inches(0.45), cw - Inches(0.24), Inches(0.65))
    tb_t.text_frame.word_wrap = True
    tb_t.text_frame.margin_left = tb_t.text_frame.margin_right = 0
    pt = tb_t.text_frame.paragraphs[0]
    rt = pt.add_run()
    rt.text = mtitle
    rt.font.size = Pt(11)
    rt.font.bold = True
    rt.font.color.rgb = TEXT_TITLE

    tb_d = s11.shapes.add_textbox(cx + Inches(0.12), cy + Inches(1.15), cw - Inches(0.24), Inches(2.5))
    tf_d = tb_d.text_frame
    tf_d.word_wrap = True
    tf_d.margin_left = tf_d.margin_right = 0
    pd = tf_d.paragraphs[0]
    rd = pd.add_run()
    rd.text = mdesc
    rd.font.size = Pt(9)
    rd.font.color.rgb = TEXT_BODY

add_footer(s11, 11)

# ══════════════════════════════════════════════════════════════
# SLIDE 12: PROJE 3 — SAHADAKİ MEVCUT OPERASYONEL SORUNLAR
# ══════════════════════════════════════════════════════════════
s12 = prs.slides.add_slide(prs.slide_layouts[6])
set_slide_bg(s12, BG_LIGHT)
add_header(s12, "PROJE 3: FABRİKA SAHASI ANALİZİ", "Sahada Hangi Operasyonel Problemleri Yaşıyorduk?",
           "Fabrikada gözlemlediğim ve çalışanlarla görüşerek teyit ettiğim aksaklıklar", kicker_color=RED_BRAND)

field_probs = [
    ("Servis Filosu & Ulaşım", "Kendi servis araçlarımızın nerede olduğu bilinmiyor; personel soğukta/sıcakta durakta bekliyor. İzinli olan personelin servise binmeyeceği şoföre ulaşmıyor; araçlar boş duraklara girip gereksiz km ve yakıt harcıyor.", RED_BRAND),
    ("PDKS & Turnike Takibi", "Çalışan nizamiye turnikesinden kart bastığında bilginin IFS sistemine işlenip işlenmediğini ve mesai saatini göremiyor. Şeffaflık eksikliği oluşuyor; çalışan ay sonu bordroya kadar mesaisinden habersiz kalıyor.", AMBER_BRAND),
    ("Birim Bazlı Görev Dağılımı", "Atölyelerde (Kazan, Brülör, Talaşlı, Kaynak vb.) iş atamaları sözlü, kağıt veya yazı tahtalarından yapılıyor. Hangi ustanın hangi işte olduğu, hangi görevin bittiği veya malzeme beklediği anlık izlenemiyor.", BLUE_BRAND),
    ("İK Değerlendirme Süreçleri", "Yıllık çalışma arkadaşı değerlendirmeleri veya şirket anketleri basılı A4 kağıtlarla yürütülüyor. Formların toplanması ve analizi haftalar sürüyor; basılı kağıtlar arşivlerde atıl kalıyor.", RED_BRAND),
    ("Fabrika Yaşamı & İletişim", "Yemek menüsü panoya asılıyor, sağlık/diyetisyen randevuları telefonla alınıyor (çalışanlar mahremiyet kaygısı yaşıyor), öneri ve şikayetler için resmi güvenli dijital bir kanal bulunmuyor.", RGBColor(0x7C, 0x3A, 0xED))
]

for i, (ptitle, pdesc, pcol) in enumerate(field_probs):
    cy = Inches(1.55 + i * 1.05)
    cw = Inches(11.733)
    ch = Inches(0.95)

    create_card(s12, Inches(0.8), cy, cw, ch, bg_color=WHITE, border_color=BORDER_COLOR)

    # Left colored vertical indicator
    lbar = s12.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0.8), cy, Inches(0.08), ch)
    lbar.fill.solid()
    lbar.fill.fore_color.rgb = pcol
    lbar.line.fill.background()

    tb = s12.shapes.add_textbox(Inches(1.1), cy + Inches(0.12), Inches(11.2), Inches(0.75))
    tf = tb.text_frame
    tf.word_wrap = True
    tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0

    p1 = tf.paragraphs[0]
    r1 = p1.add_run()
    r1.text = ptitle
    r1.font.size = Pt(11)
    r1.font.bold = True
    r1.font.color.rgb = pcol

    p2 = tf.add_paragraph()
    p2.space_before = Pt(3)
    r2 = p2.add_run()
    r2.text = pdesc
    r2.font.size = Pt(9.5)
    r2.font.color.rgb = TEXT_BODY

add_footer(s12, 12)

# ══════════════════════════════════════════════════════════════
# SLIDE 13: PROJE 3 — SELNİKEL ONE 5 MODÜL ÇÖZÜM
# ══════════════════════════════════════════════════════════════
s13 = prs.slides.add_slide(prs.slide_layouts[6])
set_slide_bg(s13, BG_LIGHT)
add_header(s13, "PROJE 3: SELNİKEL ONE ÇÖZÜM MİMARİSİ", "5 Operasyonel Modülde Neyi Çözüyoruz?",
           "Fabrika sahasındaki aksaklıkları ortadan kaldıran akıllı dijital fonksiyonlar", kicker_color=GREEN_BRAND)

sol_mods = [
    ("Modül 1: Servis & Rota", GREEN_BRAND, GREEN_LIGHT, GREEN_BORDER,
     [
         "Canlı Harita Takibi: Çalışan sabah/akşam servisinin durağına kaç dakika kaldığını haritada görür.",
         "Akıllı Rota: İzinli personelin durağı otomatik elenir; şoför gereksiz durağa girmez, yakıt tasarrufu sağlanır.",
         "Vardiya Çıkış Hazırlığı: Amir tek ekrandan 8 servisin çıkış hazırlığını ve doluluklarını eşzamanlı izler."
     ]),
    ("Modül 2: IFS Entegre PDKS", BLUE_BRAND, BLUE_LIGHT, BLUE_BORDER,
     [
         "Turnike Verisi Cepte: Fabrika nizamiye kart hareketleri anında çalışanın telefonuna yansır.",
         "Canlı Mesai Göstergesi: 'Bugünkü Durum: Mesaide (6s 40dk)' anlık olarak izlenir.",
         "14 Günlük Geçmiş: Çalışan giriş-çıkış hareketlerini inceleyebilir; şeffaflık sağlanır."
     ]),
    ("Modül 3: Atölye Görev Takibi", AMBER_BRAND, AMBER_LIGHT, AMBER_BORDER,
     [
         "Birim Şefi Paneli: İmalat şefi (Kazan, Brülör vb.) personeline doğrudan iş ve termin atar.",
         "Usta Mobil Ekranı: Çalışan telefondan 'Başla' ve 'Tamamlandı' der; iş takibi netleşir.",
         "Darboğaz Tespiti: Malzeme eksikliği veya tezgâh arızası anında sisteme not düşülür."
     ]),
    ("Modül 4: İK Değerlendirme", RED_BRAND, RED_LIGHT, RED_BORDER,
     [
         "360° Peer Review: Personelin ekip arkadaşlarını kurumsal kriterlere göre puanlaması sağlanır.",
         "Dinamik Anket & Form: Memnuniyet, eğitim ihtiyaç ve İSG ramak kala formları tek tıkla açılır.",
         "Anlık İK Analizi: Formlar kağıt yerine İK panelinde anlık grafiklerle toplanır."
     ]),
    ("Modül 5: Fabrika Yaşamı", RGBColor(0x7C, 0x3A, 0xED), RGBColor(0xF5, 0xF3, 0xFF), RGBColor(0xDD, 0xD6, 0xFE),
     [
         "4 Kap Yemek Menüsü: Günlük menü, kalori ve alerjen uyarıları çalışanın cebindedir.",
         "Gizli Sağlık Randevusu: Psikolog ve diyetisyen için 45 dk'lık uygun slotlar seçilir (tam gizlilik).",
         "Anonim Öneri/Şikayet: Kimlik görünmeden şikayet iletilir; İK resmi çözüm yanıtı girer."
     ]),
]

for i, (mtitle, mcol, mbg, mbdr, mbullets) in enumerate(sol_mods):
    col = i % 3 if i < 3 else (i - 3)
    row = 0 if i < 3 else 1
    cw = Inches(3.733) if i < 3 else Inches(5.7)
    cx = Inches(0.8 + col * 4.0) if i < 3 else Inches(0.8 + col * 5.95)
    cy = Inches(1.55) if row == 0 else Inches(4.2)
    ch = Inches(2.5) if row == 0 else Inches(2.5)

    create_card(s13, cx, cy, cw, ch, bg_color=WHITE, border_color=BORDER_COLOR)

    top_line = s13.shapes.add_shape(MSO_SHAPE.RECTANGLE, cx, cy, cw, Inches(0.05))
    top_line.fill.solid()
    top_line.fill.fore_color.rgb = mcol
    top_line.line.fill.background()

    tb = s13.shapes.add_textbox(cx + Inches(0.15), cy + Inches(0.12), cw - Inches(0.3), ch - Inches(0.2))
    tf = tb.text_frame
    tf.word_wrap = True
    tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0

    p_t = tf.paragraphs[0]
    r_t = p_t.add_run()
    r_t.text = mtitle
    r_t.font.size = Pt(11)
    r_t.font.bold = True
    r_t.font.color.rgb = mcol

    for b in mbullets:
        p_b = tf.add_paragraph()
        p_b.space_before = Pt(4)
        r_chk = p_b.add_run()
        r_chk.text = "✓ "
        r_chk.font.bold = True
        r_chk.font.color.rgb = mcol
        r_txt = p_b.add_run()
        r_txt.text = b
        r_txt.font.size = Pt(8.5)
        r_txt.font.color.rgb = TEXT_BODY

add_footer(s13, 13)

# ══════════════════════════════════════════════════════════════
# SLIDE 14: PROJE 3 — MOBİL UYGULAMA EKRANLARI
# ══════════════════════════════════════════════════════════════
s14 = prs.slides.add_slide(prs.slide_layouts[6])
set_slide_bg(s14, BG_LIGHT)
add_header(s14, "PROJE 3: KULLANICI ARAYÜZLERİ", "Selnikel One: Geliştirilen Mobil Uygulama Ekranları",
           "Personel ve sürücüler için hazırlanan kullanıcı dostu mobil arayüzler", kicker_color=GREEN_BRAND)

mobile_screens = [
    ("mobile_login.png", "1. Giriş Ekranı", "Sicil No & Şifre ile güvenli oturum açma"),
    ("mobile_employee.png", "2. Çalışan Paneli", "Servis durağı, plaka & PDKS mesai takibi"),
    ("mobile_driver.png", "3. Şoför Sefer Modu", "Tek tuşla sefer başlatma & rota navigasyonu"),
    ("mobile_manifest.png", "4. Canlı Manifesto", "Durak durak binen personel listesi"),
    ("mobile_telemetry.png", "5. GPS Telemetri", "Tünellerde kesintisiz çalışan offline buffer"),
]

for i, (mimg, mname, mdesc) in enumerate(mobile_screens):
    cx = Inches(0.8 + i * 2.4)
    cy = Inches(1.55)
    cw = Inches(2.18)
    ch = Inches(5.15)

    create_card(s14, cx, cy, cw, ch, bg_color=WHITE, border_color=BORDER_COLOR)

    # Header inside card
    tb_h = s14.shapes.add_textbox(cx + Inches(0.1), cy + Inches(0.1), cw - Inches(0.2), Inches(0.3))
    tb_h.text_frame.margin_left = tb_h.text_frame.margin_right = 0
    ph = tb_h.text_frame.paragraphs[0]
    rh = ph.add_run()
    rh.text = mname
    rh.font.size = Pt(10)
    rh.font.bold = True
    rh.font.color.rgb = TEXT_TITLE

    # Image
    img_path = IMG_DIR / mimg
    if img_path.exists():
        s14.shapes.add_picture(str(img_path), cx + Inches(0.1), cy + Inches(0.45), width=cw - Inches(0.2), height=Inches(3.85))

    # Caption at bottom of card
    tb_c = s14.shapes.add_textbox(cx + Inches(0.1), cy + Inches(4.35), cw - Inches(0.2), Inches(0.7))
    tf_c = tb_c.text_frame
    tf_c.word_wrap = True
    tf_c.margin_left = tf_c.margin_top = tf_c.margin_right = tf_c.margin_bottom = 0
    pc = tf_c.paragraphs[0]
    rc = pc.add_run()
    rc.text = mdesc
    rc.font.size = Pt(8)
    rc.font.color.rgb = TEXT_MUTED

add_footer(s14, 14)

# ══════════════════════════════════════════════════════════════
# SLIDE 15: ROTA OPTİMİZASYONU & SOMUT FİNANSAL KAZANÇ
# ══════════════════════════════════════════════════════════════
s15 = prs.slides.add_slide(prs.slide_layouts[6])
set_slide_bg(s15, BG_LIGHT)
add_header(s15, "PROJE 3: ROTA OPTİMİZASYONU & ROI", "Servis Güzergah Optimizasyonu ve Finansal Tasarruf",
           "148 çalışanın adres verisiyle OR-Tools VRPTW ve Valhalla algoritmik modelleme sonuçları", kicker_color=GREEN_BRAND)

# Left: Route Map Graphic in Card
create_card(s15, Inches(0.8), Inches(1.55), Inches(5.8), Inches(5.15), bg_color=WHITE, border_color=BORDER_COLOR)

tb_mapt = s15.shapes.add_textbox(Inches(1.0), Inches(1.7), Inches(5.4), Inches(0.35))
tb_mapt.text_frame.margin_left = tb_mapt.text_frame.margin_right = 0
pmapt = tb_mapt.text_frame.paragraphs[0]
rmapt = pmapt.add_run()
rmapt.text = "124 Duraklı Akıllı Güzergah Haritası"
rmapt.font.size = Pt(12)
rmapt.font.bold = True
rmapt.font.color.rgb = TEXT_TITLE

map_path = IMG_DIR / "map_routes.png"
if map_path.exists():
    s15.shapes.add_picture(str(map_path), Inches(1.0), Inches(2.1), width=Inches(5.4), height=Inches(3.6))

tb_mapsub = s15.shapes.add_textbox(Inches(1.0), Inches(5.8), Inches(5.4), Inches(0.75))
tf_ms = tb_mapsub.text_frame
tf_ms.word_wrap = True
tf_ms.margin_left = tf_ms.margin_right = 0
pms = tf_ms.paragraphs[0]
rms = pms.add_run()
rms.text = "148 çalışanın ev adresleri güvenli 124 durağa kümelenerek matematiksel VRPTW modeliyle optimize edildi."
rms.font.size = Pt(9)
rms.font.color.rgb = TEXT_MUTED

# Right: 4 Concrete Financial & Operational Cards
rois = [
    ("4 Servis Aracı İptali", "-4 Kiralık Araç Tasarrufu", "Eski: 15 Hat → Yeni: 11 Hat ile fabrika çalışanlarının tamamı taşınmaktadır.", GREEN_BRAND),
    ("Günde 510 km Daha Az Yol", "-%40.4 Yakıt & Mesafe Düşüşü", "Eski: 1.262 km/gün → Yeni: 752 km/gün (Yıllık 127.500 km daha az yıpranma).", BLUE_BRAND),
    ("Ayda ₺233.000 Net Tasarruf", "Yılda ~₺2.8 Milyon Nakit Getiri", "Yalnızca 4 aracın kira ve yakıt tasarrufu şirkete her ay net nakit kalmaktadır.", RED_BRAND),
    ("< 60 Gün Geri Dönüş Süresi", "Payback Period < 2 Ay", "Yazılım altyapı yatırımı ilk 2 ay içerisinde sağlanan tasarrufla kendini amorti eder.", AMBER_BRAND),
]

for idx, (rtitle, rsub, rdesc, rcol) in enumerate(rois):
    ry = Inches(1.55 + idx * 1.3)
    create_card(s15, Inches(6.8), ry, Inches(5.733), Inches(1.18), bg_color=WHITE, border_color=BORDER_COLOR)

    lbar = s15.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(6.8), ry, Inches(0.08), Inches(1.18))
    lbar.fill.solid()
    lbar.fill.fore_color.rgb = rcol
    lbar.line.fill.background()

    tb = s15.shapes.add_textbox(Inches(7.05), ry + Inches(0.1), Inches(5.3), Inches(0.98))
    tf = tb.text_frame
    tf.word_wrap = True
    tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0

    p1 = tf.paragraphs[0]
    r1 = p1.add_run()
    r1.text = rtitle + " — "
    r1.font.size = Pt(11)
    r1.font.bold = True
    r1.font.color.rgb = rcol
    r1_s = p1.add_run()
    r1_s.text = rsub
    r1_s.font.size = Pt(10)
    r1_s.font.bold = True
    r1_s.font.color.rgb = TEXT_TITLE

    p2 = tf.add_paragraph()
    p2.space_before = Pt(3)
    r2 = p2.add_run()
    r2.text = rdesc
    r2.font.size = Pt(9)
    r2.font.color.rgb = TEXT_BODY

add_footer(s15, 15)

# ══════════════════════════════════════════════════════════════
# SLIDE 16: YÖNETİCİ ÖZETİ & ENTEGRE ROI (3 PROJE BİRLİKTE)
# ══════════════════════════════════════════════════════════════
s16 = prs.slides.add_slide(prs.slide_layouts[6])
set_slide_bg(s16, BG_LIGHT)
add_header(s16, "GENEL DEĞERLENDİRME & YÖNETİCİ ÖZETİ", "3 Projenin Selnikel'e Kazandırdığı Somut Değer",
           "Yönetim Kurulu ve Genel Müdürlük İçin Entegre Sonuç Matrisi", kicker_color=RED_BRAND)

total_gains = [
    ("🌐 İhracat İtibarında Büyük Artış",
     "Proje 1 (Web Platformu)",
     "67 ülkeye ürün satan Selnikel'in vitrini 1 sn altında açılan, 5 dilli, CAD çizimleri ve mühendislik talep formları içeren küresel bir platforma kavuştu. Teklif hazırlama süresi %35 hızlandı.",
     BLUE_BRAND, BLUE_LIGHT, BLUE_BORDER),
    ("🛡️ Sıfır Siber Güvenlik Riski",
     "Proje 1 (Web Platformu)",
     "WordPress ve savunmasız eklentiler yerine 0 veritabanı, 0 SQL Injection açığı ve bağımsız penetrasyon taramasında teyit edilmiş A+ güvenlik seviyesine ulaşıldı.",
     RED_BRAND, RED_LIGHT, RED_BORDER),
    ("🧠 70 Yıllık Kurumsal Hafıza Korundu",
     "Proje 2 (Selnikel AI)",
     "Emekli olan ustaların veya dosya klasörlerinin içindeki 70 yıllık birikim, şirket sunucularında kalıcı kurumsal zekaya dönüştü. Yeni mühendislerin oryantasyon süresi 6 aydan 2 haftaya indi.",
     AMBER_BRAND, AMBER_LIGHT, AMBER_BORDER),
    ("⚡ Mühendislikte Sıfır Hata ve Hız",
     "Proje 2 (Selnikel AI + MCP)",
     "Kazan verimi, emniyet ventili ve fan debisi hesaplamaları dakikalar içinde ASME/ISO standartlarında hatasız çözülür hale geldi; şartname tarama süresi 4 saatten 5 dakikaya indi.",
     GREEN_BRAND, GREEN_LIGHT, GREEN_BORDER),
    ("💰 Yılda ~₺2.8 Milyon Nakit Tasarruf",
     "Proje 3 (Selnikel One - Rota)",
     "Servis araçlarının 15'ten 11'e düşürülmesi, optimize güzergahlar ve günde 510 km daha az yol sayesinde şirket bütçesine yılda yaklaşık ₺2.8M doğrudan tasarruf sağlandı.",
     GREEN_BRAND, GREEN_LIGHT, GREEN_BORDER),
    ("📱 Kağıtsız ve Şeffaf Fabrika Sahası",
     "Proje 3 (Selnikel One)",
     "Servis belirsizliği bitti, nizamiye turnike PDKS mesai bilgisi çalışanın cebine indi, atölye görevleri şeffaflaştı ve İK değerlendirme formları kağıttan dijitale aktarıldı.",
     RGBColor(0x7C, 0x3A, 0xED), RGBColor(0xF5, 0xF3, 0xFF), RGBColor(0xDD, 0xD6, 0xFE)),
]

for i, (gtitle, gsub, gdesc, gcol, gbg, gbdr) in enumerate(total_gains):
    row = i // 3
    col = i % 3
    cx = Inches(0.8 + col * 4.0)
    cy = Inches(1.55 + row * 2.6)
    cw = Inches(3.733)
    ch = Inches(2.45)

    create_card(s16, cx, cy, cw, ch, bg_color=WHITE, border_color=BORDER_COLOR)

    top_line = s16.shapes.add_shape(MSO_SHAPE.RECTANGLE, cx, cy, cw, Inches(0.05))
    top_line.fill.solid()
    top_line.fill.fore_color.rgb = gcol
    top_line.line.fill.background()

    tb = s16.shapes.add_textbox(cx + Inches(0.18), cy + Inches(0.15), cw - Inches(0.36), ch - Inches(0.25))
    tf = tb.text_frame
    tf.word_wrap = True
    tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0

    p1 = tf.paragraphs[0]
    r1 = p1.add_run()
    r1.text = gtitle
    r1.font.size = Pt(11)
    r1.font.bold = True
    r1.font.color.rgb = TEXT_TITLE

    p2 = tf.add_paragraph()
    p2.space_before = Pt(3)
    r2 = p2.add_run()
    r2.text = gsub
    r2.font.size = Pt(8.5)
    r2.font.bold = True
    r2.font.color.rgb = gcol

    p3 = tf.add_paragraph()
    p3.space_before = Pt(4)
    r3 = p3.add_run()
    r3.text = gdesc
    r3.font.size = Pt(8.5)
    r3.font.color.rgb = TEXT_BODY

add_footer(s16, 16)

# ══════════════════════════════════════════════════════════════
# SLIDE 17: TEŞEKKÜR & SORU - CEVAP (KAPANIŞ)
# ══════════════════════════════════════════════════════════════
s17 = prs.slides.add_slide(prs.slide_layouts[6])
set_slide_bg(s17, WHITE)

red_strip17 = s17.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0), Inches(0), Inches(0.18), SLIDE_H)
red_strip17.fill.solid()
red_strip17.fill.fore_color.rgb = RED_BRAND
red_strip17.line.fill.background()

logo_path = IMG_DIR / "selnikel_logo.png"
if logo_path.exists():
    s17.shapes.add_picture(str(logo_path), Inches(0.8), Inches(0.6), width=Inches(2.6))

# Center-Left Closing Statement
tb_close = s17.shapes.add_textbox(Inches(0.8), Inches(1.8), Inches(6.8), Inches(1.8))
tf_c17 = tb_close.text_frame
tf_c17.word_wrap = True
tf_c17.margin_left = tf_c17.margin_top = tf_c17.margin_right = tf_c17.margin_bottom = 0

pc1 = tf_c17.paragraphs[0]
rc1 = pc1.add_run()
rc1.text = "Teşekkür Ederim"
rc1.font.size = Pt(36)
rc1.font.bold = True
rc1.font.color.rgb = TEXT_TITLE

pc2 = tf_c17.add_paragraph()
pc2.space_before = Pt(8)
rc2 = pc2.add_run()
rc2.text = "Sorularınız, görüşleriniz ve değerlendirmeleriniz için hazırım."
rc2.font.size = Pt(14)
rc2.font.color.rgb = RED_BRAND
rc2.font.bold = True

# Presenter Card
card_c = create_card(s17, Inches(0.8), Inches(3.6), Inches(6.5), Inches(2.3), bg_color=BG_LIGHT, border_color=BORDER_COLOR)
tb_cp = s17.shapes.add_textbox(Inches(1.1), Inches(3.8), Inches(6.0), Inches(1.9))
tf_cp = tb_cp.text_frame
tf_cp.word_wrap = True
tf_cp.margin_left = tf_cp.margin_top = tf_cp.margin_right = tf_cp.margin_bottom = 0

pp1 = tf_cp.paragraphs[0]
rr1 = pp1.add_run()
rr1.text = "Ömer Faruk Özdemir\n"
rr1.font.size = Pt(14)
rr1.font.bold = True
rr1.font.color.rgb = TEXT_TITLE

rr2 = pp1.add_run()
rr2.text = "Kocaeli Üniversitesi — Bilgisayar Mühendisliği (4. Sınıf)\n"
rr2.font.size = Pt(11)
rr2.font.bold = True
rr2.font.color.rgb = TEXT_BODY

rr3 = pp1.add_run()
rr3.text = "Selnikel Enerji A.Ş. — IT Bölümü Yazılım Stajyeri\n\n"
rr3.font.size = Pt(11)
rr3.font.color.rgb = TEXT_MUTED

rr4 = pp1.add_run()
rr4.text = "GitHub Reposu: "
rr4.font.size = Pt(10)
rr4.font.color.rgb = TEXT_MUTED
rr4_b = pp1.add_run()
rr4_b.text = "github.com/ozdemirCeng/selnikel-presentation"
rr4_b.font.size = Pt(10)
rr4_b.font.bold = True
rr4_b.font.color.rgb = BLUE_BRAND

# 3 Project Summary Pills (Horizontal like Slide 1, well above footer)
pills_close = [
    ("Proje 1: Kurumsal Web", BLUE_LIGHT, BLUE_BRAND, BLUE_BORDER),
    ("Proje 2: Selnikel AI (RAG + MCP)", AMBER_LIGHT, AMBER_BRAND, AMBER_BORDER),
    ("Proje 3: Selnikel One & Rota", GREEN_LIGHT, GREEN_BRAND, GREEN_BORDER),
]
for i, (ptext, pbg, pcol, pbdr) in enumerate(pills_close):
    px = Inches(0.8 + i * 2.2)
    py = Inches(6.05)
    create_card(s17, px, py, Inches(2.1), Inches(0.42), bg_color=pbg, border_color=pbdr)
    tbp = s17.shapes.add_textbox(px, py + Inches(0.08), Inches(2.1), Inches(0.26))
    tbp.text_frame.margin_left = tbp.text_frame.margin_right = 0
    p = tbp.text_frame.paragraphs[0]
    p.alignment = PP_ALIGN.CENTER
    r = p.add_run()
    r.text = ptext
    r.font.size = Pt(8.5)
    r.font.bold = True
    r.font.color.rgb = pcol

# Right side: Factory image with clean frame
factory_path = IMG_DIR / "factory.jpg"
if factory_path.exists():
    card_f = create_card(s17, Inches(7.7), Inches(1.2), Inches(4.8), Inches(5.15), bg_color=WHITE, border_color=BORDER_COLOR)
    s17.shapes.add_picture(str(factory_path), Inches(7.8), Inches(1.3), width=Inches(4.6), height=Inches(4.95))

add_footer(s17, 17)

# Save presentation
prs.save(str(OUTPUT))
print(f"[OK] Clean White Theme Presentation saved successfully: {OUTPUT}")
print(f"     Total slides: {TOTAL_SLIDES}")
