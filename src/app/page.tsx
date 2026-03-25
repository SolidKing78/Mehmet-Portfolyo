"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type FormEvent,
} from "react";
import {
  Award,
  BadgeCheck,
  BookOpen,
  Bot,
  Braces,
  Building2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Code2,
  Download,
  DraftingCompass,
  ExternalLink,
  FileText,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  PencilRuler,
  Phone,
  Play,
  ScrollText,
  Send,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { person, personalMeta } from "@/content/site";
import { projeler } from "@/lib/paths";
import { CursorAurora } from "@/components/effects/CursorAurora";
import { SmartImage } from "@/components/ui/SmartMedia";
import {
  certificationEntries,
  certificationPdfHref,
  certificationThumbnailHref,
  linkedinCertificationsProfileUrl,
  type CertVerifyLinkKind,
} from "@/content/certifications";
import { publications, publicationImageHref } from "@/content/publications";
import { linkedInHighlightSkills } from "@/content/linkedinSkills";
import { aboutGallerySlides, aboutSlideHref } from "@/content/aboutGallery";
import { projectDetails } from "@/content/projects";
import { useVideoPosterFromSrc } from "@/hooks/useVideoPosterFromSrc";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import { BorderGlow } from "@/components/effects/BorderGlow";

type Lang = "tr" | "en";

const dictionary = {
  tr: {
    nav: [
      "Anasayfa",
      "Hakkımda",
      "Yetenekler",
      "Deneyim",
      "Yayınlar",
      "Sertifikalar",
      "İletişim",
    ],
    heroBadge: "Özgeçmiş / CV",
    hello: "Merhaba Ben",
    role: "AI Destekli Yazılım Geliştirme & Vibe Coding",
    location: "Pendik, İstanbul, Türkiye",
    aboutTitle: "Hakkımda",
    aboutText:
      "Yapay zeka destekli otomasyon sistemleri ve ajan tabanlı çözümler geliştirerek, mühendislik ve iş süreçlerini yeniden tanımlayan ölçeklenebilir ürünler oluşturmayı hedefliyorum. CAD otomasyonu, no-code/low-code geliştirme ve LLM teknolojilerini birleştirerek, firmalara özel yüksek katma değerli çözümler sunmak ve bu alanda yapay zeka danışmanlığı ile ürünleşmiş sistemler geliştirmek temel kariyer vizyonumdur.",
    aboutTags: [
      "AI-Assisted Development",
      "Vibe Coding",
      "Prompt Engineering",
      "No-Code / Low-Code",
      "LLM Workflows",
      "SolidWorks API",
    ],
    cv: "CV İndir",
    whatIDo: "Neler Yapıyorum",
    services: [
      {
        title: "SolidWorks CAD Otomasyonu",
        text: "Gencer Otomotiv için SolidWorks API, VBA, .NET ve C# kullanarak kamyon/treyler üst yapısına özel parametrik 3D tasarım otomasyonu geliştirdim. Kullanıcıların birkaç ölçü girişiyle komple montaj ve teknik resim çıktıları (PDF, DWG, DXF, büküm resimleri dahil) tek tuşla üretmesini sağlayan bir sistem kurdum.",
      },
      {
        title: "Ürün Yazılımları (CAD/CAM)",
        text: "AI-assisted / vibe coding yaklaşımıyla C++ tabanlı modern bir CAD/CAM yazılımı geliştirdim. Sistem, prefabrik veya hafif çelik yapıların bileşenlerini roll-form hatlarında doğrudan kullanılabilir üretim çıktısına dönüştürüyor. Otomatik modelleme, üretim verisi, hata kontrolü ve lisans yönetimi altyapısını uçtan uca tasarladım.",
      },
      {
        title: "Vibe Coding & AI-Driven Development",
        text: "Cursor, Claude, Antigravity ve GPT Codex araçlarını aktif kullanarak geliştirme döngülerini hızlandırıyorum. Modern AI-driven development yaklaşımıyla daha hızlı iterasyon, daha güçlü doğrulama ve daha kısa teslim süresi sağlıyorum.",
      },
    ],
    featured: "Öne Çıkan Projeler",
    featuredCta: "Detayları Gör",
    watchVideo: "Video izle",
    skillTitleA: "Teknik Yetenekler",
    skillLinkedInTitle: "Profilde öne çıkan yetenekler",
    skillLinkedInBlurb:
      "LinkedIn profilimdeki beceri ve proje temalarıyla uyumlu etiketler. Güncel liste ve doğrulamalar için profilime bakın.",
    certTitle: "Sertifikalar ve eğitimler",
    certIntro:
      "Aşağıdaki kayıtlar LinkedIn’deki lisanslar ve sertifikalar bölümümle uyumludur. PDF veya kapak görseli, dosyaları siteye ekledikçe burada görünür.",
    verifyLinkedIn: "LinkedIn’de tüm sertifikaları gör",
    credSkills: "İlgili yetenekler",
    issuedPrefix: "Veriliş",
    openPdf: "PDF’i aç",
    pubTitle: "Yayınlar",
    pubIntro:
      "Kongre bildirileri ve akademik paylaşımlar. Tam metin ve ekler için bağlantıya tıklayın.",
    showPublication: "Yayını görüntüle",
    education: "Eğitim",
    work: "İş Deneyimi",
    interested: "Benimle İletişime Geçin",
    interestedText:
      "CAD otomasyonu ve mühendislik yazılımı konularında e-posta, LinkedIn veya WhatsApp üzerinden doğrudan ulaşabilirsiniz.",
    contact: "İletişim",
    send: "Mesaj Gönder",
    placeholders: ["Adınız", "Soyadınız", "E-posta", "Mesajınız"],
    required: "Lütfen tüm alanları doldurun.",
    badEmail: "Lütfen geçerli bir e-posta girin.",
    sending: "Gönderiliyor…",
    scriptMissing:
      "Form şu an yapılandırılmamış. NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL ortam değişkenini ekleyin.",
    sendFailed: "Gönderim sırasında bir hata oluştu. Lütfen tekrar deneyin.",
    messageSentTitle: "E-posta uygulamanız açılıyor",
    messageSentBody:
      "Mesajınız mehmetseyrimez@gmail.com adresine gönderilmek üzere hazırlandı. Açılan pencerede Gönder’e basmayı unutmayın; otomatik gönderim tarayıcıdan yapılamaz.",
    messageSentClose: "Tamam",
  },
  en: {
    nav: [
      "Home",
      "About",
      "Skills",
      "Experience",
      "Publications",
      "Certifications",
      "Contact",
    ],
    heroBadge: "Resume / CV",
    hello: "Hello I'm",
    role: "AI-Assisted Software Development & Vibe Coding",
    location: "Pendik, Istanbul, Turkey",
    aboutTitle: "About Me",
    aboutText: `I build AI-powered automation systems and agent-based solutions,
aiming to create scalable products that redefine engineering and business workflows.
Combining CAD automation, no-code/low-code development, and LLM technologies,
my core career vision is to deliver high–value bespoke solutions for companies
and to ship productized systems alongside AI consulting in this space.`,
    aboutTags: [
      "AI-Assisted Development",
      "Vibe Coding",
      "Prompt Engineering",
      "No-Code / Low-Code",
      "LLM Workflows",
      "SolidWorks API",
    ],
    cv: "Download CV",
    whatIDo: "What I Do",
    services: [
      {
        title: "SolidWorks CAD Automation",
        text: "For Gencer Otomotiv, I built a complete automation system using SolidWorks API, VBA, .NET, and C#. With a few parameter inputs, users can generate full assemblies and one-click documentation including PDF, DWG, DXF, and bending drawings.",
      },
      {
        title: "Product Software (CAD/CAM)",
        text: "Using an AI-assisted vibe coding workflow, I developed a C++ CAD/CAM software platform that converts prefab and light steel models into roll-form-ready production outputs. Automatic modeling, production data generation, validation, and licensing were designed end-to-end.",
      },
      {
        title: "Vibe Coding & AI-Driven Development",
        text: "I actively use Cursor, Claude, Antigravity, and GPT Codex to accelerate software delivery. This AI-driven development style enables faster iteration, better implementation quality, and shorter release cycles.",
      },
    ],
    featured: "Featured Projects",
    featuredCta: "View Details",
    watchVideo: "Watch video",
    skillTitleA: "Technical Skills",
    skillLinkedInTitle: "Highlighted skills (LinkedIn-aligned)",
    skillLinkedInBlurb:
      "Tags aligned with themes on my LinkedIn profile. See my profile for the live, verifiable skill list.",
    certTitle: "Licenses & certifications",
    certIntro:
      "These entries mirror the Licenses & certifications section on my LinkedIn. PDFs and thumbnails appear here once you add files under public/Projeler/Sertifikalar.",
    verifyLinkedIn: "View all on LinkedIn",
    credSkills: "Related skills",
    issuedPrefix: "Issued",
    openPdf: "Open PDF",
    pubTitle: "Publications",
    pubIntro:
      "Conference papers and academic contributions. Open the link for the full document.",
    showPublication: "View publication",
    education: "Education",
    work: "Work Experience",
    interested: "Contact Me Directly",
    interestedText:
      "For CAD automation and engineering software projects, reach me directly via email, LinkedIn, or WhatsApp.",
    contact: "Contact Me",
    send: "Send Message",
    placeholders: ["First Name", "Last Name", "Your Email", "Your Message"],
    required: "Please fill all fields.",
    badEmail: "Please enter a valid email address.",
    sending: "Sending…",
    scriptMissing:
      "The form is not configured yet. Add NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL to your environment.",
    sendFailed: "Something went wrong while sending. Please try again.",
    messageSentTitle: "Opening your email app",
    messageSentBody:
      "Your message is prepared for mehmetseyrimez@gmail.com. Please press Send in the window that opens — browsers cannot send email automatically.",
    messageSentClose: "OK",
  },
} as const;

const sectionAnchors = [
  "#home",
  "#about",
  "#skills",
  "#experience",
  "#publications",
  "#certifications",
  "#contact",
];

function getActiveNavIndexFromScroll(): number {
  const last = sectionAnchors.length - 1;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  if (window.scrollY >= maxScroll - 8) return last;

  const marker = Math.min(132, window.innerHeight * 0.11 + 72);
  let idx = 0;
  for (let i = 0; i < sectionAnchors.length; i++) {
    const id = sectionAnchors[i].replace(/^#/, "");
    const el = document.getElementById(id);
    if (!el) continue;
    if (el.getBoundingClientRect().top <= marker) idx = i;
  }
  return idx;
}

function CertVerifyIcon({ kind }: { kind: CertVerifyLinkKind }) {
  switch (kind) {
    case "solidworks":
      return <ShieldCheck size={15} strokeWidth={2} aria-hidden />;
    case "linkedin-learning":
      return <Linkedin size={14} aria-hidden />;
    case "pdf":
      return <FileText size={14} aria-hidden />;
    case "verify":
      return <BadgeCheck size={15} strokeWidth={2} aria-hidden />;
  }
}

const technicalSkills = [
  { name: "AI & Automation", icon: Sparkles },
  { name: "AI-Assisted Development", icon: Bot },
  { name: "No-Code / Low-Code", icon: PencilRuler },
  { name: "Prompt Engineering", icon: Braces },
  { name: "LLM Workflows", icon: Code2 },
  { name: "SolidWorks", icon: Wrench },
  { name: "SolidWorks API (VBA, .NET, C#)", icon: DraftingCompass },
];

const educationCards = [
  {
    id: "gedik-uni",
    titleTr: "Gedik Üniversitesi",
    titleEn: "Gedik University",
    subTr: "Makine Programı",
    subEn: "Mechanical Engineering (Associate Degree)",
    period: "2020-2023",
    bodyTr:
      "Meslek yüksekokulu düzeyinde makina üretim yaklaşımı, çizim ve uygulama odaklı eğitim.",
    bodyEn:
      "Associate-level mechanical engineering education focused on production, drafting, and practical workflow.",
  },
  {
    id: "gedik-lise",
    titleTr: "Gedik Mesleki ve Teknik Anadolu Lisesi",
    titleEn: "Gedik Vocational and Technical Anatolian High School",
    subTr: "Çelik Konstrüksiyon ve Kaynak",
    subEn: "Steel Construction & Welding",
    period: "2014-2018",
    bodyTr: "Çelik konstrüksiyon, kaynak ve uygulama odaklı üretim disiplini.",
    bodyEn: "Production-oriented discipline in steel construction and welding practice.",
  },
];

const workCards = [
  {
    id: "zmt-cad",
    titleTr: "AI destekli CAD ürün geliştirme",
    titleEn: "AI-assisted CAD product development",
    org: "ZMT Prefabrik ve Hafif Çelik A.Ş.",
    periodTr: "2025-Günümüz",
    periodEn: "2025–Present",
    pointsTr: [
      "C++ tabanlı CAD/CAM çekirdeği geliştirme",
      "Roll-form uyumlu üretim verisi ve hata kontrolü",
      "Ölçeklenebilir lisans yönetimi mimarisi",
      "Legacy sisteme kıyasla ~%70 verimlilik artışı",
    ],
    pointsEn: [
      "C++ CAD/CAM core product development",
      "Roll-form compatible production output and validation",
      "Scalable licensing architecture",
      "~70% efficiency increase vs legacy workflow",
    ],
  },
  {
    id: "gencer",
    titleTr: "ARGE Teknik Tasarım Uzmanı",
    titleEn: "R&D Technical Design Specialist",
    org: "Gencer Otomotiv",
    periodTr: "2022-2025",
    periodEn: "2022–2025",
    pointsTr: [
      "SolidWorks API, VBA, .NET, C# ile otomasyon",
      "PDF/DWG/DXF ve büküm resimleri tek tuş akışı",
      "Kamyon/kamyonet/treyler üst yapı modelleme",
      "Lazer kesim ve abkant dahil fason süreç koordinasyonu",
    ],
    pointsEn: [
      "Automation with SolidWorks API, VBA, .NET, C#",
      "One-click PDF/DWG/DXF and bending drawing output",
      "Truck/van/trailer body design workflows",
      "Outsource process coordination including laser and bending",
    ],
  },
  {
    id: "gedik-rd",
    titleTr: "ARGE Makine Tasarım / Üretim",
    titleEn: "R&D Mechanical Design / Manufacturing",
    org: "Gedik Holding",
    periodTr: "2018-2022",
    periodEn: "2018–2022",
    pointsTr: [
      "SolidWorks & Fusion 360 ile makine/ekipman tasarımı",
      "Konveyör, paketleme ve kaynak robotu tasarım süreçleri",
      "Katmanlı imalat ve mekanik tasarım desteği",
    ],
    pointsEn: [
      "Machine/equipment design with SolidWorks & Fusion 360",
      "Conveyor, packaging, and welding robot design",
      "Additive manufacturing and mechanical design support",
    ],
  },
  {
    id: "gedik-intern",
    titleTr: "Stajyer",
    titleEn: "Intern",
    org: "Gedik Holding",
    periodTr: "2017-2018",
    periodEn: "2017–2018",
    pointsTr: [
      "Freze, torna ve makine imalat tasarımında temel uygulamalar",
      "Üretim teknikleri ve atölye süreçlerine aktif katılım",
    ],
    pointsEn: [
      "Foundational work in milling, lathe, and manufacturing design",
      "Active contribution to workshop and production operations",
    ],
  },
];

/** Oturumda yalnızca ilk ana sayfa girişinde intro; alt sayfadan dönüşte tekrarlanmaz. */
const INTRO_SESSION_KEY = "mehmetsey-portfolio-intro-session";

const INTRO_VARIANTS = [
  "intro-v1",
  "intro-v2",
  "intro-v3",
  "intro-v4",
  "intro-v5",
  "intro-v6",
  "intro-v7",
  "intro-v8",
  "intro-v9",
  "intro-v10",
  "intro-v11",
  "intro-v12",
  "intro-v13",
  "intro-v14",
  "intro-v15",
  "intro-v16",
  "intro-v17",
  "intro-v18",
  "intro-v19",
  "intro-v20",
] as const;

const INTRO_FULL_NAME = "Mehmet Seyrimez";
const INTRO_DURATION_MS = 3400;

function IntroOverlay({
  hidden,
  variant,
}: {
  hidden: boolean;
  variant: (typeof INTRO_VARIANTS)[number];
}) {
  const letterReveal = variant === "intro-v18";

  return (
    <div className={`intro-overlay ${variant}${hidden ? " intro-overlay-hidden" : ""}`}>
      <div className="intro-gradient" />
      <div className="intro-wave intro-wave-a" />
      <div className="intro-wave intro-wave-b" />
      <div className="intro-noise" />
      {variant === "intro-v17" ? <div className="intro-light-beam" aria-hidden /> : null}
      {variant === "intro-v19" ? <div className="intro-scanlines" aria-hidden /> : null}
      {letterReveal ? (
        <p className="intro-name intro-name-letters" aria-label={INTRO_FULL_NAME}>
          {INTRO_FULL_NAME.split("").map((ch, i) => (
            <span
              key={i}
              className="intro-letter"
              style={{ animationDelay: `${i * 0.045}s` }}
            >
              {ch === " " ? "\u00A0" : ch}
            </span>
          ))}
        </p>
      ) : (
        <p className="intro-name">
          <span className="intro-name-core">{INTRO_FULL_NAME}</span>
        </p>
      )}
      <div className="intro-shutter intro-shutter-top" />
      <div className="intro-shutter intro-shutter-bottom" />
    </div>
  );
}

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("tr");
  const [showIntro, setShowIntro] = useState(false);
  const [heroReveal, setHeroReveal] = useState(false);
  const reduceMotion = useReducedMotion();
  const [introVariant, setIntroVariant] = useState<(typeof INTRO_VARIANTS)[number]>("intro-v1");
  const [isMobile, setIsMobile] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [activeFeatured, setActiveFeatured] = useState(0);
  const [sliderCycle, setSliderCycle] = useState(0);
  const [formError, setFormError] = useState("");
  const [showSentModal, setShowSentModal] = useState(false);
  const [aboutSlideIdx, setAboutSlideIdx] = useState(0);
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [navIndicator, setNavIndicator] = useState({ left: 0, width: 0, ready: false });
  const navRef = useRef<HTMLElement | null>(null);
  const navLinkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const scrollSpyTicking = useRef(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const t = useMemo(() => dictionary[lang], [lang]);
  const sliderLockRef = useRef(false);
  const SLIDE_MS = 8200;

  useLayoutEffect(() => {
    queueMicrotask(() => {
      try {
        if (sessionStorage.getItem(INTRO_SESSION_KEY) === "1") return;
        const pick =
          INTRO_VARIANTS[Math.floor(Math.random() * INTRO_VARIANTS.length)] ?? "intro-v1";
        setIntroVariant(pick);
        setShowIntro(true);
      } catch {
        /* private mode / SSR */
      }
    });
  }, []);

  useEffect(() => {
    if (!showIntro) return;
    const done = window.setTimeout(() => {
      try {
        sessionStorage.setItem(INTRO_SESSION_KEY, "1");
      } catch {
        /* ignore */
      }
      setShowIntro(false);
    }, INTRO_DURATION_MS);
    return () => window.clearTimeout(done);
  }, [showIntro]);

  useEffect(() => {
    if (showIntro) {
      const hide = window.setTimeout(() => setHeroReveal(false), 0);
      return () => window.clearTimeout(hide);
    }
    const t = window.setTimeout(() => setHeroReveal(true), 90);
    return () => window.clearTimeout(t);
  }, [showIntro]);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 980px)");
    const onUpdate = () =>
      setIsMobile(
        media.matches ||
          /Android|iPhone|iPad|iPod|Mobile|Opera Mini|IEMobile/i.test(
            window.navigator.userAgent,
          ),
      );
    onUpdate();
    media.addEventListener("change", onUpdate);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px 18% 0px" },
    );

    const revealNodes = document.querySelectorAll(".reveal");
    revealNodes.forEach((node) => observer.observe(node));

    const revealInViewOnLoad = () => {
      revealNodes.forEach((node) => {
        const r = node.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.92 && r.bottom > 0) {
          node.classList.add("is-visible");
        }
      });
    };
    queueMicrotask(revealInViewOnLoad);
    window.addEventListener("load", revealInViewOnLoad);

    return () => {
      media.removeEventListener("change", onUpdate);
      window.removeEventListener("load", revealInViewOnLoad);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const applyHashReveal = () => {
      const id = window.location.hash.replace(/^#/, "");
      if (!id) return;
      document.getElementById(id)?.classList.add("is-visible");
    };
    applyHashReveal();
    window.addEventListener("hashchange", applyHashReveal);
    return () => window.removeEventListener("hashchange", applyHashReveal);
  }, []);

  const updateNavIndicator = useCallback(() => {
    const nav = navRef.current;
    const link = navLinkRefs.current[activeSectionIndex];
    if (!nav || !link) {
      setNavIndicator((p) => ({ ...p, ready: false }));
      return;
    }
    if (window.getComputedStyle(nav).display === "none") {
      setNavIndicator((p) => ({ ...p, ready: false }));
      return;
    }
    const nr = nav.getBoundingClientRect();
    const lr = link.getBoundingClientRect();
    setNavIndicator({
      left: lr.left - nr.left + nav.scrollLeft,
      width: Math.max(lr.width, 12),
      ready: true,
    });
  }, [activeSectionIndex]);

  useLayoutEffect(() => {
    const id = requestAnimationFrame(() => updateNavIndicator());
    return () => cancelAnimationFrame(id);
  }, [updateNavIndicator, t.nav, isMobile, openMenu, lang]);

  useEffect(() => {
    const onResize = () => updateNavIndicator();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [updateNavIndicator]);

  useEffect(() => {
    const onScroll = () => {
      if (scrollSpyTicking.current) return;
      scrollSpyTicking.current = true;
      requestAnimationFrame(() => {
        scrollSpyTicking.current = false;
        const next = getActiveNavIndexFromScroll();
        setActiveSectionIndex((prev) => (prev !== next ? next : prev));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const syncActiveFromHash = () => {
      const id = window.location.hash.replace(/^#/, "");
      if (!id) return;
      const i = sectionAnchors.findIndex((h) => h === `#${id}`);
      if (i >= 0) setActiveSectionIndex(i);
    };
    syncActiveFromHash();
    window.addEventListener("hashchange", syncActiveFromHash);
    return () => window.removeEventListener("hashchange", syncActiveFromHash);
  }, []);

  useEffect(() => {
    const slide = aboutGallerySlides[aboutSlideIdx];
    if (!slide) return;
    const t = window.setTimeout(() => {
      setAboutSlideIdx((i) => (i + 1) % aboutGallerySlides.length);
    }, slide.dwellMs);
    return () => window.clearTimeout(t);
  }, [aboutSlideIdx]);

  const goAboutPrev = () => {
    setAboutSlideIdx(
      (i) => (i - 1 + aboutGallerySlides.length) % aboutGallerySlides.length,
    );
  };

  const goAboutNext = () => {
    setAboutSlideIdx((i) => (i + 1) % aboutGallerySlides.length);
  };

  const toggleFeatured = (direction: "next" | "prev") => {
    if (sliderLockRef.current) return;
    sliderLockRef.current = true;
    window.setTimeout(() => {
      sliderLockRef.current = false;
    }, 300);
    setActiveFeatured((prev) => {
      if (direction === "next") return (prev + 1) % projectDetails.length;
      return (prev - 1 + projectDetails.length) % projectDetails.length;
    });
    setSliderCycle((prev) => prev + 1);
  };

  const jumpFeatured = (index: number) => {
    if (sliderLockRef.current || index === activeFeatured) return;
    sliderLockRef.current = true;
    window.setTimeout(() => {
      sliderLockRef.current = false;
    }, 300);
    setActiveFeatured(index);
    setSliderCycle((prev) => prev + 1);
  };

  const onSliderComplete = () => {
    if (sliderLockRef.current) return;
    setActiveFeatured((prev) => (prev + 1) % projectDetails.length);
    setSliderCycle((prev) => prev + 1);
  };

  const activeProject = projectDetails[activeFeatured];
  const featuredVideoSrc =
    activeProject.heroMedia.kind === "video" ? activeProject.heroMedia.src : null;
  const featuredVideoCover = useVideoPosterFromSrc(featuredVideoSrc);
  const featuredVisualSrc =
    activeProject.heroMedia.kind === "video"
      ? featuredVideoCover
      : activeProject.heroMedia.src;

  const contactTargetEmail = "mehmetseyrimez@gmail.com";

  const onSubmitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError("");

    if (!form.firstName || !form.lastName || !form.email || !form.message) {
      setFormError(t.required);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setFormError(t.badEmail);
      return;
    }

    const subject =
      lang === "tr"
        ? `Portfolyo iletişim: ${form.firstName.trim()} ${form.lastName.trim()}`
        : `Portfolio contact: ${form.firstName.trim()} ${form.lastName.trim()}`;
    const body = [
      lang === "tr" ? "Gönderen" : "From",
      `${form.firstName.trim()} ${form.lastName.trim()}`,
      lang === "tr" ? "E-posta" : "Reply-To email",
      form.email.trim(),
      "",
      form.message.trim(),
    ].join("\n");

    const mailto = `mailto:${contactTargetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setShowSentModal(true);
  };

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${personalMeta.address}, Türkiye`)}`;

  return (
    <div className={`portfolio-root${isMobile ? " mobile-mode" : ""}`}>
      <CursorAurora />
      {showIntro ? <IntroOverlay hidden={false} variant={introVariant} /> : null}

      <header
        className="site-header"
        onMouseMove={(e) => {
          const el = e.currentTarget;
          const r = el.getBoundingClientRect();
          const x = ((e.clientX - r.left) / Math.max(r.width, 1)) * 100;
          const y = ((e.clientY - r.top) / Math.max(r.height, 1)) * 100;
          el.style.setProperty("--nav-glow-x", `${x}%`);
          el.style.setProperty("--nav-glow-y", `${y}%`);
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.setProperty("--nav-glow-x", "50%");
          e.currentTarget.style.setProperty("--nav-glow-y", "42%");
        }}
      >
        <div className="site-header-backdrop" aria-hidden />
        <div className="site-header-row">
          <div className="brand-pill">{t.heroBadge}</div>
          <button
            className="mobile-menu-btn"
            onClick={() => setOpenMenu((v) => !v)}
            aria-label="Toggle menu"
          >
            <Menu size={18} />
          </button>
          <nav
            ref={navRef}
            className={`top-nav${isMobile && !openMenu ? " top-nav-hidden" : ""}`}
          >
            <span
              className="top-nav-indicator"
              style={{
                transform: `translateX(${navIndicator.left}px)`,
                width: navIndicator.width,
                opacity: navIndicator.ready ? 1 : 0,
              }}
              aria-hidden
            />
            {sectionAnchors.map((href, idx) => (
              <a
                key={href}
                ref={(el) => {
                  navLinkRefs.current[idx] = el;
                }}
                href={href}
                className={cn(idx === activeSectionIndex && "top-nav-link-active")}
                aria-current={idx === activeSectionIndex ? "location" : undefined}
              >
                {t.nav[idx]}
              </a>
            ))}
          </nav>
          <div className="lang-switch">
            <button className={lang === "tr" ? "active" : ""} onClick={() => setLang("tr")}>
              TR
            </button>
            <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>
              EN
            </button>
          </div>
        </div>
      </header>

      <section id="home" className="reveal is-visible">
        <BorderGlow
          className="mt-5"
          contentClassName="hero-section"
          animated
          sweepDelayMs={showIntro ? INTRO_DURATION_MS + 140 : 320}
          borderRadius={6}
          glowRadius={32}
          glowIntensity={1.1}
          glowColor="187 92% 58%"
          colors={["#22d3ee", "#c084fc", "#fb7185", "#38bdf8"]}
          fillOpacity={0.42}
          coneSpread={22}
        >
          <div className="hero-bg">
            <SmartImage
              src={projeler("1000032332_890c8c34641268895aacba6ef3c538aa-30.04.2023 07_47_02.jpg")}
              alt="Hero background"
              className="hero-bg-image"
            />
          </div>
          <div className="hero-overlay" />
          {reduceMotion ? (
            <div className="hero-left">
              <span className="hello-pill">{t.hello}</span>
              <h1>Mehmet Seyrimez</h1>
              <p className="role-line">{t.role}</p>
              <ul>
                <li>
                  <Mail size={14} />
                  {person.email}
                </li>
                <li>
                  <Phone size={14} />
                  {person.phoneDisplay}
                </li>
                <li>
                  <MapPin size={14} />
                  {t.location}
                </li>
              </ul>
              <div className="hero-social">
                <a href={`mailto:${person.email}`} aria-label="Email">
                  <Mail size={20} />
                </a>
                <a href={`tel:${person.phoneTel}`} aria-label="Phone">
                  <Phone size={20} />
                </a>
                <a href="https://wa.me/905383940137" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                  <WhatsAppIcon size={22} className="text-[#25D366]" />
                </a>
                <a href={person.linkedin} target="_blank" rel="noreferrer" aria-label="Linkedin">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          ) : (
            <motion.div
              className="hero-left"
              initial={false}
              animate={
                heroReveal
                  ? { opacity: 1, y: 0, filter: "blur(0px)" }
                  : { opacity: 0, y: 22, filter: "blur(10px)" }
              }
              transition={{ duration: 0.62, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="hello-pill">{t.hello}</span>
              <h1>Mehmet Seyrimez</h1>
              <p className="role-line">{t.role}</p>
              <ul>
                <li>
                  <Mail size={14} />
                  {person.email}
                </li>
                <li>
                  <Phone size={14} />
                  {person.phoneDisplay}
                </li>
                <li>
                  <MapPin size={14} />
                  {t.location}
                </li>
              </ul>
              <div className="hero-social">
                <a href={`mailto:${person.email}`} aria-label="Email">
                  <Mail size={20} />
                </a>
                <a href={`tel:${person.phoneTel}`} aria-label="Phone">
                  <Phone size={20} />
                </a>
                <a href="https://wa.me/905383940137" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                  <WhatsAppIcon size={22} className="text-[#25D366]" />
                </a>
                <a href={person.linkedin} target="_blank" rel="noreferrer" aria-label="Linkedin">
                  <Linkedin size={20} />
                </a>
              </div>
            </motion.div>
          )}
          {reduceMotion ? (
            <div className="hero-right">
              <div className="profile-ring">
                <SmartImage src={projeler("MEHMET_SEYRİMEZ.jpg")} alt="Mehmet Seyrimez profile" />
              </div>
            </div>
          ) : (
            <motion.div
              className="hero-right"
              initial={false}
              animate={heroReveal ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.65, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="profile-ring">
                <SmartImage src={projeler("MEHMET_SEYRİMEZ.jpg")} alt="Mehmet Seyrimez profile" />
              </div>
            </motion.div>
          )}
        </BorderGlow>
      </section>

      <section id="about" className="about-section reveal">
        <div className="about-image about-image-slider">
          {aboutGallerySlides.map((slide, i) => (
            <div
              key={slide.id}
              className={cn("about-slide-layer", i === aboutSlideIdx && "about-slide-layer-active")}
            >
              <SmartImage
                src={aboutSlideHref(slide)}
                alt={
                  lang === "tr"
                    ? `Mehmet Seyrimez — sunum ve proje görseli ${i + 1}/${aboutGallerySlides.length}`
                    : `Mehmet Seyrimez — presentation & project photo ${i + 1}/${aboutGallerySlides.length}`
                }
                className="about-slide-img"
                priority={i === 0}
              />
            </div>
          ))}
          <button
            type="button"
            className="about-slider-arrow about-slider-arrow-prev"
            onClick={goAboutPrev}
            aria-label={lang === "tr" ? "Önceki görsel" : "Previous photo"}
          >
            <ChevronLeft size={26} strokeWidth={1.75} aria-hidden />
          </button>
          <button
            type="button"
            className="about-slider-arrow about-slider-arrow-next"
            onClick={goAboutNext}
            aria-label={lang === "tr" ? "Sonraki görsel" : "Next photo"}
          >
            <ChevronRight size={26} strokeWidth={1.75} aria-hidden />
          </button>
          <div className="about-slider-dots" role="tablist" aria-label={lang === "tr" ? "Hakkımda görselleri" : "About photos"}>
            {aboutGallerySlides.map((slide, i) => (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={i === aboutSlideIdx}
                className={cn("about-slider-dot", i === aboutSlideIdx && "about-slider-dot-active")}
                onClick={() => setAboutSlideIdx(i)}
                aria-label={lang === "tr" ? `Görsel ${i + 1}` : `Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="about-content">
          <h2>{t.aboutTitle}</h2>
          <p className="about-multiline">{t.aboutText}</p>
          <div className="tag-row">
            {t.aboutTags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <a href={projeler("Güncel CV.pdf")} className="cv-btn">
            <Download size={16} />
            {t.cv}
          </a>
        </div>
      </section>

      <section className="services-section reveal">
        <h2>{t.whatIDo}</h2>
        <div className="service-grid">
          {t.services.map((service) => (
            <article key={service.title} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="featured-section reveal">
        <h2>{t.featured}</h2>
        <div className="featured-grid">
          <div className="featured-media">
            <SmartImage
              src={featuredVisualSrc}
              alt={lang === "tr" ? activeProject.titleTr : activeProject.titleEn}
              className={activeProject.heroMedia.kind === "video" ? "featured-media-dim" : undefined}
            />
            {activeProject.heroMedia.kind === "video" ? (
              <Link
                href={`/projeler/${activeProject.slug}#project-media`}
                className="featured-video-overlay"
              >
                <span className="featured-video-play" aria-hidden>
                  <Play size={36} strokeWidth={1.6} />
                </span>
                <span className="featured-video-label">{t.watchVideo}</span>
              </Link>
            ) : null}
            <button
              type="button"
              className="slider-btn slider-btn-left"
              onClick={() => toggleFeatured("prev")}
            >
              ‹
            </button>
            <button
              type="button"
              className="slider-btn slider-btn-right"
              onClick={() => toggleFeatured("next")}
            >
              ›
            </button>
            <div className="slider-progress">
              <span
                key={`${activeFeatured}-${sliderCycle}`}
                className="slider-progress-runner"
                style={{ animationDuration: `${SLIDE_MS}ms` }}
                onAnimationEnd={onSliderComplete}
              />
            </div>
          </div>
          <div className="featured-copy">
            <span>{activeProject.label}</span>
            <h3>{lang === "tr" ? activeProject.titleTr : activeProject.titleEn}</h3>
            <p>{lang === "tr" ? activeProject.summaryTr : activeProject.summaryEn}</p>
            <Link href={`/projeler/${activeProject.slug}`} className="cv-btn">
              {t.featuredCta}
            </Link>
            <div className="slider-dots">
              {projectDetails.map((item, idx) => (
                <button
                  type="button"
                  key={item.slug}
                  className={idx === activeFeatured ? "active" : ""}
                  onClick={() => jumpFeatured(idx)}
                  aria-label={item.slug}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills-section reveal">
        <h2>{t.skillTitleA}</h2>
        <div className="skill-icon-grid">
          {technicalSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <article key={skill.name} className="skill-icon-card">
                <div className="skill-icon-head">
                  <span className="skill-icon-wrap">
                    <Icon size={18} />
                  </span>
                  <strong>{skill.name}</strong>
                </div>
              </article>
            );
          })}
        </div>
        <div className="linkedin-skills-block">
          <h3>{t.skillLinkedInTitle}</h3>
          <p>{t.skillLinkedInBlurb}</p>
          <div className="linkedin-skill-pills">
            {linkedInHighlightSkills.map((s) => (
              <span key={s.tr}>{lang === "tr" ? s.tr : s.en}</span>
            ))}
          </div>
          <a
            href={person.linkedin}
            target="_blank"
            rel="noreferrer"
            className="cert-linkedin-banner mt-5"
          >
            <Linkedin size={16} />
            LinkedIn
            <ExternalLink size={12} className="opacity-70" aria-hidden />
          </a>
        </div>
      </section>

      <section id="experience" className="experience-section reveal">
        <div>
          <h2 className="section-title-icon">
            <GraduationCap size={20} />
            {t.education}
          </h2>
          <div className="exp-timeline">
            {educationCards.map((card) => (
              <article key={card.id} className="exp-item">
                <span className="exp-dot">
                  <GraduationCap size={14} />
                </span>
                <div className="exp-card">
                  <h3>{lang === "tr" ? card.titleTr : card.titleEn}</h3>
                  <h4>{lang === "tr" ? card.subTr : card.subEn}</h4>
                  <small>{card.period}</small>
                  <p>{lang === "tr" ? card.bodyTr : card.bodyEn}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div>
          <h2 className="section-title-icon">
            <Building2 size={20} />
            {t.work}
          </h2>
          <div className="exp-timeline">
            {workCards.map((card) => (
              <article key={card.id} className="exp-item">
                <span className="exp-dot">
                  <Building2 size={14} />
                </span>
                <div className="exp-card">
                  <h3>{lang === "tr" ? card.titleTr : card.titleEn}</h3>
                  <h4>{card.org}</h4>
                  <small>{lang === "tr" ? card.periodTr : card.periodEn}</small>
                  <ul>
                    {(lang === "tr" ? card.pointsTr : card.pointsEn).map((point) => (
                      <li key={point}>
                        <CheckCircle2 size={14} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="publications" className="publications-section reveal">
        <h2 className="section-title-icon">
          <BookOpen size={20} />
          {t.pubTitle}
        </h2>
        <p className="pub-intro">{t.pubIntro}</p>
        <div className="pub-grid">
          {publications.map((pub) => {
            const img = publicationImageHref(pub);
            const title = lang === "tr" ? pub.titleTr : pub.titleEn;
            const venue = lang === "tr" ? pub.venueTr : pub.venueEn;
            const date = lang === "tr" ? pub.dateTr : pub.dateEn;
            const altPub =
              lang === "tr"
                ? `${title} — akademik yayın görseli`
                : `${title} — academic publication visual`;
            return (
              <article key={pub.id} className="pub-card">
                <div className="pub-card-media">
                  {pub.coverImageUrl ? (
                    <Image
                      src={pub.coverImageUrl}
                      alt={altPub}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 240px"
                    />
                  ) : img ? (
                    <SmartImage
                      src={img}
                      alt={altPub}
                      sizes="(max-width: 640px) 100vw, 240px"
                    />
                  ) : (
                    <div className="pub-fallback" aria-hidden>
                      <BookOpen size={44} strokeWidth={1.2} />
                    </div>
                  )}
                </div>
                <div className="pub-card-body">
                  <h3>{title}</h3>
                  <p className="pub-venue">{venue}</p>
                  <p className="pub-date">{date}</p>
                  <a
                    href={pub.documentUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="pub-open"
                  >
                    <FileText size={16} />
                    {t.showPublication}
                    <ExternalLink size={12} className="opacity-80" aria-hidden />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="certifications" className="certifications-section reveal">
        <h2 className="section-title-icon">
          <Award size={20} />
          {t.certTitle}
        </h2>
        <p className="cert-section-intro">{t.certIntro}</p>
        <a
          href={linkedinCertificationsProfileUrl}
          target="_blank"
          rel="noreferrer"
          className="cert-linkedin-banner"
        >
          <Linkedin size={16} />
          {t.verifyLinkedIn}
          <ExternalLink size={12} className="opacity-70" aria-hidden />
        </a>
        <div className="cert-grid">
          {certificationEntries.map((c) => {
            const thumb = certificationThumbnailHref(c);
            const pdf = certificationPdfHref(c);
            const title = lang === "tr" ? c.nameTr : c.nameEn;
            const issuer = lang === "tr" ? c.issuerTr : c.issuerEn;
            const detail = lang === "tr" ? c.detailTr : c.detailEn;
            const skills = lang === "tr" ? c.skillsTr : c.skillsEn;
            const showLi = c.showLinkedInSectionLink !== false;
            return (
              <article key={c.id} className="cert-card">
                <div className="cert-thumb">
                  {thumb ? (
                    <SmartImage
                      src={thumb}
                      alt={lang === "tr" ? `${title} — sertifika görseli` : `${title} — certificate image`}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="cert-thumb-fallback" aria-hidden>
                      <div className="cert-fallback-visual">
                        <ScrollText className="cert-fallback-scroll" size={44} strokeWidth={1.15} />
                        <span className="cert-fallback-seal">
                          <BadgeCheck size={18} strokeWidth={2.4} aria-hidden />
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="cert-card-body">
                  <h3>{title}</h3>
                  <p className="cert-issuer">{issuer}</p>
                  {c.issued ? (
                    <p className="cert-issued">
                      {t.issuedPrefix}: {c.issued}
                    </p>
                  ) : null}
                  {c.credentialId ? (
                    <p className="cert-issued">ID: {c.credentialId}</p>
                  ) : null}
                  <p className="cert-detail">{detail}</p>
                  <p className="mt-3 font-mono text-[9px] tracking-wider text-zinc-500 uppercase">
                    {t.credSkills}
                  </p>
                  <div className="cert-skills">
                    {skills.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                  <div className="cert-actions">
                    {(c.verifyLinks ?? []).map((vl) => (
                      <a
                        key={vl.href}
                        href={vl.href}
                        target="_blank"
                        rel="noreferrer"
                        className={`cert-action-btn cert-action-btn--${vl.kind}`}
                      >
                        <CertVerifyIcon kind={vl.kind} />
                        {lang === "tr" ? vl.labelTr : vl.labelEn}
                      </a>
                    ))}
                    {showLi ? (
                      <a href={linkedinCertificationsProfileUrl} target="_blank" rel="noreferrer">
                        <Linkedin size={14} />
                        LinkedIn
                      </a>
                    ) : null}
                    {pdf ? (
                      <a href={pdf} target="_blank" rel="noreferrer">
                        <FileText size={14} />
                        {t.openPdf}
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="cta-strip reveal">
        <h2>{t.interested}</h2>
        <p>{t.interestedText}</p>
        <div className="cta-direct-links">
          <a href={`mailto:${person.email}`}>
            <Mail size={16} />
            {person.email}
          </a>
          <a href={person.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a href="https://wa.me/905383940137" target="_blank" rel="noreferrer">
            <WhatsAppIcon size={18} className="text-[#25D366]" />
            WhatsApp
          </a>
        </div>
      </section>

      <section id="contact" className="contact-section reveal">
        <h2>{t.contact}</h2>
        <div className="contact-grid">
          <div className="contact-cards">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="contact-card-link"
            >
              <MapPin size={18} className="shrink-0 text-cyan-300" aria-hidden />
              <span className="contact-card-link-text">
                <h3>{lang === "tr" ? "Adres" : "Address"}</h3>
                <p>{personalMeta.address}</p>
              </span>
            </a>
            <a href={`mailto:${person.email}`} className="contact-card-link">
              <Mail size={18} className="shrink-0 text-cyan-300" aria-hidden />
              <span className="contact-card-link-text">
                <h3>Email</h3>
                <p>{person.email}</p>
              </span>
            </a>
            <a
              href={person.linkedin}
              target="_blank"
              rel="noreferrer"
              className="contact-card-link"
            >
              <Linkedin size={18} className="shrink-0 text-cyan-300" aria-hidden />
              <span className="contact-card-link-text">
                <h3>LinkedIn</h3>
                <p className="break-all">{person.linkedin}</p>
              </span>
            </a>
            <a
              href="https://wa.me/905383940137"
              target="_blank"
              rel="noreferrer"
              className="contact-card-link"
            >
              <WhatsAppIcon size={20} className="shrink-0 text-[#25D366]" />
              <span className="contact-card-link-text">
                <h3>WhatsApp</h3>
                <p>+90 538 394 01 37</p>
              </span>
            </a>
          </div>
          <form className="contact-form" onSubmit={onSubmitContact}>
            <input
              type="text"
              placeholder={t.placeholders[0]}
              value={form.firstName}
              onChange={(e) => setForm((prev) => ({ ...prev, firstName: e.target.value }))}
            />
            <input
              type="text"
              placeholder={t.placeholders[1]}
              value={form.lastName}
              onChange={(e) => setForm((prev) => ({ ...prev, lastName: e.target.value }))}
            />
            <input
              type="email"
              placeholder={t.placeholders[2]}
              value={form.email}
              onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
            />
            <textarea
              rows={5}
              placeholder={t.placeholders[3]}
              value={form.message}
              onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
            />
            {formError ? <p className="form-error">{formError}</p> : null}
            <button type="submit">
              <Send size={16} />
              {t.send}
            </button>
            <div className="contact-form-links">
              <a href={`mailto:${person.email}`} aria-label="Email">
                <Mail size={18} />
              </a>
              <a href={person.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://wa.me/905383940137" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <WhatsAppIcon size={20} className="text-[#25D366]" />
              </a>
            </div>
          </form>
        </div>
      </section>

      {showSentModal ? (
        <div
          className="contact-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-sent-title"
        >
          <div className="contact-modal-panel">
            <CheckCircle2 size={40} className="contact-modal-icon" aria-hidden />
            <h3 id="contact-sent-title">{t.messageSentTitle}</h3>
            <p>{t.messageSentBody}</p>
            <button type="button" className="contact-modal-close" onClick={() => setShowSentModal(false)}>
              {t.messageSentClose}
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
