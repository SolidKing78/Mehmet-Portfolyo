import { projeler } from "@/lib/paths";

export type ProjectDetail = {
  slug: string;
  titleTr: string;
  titleEn: string;
  label: string;
  summaryTr: string;
  summaryEn: string;
  detailTr: string[];
  detailEn: string[];
  technologies: string[];
  outcomes: string[];
  heroMedia: {
    kind: "image" | "video";
    src: string;
    poster?: string;
  };
};

export const projectDetails: ProjectDetail[] = [
  {
    slug: "prefabrik-hafif-celik-cadcam",
    titleTr: "Prefabrik & Hafif Çelik CAD/CAM Platformu",
    titleEn: "Prefab & Light Steel CAD/CAM Platform",
    label: "CAD/CAM",
    summaryTr:
      "C++ tabanlı çekirdek ile 3B modelden roll-form üretim hattına uyumlu çıktı üretimi.",
    summaryEn:
      "C++ core platform transforming 3D models into roll-form compatible production output.",
    detailTr: [
      "Yapay zeka destekli (AI-assisted / vibe coding) geliştirme yaklaşımıyla modern bir CAD/CAM ürün mimarisi oluşturuldu.",
      "Sistem, prefabrik veya hafif çelik yapıların tüm bileşenlerini üretim hattına doğrudan aktarılabilir hale getirir.",
      "Otomatik modelleme algoritmaları, üretim verisi üretimi, hata kontrol mekanizmaları ve lisans yönetimi altyapısı uçtan uca geliştirildi.",
      "Legacy sistemlere göre daha esnek ve kullanıcı odaklı bir deneyim sağlandı.",
    ],
    detailEn: [
      "Built with an AI-assisted vibe-coding workflow on top of a modern CAD/CAM architecture.",
      "The platform transforms prefab/light-steel components into outputs directly consumable by roll-form lines.",
      "Automatic modeling, production-data generation, validation checks, and scalable licensing were designed end-to-end.",
      "Compared with legacy tools, the system provides a faster and more user-centered workflow.",
    ],
    technologies: [
      "C++",
      "CAD/CAM",
      "Roll-form",
      "AI-assisted development",
      "Cursor / Claude / GPT Codex",
    ],
    outcomes: [
      "Üretim hazırlık süreçlerinde yaklaşık %70 verimlilik artışı bandı.",
      "Tekrarlayan manuel hazırlık adımlarında ciddi azalma.",
      "Daha hızlı sürüm geçişi ve doğrulama disiplini.",
    ],
    heroMedia: {
      kind: "image",
      src: projeler("image.png"),
    },
  },
  {
    slug: "solidworks-cad-otomasyonu",
    titleTr: "SolidWorks CAD Otomasyonu",
    titleEn: "SolidWorks CAD Automation",
    label: "SolidWorks API",
    summaryTr:
      "Gencer Otomotiv için parametrik 3D tasarım ve tek tuş üretim çıktısı otomasyonu.",
    summaryEn:
      "Parametric 3D design and one-click production output automation for Gencer Otomotiv.",
    detailTr: [
      "SolidWorks API, VBA, .NET ve C# kullanılarak kamyon/treyler üst yapısına özel parametrik sistem geliştirildi.",
      "Az sayıda kullanıcı ölçü girdisi ile komple montaj ve teknik resim üretim akışı tasarlandı.",
      "PDF, DWG, DXF ve büküm resimleri dahil olmak üzere çıktı paketleri tek tuşla üretilebilir hale getirildi.",
      "Tekrarlayan modelleme yükü düşürülerek mühendislik ekibi için süre ve kalite avantajı sağlandı.",
    ],
    detailEn: [
      "Developed a parametric framework for truck/trailer superstructures with SolidWorks API, VBA, .NET, and C#.",
      "Enabled full assembly and technical drawing generation from a minimal set of user measurements.",
      "One-click output packs include PDF, DWG, DXF, and bending drawings.",
      "Reduced repetitive modeling workload while improving consistency and throughput.",
    ],
    technologies: ["SolidWorks API", "VBA", "C#", ".NET", "DXF/DWG/PDF pipelines"],
    outcomes: [
      "Tek tuş dokümantasyon altyapısı.",
      "Standart çıktı setlerinde tutarlılık.",
      "Hazırlık süresinde hissedilir hızlanma.",
    ],
    heroMedia: {
      kind: "video",
      src: projeler("Solidworks Makro API - Eklenti - ParametriX", "Makro_Video.mp4"),
    },
  },
  {
    slug: "parametrix-2d-3d",
    titleTr: "ParametriX 2D -> 3D Converter",
    titleEn: "ParametriX 2D -> 3D Converter",
    label: "Product Utility",
    summaryTr:
      "2B girdileri parametrik kurallarla 3B modellere dönüştüren tekrar üretilebilir mühendislik hattı.",
    summaryEn:
      "Repeatable engineering flow converting 2D inputs into 3D models via parametric rules.",
    detailTr: [
      "Geometri işleme ve kural doğrulama katmanları ile dönüştürme sürecinde hata riski düşürüldü.",
      "Kullanıcı akışı sadeleştirilerek ekiplerin eğitim maliyeti azaltıldı.",
      "Teknik kontroller ile manuel düzeltme ihtiyacı önemli ölçüde azaltıldı.",
    ],
    detailEn: [
      "Geometry processing and rule-validation layers reduce conversion errors.",
      "A simplified UX lowers onboarding cost for engineering teams.",
      "Technical controls significantly reduce manual correction workload.",
    ],
    technologies: ["C#", ".NET", "SolidWorks API", "Parametric geometry"],
    outcomes: [
      "Daha öngörülebilir dönüşüm kalitesi.",
      "Mühendislik tekrarlarında tutarlı çıktı.",
      "Düzeltme maliyetinin düşmesi.",
    ],
    heroMedia: {
      kind: "video",
      src: projeler(
        "Solidworks Makro API - Eklenti - ParametriX",
        "ParametriX_2D-3D_Converter.mp4",
      ),
    },
  },
];

