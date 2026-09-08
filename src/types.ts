export type ActNumber = '01' | '02' | '03' | '04' | '05' | '06' | 'APP';

export interface SlideMetadata {
  id: string;
  slideNumber: string; // e.g. "01/11" or "A-01/05"
  act: ActNumber;
  actTitle: string;
  title: string;
  subtitle?: string;
  speakerScript: string[];
  keyTakeaway: string;
  ceoDefenseQuestion?: string;
  ceoDefenseAnswer?: string;
  estimatedSeconds: number;
}

export interface NavigationState {
  currentSlideIndex: number;
  isAppendixMode: boolean;
  currentAppendixIndex: number;
  isNotesOpen: boolean;
  isFullscreen: boolean;
}

export interface SyntheticEquipment {
  id: string;
  code: string;
  name: string;
  location: string;
  status: 'OPERATIONAL' | 'MAINTENANCE_REQUIRED' | 'INSPECTION_DUE';
  lastServiceDate: string;
  responsibleEngineer: string;
  isSynthetic: true;
}

export interface SyntheticTicket {
  id: string;
  ticketNumber: string;
  equipmentCode: string;
  equipmentName: string;
  category: 'MEKANİK' | 'ELEKTRİK' | 'KALİTE_KONTROL' | 'KAIZEN';
  priority: 'DÜŞÜK' | 'ORTA' | 'YÜKSEK' | 'KRİTİK';
  reportedBy: string;
  timestamp: string;
  status: 'AÇIK' | 'İNCELEMEDE' | 'ÇÖZÜLDÜ';
  description: string;
  isSynthetic: true;
}

export interface SyntheticKnowledgeDoc {
  id: string;
  title: string;
  docCode: string;
  pageNumber: number;
  snippet: string;
  matchScore: number;
  isSynthetic: true;
}

export interface AutomationFactor {
  id: string;
  label: string;
  description: string;
  value: number; // 0 to 100
  weight: number;
}

export interface PriorityMatrixCard {
  id: string;
  title: string;
  category: 'DİJİTAL' | 'ÜRETİM' | 'BİLGİ' | 'YÖNETİM';
  impact: 'YÜKSEK' | 'DÜŞÜK';
  difficulty: 'DÜŞÜK' | 'YÜKSEK';
  recommendation: 'HIZLI PİLOT' | 'STRATEJİK FİZİBİLİTE' | 'İKİNCİL ÖNCELİK' | 'ERTELENMELİ';
}
