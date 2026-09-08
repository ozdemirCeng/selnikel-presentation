import { SyntheticEquipment, SyntheticTicket, SyntheticKnowledgeDoc, AutomationFactor, PriorityMatrixCard } from '../types';

export const SYNTHETIC_EQUIPMENT: SyntheticEquipment[] = [
  {
    id: 'EQ-01',
    code: 'CNC-FREZE-04',
    name: '5 Eksenli CNC İşleme Merkezi',
    location: 'İmalat Holü B / İstasyon 12',
    status: 'OPERATIONAL',
    lastServiceDate: '2026-07-15',
    responsibleEngineer: 'M. Yılmaz (Bakım Sorumlusu)',
    isSynthetic: true,
  },
  {
    id: 'EQ-02',
    code: 'KAZAN-TEST-02',
    name: 'Hidrostatik Basınç Test Ünitesi',
    location: 'Montaj & Test Alanı C',
    status: 'MAINTENANCE_REQUIRED',
    lastServiceDate: '2026-06-28',
    responsibleEngineer: 'A. Demir (Kalite Kontrol)',
    isSynthetic: true,
  },
  {
    id: 'EQ-03',
    code: 'FAN-DENGE-01',
    name: 'Dinamik Rotor Balans Tezgahı',
    location: 'Fan İmalat Holü A / Hat 3',
    status: 'OPERATIONAL',
    lastServiceDate: '2026-08-01',
    responsibleEngineer: 'S. Kaya (Üretim Mühendisi)',
    isSynthetic: true,
  }
];

export const SYNTHETIC_TICKETS: SyntheticTicket[] = [
  {
    id: 'TCK-1042',
    ticketNumber: '#SR-2026-1042',
    equipmentCode: 'CNC-FREZE-04',
    equipmentName: '5 Eksenli CNC İşleme Merkezi',
    category: 'MEKANİK',
    priority: 'YÜKSEK',
    reportedBy: 'Ahmet Usta (Vardiya 1)',
    timestamp: '10 dakika önce',
    status: 'AÇIK',
    description: 'Spindle ekseninde mikron seviyesinde titreşim artışı gözlendi. Yağ basıncı kontrol edilmeli.',
    isSynthetic: true,
  },
  {
    id: 'TCK-1041',
    ticketNumber: '#SR-2026-1041',
    equipmentCode: 'FAN-DENGE-01',
    equipmentName: 'Dinamik Rotor Balans Tezgahı',
    category: 'KALİTE_KONTROL',
    priority: 'ORTA',
    reportedBy: 'Mustafa K. (Kalite Uzmanı)',
    timestamp: '45 dakika önce',
    status: 'İNCELEMEDE',
    description: 'Seri 800 rotor için balans tolerans sapması kalibrasyon kaydı onaylandı.',
    isSynthetic: true,
  },
  {
    id: 'TCK-1040',
    ticketNumber: '#SR-2026-1040',
    equipmentCode: 'KAZAN-TEST-02',
    equipmentName: 'Hidrostatik Basınç Test Ünitesi',
    category: 'KAIZEN',
    priority: 'DÜŞÜK',
    reportedBy: 'Emre T. (Üretim Stajyeri)',
    timestamp: '2 saat önce',
    status: 'ÇÖZÜLDÜ',
    description: 'Manometre okuma açısına yansıma önleyici aparat yerleştirildi, okuma süresi %40 kısaldı.',
    isSynthetic: true,
  }
];

export const SYNTHETIC_KNOWLEDGE_DOCS: SyntheticKnowledgeDoc[] = [
  {
    id: 'DOC-01',
    title: 'Endüstriyel Ağır Hizmet Fanları — Montaj ve Bakım El Kitabı',
    docCode: 'SENTETIK-DOC-FAN-2026-V4',
    pageNumber: 14,
    snippet: 'Radyal fan yatak çalışma sıcaklığı sürekli rejimde azami 85°C olmalıdır. 90°C üzeri sıcaklıklarda yağlama vizkozitesi düşeceğinden acil titreşim kontrolü ve rulman revizyonu zorunludur.',
    matchScore: 98,
    isSynthetic: true,
  },
  {
    id: 'DOC-02',
    title: 'Kazan Gövdesi Kaynak ve Isıl İşlem Prosedürü',
    docCode: 'SENTETIK-SARTNAME-KZN-08',
    pageNumber: 22,
    snippet: 'P265GH sac malzeme alın kaynaklarında ön tav sıcaklığı 120°C - 150°C aralığında tutulmalıdır. Kaynak sonrası gerilim giderme tavı 580°C ± 15°C sıcaklıkta 120 dakika uygulanır.',
    matchScore: 91,
    isSynthetic: true,
  },
  {
    id: 'DOC-03',
    title: 'Rotor Dinamik Balanslama ve İzolasyon Talimatnamesi',
    docCode: 'SENTETIK-TALIMAT-BLS-12',
    pageNumber: 8,
    snippet: 'ISO 1940-1 G2.5 kalite sınıfına göre balanslama sonrası kalan artık dengesizlik değeri mil ekseni başına 3.2 g·mm sınırını aşamaz.',
    matchScore: 86,
    isSynthetic: true,
  }
];

export const AUTOMATION_FACTORS_DEFAULT: AutomationFactor[] = [
  {
    id: 'repeatability',
    label: 'İş Tekrarlanabilirliği',
    description: 'Aynı geometrik veya mekanik hareketin vardiyada tekrarlanma sıklığı',
    value: 85,
    weight: 0.25,
  },
  {
    id: 'physical_load',
    label: 'Fiziksel Yük & Ergonomi',
    description: 'Ağır kaldırma, zor duruş ve operatör yorulma katsayısı',
    value: 90,
    weight: 0.25,
  },
  {
    id: 'quality_impact',
    label: 'Kaliteye Etkisi',
    description: 'Manuel hata riski ve hassas tolerans gereksinimi',
    value: 75,
    weight: 0.20,
  },
  {
    id: 'bottleneck_impact',
    label: 'Darboğaz Oluşturma',
    description: 'Önceki ve sonraki istasyonları bekletme potansiyeli',
    value: 80,
    weight: 0.20,
  },
  {
    id: 'process_variation',
    label: 'Süreç Varyasyonu (Ters Etken)',
    description: 'Üründen ürüne değişen ölçü ve siparişe özel geometri farkı',
    value: 30, // Lower variation is better for automation
    weight: 0.10,
  }
];

export const PRIORITY_MATRIX_CARDS: PriorityMatrixCard[] = [
  {
    id: 'PMC-01',
    title: 'Mobil Arıza / Talep Bildirimi & QR',
    category: 'DİJİTAL',
    impact: 'YÜKSEK',
    difficulty: 'DÜŞÜK',
    recommendation: 'HIZLI PİLOT',
  },
  {
    id: 'PMC-02',
    title: 'Kurumsal Bilgi Arama & AI Asistanı',
    category: 'BİLGİ',
    impact: 'YÜKSEK',
    difficulty: 'DÜŞÜK',
    recommendation: 'HIZLI PİLOT',
  },
  {
    id: 'PMC-03',
    title: 'Operasyonel Yönetim Kokpiti',
    category: 'YÖNETİM',
    impact: 'YÜKSEK',
    difficulty: 'DÜŞÜK',
    recommendation: 'HIZLI PİLOT',
  },
  {
    id: 'PMC-04',
    title: 'Ağır Parça Kaldırma Yarı-Otomasyonu',
    category: 'ÜRETİM',
    impact: 'YÜKSEK',
    difficulty: 'YÜKSEK',
    recommendation: 'STRATEJİK FİZİBİLİTE',
  },
  {
    id: 'PMC-05',
    title: 'Tam Otomatik Robotik Kaynak Hattı',
    category: 'ÜRETİM',
    impact: 'YÜKSEK',
    difficulty: 'YÜKSEK',
    recommendation: 'STRATEJİK FİZİBİLİTE',
  },
  {
    id: 'PMC-06',
    title: 'Kapsamlı ERP Değişimi',
    category: 'YÖNETİM',
    impact: 'DÜŞÜK',
    difficulty: 'YÜKSEK',
    recommendation: 'ERTELENMELİ',
  }
];
