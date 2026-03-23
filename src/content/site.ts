import type {
  CapabilityGroup,
  CaseStudy,
  Credential,
  ProofChip,
  TimelineEntry,
} from "./types";

/** CV ile tarih, kurum adı ve sayısal iddiaları mutlaka doğrulayın. */
export const person = {
  name: "Mehmet Seyrimez",
  domain: "mehmetseyrimez.com",
  headline: "AI-native mühendislik yazılımı geliştiricisi",
  subhead:
    "CAD otomasyonu, üretim süreçleri ve SolidWorks ekosisteminde ölçeklenebilir iç araçlar inşa ediyorum. Endüstriyel gerçekliği yazılıma taşıyan, ölçülebilir sonuç üreten sistemler.",
  email: "iletisim@mehmetseyrimez.com",
  linkedin: "https://www.linkedin.com/in/",
} as const;

export const nav = [
  { href: "#hero", label: "Ana Sayfa" },
  { href: "#projeler", label: "Projeler" },
  { href: "#deneyim", label: "Deneyim" },
  { href: "#yetenekler", label: "Yetenekler" },
  { href: "#medya", label: "Medya" },
  { href: "#hakkimda", label: "Hakkımda" },
  { href: "#iletisim", label: "İletişim" },
] as const;

export const proofChips: ProofChip[] = [
  { label: "SolidWorks API · C# · .NET" },
  { label: "CAD–CAM ve roll-form uyumlu üretim çıktıları" },
  { label: "Prefabrik / hafif çelik mühendislik yazılımı" },
  { label: "Üretim hattına yakın otomasyon ve iç araçlar" },
  { label: "AI destekli geliştirme — hız ve kalite dengesi" },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "prefab-light-steel-cad-cam",
    title: "Prefabrik / hafif çelik CAD–CAM yazılımı",
    tagline: "Tasarımdan üretilebilir veriye tek hat",
    problem:
      "Prefabrik ve hafif çelik hatlarında tekrarlayan modelleme, manuel hata riski ve CAD ile üretim arasında kopukluk operasyonu yavaşlatıyordu.",
    context:
      "Roll-form ve üretim kısıtlarını dikkate alan, parametrik girdilerden doğrudan üretim çıktıları üreten bir mühendislik ürünü tasarlandı.",
    role: "Mimari kararlar, çekirdek otomasyon akışları, SolidWorks / .NET entegrasyonu ve sahada kullanılabilirliğin doğrulanması.",
    technologies: [
      "SolidWorks API",
      "C#",
      ".NET",
      "CAD–CAM",
      "Parametrik modelleme",
    ],
    process: [
      "Üretim ve montaj gerçeklerini haritalama",
      "Parametre sözleşmesi ve hata sınırlarının tanımı",
      "API üzerinden otomatik model / teknik çıktı üretimi",
      "Pilot hat ile doğrulama ve iterasyon",
    ],
    impact: [
      "Tekrarlayan modelleme yükünün sistematik azaltılması",
      "Üretim çıktılarında tutarlılık ve izlenebilirlik",
      "Mühendislik–üretim hizasında hızlanmış geri bildirim döngüsü",
    ],
    strategic:
      "Domain bilgisinin ürünleşmiş bir yazılım hattına dönüştürülmesi; sadece otomasyon değil, operasyonel güven oluşturan bir sistem.",
    media: [
      {
        kind: "image",
        src: "/media/projeler/prefab-cad-cam/hero.jpg",
        alt: "Prefabrik CAD–CAM arayüzü veya çıktı görseli",
      },
      {
        kind: "video",
        src: "/media/projeler/prefab-cad-cam/demo.mp4",
        poster: "/media/projeler/prefab-cad-cam/demo-poster.jpg",
        alt: "Yazılım demosu",
      },
    ],
  },
  {
    slug: "solidworks-automation",
    title: "SolidWorks CAD otomasyon sistemi",
    tagline: "Tekrarı kaldıran, kuralları kodlayan mühendislik hattı",
    problem:
      "Manuel modelleme ve tekrar kullanılmayan adımlar mühendislik ekibinin kapasitesini tüketiyor; hata maliyeti yüksekti.",
    context:
      "Kurumsal SolidWorks ortamında API tabanlı otomasyonla standartların kodlanması ve süreçlerin ölçeklenmesi hedeflendi.",
    role: "API tasarımı, modül yapısı, C# / VBA geçiş stratejileri ve kullanıcı geri bildirimine göre evrim.",
    technologies: ["SolidWorks API", "C#", "VBA", ".NET", "Versiyonlama"],
    process: [
      "Tekrar eden iş paketlerinin ayrıştırılması",
      "API sınırlarında güvenli otomasyon katmanı",
      "Şablon ve konfigürasyon yönetimi",
      "Dokümantasyon ve devreye alma",
    ],
    impact: [
      "Rutin işlerin otomasyona alınması",
      "Tutarlı geometri ve malzeme tanımları",
      "Mühendislik eforunun yüksek değerli problemlere kayması",
    ],
    strategic:
      "Mühendislik disiplinini yazılım sınırları içinde koruyarak ölçekleme — ‘hızlı prototip’ değil, üretimde yaşayan araçlar.",
    media: [
      {
        kind: "image",
        src: "/media/projeler/solidworks-automation/hero.jpg",
        alt: "SolidWorks otomasyon ekran görüntüsü",
      },
    ],
  },
  {
    slug: "parametrix-2d-3d",
    title: "ParametriX — 2B → 3B dönüşüm",
    tagline: "Girdi parametrelerinden güvenilir 3B üretimi",
    problem:
      "2B verinin 3B modele güvenilir şekilde aktarılması; edge-case’lerde kırılganlık ve manuel müdahale ihtiyacı.",
    context:
      "Parametrik kurallar ve doğrulama katmanları ile dönüşümün tekrarlanabilir hale getirilmesi.",
    role: "Algoritma ve yazılım iskeleti, kullanıcı akışı, test senaryoları.",
    technologies: ["C#", ".NET", "Geometri işleme", "SolidWorks API"],
    process: [
      "Girdi sözleşmesi ve validasyon",
      "Dönüşüm grafiği ve hata geri bildirimi",
      "Regresyon testleri",
    ],
    impact: [
      "Tekrarlanabilir 2B–3B hattı",
      "Manuel düzeltme ihtiyacının azaltılması",
    ],
    strategic:
      "‘Sihirli dönüştürücü’ yerine, mühendislik kurallarının açıkça tanımlandığı ürün düşüncesi.",
    media: [
      {
        kind: "image",
        src: "/media/projeler/parametrix/hero.jpg",
        alt: "ParametriX arayüz veya çıktı",
      },
      {
        kind: "video",
        src: "/media/projeler/parametrix/demo.mp4",
        poster: "/media/projeler/parametrix/demo-poster.jpg",
        alt: "ParametriX demo",
      },
    ],
  },
  {
    slug: "uav-robotics",
    title: "İHA / su altı robotik ve kaynak–muayene kavramları",
    tagline: "Saha gerçekliğine dayalı sistem düşüncesi",
    problem:
      "Zorlu ortamlarda görev güvenliği, sensör füzyonu ve operasyonel süreklilik.",
    context:
      "Araştırma ve konsept aşamasında robotik, otonomi ve kaynak / muayene hatlarına yönelik mühendislik görüşü.",
    role: "Mekanik ve sistem tasarımı katkıları, prototip ve görselleştirme, teknik iletişim.",
    technologies: ["ROS", "CAD", "Kontrol mantığı", "Sensör entegrasyonu"],
    process: [
      "Gereksinim ve risk analizi",
      "Donanım–yazılım sınırının netleştirilmesi",
      "Deneysel doğrulama adımları",
    ],
    impact: [
      "Kavramların paydaşlarla hizalanmış anlatımı",
      "Teknik kararların görünür kılınması",
    ],
    strategic:
      "Yazılım ve mekatronik arasında köprü kurabilen, sahayı anlayan bir mühendislik profili.",
    media: [
      {
        kind: "image",
        src: "/media/projeler/uav/hero.jpg",
        alt: "İHA veya robotik görsel",
      },
    ],
  },
  {
    slug: "talks-stage",
    title: "Sahne ve teknik iletişim",
    tagline: "Karmaşık mühendisliği net anlatım",
    problem:
      "Teknik derinliğin yönetim ve geniş ekipler önünde güven oluşturmadan aktarılması zordur.",
    context:
      "Konferans, iç eğitim veya paydaş sunumlarında ürün ve sistem hikâyesinin kurulması.",
    role: "Sunum mimarisi, görsel kanıt kullanımı, soru–cevap disiplini.",
    technologies: ["Sunum tasarımı", "Demo disiplini", "Storyboarding"],
    process: [
      "Hedef kitleye göre mesaj sadeleştirme",
      "Canlı demo risklerinin yönetimi",
      "Geri bildirimle içerik iterasyonu",
    ],
    impact: [
      "Teknik kararların daha hızlı onayı",
      "Ekipler arası ortak dil",
    ],
    strategic:
      "Ürün liderliği ve müşteri / yönetim yüzü olarak güvenilirlik sinyali.",
    media: [
      {
        kind: "image",
        src: "/media/projeler/talks/stage.jpg",
        alt: "Sahne veya konferans fotoğrafı",
      },
    ],
  },
];

export const timeline: TimelineEntry[] = [
  {
    id: "t1",
    period: "CV’deki dönem",
    title: "Mekanik tasarım ve üretim yakınlığı",
    org: "Üretim odaklı roller — CV ile güncelleyin",
    summary:
      "Üretim hatlarını ve montaj gerçeklerini içselleştiren mekanik tasarım deneyimi; mühendislik kararlarının sahada test edilmesi.",
    focus: ["Mekanik tasarım", "Üretilebilirlik", "Hat gerçekleri"],
  },
  {
    id: "t2",
    period: "CV’deki dönem",
    title: "CAD derinliği ve otomasyon",
    org: "Mühendislik ve yazılım kesişimi — CV ile güncelleyin",
    summary:
      "SolidWorks ekosisteminde API ve .NET ile otomasyon; tekrarın azaltılması ve standartların kodlanması.",
    focus: ["SolidWorks API", "C# / .NET", "İç araçlar"],
  },
  {
    id: "t3",
    period: "Günümüz",
    title: "AI-native ürün inşası",
    org: "Bağımsız / proje bazlı — CV ile güncelleyin",
    summary:
      "AI’yi kısayol değil kaldıraç olarak kullanan geliştirme pratiği; hız, gözden geçirilebilirlik ve üretim kalitesi dengesi.",
    focus: ["AI destekli geliştirme", "Ürün düşüncesi", "Sistem tasarımı"],
  },
];

export const capabilityGroups: CapabilityGroup[] = [
  {
    id: "cad",
    title: "CAD ve mühendislik sistemleri",
    items: [
      "SolidWorks API ve eklenti mimarisi",
      "Parametrik modelleme ve konfigürasyon",
      "CAD–CAM ve üretim çıktıları",
      "Teknik çizim ve BOM disiplini",
    ],
  },
  {
    id: "auto",
    title: "Otomasyon ve yazılım",
    items: [
      "C# / .NET",
      "VBA geçişleri ve modülerleştirme",
      "İç araçların sürümleme ve devreye alınması",
      "Performans ve hata sınırları",
    ],
  },
  {
    id: "ai",
    title: "AI destekli geliştirme",
    items: [
      "Kod üretiminde kontrollü kullanım",
      "İnsan gözden geçirmesi ve test ağırlığı",
      "Tekrarlanabilir prompt / şablon disiplini",
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
    "Yazılımı, üretimde yaşayan bir araç olarak görüyorum: hızlı demolar değil, hataya yer bırakmayan akışlar ve sürdürülebilir iç ürünler.",
    "AI, kararların yerine geçen bir sihirbaz değil; mühendislik hızını artıran kontrollü bir katman. Asıl mesele, hangi problemin otomasyona ve hangi kararın insana ait kalacağını netleştirmek.",
    "Endüstriyel gerçekleri anlayan, bunları ölçeklenebilir yazılıma çevirebilen hibrit bir profil sunuyorum: CAD otomasyonu, üretim yazılımı ve ürün disiplininin bir arada olduğu bir çizgi.",
  ],
};

export const credentials: Credential[] = [
  { label: "Eğitim", detail: "CV’deki program ve kurum adlarıyla güncelleyin" },
  { label: "Sertifikalar", detail: "Varsa ilgili sertifika adları — CV’den ekleyin" },
  { label: "Diller", detail: "Çalışma dilleri — CV ile hizalayın" },
];

export const contact = {
  title: "Bir sonraki mühendislik yazılımını birlikte tanımlayalım",
  body: "CAD otomasyonu, üretim içi araçlar ve AI-native geliştirme ihtiyaçlarınız için doğrudan iletişime geçebilirsiniz. Net problem tanımı ve ölçülebilir hedeflerle ilerlemeyi tercih ediyorum.",
  ctaPrimary: "E-posta gönder",
  ctaSecondary: "LinkedIn",
};
