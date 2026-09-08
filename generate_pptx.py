#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Selnikel Staj Sunumu — Executive Keynote Edition (Big Text, Zero Clutter, Real Photos)
Ömer Faruk Özdemir | Kocaeli Üniversitesi Bilgisayar Mühendisliği 4. Sınıf
Selnikel Enerji IT Departmanı
"""

import os
from pathlib import Path
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN
from pptx.enum.shapes import MSO_SHAPE

SCRIPT_DIR = Path(__file__).resolve().parent
IMG_DIR = SCRIPT_DIR / "public" / "images"
OUTPUT = SCRIPT_DIR / "Selnikel_Staj_Sunumu_OmerFarukOzdemir.pptx"

# Colors - Clean Executive Light Palette
WHITE        = RGBColor(0xFF, 0xFF, 0xFF)
BG_LIGHT     = RGBColor(0xFA, 0xFA, 0xFA)  # Ultra-clean soft white
BORDER_CARD  = RGBColor(0xE2, 0xE8, 0xF0)  # Slate-200
BORDER_LIGHT = RGBColor(0xED, 0xF2, 0xF7)

TEXT_BLACK   = RGBColor(0x0F, 0x17, 0x2A)  # Slate-900 bold
TEXT_DARK    = RGBColor(0x1E, 0x29, 0x3B)  # Slate-800
TEXT_MUTED   = RGBColor(0x64, 0x74, 0x8B)  # Slate-500

RED_BRAND    = RGBColor(0xE3, 0x06, 0x13)  # Selnikel Red
RED_BG       = RGBColor(0xFE, 0xF2, 0xF2)  # Red-50
RED_BDR      = RGBColor(0xFE, 0xCD, 0xCD)

BLUE_BRAND   = RGBColor(0x02, 0x84, 0xC7)  # Sky-600
BLUE_BG      = RGBColor(0xF0, 0xF9, 0xFF)
BLUE_BDR     = RGBColor(0xBA, 0xE6, 0xFD)

AMBER_BRAND  = RGBColor(0xD9, 0x77, 0x06)  # Amber-600
AMBER_BG     = RGBColor(0xFF, 0xFB, 0xEB)
AMBER_BDR    = RGBColor(0xFD, 0xE6, 0x8A)

GREEN_BRAND  = RGBColor(0x05, 0x96, 0x69)  # Emerald-600
GREEN_BG     = RGBColor(0xEC, 0xFD, 0xF5)
GREEN_BDR    = RGBColor(0xA7, 0xF3, 0xD0)

PURPLE_BRAND = RGBColor(0x7C, 0x3A, 0xED)
PURPLE_BG    = RGBColor(0xF5, 0xF3, 0xFF)
PURPLE_BDR   = RGBColor(0xDD, 0xD6, 0xFE)

SLATE_BG     = RGBColor(0xF1, 0xF5, 0xF9)

SLIDE_W = Inches(13.333)
SLIDE_H = Inches(7.5)
TOTAL_SLIDES = 17

prs = Presentation()
prs.slide_width = SLIDE_W
prs.slide_height = SLIDE_H

def set_bg(slide, col=BG_LIGHT):
    bg = slide.background
    fill = bg.fill
    fill.solid()
    fill.fore_color.rgb = col

def add_header(slide, kicker: str, title: str, subtitle: str = "", kcol=RED_BRAND):
    """Clean, high-impact header. Logo strictly pinned to top-right corner."""
    logo_p = IMG_DIR / "selnikel_logo.png"
    if logo_p.exists():
        slide.shapes.add_picture(str(logo_p), Inches(10.6), Inches(0.4), width=Inches(1.9))

    # Kicker
    tb_k = slide.shapes.add_textbox(Inches(0.8), Inches(0.38), Inches(9.0), Inches(0.28))
    tf_k = tb_k.text_frame
    tf_k.margin_left = tf_k.margin_top = tf_k.margin_right = tf_k.margin_bottom = 0
    p_k = tf_k.paragraphs[0]
    r_k = p_k.add_run()
    r_k.text = kicker.upper()
    r_k.font.size = Pt(11)
    r_k.font.bold = True
    r_k.font.color.rgb = kcol
    r_k.font.name = "Arial"

    # Big Title
    tb_t = slide.shapes.add_textbox(Inches(0.8), Inches(0.68), Inches(9.5), Inches(0.45))
    tf_t = tb_t.text_frame
    tf_t.margin_left = tf_t.margin_top = tf_t.margin_right = tf_t.margin_bottom = 0
    p_t = tf_t.paragraphs[0]
    r_t = p_t.add_run()
    r_t.text = title
    r_t.font.size = Pt(24)
    r_t.font.bold = True
    r_t.font.color.rgb = TEXT_BLACK
    r_t.font.name = "Arial"

    # Subtitle (Optional)
    if subtitle:
        tb_s = slide.shapes.add_textbox(Inches(0.8), Inches(1.15), Inches(9.5), Inches(0.28))
        tf_s = tb_s.text_frame
        tf_s.margin_left = tf_s.margin_top = tf_s.margin_right = tf_s.margin_bottom = 0
        p_s = tf_s.paragraphs[0]
        r_s = p_s.add_run()
        r_s.text = subtitle
        r_s.font.size = Pt(12)
        r_s.font.color.rgb = TEXT_MUTED
        r_s.font.name = "Arial"

def add_footer(slide, slide_num: int):
    """Subtle, light hairline footer with ample safety buffer."""
    line = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0.8), Inches(6.92), Inches(11.733), Pt(1))
    line.fill.solid()
    line.fill.fore_color.rgb = BORDER_CARD
    line.line.fill.background()

    tb_l = slide.shapes.add_textbox(Inches(0.8), Inches(7.0), Inches(8.0), Inches(0.35))
    tf_l = tb_l.text_frame
    tf_l.margin_left = tf_l.margin_top = tf_l.margin_right = tf_l.margin_bottom = 0
    p_l = tf_l.paragraphs[0]
    r_l = p_l.add_run()
    r_l.text = "Selnikel Enerji A.Ş.  •  Bilgi Teknolojileri Departmanı Staj Sunumu"
    r_l.font.size = Pt(10)
    r_l.font.color.rgb = TEXT_MUTED
    r_l.font.name = "Arial"

    tb_r = slide.shapes.add_textbox(Inches(8.8), Inches(7.0), Inches(3.733), Inches(0.35))
    tf_r = tb_r.text_frame
    tf_r.margin_left = tf_r.margin_top = tf_r.margin_right = tf_r.margin_bottom = 0
    p_r = tf_r.paragraphs[0]
    p_r.alignment = PP_ALIGN.RIGHT
    r_r = p_r.add_run()
    r_r.text = f"Ömer Faruk Özdemir  |  Slayt {slide_num} / {TOTAL_SLIDES}"
    r_r.font.size = Pt(10)
    r_r.font.bold = True
    r_r.font.color.rgb = TEXT_MUTED
    r_r.font.name = "Arial"

def card(slide, left, top, width, height, bg=WHITE, bdr=BORDER_CARD):
    c = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, top, width, height)
    c.fill.solid()
    c.fill.fore_color.rgb = bg
    if bdr:
        c.line.color.rgb = bdr
        c.line.width = Pt(1)
    else:
        c.line.fill.background()
    return c

# ══════════════════════════════════════════════════════════════
# SLIDE 1: KAPAK (Real Selnikel Industrial Facility Image)
# ══════════════════════════════════════════════════════════════
s1 = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(s1, WHITE)

# Selnikel Red accent line on left edge
red_strip = s1.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0), Inches(0), Inches(0.2), SLIDE_H)
red_strip.fill.solid()
red_strip.fill.fore_color.rgb = RED_BRAND
red_strip.line.fill.background()

# Logo
logo_p = IMG_DIR / "selnikel_logo.png"
if logo_p.exists():
    s1.shapes.add_picture(str(logo_p), Inches(0.8), Inches(0.55), width=Inches(2.8))

# Big Bold Title
tb_t1 = s1.shapes.add_textbox(Inches(0.8), Inches(1.8), Inches(6.8), Inches(1.7))
tf_t1 = tb_t1.text_frame
tf_t1.word_wrap = True
tf_t1.margin_left = tf_t1.margin_top = tf_t1.margin_right = tf_t1.margin_bottom = 0

p1 = tf_t1.paragraphs[0]
r1 = p1.add_run()
r1.text = "Selnikel'de Görülen Sorunlar\nve Geliştirilen Çözümler"
r1.font.size = Pt(32)
r1.font.bold = True
r1.font.color.rgb = TEXT_BLACK
r1.font.name = "Arial"

p2 = tf_t1.add_paragraph()
p2.space_before = Pt(10)
r2 = p2.add_run()
r2.text = "Staj Dönemi Kapsamında Gerçekleştirilen 3 Proje"
r2.font.size = Pt(15)
r2.font.color.rgb = RED_BRAND
r2.font.bold = True
r2.font.name = "Arial"

# Presenter Card
card(s1, Inches(0.8), Inches(3.8), Inches(6.5), Inches(1.9), bg=BG_LIGHT, bdr=BORDER_CARD)
tb_pres = s1.shapes.add_textbox(Inches(1.1), Inches(4.0), Inches(6.0), Inches(1.5))
tf_p = tb_pres.text_frame
tf_p.word_wrap = True
tf_p.margin_left = tf_p.margin_top = tf_p.margin_right = tf_p.margin_bottom = 0

pp1 = tf_p.paragraphs[0]
rr1 = pp1.add_run()
rr1.text = "Ömer Faruk Özdemir\n"
rr1.font.size = Pt(16)
rr1.font.bold = True
rr1.font.color.rgb = TEXT_BLACK

rr2 = pp1.add_run()
rr2.text = "Kocaeli Üniversitesi — Bilgisayar Mühendisliği (4. Sınıf)\n"
rr2.font.size = Pt(12)
rr2.font.bold = True
rr2.font.color.rgb = TEXT_DARK

rr3 = pp1.add_run()
rr3.text = "Selnikel Enerji A.Ş. IT Bölümü — Yazılım Stajyeri  •  Eylül 2026"
rr3.font.size = Pt(11)
rr3.font.color.rgb = TEXT_MUTED

# 3 Project Horizontal Pills
pills1 = [
    ("Proje 1: Kurumsal Web", BLUE_BG, BLUE_BRAND, BLUE_BDR),
    ("Proje 2: Selnikel AI", AMBER_BG, AMBER_BRAND, AMBER_BDR),
    ("Proje 3: Selnikel One", GREEN_BG, GREEN_BRAND, GREEN_BDR),
]
for i, (ptxt, pbg, pcol, pbdr) in enumerate(pills1):
    px = Inches(0.8 + i * 2.2)
    py = Inches(5.95)
    card(s1, px, py, Inches(2.1), Inches(0.48), bg=pbg, bdr=pbdr)
    tbp = s1.shapes.add_textbox(px, py + Inches(0.1), Inches(2.1), Inches(0.28))
    tbp.text_frame.margin_left = tbp.text_frame.margin_right = 0
    p = tbp.text_frame.paragraphs[0]
    p.alignment = PP_ALIGN.CENTER
    r = p.add_run()
    r.text = ptxt
    r.font.size = Pt(10)
    r.font.bold = True
    r.font.color.rgb = pcol

# REAL SELNIKEL INDUSTRIAL BOILER / PLANT IMAGE on Right
real_img_p = IMG_DIR / "selnikel_kazan_real.jpg"
if not real_img_p.exists():
    real_img_p = IMG_DIR / "product_facility.png"

if real_img_p.exists():
    card(s1, Inches(7.6), Inches(1.2), Inches(4.9), Inches(5.15), bg=WHITE, bdr=BORDER_CARD)
    s1.shapes.add_picture(str(real_img_p), Inches(7.7), Inches(1.3), width=Inches(4.7), height=Inches(4.95))

add_footer(s1, 1)

# ══════════════════════════════════════════════════════════════
# SLIDE 2: BÜYÜK RESİM — 3 PROJE (Big, Bold, Zero Clutter)
# ══════════════════════════════════════════════════════════════
s2 = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(s2, BG_LIGHT)
add_header(s2, "GENEL BAKIŞ", "Staj Süresince Geliştirilen 3 Proje",
           "Selnikel'in kurumsal vitrini, teknik mühendislik hafızası ve fabrika içi saha operasyonları")

projs2 = [
    ("PROJE 1", "Kurumsal Web Sitesi", "WordPress → Next.js 16 Enterprise", BLUE_BRAND, BLUE_BG, BLUE_BDR,
     [
         ("⚡ %97 Daha Hızlı Yanıt", "2.500 ms'den 25 ms'ye indi"),
         ("🛡️ 0 Güvenlik Açığı", "Sıfır veritabanı, sıfır SQL injection"),
         ("📱 96 / 100 PageSpeed", "Mobilde kusursuz deneyim & yüksek SEO"),
         ("🌍 5 Dilde Global Vitrin", "TR, EN, DE, RU, AR (sağdan sola RTL)")
     ]),
    ("PROJE 2", "Selnikel AI Asistanı", "Kurumsal RAG + 5 Termodinamik Motor", AMBER_BRAND, AMBER_BG, AMBER_BDR,
     [
         ("🧠 1.600+ Teknik Belge", "Tüm şartname, katalog ve föy hafızası"),
         ("🎯 %0 Halüsinasyon", "Kanıt yoksa konuşmaz, asla uydurmaz"),
         ("⏱️ 4 Saatten 5 Dk'ya", "Şartname inceleme ve arıza teşhisi"),
         ("🔧 5 MCP Motoru", "Kazan verimi, ventil, fan debisi hesabı")
     ]),
    ("PROJE 3", "Selnikel One Platformu", "Fabrika, Servis & İK Yönetimi", GREEN_BRAND, GREEN_BG, GREEN_BDR,
     [
         ("🚌 Canlı Servis GPS", "Kendi servislerimizin haritada canlı takibi"),
         ("⏱️ IFS ERP Entegre PDKS", "Turnike kart hareketleri ve mesai cepte"),
         ("⚙️ Atölye İş Takibi", "Kazan, brülör birimlerine dijital görev"),
         ("💰 ~₺2.8M / Yıl Tasarruf", "15 servis aracından 11 araca optimizasyon")
     ]),
]

for i, (kck, ptitle, psub, pcol, pbg, pbdr, pitems) in enumerate(projs2):
    cx = Inches(0.8 + i * 4.0)
    cy = Inches(1.55)
    cw = Inches(3.733)
    ch = Inches(5.15)

    card(s2, cx, cy, cw, ch, bg=WHITE, bdr=BORDER_CARD)

    # Top Color Banner
    top_bar = s2.shapes.add_shape(MSO_SHAPE.RECTANGLE, cx, cy, cw, Inches(0.48))
    top_bar.fill.solid()
    top_bar.fill.fore_color.rgb = pbg
    top_bar.line.color.rgb = pbdr
    top_bar.line.width = Pt(1)

    tb_k = s2.shapes.add_textbox(cx + Inches(0.2), cy + Inches(0.1), cw - Inches(0.4), Inches(0.3))
    tb_k.text_frame.margin_left = tb_k.text_frame.margin_right = 0
    pk = tb_k.text_frame.paragraphs[0]
    rk = pk.add_run()
    rk.text = kck
    rk.font.size = Pt(11)
    rk.font.bold = True
    rk.font.color.rgb = pcol

    # Title
    tb_t = s2.shapes.add_textbox(cx + Inches(0.2), cy + Inches(0.6), cw - Inches(0.4), Inches(0.45))
    tb_t.text_frame.margin_left = tb_t.text_frame.margin_right = 0
    pt = tb_t.text_frame.paragraphs[0]
    rt = pt.add_run()
    rt.text = ptitle
    rt.font.size = Pt(16)
    rt.font.bold = True
    rt.font.color.rgb = TEXT_BLACK

    # Subtitle
    tb_s = s2.shapes.add_textbox(cx + Inches(0.2), cy + Inches(1.1), cw - Inches(0.4), Inches(0.35))
    tb_s.text_frame.margin_left = tb_s.text_frame.margin_right = 0
    ps = tb_s.text_frame.paragraphs[0]
    rs = ps.add_run()
    rs.text = psub
    rs.font.size = Pt(10.5)
    rs.font.bold = True
    rs.font.color.rgb = pcol

    # 4 Punchy Metric Blocks
    for j, (mhead, mdesc) in enumerate(pitems):
        by = cy + Inches(1.6 + j * 0.85)
        card(s2, cx + Inches(0.18), by, cw - Inches(0.36), Inches(0.75), bg=BG_LIGHT, bdr=BORDER_LIGHT)

        tb_b = s2.shapes.add_textbox(cx + Inches(0.28), by + Inches(0.08), cw - Inches(0.56), Inches(0.6))
        tf_b = tb_b.text_frame
        tf_b.margin_left = tf_b.margin_top = tf_b.margin_right = tf_b.margin_bottom = 0

        p1 = tf_b.paragraphs[0]
        r_head = p1.add_run()
        r_head.text = mhead
        r_head.font.size = Pt(11.5)
        r_head.font.bold = True
        r_head.font.color.rgb = TEXT_BLACK

        p2 = tf_b.add_paragraph()
        p2.space_before = Pt(2)
        r_sub = p2.add_run()
        r_sub.text = mdesc
        r_sub.font.size = Pt(9.5)
        r_sub.font.color.rgb = TEXT_MUTED

add_footer(s2, 2)

# ══════════════════════════════════════════════════════════════
# SLIDE 3: PROJE 1 — BÜYÜK SAYILARLA WEB SİTESİ
# ══════════════════════════════════════════════════════════════
s3 = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(s3, BG_LIGHT)
add_header(s3, "PROJE 1: KURUMSAL WEB PLATFORMU", "Neden WordPress'ten Next.js 16'ya Geçtik?",
           "Yönetim Kuruluna Somut Performans ve Güvenlik Kanıtları", kcol=BLUE_BRAND)

# 4 Giant Metric Stat Cards
big_metrics = [
    ("⚡ %97", "Daha Hızlı Yanıt", "2.500 ms ➔ 25 ms", "Tıklandığı an içerik ekranda", BLUE_BRAND, BLUE_BG, BLUE_BDR),
    ("📱 96 / 100", "Google Mobil Skoru", "Eski 28 ➔ Yeni 96", "Google'da doğrudan üst sıralara", GREEN_BRAND, GREEN_BG, GREEN_BDR),
    ("🛡️ 0 AÇIK", "Sıfır Siber Risk", "0 SQL Injection Açığı", "Bağımsız penetrasyon onaylı", RED_BRAND, RED_BG, RED_BDR),
    ("🌍 5 DİL", "Global İhracat Vitrini", "TR, EN, DE, RU, AR", "67 ülkeye 1 saniyede açılan vitrin", AMBER_BRAND, AMBER_BG, AMBER_BDR),
]

for i, (val, title, comp, impact, col, bg, bdr) in enumerate(big_metrics):
    mx = Inches(0.8 + i * 3.0)
    my = Inches(1.55)
    mw = Inches(2.75)
    mh = Inches(2.3)

    card(s3, mx, my, mw, mh, bg=WHITE, bdr=BORDER_CARD)

    top_line = s3.shapes.add_shape(MSO_SHAPE.RECTANGLE, mx, my, mw, Inches(0.07))
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
    r_v.font.size = Pt(28)
    r_v.font.bold = True
    r_v.font.color.rgb = col

    p_t = tf.add_paragraph()
    p_t.space_before = Pt(4)
    r_t = p_t.add_run()
    r_t.text = title
    r_t.font.size = Pt(13)
    r_t.font.bold = True
    r_t.font.color.rgb = TEXT_BLACK

    p_c = tf.add_paragraph()
    p_c.space_before = Pt(4)
    r_c = p_c.add_run()
    r_c.text = comp
    r_c.font.size = Pt(10)
    r_c.font.bold = True
    r_c.font.color.rgb = col

    p_i = tf.add_paragraph()
    p_i.space_before = Pt(3)
    r_i = p_i.add_run()
    r_i.text = impact
    r_i.font.size = Pt(9.5)
    r_i.font.color.rgb = TEXT_MUTED

# Lower Section: Direct Comparison (Old vs New)
card(s3, Inches(0.8), Inches(4.05), Inches(5.7), Inches(2.65), bg=WHITE, bdr=BORDER_CARD)
card(s3, Inches(1.0), Inches(4.2), Inches(2.6), Inches(0.35), bg=RED_BG, bdr=RED_BDR)
tb_e = s3.shapes.add_textbox(Inches(1.0), Inches(4.24), Inches(2.6), Inches(0.28))
tb_e.text_frame.margin_left = tb_e.text_frame.margin_right = 0
pe = tb_e.text_frame.paragraphs[0]
pe.alignment = PP_ALIGN.CENTER
re = pe.add_run()
re.text = "ESKİ SİTE (WordPress)"
re.font.size = Pt(10)
re.font.bold = True
re.font.color.rgb = RED_BRAND

tb_eb = s3.shapes.add_textbox(Inches(1.0), Inches(4.7), Inches(5.3), Inches(1.9))
tf_eb = tb_eb.text_frame
tf_eb.word_wrap = True
tf_eb.margin_left = tf_eb.margin_right = 0
old_points = [
    "Açılış Hızı: 4.5 – 7.0 saniye (Ağır SQL sorguları)",
    "Yük Dayanımı: 20-30 kişide CPU %100 ve çökme",
    "Güvenlik: Eklenti açıkları ve SQL injection riski",
    "Mobil: Bozuk tablolar, taşan linkler (Skor: 28)"
]
for j, pt in enumerate(old_points):
    p = tf_eb.paragraphs[0] if j == 0 else tf_eb.add_paragraph()
    p.space_before = Pt(6)
    r_x = p.add_run()
    r_x.text = "✗ "
    r_x.font.bold = True
    r_x.font.color.rgb = RED_BRAND
    r_t = p.add_run()
    r_t.text = pt
    r_t.font.size = Pt(11)
    r_t.font.color.rgb = TEXT_DARK

# Right side: NEW ARCHITECTURE
card(s3, Inches(6.8), Inches(4.05), Inches(5.7), Inches(2.65), bg=WHITE, bdr=BORDER_CARD)
card(s3, Inches(7.0), Inches(4.2), Inches(2.8), Inches(0.35), bg=GREEN_BG, bdr=GREEN_BDR)
tb_y = s3.shapes.add_textbox(Inches(7.0), Inches(4.24), Inches(2.8), Inches(0.28))
tb_y.text_frame.margin_left = tb_y.text_frame.margin_right = 0
py = tb_y.text_frame.paragraphs[0]
py.alignment = PP_ALIGN.CENTER
ry = py.add_run()
ry.text = "YENİ PLATFORM (Next.js 16)"
ry.font.size = Pt(10)
ry.font.bold = True
ry.font.color.rgb = GREEN_BRAND

tb_yb = s3.shapes.add_textbox(Inches(7.0), Inches(4.7), Inches(5.3), Inches(1.9))
tf_yb = tb_yb.text_frame
tf_yb.word_wrap = True
tf_yb.margin_left = tf_yb.margin_right = 0
new_points = [
    "Açılış Hızı: < 1.1 saniye (Edge CDN önbellek)",
    "Yük Dayanımı: Saniyede 388 istek (3.901 istekte 0 hata)",
    "Güvenlik: 0 Veritabanı, 0 SQL açığı, A+ Güvenlik",
    "Mobil: %100 Uyumlu, 96 PageSpeed puanı"
]
for j, pt in enumerate(new_points):
    p = tf_yb.paragraphs[0] if j == 0 else tf_yb.add_paragraph()
    p.space_before = Pt(6)
    r_x = p.add_run()
    r_x.text = "✓ "
    r_x.font.bold = True
    r_x.font.color.rgb = GREEN_BRAND
    r_t = p.add_run()
    r_t.text = pt
    r_t.font.size = Pt(11)
    r_t.font.bold = True
    r_t.font.color.rgb = TEXT_BLACK

add_footer(s3, 3)

# ══════════════════════════════════════════════════════════════
# SLIDE 4: PROJE 1 — ESKİ SİTEDEKİ 4 KRONİK PROBLEM
# ══════════════════════════════════════════════════════════════
s4 = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(s4, BG_LIGHT)
add_header(s4, "PROJE 1: MEVCUT DURUM", "Eski Sitedeki 4 Temel Sorun Neydi?",
           "Fabrika yönetimi ve ihracat müşterilerinin karşılaştığı somut darboğazlar", kcol=RED_BRAND)

probs4 = [
    ("1. Yavaş Açılış (4.5 – 7.0 sn)", "Ziyaretçilerin %53'ü 3 saniyeden uzun süren siteleri terk eder. İhracat müşterileri ve fabrika yöneticileri sayfayı beklemeden kapatıyordu."),
    ("2. Siber Güvenlik Açıkları", "WordPress ve eklentiler dünyada saldırıların 1 numaralı hedefidir. Sürekli SQL injection riski ve aylık güncelleme bakım hamallığı vardı."),
    ("3. Mobilde Bozuk Tasarım", "Tablolar ekrandan taşıyor, butonlara basılamıyordu. Google mobil skoru 100 üzerinden 28 puanla aramalarda şirketi geriye itiyordu."),
    ("4. Yabancı Dil ve Form Eksikliği", "Site sadece Türkçeydi. Ayrıca teknik talep formu yoktu; debi, basınç gibi verileri toplamak için günlerce telefon trafiği yaşanıyordu.")
]

for i, (title, desc) in enumerate(probs4):
    row = i // 2
    col = i % 2
    cx = Inches(0.8 + col * 5.95)
    cy = Inches(1.55 + row * 2.6)
    cw = Inches(5.78)
    ch = Inches(2.45)

    card(s4, cx, cy, cw, ch, bg=WHITE, bdr=BORDER_CARD)

    lbar = s4.shapes.add_shape(MSO_SHAPE.RECTANGLE, cx, cy, Inches(0.08), ch)
    lbar.fill.solid()
    lbar.fill.fore_color.rgb = RED_BRAND
    lbar.line.fill.background()

    tb = s4.shapes.add_textbox(cx + Inches(0.25), cy + Inches(0.2), cw - Inches(0.4), ch - Inches(0.35))
    tf = tb.text_frame
    tf.word_wrap = True
    tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0

    p1 = tf.paragraphs[0]
    r1 = p1.add_run()
    r1.text = title
    r1.font.size = Pt(16)
    r1.font.bold = True
    r1.font.color.rgb = RED_BRAND

    p2 = tf.add_paragraph()
    p2.space_before = Pt(8)
    r2 = p2.add_run()
    r2.text = desc
    r2.font.size = Pt(12)
    r2.font.color.rgb = TEXT_DARK

add_footer(s4, 4)

# ══════════════════════════════════════════════════════════════
# SLIDE 5: PROJE 1 — KARŞILAŞTIRMA TABLOSU (Büyük & Net Yazılar)
# ══════════════════════════════════════════════════════════════
s5 = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(s5, BG_LIGHT)
add_header(s5, "PROJE 1: PERFORMANS KARŞILAŞTIRMASI", "Eski Site vs Yeni Platform: Rakamlarla Karşılaştırma",
           "Gerçek yük testleri ve karar verici açısından elde edilen net kazanımlar", kcol=BLUE_BRAND)

col_w_5 = [Inches(2.8), Inches(3.1), Inches(3.1), Inches(2.733)]
col_x_5 = [Inches(0.8), Inches(3.6), Inches(6.7), Inches(9.8)]
hdr_5 = ["METRİK", "ESKİ (WordPress)", "YENİ (Next.js 16)", "KAZANÇ"]
hdr_bg_5 = [SLATE_BG, RED_BG, GREEN_BG, BLUE_BG]
hdr_col_5 = [TEXT_BLACK, RED_BRAND, GREEN_BRAND, BLUE_BRAND]

for i in range(4):
    card(s5, col_x_5[i], Inches(1.55), col_w_5[i], Inches(0.48), bg=hdr_bg_5[i], bdr=BORDER_CARD)
    tb = s5.shapes.add_textbox(col_x_5[i] + Inches(0.1), Inches(1.65), col_w_5[i] - Inches(0.2), Inches(0.3))
    tb.text_frame.margin_left = tb.text_frame.margin_right = 0
    p = tb.text_frame.paragraphs[0]
    r = p.add_run()
    r.text = hdr_5[i]
    r.font.size = Pt(11)
    r.font.bold = True
    r.font.color.rgb = hdr_col_5[i]

rows5 = [
    ("İlk Yanıt (TTFB)", "2.500 ms (Ağır SQL)", "25 ms (Edge CDN)", "%97 Daha Hızlı"),
    ("Tam Açılış (LCP)", "4,5 – 7,0 saniye", "< 1,1 saniye", "Ziyaretçi kaybı bitti"),
    ("Mobil PageSpeed", "28 - 35 Puan", "92 - 96 Puan", "Google'da üst sıra"),
    ("Eşzamanlı Yük", "20 kişide CPU %100", "388 istek/sn (0 hata)", "Fuarda çökme yok"),
    ("Sayfa Ağırlığı", "8 – 15 MB (Ağır)", "1,2 – 2,5 MB (WebP)", "%80 Kota tasarrufu"),
    ("Siber Güvenlik", "Eklenti & SQL riski", "0 SQL, 0 Açık", "A+ Güvenlik garantisi")
]

for row_idx, rdata in enumerate(rows5):
    ry = Inches(2.15 + row_idx * 0.77)
    rbg = WHITE if row_idx % 2 == 0 else BG_LIGHT

    for col_idx in range(4):
        card(s5, col_x_5[col_idx], ry, col_w_5[col_idx], Inches(0.72), bg=rbg, bdr=BORDER_CARD)
        tb = s5.shapes.add_textbox(col_x_5[col_idx] + Inches(0.12), ry + Inches(0.12), col_w_5[col_idx] - Inches(0.24), Inches(0.5))
        tf = tb.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0
        p = tf.paragraphs[0]
        r = p.add_run()
        r.text = rdata[col_idx]
        r.font.size = Pt(11)

        if col_idx == 0:
            r.font.bold = True
            r.font.color.rgb = TEXT_BLACK
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
# SLIDE 6: PROJE 1 — ÜRÜNLER & ÖZELLİKLER (Büyük Fotoğraflar)
# ══════════════════════════════════════════════════════════════
s6 = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(s6, BG_LIGHT)
add_header(s6, "PROJE 1: SIFIRDAN EKLENEN ÖZELLİKLER", "Dinamik Ürün Kataloğu ve Mühendislik Araçları",
           "Müşterinin doğru ürünü 15 saniyede bulmasını sağlayan yeni altyapı", kcol=BLUE_BRAND)

# 4 Product Cards with BIGGER photos
prods6 = [
    ("boiler.jpg", "Endüstriyel Kazanlar", "Buhar, kızgın su & atık ısı"),
    ("product_boiler_burner.png", "Endüstriyel Brülörler", "Monoblok & duoblok yüksek verim"),
    ("product_fan.png", "Endüstriyel Fanlar", "Ağır sanayi radyal & aksiyal"),
    ("product_facility.png", "Ekonomizer Sistemleri", "Baca gazından atık ısı geri kazanımı"),
]

for i, (pimg, pname, pdesc) in enumerate(prods6):
    cx = Inches(0.8 + i * 3.0)
    cy = Inches(1.55)
    cw = Inches(2.75)
    ch = Inches(3.4)

    card(s6, cx, cy, cw, ch, bg=WHITE, bdr=BORDER_CARD)

    img_p = IMG_DIR / pimg
    if img_p.exists():
        s6.shapes.add_picture(str(img_p), cx + Inches(0.12), cy + Inches(0.12), width=cw - Inches(0.24), height=Inches(1.8))

    tb = s6.shapes.add_textbox(cx + Inches(0.12), cy + Inches(2.05), cw - Inches(0.24), Inches(1.2))
    tf = tb.text_frame
    tf.word_wrap = True
    tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0

    p1 = tf.paragraphs[0]
    r1 = p1.add_run()
    r1.text = pname
    r1.font.size = Pt(13)
    r1.font.bold = True
    r1.font.color.rgb = TEXT_BLACK

    p2 = tf.add_paragraph()
    p2.space_before = Pt(4)
    r2 = p2.add_run()
    r2.text = pdesc
    r2.font.size = Pt(10.5)
    r2.font.color.rgb = TEXT_MUTED

# 3 Bottom Punchline Cards
feats6 = [
    ("📋 Mühendislik Talep Formları", "Kazan debisi, basınç, yakıt cinsi seçimiyle doğrudan teknik şartname satışa düşer. Teklif süresi %35 hızlandı."),
    ("🔍 Anlık Canlı Arama & CAD", "Sayfa yenilenmeden parça ve kılavuz listelenir; 2D/3D CAD çizimleri tek tıkla indirilir."),
    ("🌍 5 Dilde Eşzamanlı Yayın", "TR, EN, DE, RU ve AR dillerinde tam senkronizasyon. Tek tıkla otomatik teknik çeviri.")
]

for i, (ftitle, fdesc) in enumerate(feats6):
    cx = Inches(0.8 + i * 4.0)
    cy = Inches(5.1)
    cw = Inches(3.733)
    ch = Inches(1.65)

    card(s6, cx, cy, cw, ch, bg=WHITE, bdr=BORDER_CARD)

    tb = s6.shapes.add_textbox(cx + Inches(0.18), cy + Inches(0.15), cw - Inches(0.36), ch - Inches(0.3))
    tf = tb.text_frame
    tf.word_wrap = True
    tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0

    p1 = tf.paragraphs[0]
    r1 = p1.add_run()
    r1.text = ftitle
    r1.font.size = Pt(12)
    r1.font.bold = True
    r1.font.color.rgb = BLUE_BRAND

    p2 = tf.add_paragraph()
    p2.space_before = Pt(4)
    r2 = p2.add_run()
    r2.text = fdesc
    r2.font.size = Pt(9.5)
    r2.font.color.rgb = TEXT_DARK

add_footer(s6, 6)

# ══════════════════════════════════════════════════════════════
# SLIDE 7: PROJE 2 KAPAK — SELNİKEL AI
# ══════════════════════════════════════════════════════════════
s7 = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(s7, BG_LIGHT)
add_header(s7, "PROJE 2: KURUMSAL YAPAY ZEKA", "Selnikel AI — RAG & MCP Destekli Mühendislik Asistanı",
           "Şirketin 70 Yıllık Teknik Hafızasını Sıfır Halüsinasyonla Dijital Sermayeye Dönüştüren Sistem", kcol=AMBER_BRAND)

ai_metrics7 = [
    ("🧠 1.600+", "Teknik Belge Hafızası", "Kazan, brülör, fan arşivi", "Tüm şirket dokümanları tek hafızada", AMBER_BRAND, AMBER_BG, AMBER_BDR),
    ("⚡ 5 DAKİKA", "Şartname İnceleme", "4 saatten 5 dakikaya indi", "Mühendislerin öğrenme süresi kısaldı", BLUE_BRAND, BLUE_BG, BLUE_BDR),
    ("🎯 %0 HATA", "Sıfır Halüsinasyon", "Kanıt yoksa konuşmaz", "Tıklanabilir sayfa/paragraf delili", GREEN_BRAND, GREEN_BG, GREEN_BDR),
    ("🔧 5 MOTOR", "Termodinamik Hesap", "ASME, ISO, AMCA standartları", "Mühendislik hesapları sıfır hatayla", RED_BRAND, RED_BG, RED_BDR),
]

for i, (val, title, comp, impact, col, bg, bdr) in enumerate(ai_metrics7):
    mx = Inches(0.8 + i * 3.0)
    my = Inches(1.55)
    mw = Inches(2.75)
    mh = Inches(2.3)

    card(s7, mx, my, mw, mh, bg=WHITE, bdr=BORDER_CARD)

    top_line = s7.shapes.add_shape(MSO_SHAPE.RECTANGLE, mx, my, mw, Inches(0.07))
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
    r_v.font.size = Pt(26)
    r_v.font.bold = True
    r_v.font.color.rgb = col

    p_t = tf.add_paragraph()
    p_t.space_before = Pt(4)
    r_t = p_t.add_run()
    r_t.text = title
    r_t.font.size = Pt(13)
    r_t.font.bold = True
    r_t.font.color.rgb = TEXT_BLACK

    p_c = tf.add_paragraph()
    p_c.space_before = Pt(4)
    r_c = p_c.add_run()
    r_c.text = comp
    r_c.font.size = Pt(10)
    r_c.font.bold = True
    r_c.font.color.rgb = col

    p_i = tf.add_paragraph()
    p_i.space_before = Pt(3)
    r_i = p_i.add_run()
    r_i.text = impact
    r_i.font.size = Pt(9.5)
    r_i.font.color.rgb = TEXT_MUTED

# Lower Section: Why ChatGPT Fails & What We Solved
card(s7, Inches(0.8), Inches(4.05), Inches(11.733), Inches(2.65), bg=WHITE, bdr=BORDER_CARD)

tb_why = s7.shapes.add_textbox(Inches(1.1), Inches(4.2), Inches(11.133), Inches(2.3))
tf_w = tb_why.text_frame
tf_w.word_wrap = True
tf_w.margin_left = tf_w.margin_right = 0

pw_t = tf_w.paragraphs[0]
rw_t = pw_t.add_run()
rw_t.text = "Şirkette Klasik Yapay Zeka (ChatGPT) Kullananların Yaşadığı 2 Büyük Çıkmaz:"
rw_t.font.size = Pt(15)
rw_t.font.bold = True
rw_t.font.color.rgb = TEXT_BLACK

p_w1 = tf_w.add_paragraph()
p_w1.space_before = Pt(10)
r_w1_t = p_w1.add_run()
r_w1_t.text = "1. Yavaşlık ve Dosya Hamallığı: "
r_w1_t.font.bold = True
r_w1_t.font.size = Pt(12)
r_w1_t.font.color.rgb = RED_BRAND
r_w1_d = p_w1.add_run()
r_w1_d.text = "Her soruda 100 sayfalık PDF'i tekrar tekrar yükleme zorunluluğu. Tarayıcı kapanınca siliniyor."
r_w1_d.font.size = Pt(12)
r_w1_d.font.color.rgb = TEXT_DARK

p_w2 = tf_w.add_paragraph()
p_w2.space_before = Pt(8)
r_w2_t = p_w2.add_run()
r_w2_t.text = "2. Halüsinasyon (Uydurma Riski): "
r_w2_t.font.bold = True
r_w2_t.font.size = Pt(12)
r_w2_t.font.color.rgb = RED_BRAND
r_w2_d = p_w2.add_run()
r_w2_d.text = "ChatGPT teknik tablolarda emin olamadığında 'tahmin yürütür'. Mühendislikte tolerans uydurulamaz!"
r_w2_d.font.size = Pt(12)
r_w2_d.font.color.rgb = TEXT_DARK

p_w3 = tf_w.add_paragraph()
p_w3.space_before = Pt(10)
r_w3 = p_w3.add_run()
r_w3.text = "✓ Çözüm: Şirket ağına bağlı, kaynak sayfasını kanıt gösteren ve formül çözen Selnikel AI mimarisi."
r_w3.font.size = Pt(12)
r_w3.font.bold = True
r_w3.font.color.rgb = GREEN_BRAND

add_footer(s7, 7)

# ══════════════════════════════════════════════════════════════
# SLIDE 8: PROJE 2 — AI MİMARİSİ (3 Büyük Adım)
# ══════════════════════════════════════════════════════════════
s8 = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(s8, BG_LIGHT)
add_header(s8, "PROJE 2: TEKNİK MİMARİ", "Selnikel AI Nasıl Çalışıyor? (3 Aşamalı Güvenlikli RAG)",
           "Şirket kütüphanesini açıp doğrudan ilgili sayfayı okuyan ve delillendiren sistem", kcol=AMBER_BRAND)

steps8 = [
    ("AŞAMA 1", "GPU OCR & Tablo Ayrıştırma", BLUE_BRAND, BLUE_BG, BLUE_BDR,
     [
         "Docling ile hücre koordinatları korunur",
         "Teknik föy ve tablolar parçalanmaz",
         "Taranmış eski PDF'ler bile okunabilir hale gelir",
         "1.600+ doküman hazır indeksli bekletilir"
     ]),
    ("AŞAMA 2", "Hibrit Kurumsal Hafıza", AMBER_BRAND, AMBER_BG, AMBER_BDR,
     [
         "Anlamsal arama: 'aşırı basınç' ➔ 'emniyet ventili'",
         "Standart kodu arama: 'EN 12953-3' birebir bulunur",
         "1.600 dokümanda 200 ms içinde anında tarama",
         "Ağdaki dosyalar değiştiğinde otomatik güncellenir"
     ]),
    ("AŞAMA 3", "Çift Kapılı Doğrulama", GREEN_BRAND, GREEN_BG, GREEN_BDR,
     [
         "Ön Kapı: Bilgi belgede yoksa konuşmaz, uydurmaz",
         "Son Kapı: Sayılar (16 bar, 250°C) PDF ile karşılaştırılır",
         "Tıklanabilir Kanıt: Cevabın yanında sayfa/paragraf rozeti",
         "Mühendis güvenle kontrol edip imza atabilir"
     ]),
]

for i, (kck, stitle, scol, sbg, sbdr, sitems) in enumerate(steps8):
    cx = Inches(0.8 + i * 4.0)
    cy = Inches(1.55)
    cw = Inches(3.733)
    ch = Inches(5.15)

    card(s8, cx, cy, cw, ch, bg=WHITE, bdr=BORDER_CARD)

    top_bar = s8.shapes.add_shape(MSO_SHAPE.RECTANGLE, cx, cy, cw, Inches(0.48))
    top_bar.fill.solid()
    top_bar.fill.fore_color.rgb = sbg
    top_bar.line.color.rgb = sbdr
    top_bar.line.width = Pt(1)

    tb_k = s8.shapes.add_textbox(cx + Inches(0.2), cy + Inches(0.1), cw - Inches(0.4), Inches(0.3))
    tb_k.text_frame.margin_left = tb_k.text_frame.margin_right = 0
    pk = tb_k.text_frame.paragraphs[0]
    rk = pk.add_run()
    rk.text = kck
    rk.font.size = Pt(11)
    rk.font.bold = True
    rk.font.color.rgb = scol

    tb_t = s8.shapes.add_textbox(cx + Inches(0.2), cy + Inches(0.65), cw - Inches(0.4), Inches(0.75))
    tb_t.text_frame.word_wrap = True
    tb_t.text_frame.margin_left = tb_t.text_frame.margin_right = 0
    pt = tb_t.text_frame.paragraphs[0]
    rt = pt.add_run()
    rt.text = stitle
    rt.font.size = Pt(15)
    rt.font.bold = True
    rt.font.color.rgb = TEXT_BLACK

    tb_b = s8.shapes.add_textbox(cx + Inches(0.2), cy + Inches(1.55), cw - Inches(0.4), Inches(3.4))
    tf_b = tb_b.text_frame
    tf_b.word_wrap = True
    tf_b.margin_left = tf_b.margin_right = 0
    for j, item in enumerate(sitems):
        p = tf_b.paragraphs[0] if j == 0 else tf_b.add_paragraph()
        p.space_before = Pt(10)
        r_chk = p.add_run()
        r_chk.text = "✓ "
        r_chk.font.bold = True
        r_chk.font.color.rgb = scol
        r_txt = p.add_run()
        r_txt.text = item
        r_txt.font.size = Pt(11)
        r_txt.font.color.rgb = TEXT_DARK

add_footer(s8, 8)

# ══════════════════════════════════════════════════════════════
# SLIDE 9: PROJE 2 — ARAYÜZ & 5 MCP MOTORU
# ══════════════════════════════════════════════════════════════
s9 = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(s9, BG_LIGHT)
add_header(s9, "PROJE 2: CANLI SİSTEM & MCP ARAÇLARI", "Selnikel AI Arayüzü ve 5 Termodinamik Hesap Motoru",
           "RAG yapay zekanın hafızası ise, MCP onun mühendislik hesaplama yeteneğidir", kcol=AMBER_BRAND)

# Left: AI Workspace Picture
card(s9, Inches(0.8), Inches(1.55), Inches(6.5), Inches(5.15), bg=WHITE, bdr=BORDER_CARD)

tb_lt = s9.shapes.add_textbox(Inches(1.0), Inches(1.7), Inches(6.1), Inches(0.35))
tb_lt.text_frame.margin_left = tb_lt.text_frame.margin_right = 0
plt = tb_lt.text_frame.paragraphs[0]
rlt = plt.add_run()
rlt.text = "Canlı Mühendislik Çalışma Alanı (Web Arayüzü)"
rlt.font.size = Pt(13)
rlt.font.bold = True
rlt.font.color.rgb = TEXT_BLACK

ai_ws_p = IMG_DIR / "selnikel_ai_workspace.png"
if ai_ws_p.exists():
    s9.shapes.add_picture(str(ai_ws_p), Inches(1.0), Inches(2.1), width=Inches(6.1), height=Inches(3.7))

tb_cap = s9.shapes.add_textbox(Inches(1.0), Inches(5.9), Inches(6.1), Inches(0.65))
tf_cap = tb_cap.text_frame
tf_cap.word_wrap = True
tf_cap.margin_left = tf_cap.margin_right = 0
p_cap = tf_cap.paragraphs[0]
r_cap1 = p_cap.add_run()
r_cap1.text = 'Sorgu: "12 bar buhar kazanında su seviyesi alarmı neden verir?"\n'
r_cap1.font.bold = True
r_cap1.font.size = Pt(10)
r_cap1.font.color.rgb = TEXT_BLACK
r_cap2 = p_cap.add_run()
r_cap2.text = "Kaynak Delili: Kazan_Bakim_Rev04.pdf (Sayfa 42) — Milisaniyede Doğrulandı."
r_cap2.font.size = Pt(9.5)
r_cap2.font.bold = True
r_cap2.font.color.rgb = GREEN_BRAND

# Right: 5 MCP Thermodynamic Engines
card(s9, Inches(7.5), Inches(1.55), Inches(5.033), Inches(5.15), bg=WHITE, bdr=BORDER_CARD)

tb_rt = s9.shapes.add_textbox(Inches(7.7), Inches(1.7), Inches(4.6), Inches(0.55))
tb_rt.text_frame.margin_left = tb_rt.text_frame.margin_right = 0
prt = tb_rt.text_frame.paragraphs[0]
rrt = prt.add_run()
rrt.text = "5 Adet Geliştirilen MCP Mühendislik Motoru"
rrt.font.size = Pt(13)
rrt.font.bold = True
rrt.font.color.rgb = TEXT_BLACK

mcp_items = [
    ("🔥 1. Kazan Verimi", "ASME PTC 4 Standardı", "Baca gazı ve radyasyon kayıplarıyla net verim"),
    ("🔒 2. Emniyet Ventili", "EN ISO 4126 Standardı", "Orifis alanı ve tahliye kapasitesi boyutlandırma"),
    ("💨 3. Endüstriyel Fan Debisi", "AMCA 210 Standardı", "Hava debisi, statik basınç ve motor gücü hesabı"),
    ("⚡ 4. Brülör Yanma Analizi", "Stokiyometrik Analiz", "Doğalgaz / fuel-oil teorik hava ve emisyon kontrolü"),
    ("♻️ 5. Ekonomizer Geri Kazanım", "Isı Geri Kazanımı", "Baca gazı atık ısı ve yıllık doğalgaz tasarrufu")
]

for idx, (mtitle, mstd, mdesc) in enumerate(mcp_items):
    my = Inches(2.4 + idx * 0.84)
    card(s9, Inches(7.7), my, Inches(4.633), Inches(0.76), bg=BG_LIGHT, bdr=BORDER_CARD)

    tb_m = s9.shapes.add_textbox(Inches(7.85), my + Inches(0.08), Inches(4.333), Inches(0.6))
    tf_m = tb_m.text_frame
    tf_m.word_wrap = True
    tf_m.margin_left = tf_m.margin_top = tf_m.margin_right = tf_m.margin_bottom = 0

    pm1 = tf_m.paragraphs[0]
    rm1 = pm1.add_run()
    rm1.text = mtitle + " — "
    rm1.font.size = Pt(11)
    rm1.font.bold = True
    rm1.font.color.rgb = AMBER_BRAND
    rm1_s = pm1.add_run()
    rm1_s.text = mstd
    rm1_s.font.size = Pt(10)
    rm1_s.font.bold = True
    rm1_s.font.color.rgb = TEXT_BLACK

    pm2 = tf_m.add_paragraph()
    pm2.space_before = Pt(2)
    rm2 = pm2.add_run()
    rm2.text = mdesc
    rm2.font.size = Pt(9)
    rm2.font.color.rgb = TEXT_MUTED

add_footer(s9, 9)

# ══════════════════════════════════════════════════════════════
# SLIDE 10: PROJE 2 — CHATGPT VS SELNİKEL AI
# ══════════════════════════════════════════════════════════════
s10 = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(s10, BG_LIGHT)
add_header(s10, "PROJE 2: SOMUT FARK", "Normal Yapay Zeka (ChatGPT) vs Selnikel AI",
           "Şirketin ve mühendislerin iş yapış biçiminde yaratılan net farklar", kcol=AMBER_BRAND)

col_w_10 = [Inches(2.5), Inches(4.5), Inches(4.733)]
col_x_10 = [Inches(0.8), Inches(3.3), Inches(7.8)]
hdr_10 = ["KRİTİK KONU", "GENEL YAPAY ZEKA (ChatGPT vb.)", "SELNİKEL AI (RAG + MCP)"]
hdr_bg_10 = [SLATE_BG, RED_BG, GREEN_BG]
hdr_col_10 = [TEXT_BLACK, RED_BRAND, GREEN_BRAND]

for i in range(3):
    card(s10, col_x_10[i], Inches(1.55), col_w_10[i], Inches(0.48), bg=hdr_bg_10[i], bdr=BORDER_CARD)
    tb = s10.shapes.add_textbox(col_x_10[i] + Inches(0.1), Inches(1.65), col_w_10[i] - Inches(0.2), Inches(0.3))
    tb.text_frame.margin_left = tb.text_frame.margin_right = 0
    p = tb.text_frame.paragraphs[0]
    r = p.add_run()
    r.text = hdr_10[i]
    r.font.size = Pt(11)
    r.font.bold = True
    r.font.color.rgb = hdr_col_10[i]

comp_data_10 = [
    ("Hız & Hazırlık", "Her soru için 100 MB dosya yükle, bekle", "Şirket hafızası hazır, 2 sn'de doğrudan cevap"),
    ("Doğruluk & Güven", "Tabloları kaçırır, emin olmadığı yeri uydurur", "GPU OCR ile okur, kanıt yoksa asla konuşmaz"),
    ("Kanıt & Denetim", "Cevabın nereden geldiği belirsizdir", "Tıklanabilir sayfa, paragraf ve tablo rozeti"),
    ("Canlı Güncellik", "Dosya güncellense de yapay zekanın haberi olmaz", "Ağdaki yeni revizyon yüklendiği an otomatik güncel"),
    ("Mühendislik Hesabı", "Formül çözemez, kaba tahmin yürütür", "5 MCP motoruyla ASME/ISO standartlarında hesap")
]

for row_idx, rdata in enumerate(comp_data_10):
    ry = Inches(2.15 + row_idx * 0.9)
    rbg = WHITE if row_idx % 2 == 0 else BG_LIGHT

    for col_idx in range(3):
        card(s10, col_x_10[col_idx], ry, col_w_10[col_idx], Inches(0.82), bg=rbg, bdr=BORDER_CARD)
        tb = s10.shapes.add_textbox(col_x_10[col_idx] + Inches(0.15), ry + Inches(0.12), col_w_10[col_idx] - Inches(0.3), Inches(0.6))
        tf = tb.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0
        p = tf.paragraphs[0]
        r = p.add_run()
        r.text = rdata[col_idx]
        r.font.size = Pt(11)

        if col_idx == 0:
            r.font.bold = True
            r.font.color.rgb = TEXT_BLACK
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
set_bg(s11, BG_LIGHT)
add_header(s11, "PROJE 3: FABRİKA, LOJİSTİK & İK PLATFORMU", "Selnikel One — Kurumsal Dijital Yönetim Omurgası",
           '"Birlikte, Yolunda." — İmalat çarklarını, servis filosunu ve çalışan refahını tek masada buluşturan sistem', kcol=GREEN_BRAND)

# Philosophy Card
card(s11, Inches(0.8), Inches(1.55), Inches(11.733), Inches(1.15), bg=WHITE, bdr=BORDER_CARD)
tb_phil = s11.shapes.add_textbox(Inches(1.1), Inches(1.68), Inches(11.133), Inches(0.9))
tf_ph = tb_phil.text_frame
tf_ph.word_wrap = True
tf_ph.margin_left = tf_ph.margin_right = 0

pph1 = tf_ph.paragraphs[0]
rph1 = pph1.add_run()
rph1.text = "Selnikel One Neden Geliştirildi?"
rph1.font.size = Pt(14)
rph1.font.bold = True
rph1.font.color.rgb = GREEN_BRAND

pph2 = tf_ph.add_paragraph()
pph2.space_before = Pt(4)
rph2 = pph2.add_run()
rph2.text = "Servis araçlarının belirsizliği, turnike mesai durumunun bilinmemesi, atölye görev dağılımının sözlü yapılması ve kağıt form bürokrasisi tek bir kurumsal süper-uygulamada çözüme kavuşturuldu."
rph2.font.size = Pt(11.5)
rph2.font.color.rgb = TEXT_DARK

# 5 Module Cards (Big & Bold)
mods11 = [
    ("MODÜL 1", "Servis & Canlı GPS", GREEN_BRAND, GREEN_BG, GREEN_BDR,
     "Kendi servislerimizin canlı harita takibi. İzinli personelin durağı otomatik elenir; şoför en kısa yakıt rotasından ilerler."),
    ("MODÜL 2", "IFS Entegre PDKS", BLUE_BRAND, BLUE_BG, BLUE_BDR,
     "Turnike kart hareketleri cebe iner. Çalışan günlük mesai süresini ve giriş-çıkış geçmişini anlık olarak görür."),
    ("MODÜL 3", "Atölye Görev Takibi", AMBER_BRAND, AMBER_BG, AMBER_BDR,
     "Kazan, brülör, kaynak şefleri tek tıkla iş atar. Usta 'Başla' ve 'Bitti' der; malzeme eksikliği anında tespit edilir."),
    ("MODÜL 4", "İK Form Motoru", RED_BRAND, RED_BG, RED_BDR,
     "Yıllık 360° çalışma arkadaşı değerlendirmesi, anketler ve İSG bildirimleri kağıt yerine saniyeler içinde toplanır."),
    ("MODÜL 5", "Fabrika Yaşamı", PURPLE_BRAND, PURPLE_BG, PURPLE_BDR,
     "Günlük 4 kap yemek menüsü, psikolog/diyetisyen gizli randevusu ve anonim öneri/şikayet kanalı.")
]

for i, (kck, mtitle, mcol, mbg, mbdr, mdesc) in enumerate(mods11):
    cx = Inches(0.8 + i * 2.4)
    cy = Inches(2.9)
    cw = Inches(2.18)
    ch = Inches(3.8)

    card(s11, cx, cy, cw, ch, bg=WHITE, bdr=BORDER_CARD)

    top_bar = s11.shapes.add_shape(MSO_SHAPE.RECTANGLE, cx, cy, cw, Inches(0.4))
    top_bar.fill.solid()
    top_bar.fill.fore_color.rgb = mbg
    top_bar.line.color.rgb = mbdr
    top_bar.line.width = Pt(1)

    tb_k = s11.shapes.add_textbox(cx + Inches(0.1), cy + Inches(0.08), cw - Inches(0.2), Inches(0.28))
    tb_k.text_frame.margin_left = tb_k.text_frame.margin_right = 0
    pk = tb_k.text_frame.paragraphs[0]
    pk.alignment = PP_ALIGN.CENTER
    rk = pk.add_run()
    rk.text = kck
    rk.font.size = Pt(9.5)
    rk.font.bold = True
    rk.font.color.rgb = mcol

    tb_t = s11.shapes.add_textbox(cx + Inches(0.12), cy + Inches(0.55), cw - Inches(0.24), Inches(0.65))
    tb_t.text_frame.word_wrap = True
    tb_t.text_frame.margin_left = tb_t.text_frame.margin_right = 0
    pt = tb_t.text_frame.paragraphs[0]
    rt = pt.add_run()
    rt.text = mtitle
    rt.font.size = Pt(12)
    rt.font.bold = True
    rt.font.color.rgb = TEXT_BLACK

    tb_d = s11.shapes.add_textbox(cx + Inches(0.12), cy + Inches(1.3), cw - Inches(0.24), Inches(2.3))
    tf_d = tb_d.text_frame
    tf_d.word_wrap = True
    tf_d.margin_left = tf_d.margin_right = 0
    pd = tf_d.paragraphs[0]
    rd = pd.add_run()
    rd.text = mdesc
    rd.font.size = Pt(10)
    rd.font.color.rgb = TEXT_DARK

add_footer(s11, 11)

# ══════════════════════════════════════════════════════════════
# SLIDE 12: PROJE 3 — SAHADAKİ MEVCUT SORUNLAR
# ══════════════════════════════════════════════════════════════
s12 = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(s12, BG_LIGHT)
add_header(s12, "PROJE 3: SAHA DARBOĞAZLARI", "Fabrikada Tespit Edilen 4 Operasyonel Problem",
           "Servis, PDKS, atölye ve İK süreçlerinde yaşanan aksaklıklar", kcol=RED_BRAND)

field_probs12 = [
    ("1. Servis Filosunda Bilinmezlik", "Servislerin nerede olduğu bilinmiyordu; personel durakta bekliyordu. İzinli olan personelin durağına boşuna girilerek her gün gereksiz km ve yakıt harcanıyordu.", RED_BRAND),
    ("2. PDKS & Turnike Takibi Eksikliği", "Çalışan nizamiye turnikesinden kart bastığında mesaisinin IFS'e işlenip işlenmediğini göremiyordu. Ay sonu bordroya kadar mesai belirsiz kalıyordu.", AMBER_BRAND),
    ("3. Atölyelerde Sözlü Görev Dağılımı", "Kazan ve brülör imalatında iş atamaları sözlü veya tahtadan yapılıyordu. Kimin hangi işte çalıştığı, hangi görevin bittiği veya malzeme yüzünden durduğu izlenemiyordu.", BLUE_BRAND),
    ("4. Kağıt A4 Form Bürokrasisi", "Yıllık arkadaş değerlendirmeleri basılı A4 kağıtlarla yürütülüyordu. Formların toplanması ve analizi haftalar sürüyor, kağıtlar arşivde atıl kalıyordu.", PURPLE_BRAND)
]

for i, (ptitle, pdesc, pcol) in enumerate(field_probs12):
    cy = Inches(1.55 + i * 1.3)
    cw = Inches(11.733)
    ch = Inches(1.18)

    card(s12, Inches(0.8), cy, cw, ch, bg=WHITE, bdr=BORDER_CARD)

    lbar = s12.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0.8), cy, Inches(0.08), ch)
    lbar.fill.solid()
    lbar.fill.fore_color.rgb = pcol
    lbar.line.fill.background()

    tb = s12.shapes.add_textbox(Inches(1.1), cy + Inches(0.12), Inches(11.2), Inches(0.95))
    tf = tb.text_frame
    tf.word_wrap = True
    tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0

    p1 = tf.paragraphs[0]
    r1 = p1.add_run()
    r1.text = ptitle
    r1.font.size = Pt(13)
    r1.font.bold = True
    r1.font.color.rgb = pcol

    p2 = tf.add_paragraph()
    p2.space_before = Pt(4)
    r2 = p2.add_run()
    r2.text = pdesc
    r2.font.size = Pt(11)
    r2.font.color.rgb = TEXT_DARK

add_footer(s12, 12)

# ══════════════════════════════════════════════════════════════
# SLIDE 13: PROJE 3 — 5 MODÜL ÇÖZÜM
# ══════════════════════════════════════════════════════════════
s13 = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(s13, BG_LIGHT)
add_header(s13, "PROJE 3: SELNİKEL ONE ÇÖZÜMLERİ", "5 Operasyonel Modülde Neyi Çözdük?",
           "Fabrika sahasındaki aksaklıkları ortadan kaldıran akıllı dijital fonksiyonlar", kcol=GREEN_BRAND)

sol_mods13 = [
    ("Modül 1: Servis & Rota", GREEN_BRAND,
     [
         "Canlı Harita: Servisin durağa kaç dk kaldığı cepte",
         "Akıllı Rota: İzinli personelin durağı otomatik elenir",
         "Vardiya Çıkışı: 8 servisin çıkış hazırlığı tek ekranda"
     ]),
    ("Modül 2: IFS Entegre PDKS", BLUE_BRAND,
     [
         "Turnike Verisi Cepte: Kart hareketleri anında telefonda",
         "Canlı Mesai: 'Bugün mesaidesiniz (7s 20dk)' anlık görünür",
         "14 Günlük Geçmiş: Şeffaf mesai ve giriş-çıkış takibi"
     ]),
    ("Modül 3: Atölye Görev Takibi", AMBER_BRAND,
     [
         "Birim Şefi: Kazan, brülör personeline iş atar",
         "Usta Mobil: 'Başla' ve 'Tamamlandı' der; işler netleşir",
         "Darboğaz Bildirimi: Malzeme eksikliği anında not düşülür"
     ]),
    ("Modül 4: İK Değerlendirme", RED_BRAND,
     [
         "360° Peer Review: Ekip arkadaşlarını kurumsal puanlama",
         "Dinamik Anket: Memnuniyet ve eğitim talepleri tek tıkla",
         "Anlık İK Analizi: Formlar dijital grafiklerle raporlanır"
     ]),
    ("Modül 5: Fabrika Yaşamı", PURPLE_BRAND,
     [
         "4 Kap Menü: Yemek menüsü, kalori ve alerjen bilgisi cepte",
         "Gizli Randevu: Psikolog ve diyetisyen için gizli slotlar",
         "Anonim Şikayet: Kimlik görünmeden öneri ve bildirim kanalı"
     ]),
]

for i, (mtitle, mcol, mbullets) in enumerate(sol_mods13):
    col = i % 3 if i < 3 else (i - 3)
    row = 0 if i < 3 else 1
    cw = Inches(3.733) if i < 3 else Inches(5.7)
    cx = Inches(0.8 + col * 4.0) if i < 3 else Inches(0.8 + col * 5.95)
    cy = Inches(1.55) if row == 0 else Inches(4.2)
    ch = Inches(2.5)

    card(s13, cx, cy, cw, ch, bg=WHITE, bdr=BORDER_CARD)

    top_line = s13.shapes.add_shape(MSO_SHAPE.RECTANGLE, cx, cy, cw, Inches(0.06))
    top_line.fill.solid()
    top_line.fill.fore_color.rgb = mcol
    top_line.line.fill.background()

    tb = s13.shapes.add_textbox(cx + Inches(0.18), cy + Inches(0.15), cw - Inches(0.36), ch - Inches(0.25))
    tf = tb.text_frame
    tf.word_wrap = True
    tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0

    p_t = tf.paragraphs[0]
    r_t = p_t.add_run()
    r_t.text = mtitle
    r_t.font.size = Pt(13)
    r_t.font.bold = True
    r_t.font.color.rgb = mcol

    for b in mbullets:
        p_b = tf.add_paragraph()
        p_b.space_before = Pt(6)
        r_chk = p_b.add_run()
        r_chk.text = "✓ "
        r_chk.font.bold = True
        r_chk.font.color.rgb = mcol
        r_txt = p_b.add_run()
        r_txt.text = b
        r_txt.font.size = Pt(10)
        r_txt.font.color.rgb = TEXT_DARK

add_footer(s13, 13)

# ══════════════════════════════════════════════════════════════
# SLIDE 14: PROJE 3 — MOBİL EKRANLAR
# ══════════════════════════════════════════════════════════════
s14 = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(s14, BG_LIGHT)
add_header(s14, "PROJE 3: KULLANICI ARAYÜZLERİ", "Selnikel One: Geliştirilen Mobil Uygulama Ekranları",
           "Personel ve sürücüler için hazırlanan kullanıcı dostu mobil arayüzler", kcol=GREEN_BRAND)

mobile_screens14 = [
    ("mobile_login.png", "1. Güvenli Giriş", "Sicil No & Şifre"),
    ("mobile_employee.png", "2. Çalışan Paneli", "Servis & Mesai"),
    ("mobile_driver.png", "3. Şoför Sefer Modu", "Tek Tuşla Sefer"),
    ("mobile_manifest.png", "4. Canlı Manifesto", "Durak Yolcu Listesi"),
    ("mobile_telemetry.png", "5. GPS Telemetri", "Kesintisiz Offline Buffer"),
]

for i, (mimg, mname, mdesc) in enumerate(mobile_screens14):
    cx = Inches(0.8 + i * 2.4)
    cy = Inches(1.55)
    cw = Inches(2.18)
    ch = Inches(5.15)

    card(s14, cx, cy, cw, ch, bg=WHITE, bdr=BORDER_CARD)

    tb_h = s14.shapes.add_textbox(cx + Inches(0.1), cy + Inches(0.1), cw - Inches(0.2), Inches(0.35))
    tb_h.text_frame.margin_left = tb_h.text_frame.margin_right = 0
    ph = tb_h.text_frame.paragraphs[0]
    rh = ph.add_run()
    rh.text = mname
    rh.font.size = Pt(11)
    rh.font.bold = True
    rh.font.color.rgb = TEXT_BLACK

    img_path = IMG_DIR / mimg
    if img_path.exists():
        s14.shapes.add_picture(str(img_path), cx + Inches(0.1), cy + Inches(0.5), width=cw - Inches(0.2), height=Inches(3.85))

    tb_c = s14.shapes.add_textbox(cx + Inches(0.1), cy + Inches(4.45), cw - Inches(0.2), Inches(0.6))
    tf_c = tb_c.text_frame
    tf_c.word_wrap = True
    tf_c.margin_left = tf_c.margin_top = tf_c.margin_right = tf_c.margin_bottom = 0
    pc = tf_c.paragraphs[0]
    rc = pc.add_run()
    rc.text = mdesc
    rc.font.size = Pt(9.5)
    rc.font.bold = True
    rc.font.color.rgb = TEXT_MUTED

add_footer(s14, 14)

# ══════════════════════════════════════════════════════════════
# SLIDE 15: ROTA OPTİMİZASYONU & SOMUT FİNANSAL KAZANÇ
# ══════════════════════════════════════════════════════════════
s15 = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(s15, BG_LIGHT)
add_header(s15, "PROJE 3: FİNANSAL KAZANÇ (ROI)", "Servis Güzergah Optimizasyonu ve Net Tasarruf",
           "148 çalışanın adres verisiyle Google OR-Tools ve Valhalla modelleme sonuçları", kcol=GREEN_BRAND)

# Left: Route Map Graphic
card(s15, Inches(0.8), Inches(1.55), Inches(5.8), Inches(5.15), bg=WHITE, bdr=BORDER_CARD)

tb_mapt = s15.shapes.add_textbox(Inches(1.0), Inches(1.7), Inches(5.4), Inches(0.35))
tb_mapt.text_frame.margin_left = tb_mapt.text_frame.margin_right = 0
pmapt = tb_mapt.text_frame.paragraphs[0]
rmapt = pmapt.add_run()
rmapt.text = "124 Duraklı Akıllı Güzergah Haritası"
rmapt.font.size = Pt(13)
rmapt.font.bold = True
rmapt.font.color.rgb = TEXT_BLACK

map_p = IMG_DIR / "map_routes.png"
if map_p.exists():
    s15.shapes.add_picture(str(map_p), Inches(1.0), Inches(2.1), width=Inches(5.4), height=Inches(3.7))

tb_mapsub = s15.shapes.add_textbox(Inches(1.0), Inches(5.9), Inches(5.4), Inches(0.65))
tf_ms = tb_mapsub.text_frame
tf_ms.word_wrap = True
tf_ms.margin_left = tf_ms.margin_right = 0
pms = tf_ms.paragraphs[0]
rms = pms.add_run()
rms.text = "148 çalışanın ev adresleri 124 güvenli durağa kümelenerek matematiksel VRPTW modeliyle optimize edildi."
rms.font.size = Pt(9.5)
rms.font.color.rgb = TEXT_MUTED

# Right: 4 Giant Financial Cards
rois15 = [
    ("🚌 -4 KİRALIK ARAÇ", "15 Hattan 11 Hatta Düşüş", "Tüm çalışanlar 11 araçla tam zamanında taşınmaktadır.", GREEN_BRAND),
    ("📉 GÜNDE -510 KM", "%40.4 Yakıt & Mesafe Düşüşü", "Eski: 1.262 km/gün ➔ Yeni: 752 km/gün (Yılda 127.500 km daha az yol).", BLUE_BRAND),
    ("💰 ₺233.000 / AY", "Yılda ~₺2.8 Milyon Nakit Getiri", "4 kiralık servis aracı ve yakıt tasarrufu şirkete doğrudan net nakit kalır.", RED_BRAND),
    ("⏳ < 60 GÜN AMORTİ", "Geri Dönüş Süresi (Payback)", "Yazılım altyapı yatırımı sağlanan tasarrufla ilk 2 ayda kendini amorti eder.", AMBER_BRAND),
]

for idx, (rtitle, rsub, rdesc, rcol) in enumerate(rois15):
    ry = Inches(1.55 + idx * 1.3)
    card(s15, Inches(6.8), ry, Inches(5.733), Inches(1.18), bg=WHITE, bdr=BORDER_CARD)

    lbar = s15.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(6.8), ry, Inches(0.08), Inches(1.18))
    lbar.fill.solid()
    lbar.fill.fore_color.rgb = rcol
    lbar.line.fill.background()

    tb = s15.shapes.add_textbox(Inches(7.05), ry + Inches(0.12), Inches(5.3), Inches(0.95))
    tf = tb.text_frame
    tf.word_wrap = True
    tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0

    p1 = tf.paragraphs[0]
    r1 = p1.add_run()
    r1.text = rtitle + " — "
    r1.font.size = Pt(13)
    r1.font.bold = True
    r1.font.color.rgb = rcol
    r1_s = p1.add_run()
    r1_s.text = rsub
    r1_s.font.size = Pt(11)
    r1_s.font.bold = True
    r1_s.font.color.rgb = TEXT_BLACK

    p2 = tf.add_paragraph()
    p2.space_before = Pt(3)
    r2 = p2.add_run()
    r2.text = rdesc
    r2.font.size = Pt(10)
    r2.font.color.rgb = TEXT_DARK

add_footer(s15, 15)

# ══════════════════════════════════════════════════════════════
# SLIDE 16: YÖNETİCİ ÖZETİ (3 PROJE BİRLİKTE)
# ══════════════════════════════════════════════════════════════
s16 = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(s16, BG_LIGHT)
add_header(s16, "YÖNETİCİ ÖZETİ & ENTEGRE DEĞER", "3 Projenin Selnikel'e Kazandırdığı Net Sonuçlar",
           "Yönetim Kurulu ve Genel Müdürlük İçin Entegre Sonuç Matrisi", kcol=RED_BRAND)

total_gains16 = [
    ("🌐 İhracat Vitrini & Hız", "Proje 1 (Web)", "1 saniyenin altında açılan 5 dilli küresel vitrin. Teklif hazırlama süresi %35 hızlandı.", BLUE_BRAND),
    ("🛡️ Sıfır Siber Güvenlik Riski", "Proje 1 (Web)", "0 SQL injection açığı, 0 sunucu çökmesi, penetrasyon onaylı A+ kurumsal güvenlik.", RED_BRAND),
    ("🧠 70 Yıllık Kurumsal Hafıza", "Proje 2 (Selnikel AI)", "Usta ve mühendis tecrübesi şirket sunucularında kalıcı sermaye oldu. Sıfır bilgi kaybı.", AMBER_BRAND),
    ("⚡ Mühendislikte Sıfır Hata", "Proje 2 (Selnikel AI)", "ASME ve ISO standartlarında 5 MCP hesap motoru; şartname tarama süresi 4 saatten 5 dk'ya indi.", GREEN_BRAND),
    ("💰 Yılda ~₺2.8M Nakit Tasarruf", "Proje 3 (Selnikel One)", "4 servis aracının iptali ve günde 510 km daha az yol ile net yakıt ve filo tasarrufu.", GREEN_BRAND),
    ("📱 Kağıtsız & Şeffaf Fabrika", "Proje 3 (Selnikel One)", "Servis belirsizliği bitti, nizamiye PDKS mesaisi cebe indi, atölye işleri şeffaflaştı.", PURPLE_BRAND),
]

for i, (gtitle, gsub, gdesc, gcol) in enumerate(total_gains16):
    row = i // 3
    col = i % 3
    cx = Inches(0.8 + col * 4.0)
    cy = Inches(1.55 + row * 2.6)
    cw = Inches(3.733)
    ch = Inches(2.45)

    card(s16, cx, cy, cw, ch, bg=WHITE, bdr=BORDER_CARD)

    top_line = s16.shapes.add_shape(MSO_SHAPE.RECTANGLE, cx, cy, cw, Inches(0.06))
    top_line.fill.solid()
    top_line.fill.fore_color.rgb = gcol
    top_line.line.fill.background()

    tb = s16.shapes.add_textbox(cx + Inches(0.2), cy + Inches(0.18), cw - Inches(0.4), ch - Inches(0.3))
    tf = tb.text_frame
    tf.word_wrap = True
    tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0

    p1 = tf.paragraphs[0]
    r1 = p1.add_run()
    r1.text = gtitle
    r1.font.size = Pt(13)
    r1.font.bold = True
    r1.font.color.rgb = TEXT_BLACK

    p2 = tf.add_paragraph()
    p2.space_before = Pt(3)
    r2 = p2.add_run()
    r2.text = gsub
    r2.font.size = Pt(9.5)
    r2.font.bold = True
    r2.font.color.rgb = gcol

    p3 = tf.add_paragraph()
    p3.space_before = Pt(6)
    r3 = p3.add_run()
    r3.text = gdesc
    r3.font.size = Pt(10.5)
    r3.font.color.rgb = TEXT_DARK

add_footer(s16, 16)

# ══════════════════════════════════════════════════════════════
# SLIDE 17: TEŞEKKÜR & SORU - CEVAP (Real Selnikel Factory Image)
# ══════════════════════════════════════════════════════════════
s17 = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(s17, WHITE)

red_strip17 = s17.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0), Inches(0), Inches(0.2), SLIDE_H)
red_strip17.fill.solid()
red_strip17.fill.fore_color.rgb = RED_BRAND
red_strip17.line.fill.background()

logo_p = IMG_DIR / "selnikel_logo.png"
if logo_p.exists():
    s17.shapes.add_picture(str(logo_p), Inches(0.8), Inches(0.55), width=Inches(2.8))

tb_close = s17.shapes.add_textbox(Inches(0.8), Inches(1.8), Inches(6.8), Inches(1.7))
tf_c17 = tb_close.text_frame
tf_c17.word_wrap = True
tf_c17.margin_left = tf_c17.margin_top = tf_c17.margin_right = tf_c17.margin_bottom = 0

pc1 = tf_c17.paragraphs[0]
rc1 = pc1.add_run()
rc1.text = "Teşekkür Ederim"
rc1.font.size = Pt(36)
rc1.font.bold = True
rc1.font.color.rgb = TEXT_BLACK

pc2 = tf_c17.add_paragraph()
pc2.space_before = Pt(8)
rc2 = pc2.add_run()
rc2.text = "Sorularınız, görüşleriniz ve değerlendirmeleriniz için hazırım."
rc2.font.size = Pt(15)
rc2.font.color.rgb = RED_BRAND
rc2.font.bold = True

# Presenter Card
card(s17, Inches(0.8), Inches(3.6), Inches(6.5), Inches(2.2), bg=BG_LIGHT, bdr=BORDER_CARD)
tb_cp = s17.shapes.add_textbox(Inches(1.1), Inches(3.8), Inches(6.0), Inches(1.8))
tf_cp = tb_cp.text_frame
tf_cp.word_wrap = True
tf_cp.margin_left = tf_cp.margin_top = tf_cp.margin_right = tf_cp.margin_bottom = 0

pp1 = tf_cp.paragraphs[0]
rr1 = pp1.add_run()
rr1.text = "Ömer Faruk Özdemir\n"
rr1.font.size = Pt(16)
rr1.font.bold = True
rr1.font.color.rgb = TEXT_BLACK

rr2 = pp1.add_run()
rr2.text = "Kocaeli Üniversitesi — Bilgisayar Mühendisliği (4. Sınıf)\n"
rr2.font.size = Pt(12)
rr2.font.bold = True
rr2.font.color.rgb = TEXT_DARK

rr3 = pp1.add_run()
rr3.text = "Selnikel Enerji A.Ş. — IT Bölümü Yazılım Stajyeri\n\n"
rr3.font.size = Pt(11)
rr3.font.color.rgb = TEXT_MUTED

rr4 = pp1.add_run()
rr4.text = "GitHub: "
rr4.font.size = Pt(11)
rr4.font.color.rgb = TEXT_MUTED
rr4_b = pp1.add_run()
rr4_b.text = "github.com/ozdemirCeng/selnikel-presentation"
rr4_b.font.size = Pt(11)
rr4_b.font.bold = True
rr4_b.font.color.rgb = BLUE_BRAND

# 3 Horizontal Summary Pills
pills_close17 = [
    ("Proje 1: Kurumsal Web", BLUE_BG, BLUE_BRAND, BLUE_BDR),
    ("Proje 2: Selnikel AI (RAG + MCP)", AMBER_BG, AMBER_BRAND, AMBER_BDR),
    ("Proje 3: Selnikel One & Rota", GREEN_BG, GREEN_BRAND, GREEN_BDR),
]
for i, (ptext, pbg, pcol, pbdr) in enumerate(pills_close17):
    px = Inches(0.8 + i * 2.2)
    py = Inches(6.05)
    card(s17, px, py, Inches(2.1), Inches(0.44), bg=pbg, bdr=pbdr)
    tbp = s17.shapes.add_textbox(px, py + Inches(0.08), Inches(2.1), Inches(0.28))
    tbp.text_frame.margin_left = tbp.text_frame.margin_right = 0
    p = tbp.text_frame.paragraphs[0]
    p.alignment = PP_ALIGN.CENTER
    r = p.add_run()
    r.text = ptext
    r.font.size = Pt(9)
    r.font.bold = True
    r.font.color.rgb = pcol

# REAL SELNIKEL INDUSTRIAL PLANT IMAGE on Right
real_fac_p = IMG_DIR / "selnikel_fabrika_tesis.png"
if not real_fac_p.exists():
    real_fac_p = IMG_DIR / "product_facility.png"

if real_fac_p.exists():
    card(s17, Inches(7.6), Inches(1.2), Inches(4.9), Inches(5.15), bg=WHITE, bdr=BORDER_CARD)
    s17.shapes.add_picture(str(real_fac_p), Inches(7.7), Inches(1.3), width=Inches(4.7), height=Inches(4.95))

add_footer(s17, 17)

# Save
prs.save(str(OUTPUT))
print(f"[OK] Executive Keynote Presentation saved successfully: {OUTPUT}")
