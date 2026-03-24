import { projeler } from "@/lib/paths";
import type { Certification } from "./types";

/** LinkedIn — Lisanslar ve sertifikalar sekmesi */
export const linkedinCertificationsProfileUrl =
  "https://www.linkedin.com/in/mehmet-seyrimez/details/certifications/";

/** Doğrulama / belge bağlantısı türü (ikon için). */
export type CertVerifyLinkKind = "solidworks" | "linkedin-learning" | "pdf" | "verify";

export type CertVerifyLink = {
  href: string;
  labelTr: string;
  labelEn: string;
  kind: CertVerifyLinkKind;
};

/**
 * Kapak ve yerel PDF: `public/Projeler/Sertifikalar/` altına dosya ekleyip
 * `thumbnail` / `pdf` dizilerini doldurun.
 */
export type CertificationEntry = {
  id: string;
  nameTr: string;
  nameEn: string;
  issuerTr: string;
  issuerEn: string;
  issued?: string;
  credentialId?: string;
  skillsTr: string[];
  skillsEn: string[];
  detailTr: string;
  detailEn: string;
  thumbnail?: string[];
  pdf?: string[];
  verifyLinks?: CertVerifyLink[];
  /** false: kartta yalnızca verifyLinks (ör. LinkedIn Learning tam URL’si) */
  showLinkedInSectionLink?: boolean;
};

const SOLIDWORKS_VERIFY =
  "https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-YDQVN3XMGR";
const CSWPA_DRIVE_PDF =
  "https://drive.google.com/file/d/1jI5B623wYmrr0ZYG8jV5AD-eumRhyIUy/view";
const LI_LEARN_SOHBET =
  "https://www.linkedin.com/learning/certificates/553e63a9f9701572403d3c20f07b09ced740f6561b0bf942f308e32ed4d5f999";
const LI_LEARN_HAYIR =
  "https://www.linkedin.com/learning/certificates/ae5b7778f0d02171b76651ea56a7ee8443b194b9cd686ea02f94622288325b81";
const SERTIFIER_IMIS =
  "https://verified.sertifier.com/en/verify/83237626416035/";

export const certificationEntries: CertificationEntry[] = [
  {
    id: "cswa",
    nameTr: "Certified SOLIDWORKS Associate (CSWA)",
    nameEn: "Certified SOLIDWORKS Associate (CSWA)",
    issuerTr: "Dassault Systèmes — SOLIDWORKS",
    issuerEn: "Dassault Systèmes — SOLIDWORKS",
    issued: "27 Mart 2024",
    skillsTr: ["SolidWorks", "3B modelleme", "Montaj"],
    skillsEn: ["SolidWorks", "3D modeling", "Assemblies"],
    detailTr:
      "SOLIDWORKS ile endüstriyel tasarım ve teknik resim temelleri; resmi CSWA doğrulaması VirtualTester üzerinden.",
    detailEn:
      "Foundational SOLIDWORKS CAD credential; validated via the official SOLIDWORKS certification portal.",
    verifyLinks: [
      {
        href: SOLIDWORKS_VERIFY,
        labelTr: "Resmî doğrulama (VirtualTester)",
        labelEn: "Official verification (VirtualTester)",
        kind: "solidworks",
      },
    ],
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
      "Sac metal parça ve gövde tasarımı, düz desen ve büküm stratejileri. Sertifika belgesi PDF olarak paylaşılmıştır.",
    detailEn:
      "Advanced sheet metal credential; certificate document shared as PDF.",
    verifyLinks: [
      {
        href: CSWPA_DRIVE_PDF,
        labelTr: "Sertifika PDF (Drive)",
        labelEn: "Certificate PDF (Drive)",
        kind: "pdf",
      },
    ],
  },
  {
    id: "linkedin-sohbet",
    nameTr: "Anadili İngilizce Olmayan Kişiler İçin Sohbetler",
    nameEn: "Small talk for non-native English speakers",
    issuerTr: "LinkedIn Learning — Liesje Sandler",
    issuerEn: "LinkedIn Learning — Liesje Sandler",
    issued: "22 Haziran 2023",
    skillsTr: ["İş İngilizcesi", "İletişim", "Sohbet becerileri"],
    skillsEn: ["Business English", "Communication", "Small talk"],
    detailTr:
      "Gündelik ve iş ortamında sohbet kurma, sürdürme ve sonlandırma; Speexx koçluğu ile iş İngilizcisi serisi.",
    detailEn:
      "Workplace conversations: opening, sustaining, and closing small talk (LinkedIn Learning completion certificate).",
    verifyLinks: [
      {
        href: LI_LEARN_SOHBET,
        labelTr: "LinkedIn Learning sertifikası",
        labelEn: "LinkedIn Learning certificate",
        kind: "linkedin-learning",
      },
    ],
    showLinkedInSectionLink: false,
  },
  {
    id: "linkedin-hayir",
    nameTr: "Hayır Demeyi Öğrenmek",
    nameEn: "Learning to Say No",
    issuerTr: "LinkedIn Learning — Todd Dewett",
    issuerEn: "LinkedIn Learning — Todd Dewett",
    issued: "22 Haziran 2023",
    skillsTr: ["Önceliklendirme", "İletişim", "Zaman yönetimi"],
    skillsEn: ["Prioritization", "Communication", "Time management"],
    detailTr:
      "Önem ve değer ölçütlerine göre işleri sınıflandırma; dürüst ve saygılı şekilde hayır diyebilme.",
    detailEn:
      "Classifying work by priorities and values; saying no clearly, briefly, and respectfully.",
    verifyLinks: [
      {
        href: LI_LEARN_HAYIR,
        labelTr: "LinkedIn Learning sertifikası",
        labelEn: "LinkedIn Learning certificate",
        kind: "linkedin-learning",
      },
    ],
    showLinkedInSectionLink: false,
  },
  {
    id: "imis23",
    nameTr: "IMIS'23 Resilience — katılım sertifikası",
    nameEn: "IMIS'23 Resilience — participation certificate",
    issuerTr: "Sabancı Üniversitesi Endüstri Mühendisliği Topluluğu",
    issuerEn: "Sabancı University Industrial Engineering Society",
    skillsTr: ["Endüstri mühendisliği", "Kongre", "Dayanıklılık"],
    skillsEn: ["Industrial engineering", "Congress", "Resilience"],
    detailTr:
      "Sertifier üzerinden doğrulanabilir dijital katılım / başarı sertifikası.",
    detailEn: "Digital certificate verifiable via Sertifier.",
    verifyLinks: [
      {
        href: SERTIFIER_IMIS,
        labelTr: "Sertifier ile doğrula",
        labelEn: "Verify on Sertifier",
        kind: "verify",
      },
    ],
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
