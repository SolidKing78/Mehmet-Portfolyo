import { projeler } from "@/lib/paths";
import type {
  CapabilityGroup,
  CaseStudy,
  Credential,
  PageMapItem,
  ProofChip,
  SummaryPillar,
  TimelineEntry,
} from "./types";

export const person = {
  name: "Mehmet Seyrimez",
  domain: "mehmetseyrimez.com",
  /** Ana meslek kimliği — tek satırda netlik */
  roleTitle: "CAD otomasyonu ve mühendislik yazılımı geliştiricisi",
  headline: "Üretim gerçeklerini ölçeklenebilir yazılıma dönüştürüyorum",
  subhead:
    "SolidWorks API, C# / .NET ve CAD–CAM hattında iç araçlar, makro–eklenti mimarisi ve parametrik otomasyon. Prefabrik / hafif çelik üretim düşüncesiyle sahada işleyen sistemler; AI’yi kontrollü kaldıraç olarak kullanan geliştirme disiplini.",
  email: "mehmetseyrimez@gmail.com",
  phoneDisplay: "+90 538 394 01 37",
  phoneTel: "+905383940137",
  linkedin: "https://www.linkedin.com/in/mehmet-seyrimez/",
} as const;

/** Ana sayfa üst bölümü: tek bakışta kimlik + sayfa haritası */
export const executiveLead =
  "Mekanik tasarım ve üretim süreçlerinden beslenen bir çizgide; SolidWorks ekosisteminde API tabanlı otomasyon, 2B–3B parametrik dönüşümler ve üretilebilir çıktılar üreten yazılım hatları kuruyorum. Aşağıda önce üst düzey özet, ardından projeler, deneyim çerçevesi ve yetkinlik detayları yer alıyor.";

export const summaryPillars: SummaryPillar[] = [
  {
    title: "Odak",
    body: "CAD otomasyonu, SolidWorks API / C#, .NET, CAD–CAM ve prefabrik–hafif çelik üretim mantığına uygun iç yazılım ürünleri.",
    href: "#yetenekler",
  },
  {
    title: "Kanıt",
    body: "ParametriX ve makro demoları, İHA / AmphiDrone görselleri, otonom sualtı kaynak–muayene çalışmaları ve sahne fotoğrafları — aşağıdaki vaka ve medya bölümlerinde.",
    href: "#projeler",
  },
  {
    title: "Çalışma biçimi",
    body: "Gereksinimi netleştirme, sınır koşullarını kodda tanımlama, pilot kullanım ve ölçülebilir geri bildirim; boş vaat yerine çalışan araçlar.",
    href: "#hakkimda",
  },
  {
    title: "İş birliği",
    body: "Tam zamanlı, proje bazlı veya otomasyon / ürün sprint’leri; doğrudan e-posta, telefon veya LinkedIn üzerinden hızlı temas.",
    href: "#iletisim",
  },
];

export const pageMap: PageMapItem[] = [
  {
    label: "Projeler",
    description: "Problem, bağlam, rol, teknoloji ve görsellerle vaka formatı.",
    href: "#projeler",
  },
  {
    label: "Deneyim",
    description: "Üretim temeli → CAD derinliği → mühendislik yazılımı evrimi.",
    href: "#deneyim",
  },
  {
    label: "Yetenekler",
    description: "CAD, otomasyon, AI destekli geliştirme ve üretim alanı bilgisi.",
    href: "#yetenekler",
  },
  {
    label: "Medya",
    description: "Seçilmiş fotoğraflar ve yazılım videolarından kanıt duvarı.",
    href: "#medya",
  },
  {
    label: "Hakkımda",
    description: "Sistem düşüncesi ve ürün disiplinine dair kısa çerçeve.",
    href: "#hakkimda",
  },
  {
    label: "Özgeçmiş",
    description: "Güncel CV (PDF) indirme.",
    href: "#kimlik",
  },
];

export const nav = [
  { href: "#hero", label: "Giriş" },
  { href: "#ozet", label: "Özet" },
  { href: "#projeler", label: "Projeler" },
  { href: "#deneyim", label: "Deneyim" },
  { href: "#yetenekler", label: "Yetenekler" },
  { href: "#medya", label: "Medya" },
  { href: "#hakkimda", label: "Hakkımda" },
  { href: "#iletisim", label: "İletişim" },
] as const;

export const proofChips: ProofChip[] = [
  { label: "SolidWorks API · C# · .NET" },
  { label: "Makro · eklenti · ParametriX 2B→3B" },
  { label: "CAD–CAM ve üretilebilir çıktılar" },
  { label: "Prefabrik / hafif çelik süreç bilgisi" },
  { label: "AI destekli geliştirme (disiplinli)" },
];

const SW = "Solidworks Makro API - Eklenti - ParametriX";
const UAV = "İnsansız Hava Aracı";
const SUB = "OTONOM SUALTI KAYNAĞI VE SUALTI";

export const caseStudies: CaseStudy[] = [
  {
    slug: "solidworks-parametrix",
    title: "SolidWorks API, makrolar ve ParametriX",
    tagline: "2B–3B dönüşüm ve makro otomasyonu — demolar",
    problem:
      "Tekrarlayan modelleme, parametre tutarsızlığı ve 2B girdiden 3B modele geçişte manuel müdahale ihtiyacı mühendislik hızını düşürüyordu.",
    context:
      "SolidWorks üzerinde API ve makro disipliniyle otomasyon; ParametriX ile parametrik 2B–3B akışının ürünleştirilmesi.",
    role: "Mimari ve uygulama: API / makro tasarımı, kullanıcı akışı, test ve demo üretimi.",
    technologies: [
      "SolidWorks API",
      "C#",
      ".NET",
      "Makro / eklenti",
      "Parametrik geometri",
    ],
    process: [
      "Tekrarlayan işlerin ayrıştırılması ve API sınırlarında güvenli otomasyon",
      "Girdi doğrulama ve hata geri bildirimi",
      "Video ve canlı demo ile paydaş hizalaması",
    ],
    impact: [
      "Tekrarın azaltılması ve tutarlı model üretimi",
      "2B–3B hattında izlenebilir, tekrarlanabilir akış",
      "Ekip içi iletişim için somut demo varlığı",
    ],
    strategic:
      "Sunum slaytı değil, çalışır yazılım ve görülebilir otomasyon — teknik derinliğin kanıtı.",
    media: [
      {
        kind: "video",
        src: projeler(SW, "ParametriX_2D-3D_Converter.mp4"),
        poster: projeler("image.png"),
        alt: "ParametriX 2B–3B dönüştürücü demo videosu",
        caption: "ParametriX 2D–3D Converter",
      },
      {
        kind: "video",
        src: projeler(SW, "Makro_Video.mp4"),
        poster: projeler("image.png"),
        alt: "SolidWorks makro otomasyon videosu",
        caption: "Makro otomasyon",
      },
      {
        kind: "image",
        src: projeler("image.png"),
        alt: "Mühendislik yazılımı / CAD görseli",
      },
    ],
  },
  {
    slug: "prefab-engineering-software",
    title: "Prefabrik / hafif çelik mühendislik yazılımı",
    tagline: "Üretim kısıtlarıyla hizalı CAD–CAM düşüncesi",
    problem:
      "Prefabrik ve hafif çelik hatlarında tasarım ile roll-form / üretim çıktıları arasında kopukluk ve manuel hata riski.",
    context:
      "Üretim gerçeklerini parametre ve kural setlerine dökerek; tekrarlanabilir çıktı üreten iç yazılım ve otomasyon perspektifi.",
    role: "Domain gereksinimlerinin yazılım sınırına taşınması, SolidWorks / .NET entegrasyonu ve pilot doğrulama.",
    technologies: [
      "SolidWorks API",
      "C#",
      ".NET",
      "CAD–CAM",
      "Parametrik modelleme",
    ],
    process: [
      "Hat ve montaj kısıtlarının haritalanması",
      "Parametre sözleşmesi ve üretim çıktısı tanımı",
      "Pilot hat ile ölçüm ve iterasyon",
    ],
    impact: [
      "Mühendislik–üretim hizasında hızlı geri bildirim",
      "Çıktılarda tutarlılık ve izlenebilirlik hedefi",
    ],
    strategic:
      "Endüstriyel domain bilgisinin ürünleşmiş yazılım hattına dönüşümü.",
    media: [
      {
        kind: "image",
        src: projeler("image.png"),
        alt: "CAD / mühendislik yazılımı görseli",
      },
    ],
  },
  {
    slug: "uav-amphidrone",
    title: "İHA ve AmphiDrone",
    tagline: "Hava–su geçişli platform tasarımı ve görselleştirme",
    problem:
      "Çok ortamlı görevlerde platform kısıtları, aerodinamik–hidrodinamik uzlaşı ve prototip iletişimi.",
    context:
      "İnsansız hava aracı projeleri kapsamında tasarım görselleri, fotoğraf ve AmphiDrone konsept görselleri.",
    role: "Mekanik / sistem tasarımı katkıları, görselleştirme ve teknik sunum desteği.",
    technologies: ["CAD", "Prototip", "Görselleştirme", "Sistem düşüncesi"],
    process: [
      "Gereksinim ve risklerin netleştirilmesi",
      "CAD ve saha görselleriyle paydaş hizalaması",
    ],
    impact: [
      "Kavramın teknik olarak anlaşılır kılınması",
      "Proje anlatımında görsel kanıt gücü",
    ],
    strategic:
      "Yazılım odaklı profilin yanında mekatronik ve sahayı anlayan mühendislik derinliği.",
    media: [
      {
        kind: "image",
        src: projeler(UAV, "AmphiDrone 1.png"),
        alt: "AmphiDrone konsept görseli 1",
      },
      {
        kind: "image",
        src: projeler(UAV, "AmphiDrone 2.png"),
        alt: "AmphiDrone konsept görseli 2",
      },
      {
        kind: "image",
        src: projeler(UAV, "1647591941376.jpg"),
        alt: "İHA projesi görseli",
      },
    ],
  },
  {
    slug: "underwater-welding",
    title: "Otonom sualtı kaynak ve muayene",
    tagline: "Zorlu ortamda robotik kaynak / muayene çizgisi",
    problem:
      "Sualtında operasyon güvenliği, erişim ve kaynak / muayene süreçlerinin otonom sistemlerle desteklenmesi.",
    context:
      "Otonom sualtı kaynak ve muayene çalışmalarına ilişkin mühendislik görselleri ve konsept sunumu.",
    role: "Tasarım ve teknik iletişim katkıları; çok disiplinli problem çerçevesi.",
    technologies: ["Robotik", "CAD", "Sualtı sistemleri", "Kaynak / muayene"],
    process: [
      "Operasyonel risk ve sistem sınırlarının tanımı",
      "Görsel ve teknik anlatımla paydaş hizalaması",
    ],
    impact: [
      "Karmaşık mühendislik konusunun görünür kılınması",
    ],
    strategic:
      "Ağır endüstri ve robotik problemlerinde sistem düşüncesi ve iletişim yetkinliği.",
    media: [
      {
        kind: "image",
        src: projeler(SUB, "Adsz_Proje_10.jpg"),
        alt: "Otonom sualtı kaynak / muayene çalışması görseli",
      },
      {
        kind: "image",
        src: projeler(SUB, "Adsız Proje (10).jpg"),
        alt: "Sualtı robotik / kaynak görseli",
      },
    ],
  },
  {
    slug: "stage-communication",
    title: "Sahne ve teknik iletişim",
    tagline: "Karmaşık mühendisliği yönetim ve ekip önünde net anlatım",
    problem:
      "Teknik derinliğin güven oluşturmadan aktarılması karar hızını düşürür.",
    context:
      "Etkinlik / sahne ortamında mühendislik ve ürün mesajlarının profesyonel iletimi.",
    role: "Sunum disiplini, görsel kanıt kullanımı ve soru–cevap yönetimi.",
    technologies: ["Sunum", "Storyboard", "Demo"],
    process: [
      "Kitleye göre mesaj sadeleştirme",
      "Görsel kanıt ve sahne hazırlığı",
    ],
    impact: [
      "Teknik kararların daha hızlı hizalanması",
      "Ekipler arası ortak dil",
    ],
    strategic:
      "Ürün ve mühendislik liderliği için güvenilir iletişim sinyali.",
    media: [
      {
        kind: "image",
        src: projeler(
          "1000032332_890c8c34641268895aacba6ef3c538aa-30.04.2023 07_47_02.jpg",
        ),
        alt: "Sahne / etkinlik fotoğrafı",
      },
    ],
  },
];

/** Medya duvarı: seçilmiş görseller (video hariç) */
export const curatedWallImages: {
  src: string;
  alt: string;
  caption: string;
}[] = [
  {
    src: projeler("MEHMET_SEYRİMEZ.jpg"),
    alt: "Mehmet Seyrimez portre",
    caption: "Portre",
  },
  {
    src: projeler(UAV, "IMG-6016.jpg"),
    alt: "İHA / proje fotoğrafı",
    caption: "İnsansız hava aracı",
  },
  {
    src: projeler(UAV, "_DSC1319.NEF.jpg"),
    alt: "İHA saha / proje görseli",
    caption: "İHA",
  },
  {
    src: projeler(UAV, "AmphiDrone 3.png"),
    alt: "AmphiDrone 3",
    caption: "AmphiDrone",
  },
  {
    src: projeler(SUB, "Adsz_Proje_10.jpg"),
    alt: "Sualtı robotik",
    caption: "Otonom sualtı",
  },
  {
    src: projeler("image.png"),
    alt: "CAD / yazılım",
    caption: "Mühendislik yazılımı",
  },
];

export const timeline: TimelineEntry[] = [
  {
    id: "t1",
    period: "Kariyer evresi 1",
    title: "Üretim ve mekanik tasarım zemini",
    org: "Ayrıntılı kurum ve tarihler — Güncel CV (PDF)",
    summary:
      "Üretim hatlarına yakın mekanik tasarım; montaj ve üretilebilirlik gerçeklerinin mühendislik kararlarına yansıması.",
    focus: ["Mekanik tasarım", "Üretilebilirlik", "Saha gerçeği"],
  },
  {
    id: "t2",
    period: "Kariyer evresi 2",
    title: "CAD–CAM ve SolidWorks otomasyonu",
    org: "Ayrıntılı kurum ve tarihler — Güncel CV (PDF)",
    summary:
      "SolidWorks ekosisteminde derinleşme; API, makro ve .NET ile tekrarın azaltılması, standartların kodlanması ve iç araçların devreye alınması.",
    focus: ["SolidWorks API", "C# / .NET", "CAD–CAM"],
  },
  {
    id: "t3",
    period: "Günümüz",
    title: "Mühendislik yazılımı ve AI-native üretim",
    org: "Proje ve iş birliği modelleri — CV / iletişim",
    summary:
      "Prefabrik ve hafif çelik düşüncesiyle ölçeklenebilir yazılım hatları; AI’yi hız ve kalite dengesinde kontrollü kaldıraç olarak kullanma.",
    focus: ["Ürün düşüncesi", "Otomasyon", "AI destekli geliştirme"],
  },
];

export const capabilityGroups: CapabilityGroup[] = [
  {
    id: "cad",
    title: "CAD ve mühendislik sistemleri",
    items: [
      "SolidWorks API ve eklenti / makro mimarisi",
      "Parametrik modelleme ve konfigürasyon",
      "CAD–CAM ve üretilebilir çıktılar",
      "Teknik çizim ve BOM disiplini",
    ],
  },
  {
    id: "auto",
    title: "Otomasyon ve yazılım",
    items: [
      "C# / .NET",
      "VBA’dan modüler yapıya geçiş",
      "İç araçların sürümleme ve devreye alınması",
      "Performans ve hata sınırları",
    ],
  },
  {
    id: "ai",
    title: "AI destekli geliştirme",
    items: [
      "Kod ve tasarımda kontrollü AI kullanımı",
      "İnsan gözden geçirmesi ve test ağırlığı",
      "Tekrarlanabilir şablon ve kalite çubuğu",
    ],
  },
  {
    id: "product",
    title: "Ürün ve sistem düşüncesi",
    items: [
      "Domain bilgisinin ürünleştirilmesi",
      "Paydaş dili ve yol haritası",
      "Ölçülebilir iş etkisi hedefleri",
    ],
  },
  {
    id: "mfg",
    title: "Üretim alanı bilgisi",
    items: [
      "Prefabrik / hafif çelik süreçleri",
      "Roll-form ve hat kısıtları",
      "Kalite ve izlenebilirlik",
    ],
  },
];

export const about = {
  title: "Sistem inşa eden bir mühendislik zihniyeti",
  paragraphs: [
    "Yazılımı üretimde yaşayan araç olarak ele alıyorum: demolar değil, hataya yer bırakmayan akışlar ve sürdürülebilir iç ürünler.",
    "AI, kararların yerine geçen bir sihirbaz değil; hız ve netlik katan kontrollü bir katman. Önemli olan, hangi adımın otomasyona ve hangi kararın insana bırakılacağını açıkça tanımlamak.",
    "CAD otomasyonu, üretim yazılımı ve ürün disiplinini aynı çizgide tutan hibrit bir profil: endüstriyel gerçekleri anlayıp bunları ölçeklenebilir yazılıma taşımak.",
  ],
};

export const credentials: Credential[] = [
  {
    label: "Özgeçmiş",
    detail:
      "Güncel deneyim, eğitim ve teknik özet için PDF özgeçmişi indirebilirsiniz.",
    href: projeler("Güncel CV.pdf"),
    hrefLabel: "Güncel CV.pdf",
  },
  {
    label: "Eğitim",
    detail:
      "Lisans ve ilgili akademik kayıtlar özgeçmiş PDF’inde yer almaktadır.",
  },
  {
    label: "İletişim tercihi",
    detail: `${person.email} · ${person.phoneDisplay} · LinkedIn`,
  },
];

export const contact = {
  title: "Bir sonraki mühendislik yazılımını birlikte tanımlayalım",
  body: "CAD otomasyonu, SolidWorks içi araçlar, parametrik hatlar veya prefabrik / üretim odaklı yazılım ihtiyaçlarınız için doğrudan yazın veya arayın. Net problem tanımı ve ölçülebilir hedeflerle ilerlemeyi tercih ediyorum.",
  ctaPrimary: "E-posta gönder",
  ctaSecondary: "LinkedIn",
  ctaPhone: "Ara",
};
