"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import {
  Bot,
  Braces,
  Building2,
  CheckCircle2,
  Code2,
  Download,
  DraftingCompass,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  PencilRuler,
  Phone,
  Send,
  Sparkles,
  Wrench,
} from "lucide-react";
import { person } from "@/content/site";
import { projeler } from "@/lib/paths";
import { SmartImage } from "@/components/ui/SmartMedia";
import { projectDetails } from "@/content/projects";

type Lang = "tr" | "en";

const dictionary = {
  tr: {
    nav: ["Anasayfa", "Hakkımda", "Yetenekler", "Deneyim", "İletişim"],
    heroBadge: "Özgeçmiş / CV",
    hello: "Merhaba Ben",
    role: "AI Destekli Yazılım Geliştirme & Vibe Coding",
    location: "Pendik, İstanbul, Türkiye",
    aboutTitle: "Hakkımda",
    aboutText:
      "CAD yazılımları konusunda teknik destek ve eğitim sağlamak, mühendislik ekiplerine ve üretim süreçlerine yönelik çözümler sunarak sektörde uzmanlaşmak istiyorum. Özellikle otomotiv, savunma sanayi ve endüstriyel üretim alanlarında SolidWorks ve otomasyon yazılımları ile verimliliği artıran, tasarım sürecini hızlandıran çözümler üretmeyi ve bu alanda teknik liderlik geliştirmeyi hedefliyorum.",
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
    skillTitleA: "Teknik Yetenekler",
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
  },
  en: {
    nav: ["Home", "About", "Skills", "Experience", "Contact"],
    heroBadge: "Resume / CV",
    hello: "Hello I'm",
    role: "AI-Assisted Software Development & Vibe Coding",
    location: "Pendik, Istanbul, Turkey",
    aboutTitle: "About Me",
    aboutText:
      "I aim to specialize in CAD software by providing technical support and training while delivering practical solutions for engineering teams and manufacturing workflows. Especially in automotive, defense, and industrial production, I focus on accelerating design cycles and improving efficiency with SolidWorks and automation-driven systems.",
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
    skillTitleA: "Technical Skills",
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
  },
} as const;

const sectionAnchors = ["#home", "#about", "#skills", "#experience", "#contact"];

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
    title: "Gedik Üniversitesi",
    sub: "Makine Programı",
    period: "2020-2023",
    bodyTr:
      "Meslek yüksekokulu düzeyinde makina üretim yaklaşımı, çizim ve uygulama odaklı eğitim.",
    bodyEn:
      "Associate-level mechanical engineering education focused on production, drafting, and practical workflow.",
  },
  {
    title: "Gedik Mesleki ve Teknik Anadolu Lisesi",
    sub: "Çelik Konstrüksiyon ve Kaynak",
    period: "2014-2018",
    bodyTr: "Çelik konstrüksiyon, kaynak ve uygulama odaklı üretim disiplini.",
    bodyEn: "Production-oriented discipline in steel construction and welding practice.",
  },
];

const workCards = [
  {
    title: "AI destekli CAD ürün geliştirme",
    org: "ZMT Prefabrik ve Hafif Çelik A.Ş.",
    period: "2025-Günümüz",
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
    title: "ARGE Teknik Tasarım Uzmanı",
    org: "Gencer Otomotiv",
    period: "2022-2025",
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
    title: "ARGE Makine Tasarım / Üretim",
    org: "Gedik Holding",
    period: "2018-2022",
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
    title: "Stajyer",
    org: "Gedik Holding",
    period: "2017-2018",
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

const introVariants = [
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
];

function IntroOverlay({ hidden }: { hidden: boolean }) {
  const [variant, setVariant] = useState("intro-v1");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const index = Math.floor(Math.random() * introVariants.length);
      setVariant(introVariants[index] ?? "intro-v1");
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className={`intro-overlay ${variant}${hidden ? " intro-overlay-hidden" : ""}`}>
      <div className="intro-gradient" />
      <div className="intro-wave intro-wave-a" />
      <div className="intro-wave intro-wave-b" />
      <div className="intro-noise" />
      <p className="intro-name">Mehmet Seyrimez</p>
      <div className="intro-shutter intro-shutter-top" />
      <div className="intro-shutter intro-shutter-bottom" />
    </div>
  );
}

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("tr");
  const [showIntro, setShowIntro] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [activeFeatured, setActiveFeatured] = useState(0);
  const [sliderCycle, setSliderCycle] = useState(0);
  const [formError, setFormError] = useState("");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const t = useMemo(() => dictionary[lang], [lang]);
  const sliderLockRef = useRef(false);
  const SLIDE_MS = 8200;

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

    const introTimer = window.setTimeout(() => setShowIntro(false), 2100);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.18 },
    );

    document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));

    return () => {
      media.removeEventListener("change", onUpdate);
      observer.disconnect();
      window.clearTimeout(introTimer);
    };
  }, []);

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

  const onSubmitMail = (event: FormEvent<HTMLFormElement>) => {
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

    const subject = encodeURIComponent(
      `[Website Contact] ${form.firstName} ${form.lastName} - ${form.email}`,
    );
    const body = encodeURIComponent(
      `${lang === "tr" ? "İsim" : "Name"}: ${form.firstName} ${form.lastName}\nEmail: ${
        form.email
      }\n\n${form.message}`,
    );
    window.location.href = `mailto:mehmetseyrimez@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className={`portfolio-root${isMobile ? " mobile-mode" : ""}`}>
      <IntroOverlay hidden={!showIntro} />

      <header className="site-header">
        <div className="brand-pill">{t.heroBadge}</div>
        <button
          className="mobile-menu-btn"
          onClick={() => setOpenMenu((v) => !v)}
          aria-label="Toggle menu"
        >
          <Menu size={18} />
        </button>
        <nav className={`top-nav${isMobile && !openMenu ? " top-nav-hidden" : ""}`}>
          {sectionAnchors.map((href, idx) => (
            <a key={href} href={href}>
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
      </header>

      <section id="home" className="hero-section reveal is-visible">
        <div className="hero-bg">
          <SmartImage
            src={projeler("1000032332_890c8c34641268895aacba6ef3c538aa-30.04.2023 07_47_02.jpg")}
            alt="Hero background"
            className="hero-bg-image"
          />
        </div>
        <div className="hero-overlay" />
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
              <MessageCircle size={20} />
            </a>
            <a href={person.linkedin} target="_blank" rel="noreferrer" aria-label="Linkedin">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        <div className="hero-right">
          <div className="profile-ring">
            <SmartImage src={projeler("MEHMET_SEYRİMEZ.jpg")} alt="Mehmet Seyrimez profile" />
          </div>
        </div>
      </section>

      <section id="about" className="about-section reveal">
        <div className="about-image">
          <SmartImage
            src={projeler("İnsansız Hava Aracı", "_DSC1307.NEF.jpg")}
            alt="About visual"
          />
        </div>
        <div className="about-content">
          <h2>{t.aboutTitle}</h2>
          <p>{t.aboutText}</p>
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
              src={activeProject.heroMedia.poster ?? activeProject.heroMedia.src}
              alt={activeProject.titleTr}
            />
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
      </section>

      <section id="experience" className="experience-section reveal">
        <div>
          <h2 className="section-title-icon">
            <GraduationCap size={20} />
            {t.education}
          </h2>
          <div className="exp-timeline">
            {educationCards.map((card) => (
              <article key={card.title} className="exp-item">
                <span className="exp-dot">
                  <GraduationCap size={14} />
                </span>
                <div className="exp-card">
                  <h3>{card.title}</h3>
                  <h4>{card.sub}</h4>
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
              <article key={card.title} className="exp-item">
                <span className="exp-dot">
                  <Building2 size={14} />
                </span>
                <div className="exp-card">
                  <h3>{card.title}</h3>
                  <h4>{card.org}</h4>
                  <small>{card.period}</small>
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
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </div>
      </section>

      <section id="contact" className="contact-section reveal">
        <h2>{t.contact}</h2>
        <div className="contact-grid">
          <div className="contact-cards">
            <article>
              <MapPin size={18} />
              <h3>{lang === "tr" ? "Adres" : "Address"}</h3>
              <p>{t.location}</p>
            </article>
            <article>
              <Mail size={18} />
              <h3>Email</h3>
              <p>{person.email}</p>
            </article>
            <article>
              <Linkedin size={18} />
              <h3>LinkedIn</h3>
              <p>{person.linkedin}</p>
            </article>
            <article>
              <MessageCircle size={18} />
              <h3>WhatsApp</h3>
              <p>+90 538 394 01 37</p>
            </article>
          </div>
          <form className="contact-form" onSubmit={onSubmitMail}>
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
                <MessageCircle size={18} />
              </a>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
