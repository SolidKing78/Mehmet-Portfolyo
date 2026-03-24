import { projeler } from "@/lib/paths";
import type { Certification } from "./types";

/** LinkedIn — Lisanslar ve sertifikalar sekmesi (giriş yapmış ziyaretçiler için tam liste). */
export const linkedinCertificationsProfileUrl =
  "https://www.linkedin.com/in/mehmet-seyrimez/details/certifications/";

/**
 * Kapak ve PDF: `public/Projeler/Sertifikalar/` altına dosyaları koyun, aşağıdaki
 * `thumbnail` / `pdf` dizilerini doldurun (örn. `["Sertifikalar", "cswa.jpg"]`).
 */
export type CertificationEntry = {
  id: string;
  nameTr: string;
  nameEn: string;
  issuerTr: string;
  issuerEn: string;
  /** Örn. "Mar 2021" veya "2022" — LinkedIn’deki veriye göre güncelleyin */
  issued?: string;
  credentialId?: string;
  skillsTr: string[];
  skillsEn: string[];
  detailTr: string;
  detailEn: string;
  thumbnail?: string[];
  pdf?: string[];
};

export const certificationEntries: CertificationEntry[] = [
  {
    id: "cswa",
    nameTr: "Certified SOLIDWORKS Associate (CSWA)",
    nameEn: "Certified SOLIDWORKS Associate (CSWA)",
    issuerTr: "Dassault Systèmes — SOLIDWORKS",
    issuerEn: "Dassault Systèmes — SOLIDWORKS",
    skillsTr: ["SolidWorks", "3B modelleme", "Montaj"],
    skillsEn: ["SolidWorks", "3D modeling", "Assemblies"],
    detailTr:
      "Endüstriyel tasarım ve teknik resim temelleri üzerine SOLIDWORKS ile doğrulanmış temel CAD yeterliliği.",
    detailEn:
      "Foundational CAD credential covering core SOLIDWORKS part, assembly, and drawing skills.",
  },
  {
    id: "cswpa-sm",
    nameTr: "Certified SOLIDWORKS Professional Advanced — Sheet Metal (CSWPA-SM)",
    nameEn: "Certified SOLIDWORKS Professional Advanced — Sheet Metal (CSWPA-SM)",
    issuerTr: "Dassault Systèmes — SOLIDWORKS",
    issuerEn: "Dassault Systèmes — SOLIDWORKS",
    skillsTr: ["Sac metal", "Büküm", "Üretilebilirlik"],
    skillsEn: ["Sheet metal", "Bending", "Manufacturability"],
    detailTr:
      "Sac metal parça ve gövde tasarımı, düz desen ve büküm stratejileri odaklı ileri düzey sertifikasyon.",
    detailEn:
      "Advanced sheet metal design, flat patterns, and bend strategies in SOLIDWORKS.",
  },
  {
    id: "yalin",
    nameTr: "Yalın dönüşüm — yalın üretim ve yalın düşünce",
    nameEn: "Lean transformation — lean manufacturing & lean thinking",
    issuerTr: "Profesyonel eğitim programı",
    issuerEn: "Professional training program",
    skillsTr: ["Yalın üretim", "Süreç iyileştirme", "İsraf eliminasyonu"],
    skillsEn: ["Lean manufacturing", "Process improvement", "Waste elimination"],
    detailTr:
      "Değer akışı, sürekli iyileştirme ve sahada uygulanabilir yalın prensipler üzerine eğitim.",
    detailEn:
      "Training on value streams, continuous improvement, and practical lean principles.",
  },
  {
    id: "iso9001",
    nameTr: "ISO 9001:2015 kalite yönetim sistemi — temel eğitim",
    nameEn: "ISO 9001:2015 quality management systems — fundamentals",
    issuerTr: "Akredite eğitim sağlayıcı",
    issuerEn: "Accredited training provider",
    skillsTr: ["KYS", "Dokümantasyon", "Uyumluluk"],
    skillsEn: ["QMS", "Documentation", "Compliance"],
    detailTr:
      "ISO 9001:2015 çerçevesinde kalite yönetimi, süreç yaklaşımı ve denetim hazırlığına giriş.",
    detailEn:
      "Introduction to ISO 9001:2015 quality management, process approach, and audit readiness.",
  },
  {
    id: "additive-4d",
    nameTr: "Eklemeli imalat — NiTi şekil hafızalı alaşım ve 4D printing",
    nameEn: "Additive manufacturing — NiTi shape memory alloys & 4D printing",
    issuerTr: "Ar-Ge / üniversite iş birliği eğitimi",
    issuerEn: "R&D / academic collaboration training",
    skillsTr: ["Eklemeli imalat", "Malzeme bilimi", "4D printing"],
    skillsEn: ["Additive manufacturing", "Materials science", "4D printing"],
    detailTr:
      "Nikel-titanyum şekil hafızalı alaşımlar ve 4D printing kavramları üzerine ileri düzey içerik.",
    detailEn:
      "Advanced topics on nickel-titanium shape memory alloys and 4D printing concepts.",
  },
];

/** Deneyim bölümündeki kısa liste (editorial sayfa) — Türkçe ad. */
export const certifications: Certification[] = certificationEntries.map((c) => ({
  name: c.nameTr,
}));

export function certificationThumbnailHref(entry: CertificationEntry): string | undefined {
  if (!entry.thumbnail?.length) return undefined;
  return projeler(...entry.thumbnail);
}

export function certificationPdfHref(entry: CertificationEntry): string | undefined {
  if (!entry.pdf?.length) return undefined;
  return projeler(...entry.pdf);
}
