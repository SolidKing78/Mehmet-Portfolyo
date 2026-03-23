import { projeler } from "@/lib/paths";
import type {
  CapabilitySignal,
  Certification,
  EducationEntry,
  FlagshipProject,
  RailNavItem,
  TimelineEntry,
} from "./types";

const SW = "Solidworks Makro API - Eklenti - ParametriX";

export const person = {
  name: "Mehmet Seyrimez",
  initials: "MS",
  domain: "mehmetseyrimez.com",
  roleLine: "Mühendislik yazılımı · CAD otomasyonu",
  headline:
    "AI destekli yürütümle üretim odaklı CAD/CAM ve SolidWorks ekosisteminde ölçeklenebilir iç ürünler geliştiriyorum.",
  credibility:
    "Gencer Otomotiv’de filo üst yapı CAD otomasyonu; ZMT Prefabrik’te roll-form uyumlu prefabrik CAD/CAM platformu.",
  email: "mehmetseyrimez@gmail.com",
  phoneDisplay: "+90 538 394 01 37",
  phoneTel: "+905383940137",
  linkedin: "https://www.linkedin.com/in/mehmet-seyrimez/",
  location: "İstanbul, Türkiye",
} as const;

export const railNav: RailNavItem[] = [
  { id: "kimlik", href: "#kimlik", label: "Kimlik" },
  { id: "ozet", href: "#ozet", label: "Özet" },
  { id: "uzmanlik", href: "#uzmanlik", label: "Uzmanlık" },
  { id: "projeler", href: "#projeler", label: "Projeler" },
  { id: "deneyim", href: "#deneyim", label: "Deneyim" },
  { id: "iletisim", href: "#iletisim", label: "İletişim" },
];

/** Yönetici özeti — kısa, keskin */
export const executiveStatements: string[] = [
  "SolidWorks API, VBA, .NET ve C# ile parametrik montaj, teknik resim ve üretim çıktılarını tek akışta toplayan kurumsal otomasyon.",
  "Prefabrik ve hafif çelik için C++ tabanlı CAD/CAM: otomatik modelleme, üretim verisi, hata kontrolü ve lisans altyapısı — roll-form hatlarıyla uyumlu çıktı.",
  "Üretim ve fason süreçlerini (lazer kesim, abkant vb.) bilen mühendislik zemini; yazılımı sahada kullanılabilir kılan doğrulama disiplini.",
  "AI araçlarını hız ve iterasyon için kontrollü kaldıraç olarak kullanan geliştirme; gereksinim ve test ağırlığı boşluğu doldurmaz.",
];

export const capabilitySignals: CapabilitySignal[] = [
  {
    id: "cad",
    label: "CAD otomasyonu",
    strength: 3,
    note: "Parametrik montaj, şablonlar, üretim çıktıları",
  },
  {
    id: "sw",
    label: "SolidWorks API / C# / .NET",
    strength: 3,
    note: "VBA geçişleri, eklenti ve makro mimarisi",
  },
  {
    id: "mfg",
    label: "Üretim sistemleri",
    strength: 3,
    note: "Prefabrik, hafif çelik, roll-form, hat gerçeği",
  },
  {
    id: "product",
    label: "Ürün düşüncesi",
    strength: 2,
    note: "Domain → yazılım sınırı, pilot ve ölçüm",
  },
  {
    id: "ai",
    label: "AI destekli geliştirme",
    strength: 2,
    note: "Modern araçlarla hız; mimari ve kalite insanda",
  },
];

export const flagshipProjects: FlagshipProject[] = [
  {
    slug: "zmt-prefab-cadcam",
    title: "Prefabrik & hafif çelik CAD/CAM platformu",
    context:
      "ZMT Prefabrik ve Hafif Çelik A.Ş. — aktif kullanımda; 3B modelden roll-form hatlarına uygun üretim verisine kadar uçtan uca tasarım.",
    role: "C++ tabanlı CAD/CAM çekirdeği; otomatik modelleme, üretim verisi üretimi, hata kontrolü ve ölçeklenebilir lisans altyapısı. AI destekli geliştirme araçları (Cursor, Claude, GPT odaklı akışlar) ile hızlandırılmış iterasyon.",
    technologies: [
      "C++",
      "CAD/CAM",
      "Prefabrik / hafif çelik",
      "Roll-form uyumu",
      "AI destekli geliştirme",
    ],
    outcome:
      "Eski CAD sistemine kıyasla şirket içi ölçümlerde üretim süreçlerinde belirgin hızlanma; hazırlık aşamasında CV’de raporlanan yaklaşık %70 verimlilik artışı bandı.",
    media: [
      {
        kind: "image",
        src: projeler("image.png"),
        alt: "CAD/CAM ve mühendislik yazılımı görseli",
      },
    ],
  },
  {
    slug: "gencer-solidworks-automation",
    title: "Gencer Otomotiv — SolidWorks üretim otomasyonu",
    context:
      "Kamyon, kamyonet ve treyler üst yapıları için SolidWorks ortamında parametrik tasarım ve tek tuşla dokümantasyon.",
    role: "SolidWorks API, VBA, .NET ve C# ile kullanıcı ölçü girdilerinden komple montaj; PDF, DWG, DXF ve büküm resimleri dahil paket çıktıları. ARGE Teknik Tasarım Uzmanı rolünde (Ağustos 2022 – Ekim 2025) filo üretimine yönelik CAD yazılımı ve mekanik tasarım süreçleri.",
    technologies: [
      "SolidWorks API",
      "C#",
      ".NET",
      "VBA",
      "Parametrik montaj",
    ],
    outcome:
      "Tekrarlayan modelleme yükünün düşürülmesi, standart çıktı seti ve üretim hazırlığında tutarlılık.",
    media: [
      {
        kind: "video",
        src: projeler(SW, "Makro_Video.mp4"),
        poster: projeler("image.png"),
        alt: "SolidWorks makro otomasyon demosu",
        caption: "Makro otomasyon",
      },
    ],
  },
  {
    slug: "parametrix",
    title: "ParametriX — 2B → 3B dönüşüm",
    context:
      "SolidWorks ekosisteminde 2B girdilerin parametrik kurallarla 3B modele taşınması; tekrarlanabilir mühendislik hattı.",
    role: "Algoritma ve yazılım iskelesi, kullanıcı akışı ve doğrulama katmanı.",
    technologies: ["C#", ".NET", "SolidWorks API", "Geometri işleme"],
    outcome:
      "Manuel düzeltme ihtiyacını azaltan, kuralları açıkça tanımlayan dönüşüm akışı.",
    media: [
      {
        kind: "video",
        src: projeler(SW, "ParametriX_2D-3D_Converter.mp4"),
        poster: projeler("image.png"),
        alt: "ParametriX 2D–3D Converter demo",
        caption: "ParametriX 2D–3D Converter",
      },
    ],
  },
];

export const timeline: TimelineEntry[] = [
  {
    id: "zmt",
    period: "Ekim 2025 — Günümüz",
    title: "AI destekli CAD ürün geliştirme",
    org: "ZMT Prefabrik ve Hafif Çelik A.Ş.",
    summary:
      "Prefabrik ve hafif çelik için özel CAD/CAM yazılımı; roll-form ile uyumlu üretim çıktıları, standardizasyon ve hata minimizasyonu. Eski sisteme kıyasla şirket içi ölçümlerde üretim süreçlerinde belirgin hızlanma (CV’de ~%70 bandı).",
  },
  {
    id: "gencer",
    period: "Ağustos 2022 — Ekim 2025",
    title: "ARGE Teknik Tasarım Uzmanı",
    org: "Gencer Otomotiv",
    summary:
      "SolidWorks API ile kamyon/kamyonet ve treyler üretiminde CAD otomasyon yazılımı. Dorselerin mekanik tasarım süreçleri; lazer kesim ve abkant büküm gibi fason imalatların yönetimi.",
  },
  {
    id: "gedik",
    period: "Haziran 2018 — Mart 2022",
    title: "ARGE Makine Tasarım / Üretim",
    org: "Gedik Holding",
    summary:
      "SolidWorks ve Fusion 360 ile makine ve ekipman tasarımı; konveyör ve kaynak robotları için tasarım ve analiz. Ar-Ge’de katmanlı imalat ve mekanik tasarım desteği.",
  },
];

export const education: EducationEntry[] = [
  {
    institution: "Gedik Üniversitesi",
    detail: "Makine Programı — Meslek Yüksekokulu",
    period: "2020 — 2023",
  },
  {
    institution: "Gedik Mesleki ve Teknik Anadolu Lisesi",
    detail: "Çelik konstrüksiyon ve kaynak",
    period: "2014 — 2018",
  },
];

export const certifications: Certification[] = [
  { name: "SolidWorks CSWA" },
  { name: "SolidWorks CSWPA-SM (Sheet Metal)" },
  { name: "Yalın dönüşüm — yalın üretim ve yalın düşünce" },
  { name: "ISO 9001:2015 kalite yönetim sistemi temel eğitimi" },
  {
    name: "Eklemeli imalat ile nikel-titanyum şekil hafızalı alaşım ve 4D printing",
  },
];

export const personalMeta = {
  birth: "14.07.2000",
  license: "B, A2",
  language: "İngilizce — A2",
  military: "Muaf",
  address: "Yenişehir mah. Şefika sk. Pendik / İstanbul",
} as const;

export const cvPdfHref = projeler("Güncel CV.pdf");

export const contactClose = {
  title: "Ciddi mühendislik yazılımı gündemleri için",
  body: "CAD otomasyonu, iç CAD/CAM ürünleri veya SolidWorks tabanlı üretim araçları hakkında doğrudan iletişime geçebilirsiniz.",
  foot: "mehmetseyrimez.com",
} as const;
