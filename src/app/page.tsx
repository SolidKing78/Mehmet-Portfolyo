"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Download, Linkedin, Mail, MapPin, Menu, Phone } from "lucide-react";
import { person } from "@/content/site";
import { projeler } from "@/lib/paths";
import { SmartImage } from "@/components/ui/SmartMedia";

type Lang = "tr" | "en";

const dictionary = {
  tr: {
    nav: ["Anasayfa", "Hakkımda", "Yetenekler", "Deneyim", "Portföy", "İletişim"],
    heroBadge: "RESUME",
    hello: "Merhaba Ben",
    role: "Mühendislik Yazılımı Geliştirici",
    location: "Pendik, İstanbul, Türkiye",
    aboutTitle: "Hakkımda",
    aboutText:
      "AI destekli yürütümle, üretime yakın CAD/CAM ve SolidWorks otomasyon ürünleri geliştiriyorum. Hedefim sahadaki tekrar eden mühendislik işlerini hızlandırmak, hata riskini azaltmak ve ekiplerin karar alma hızını artırmak.",
    aboutTags: ["SolidWorks API", "C#", ".NET", "C++", "CAD/CAM", "AI Workflow"],
    cv: "CV İndir",
    whatIDo: "Neler Yapıyorum",
    services: [
      {
        title: "CAD Otomasyonu",
        text: "Parametrik montaj, teknik resim ve üretim çıktısını tek akışta üreten çözümler.",
      },
      {
        title: "Üretim Yazılımları",
        text: "Prefabrik/hafif çelik hatları için roll-form uyumlu CAD/CAM yazılım mimarisi.",
      },
      {
        title: "Ürün Geliştirme",
        text: "Pilot, ölçüm, sürümleme ve geri bildirimle ölçeklenebilir mühendislik ürünleri.",
      },
    ],
    featured: "Öne Çıkan Proje",
    featuredTitle: "Prefabrik & Hafif Çelik CAD/CAM Platformu",
    featuredDesc:
      "C++ çekirdeği üzerinde çalışan bu sistem; model oluşturma, üretim verisi, hata kontrolü ve lisans katmanını tek üründe toplar. Eski sisteme göre üretim hazırlığında belirgin hız artışı sağlandı.",
    featuredCta: "Detayları Gör",
    skillTitleA: "Teknik Yetenekler",
    skillTitleB: "Profesyonel Yetenekler",
    education: "Eğitim",
    work: "İş Deneyimi",
    portfolio: "Güncel Portföy",
    interested: "Birlikte Çalışmaya Hazır mısın?",
    interestedText:
      "Kurumsal CAD otomasyonu veya üretim yazılımı yatırımı için teknik yol haritasını birlikte çıkaralım.",
    contact: "İletişim",
    send: "Mesaj Gönder",
    placeholders: ["Adınız", "Soyadınız", "E-posta", "Mesajınız"],
  },
  en: {
    nav: ["Home", "About", "Skills", "Experience", "Portfolio", "Contact"],
    heroBadge: "RESUME",
    hello: "Hello I'm",
    role: "Engineering Software Developer",
    location: "Pendik, Istanbul, Turkey",
    aboutTitle: "About Me",
    aboutText:
      "I build AI-assisted, production-focused CAD/CAM and SolidWorks automation products. My goal is to reduce repetitive engineering workload, lower error risk, and improve decision speed for manufacturing teams.",
    aboutTags: ["SolidWorks API", "C#", ".NET", "C++", "CAD/CAM", "AI Workflow"],
    cv: "Download CV",
    whatIDo: "What I Do",
    services: [
      {
        title: "CAD Automation",
        text: "End-to-end flows for parametric assemblies, technical drawings, and production output.",
      },
      {
        title: "Manufacturing Software",
        text: "Roll-form compatible CAD/CAM product architecture for prefab and light steel lines.",
      },
      {
        title: "Product Development",
        text: "Scalable engineering products through pilot, measurement, release, and feedback loops.",
      },
    ],
    featured: "Featured Project",
    featuredTitle: "Prefab & Light Steel CAD/CAM Platform",
    featuredDesc:
      "Running on a C++ core, this platform unifies model generation, production data, validation checks, and licensing layers. It delivered significant acceleration in pre-production preparation.",
    featuredCta: "View Details",
    skillTitleA: "Technical Skills",
    skillTitleB: "Professional Skills",
    education: "Education",
    work: "Work Experience",
    portfolio: "Recent Portfolio",
    interested: "Interested to Work?",
    interestedText:
      "Let's define the technical roadmap for your enterprise CAD automation or manufacturing software initiative.",
    contact: "Contact Me",
    send: "Send Message",
    placeholders: ["First Name", "Last Name", "Your Email", "Your Message"],
  },
} as const;

const sectionAnchors = ["#home", "#about", "#skills", "#experience", "#portfolio", "#contact"];

const technicalSkills = [
  { name: "SolidWorks API", value: 94 },
  { name: "C# / .NET", value: 92 },
  { name: "C++ CAD/CAM", value: 90 },
  { name: "Automation Architecture", value: 89 },
  { name: "UI / UX", value: 78 },
  { name: "Validation Workflow", value: 91 },
];

const professionalSkills = [
  { nameTr: "İletişim", nameEn: "Communication", value: 95 },
  { nameTr: "Takım Çalışması", nameEn: "Team Work", value: 93 },
  { nameTr: "Proje Yönetimi", nameEn: "Project Management", value: 90 },
  { nameTr: "Yaratıcılık", nameEn: "Creativity", value: 88 },
];

const educationCards = [
  {
    title: "Gedik Üniversitesi",
    sub: "Makine Programı",
    period: "2020-2023",
    bodyTr: "Meslek yüksekokulu düzeyinde makina üretim yaklaşımı, çizim ve uygulama odaklı eğitim.",
    bodyEn: "Associate-level mechanical engineering education focused on production, drafting, and practical workflow.",
  },
  {
    title: "Gedik MTAL",
    sub: "Çelik Konstrüksiyon ve Kaynak",
    period: "2014-2018",
    bodyTr: "Çelik yapı ve kaynak pratiği ile sahaya yönelik teknik zemin oluşturuldu.",
    bodyEn: "Built a hands-on technical foundation in steel construction and welding practice.",
  },
];

const workCards = [
  {
    title: "AI destekli CAD ürün geliştirme",
    org: "ZMT Prefabrik ve Hafif Çelik A.Ş.",
    period: "2025-Günümüz",
    pointsTr: ["Roll-form uyumlu üretim çıktısı", "CAD/CAM çekirdek geliştirme", "Sürüm ve doğrulama yönetimi"],
    pointsEn: ["Roll-form compatible production output", "CAD/CAM core product development", "Release and validation management"],
  },
  {
    title: "ARGE Teknik Tasarım Uzmanı",
    org: "Gencer Otomotiv",
    period: "2022-2025",
    pointsTr: ["SolidWorks API ile otomasyon", "PDF/DWG/DXF çıktı akışı", "Fason üretim koordinasyonu"],
    pointsEn: ["SolidWorks API automation", "PDF/DWG/DXF output pipeline", "Outsource manufacturing coordination"],
  },
];

const portfolioItems = [
  projeler("image.png"),
  projeler("İnsansız Hava Aracı", "AmphiDrone 1.png"),
  projeler("İnsansız Hava Aracı", "AmphiDrone 2.png"),
  projeler("İnsansız Hava Aracı", "AmphiDrone 3.png"),
  projeler("İnsansız Hava Aracı", "AmphiDrone 4.png"),
  projeler("İnsansız Hava Aracı", "IMG-6016.jpg"),
  projeler("OTONOM SUALTI KAYNAĞI VE SUALTI", "Adsz_Proje_10.jpg"),
  projeler("OTONOM SUALTI KAYNAĞI VE SUALTI", "Adsız Proje (10).jpg"),
  projeler("1000032332_890c8c34641268895aacba6ef3c538aa-30.04.2023 07_47_02.jpg"),
];

function IntroOverlay({ hidden }: { hidden: boolean }) {
  return (
    <div className={`intro-overlay${hidden ? " intro-overlay-hidden" : ""}`}>
      <p className="intro-name">Mehmet Seyrimez</p>
      <div className="intro-shutter intro-shutter-top" />
      <div className="intro-shutter intro-shutter-bottom" />
    </div>
  );
}

function CircleSkill({
  label,
  value,
  active,
}: {
  label: string;
  value: number;
  active: boolean;
}) {
  const radius = 46;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (active ? value : 0) / 100 * circumference;

  return (
    <div className="circle-item">
      <svg viewBox="0 0 120 120">
        <circle cx="60" cy="60" r={radius} className="circle-track" />
        <circle
          cx="60"
          cy="60"
          r={radius}
          className="circle-progress"
          style={{ strokeDasharray: circumference, strokeDashoffset: offset }}
        />
      </svg>
      <strong>{value}%</strong>
      <span>{label}</span>
    </div>
  );
}

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("tr");
  const [showIntro, setShowIntro] = useState(true);
  const [barsActive, setBarsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const t = useMemo(() => dictionary[lang], [lang]);

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
          if (entry.target.classList.contains("skills-section") && entry.isIntersecting) {
            setBarsActive(true);
          }
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

  return (
    <div className={`portfolio-root${isMobile ? " mobile-mode" : ""}`}>
      <IntroOverlay hidden={!showIntro} />

      <header className="site-header">
        <div className="brand-pill">{t.heroBadge}</div>
        <button className="mobile-menu-btn" onClick={() => setOpenMenu((v) => !v)} aria-label="Toggle menu">
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
          <SmartImage src={projeler("1000032332_890c8c34641268895aacba6ef3c538aa-30.04.2023 07_47_02.jpg")} alt="Hero background" />
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
              <Mail size={16} />
            </a>
            <a href={`tel:${person.phoneTel}`} aria-label="Phone">
              <Phone size={16} />
            </a>
            <a href={person.linkedin} target="_blank" rel="noreferrer" aria-label="Linkedin">
              <Linkedin size={16} />
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
          <SmartImage src={projeler("İnsansız Hava Aracı", "AmphiDrone 2.png")} alt="About visual" />
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
            <SmartImage src={projeler("image.png")} alt="Featured project" />
          </div>
          <div className="featured-copy">
            <span>CAD/CAM</span>
            <h3>{t.featuredTitle}</h3>
            <p>{t.featuredDesc}</p>
            <Link href="#contact" className="cv-btn">
              {t.featuredCta}
            </Link>
          </div>
        </div>
      </section>

      <section id="skills" className="skills-section reveal">
        <div>
          <h2>{t.skillTitleA}</h2>
          <div className="bars">
            {technicalSkills.map((skill, idx) => (
              <div key={skill.name} className="bar-item">
                <div className="bar-top">
                  <span>{skill.name}</span>
                  <strong>{skill.value}%</strong>
                </div>
                <div className="bar-track">
                  <span
                    className={`bar-fill${barsActive ? " active" : ""}`}
                    style={{
                      width: barsActive ? `${skill.value}%` : "0%",
                      transitionDelay: `${idx * 140}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2>{t.skillTitleB}</h2>
          <div className="circle-grid">
            {professionalSkills.map((item) => (
              <CircleSkill
                key={item.nameEn}
                label={lang === "tr" ? item.nameTr : item.nameEn}
                value={item.value}
                active={barsActive}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="experience-section reveal">
        <div>
          <h2>{t.education}</h2>
          <div className="exp-stack">
            {educationCards.map((card) => (
              <article key={card.title} className="exp-card">
                <h3>{card.title}</h3>
                <h4>{card.sub}</h4>
                <small>{card.period}</small>
                <p>{lang === "tr" ? card.bodyTr : card.bodyEn}</p>
              </article>
            ))}
          </div>
        </div>
        <div>
          <h2>{t.work}</h2>
          <div className="exp-stack">
            {workCards.map((card) => (
              <article key={card.title} className="exp-card">
                <h3>{card.title}</h3>
                <h4>{card.org}</h4>
                <small>{card.period}</small>
                <ul>
                  {(lang === "tr" ? card.pointsTr : card.pointsEn).map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="portfolio-section reveal">
        <h2>{t.portfolio}</h2>
        <div className="masonry-grid">
          {portfolioItems.map((src, idx) => (
            <article key={`${src}-${idx}`} className="masonry-item">
              <SmartImage src={src} alt={`Portfolio ${idx + 1}`} />
            </article>
          ))}
        </div>
      </section>

      <section className="cta-strip reveal">
        <h2>{t.interested}</h2>
        <p>{t.interestedText}</p>
        <a href="#contact" className="cv-btn">
          {lang === "tr" ? "İletişime Geç" : "Contact"}
        </a>
      </section>

      <section id="contact" className="contact-section reveal">
        <h2>{t.contact}</h2>
        <div className="contact-grid">
          <div className="contact-cards">
            <article>
              <h3>{lang === "tr" ? "Adres" : "Address"}</h3>
              <p>{t.location}</p>
            </article>
            <article>
              <h3>Email</h3>
              <p>{person.email}</p>
              <p>{person.email}</p>
            </article>
            <article>
              <h3>LinkedIn</h3>
              <p>{person.linkedin}</p>
            </article>
          </div>
          <form className="contact-form">
            <input type="text" placeholder={t.placeholders[0]} />
            <input type="text" placeholder={t.placeholders[1]} />
            <input type="email" placeholder={t.placeholders[2]} />
            <textarea rows={5} placeholder={t.placeholders[3]} />
            <button type="button">{t.send}</button>
          </form>
        </div>
      </section>
    </div>
  );
}
