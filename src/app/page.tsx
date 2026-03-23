"use client";

import Link from "next/link";
import { useEffect, useState, type CSSProperties } from "react";
import {
  BriefcaseBusiness,
  Download,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";
import { person } from "@/content/site";
import { projeler } from "@/lib/paths";
import { SmartImage, SmartVideo } from "@/components/ui/SmartMedia";

const skills = [
  { label: "web development", value: 91 },
  { label: "solidworks api", value: 94 },
  { label: "cad/cam systems", value: 96 },
  { label: "ui/ux design", value: 83 },
  { label: "graphic design", value: 86 },
];

const projectShowcase = [
  {
    tag: "01",
    title: "Prefabrik & hafif çelik CAD/CAM platformu",
    text: "ZMT Prefabrik ve Hafif Çelik A.Ş. için geliştirilen C++ tabanlı çekirdek; otomatik modelleme, hata kontrolü, lisanslama ve roll-form uyumlu üretim çıktısını tek akışta birleştirir. AI destekli iterasyonla sürüm döngüsü hızlandırıldı.",
    media: {
      kind: "image" as const,
      src: projeler("image.png"),
      alt: "CAD/CAM platform görseli",
    },
  },
  {
    tag: "02",
    title: "SolidWorks üretim otomasyonu",
    text: "Gencer Otomotiv'de kullanıcı ölçü girdisinden komple montaj, teknik resim ve PDF/DWG/DXF paket çıktısına uzanan tek tuşlu üretim otomasyon hattı. Tekrarlayan modelleme süresi düşürüldü, çıktı standartlığı artırıldı.",
    media: {
      kind: "video" as const,
      src: projeler("Solidworks Makro API - Eklenti - ParametriX", "Makro_Video.mp4"),
      poster: projeler("1000032332_890c8c34641268895aacba6ef3c538aa-30.04.2023 07_47_02.jpg"),
      caption: "SolidWorks Makro Demo",
    },
  },
  {
    tag: "03",
    title: "ParametriX 2B -> 3B dönüştürücü",
    text: "2B girdiyi parametrik kurallarla 3B modele taşıyan dönüşüm sistemi. Kural tabanlı doğrulama katmanı sayesinde manuel düzeltme ihtiyacı azaltıldı ve mühendislik hattı tekrar üretilebilir hale getirildi.",
    media: {
      kind: "video" as const,
      src: projeler(
        "Solidworks Makro API - Eklenti - ParametriX",
        "ParametriX_2D-3D_Converter.mp4",
      ),
      poster: projeler("İnsansız Hava Aracı", "AmphiDrone 1.png"),
      caption: "ParametriX Dönüşüm Akışı",
    },
  },
  {
    tag: "04",
    title: "İnsansız hava aracı prototip çalışmaları",
    text: "Mekanik tasarım ve prototipleme sürecinde çoklu gövde revizyonları, saha testleri ve görsel doğrulama çıktılarını bir araya getiren tasarım koleksiyonu.",
    media: {
      kind: "image" as const,
      src: projeler("İnsansız Hava Aracı", "AmphiDrone 3.png"),
      alt: "İnsansız hava aracı görseli",
    },
  },
  {
    tag: "05",
    title: "Otonom sualtı kaynak ve muayene yaklaşımı",
    text: "Sualtı kaynak/muayene odaklı konsept çalışmalarda sahaya uygun geometri, erişim ve operasyon güvenliği kriterlerini gözeten teknik görsel çalışma seti.",
    media: {
      kind: "image" as const,
      src: projeler("OTONOM SUALTI KAYNAĞI VE SUALTI", "Adsz_Proje_10.jpg"),
      alt: "Sualtı kaynak konsept görseli",
    },
  },
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

function SkillBars({ barsActive }: { barsActive: boolean }) {
  return (
    <section id="uzmanlik" className="resume-panel">
      <div className="resume-panel-head">
        <BriefcaseBusiness size={18} />
        <h2>skills</h2>
      </div>
      <div className="space-y-4">
        {skills.map((skill, i) => (
          <div key={skill.label} className="space-y-1.5">
            <div className="resume-skill-row">
              <span>{skill.label}</span>
              <strong>{skill.value}%</strong>
            </div>
            <div className="resume-skill-track">
              <span
                className={`resume-skill-fill${barsActive ? " is-active" : ""}`}
                style={
                  {
                    "--target": `${skill.value}%`,
                    transitionDelay: `${i * 180}ms`,
                  } as CSSProperties
                }
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function DesktopLayout({ barsActive }: { barsActive: boolean }) {
  return (
    <div className="desktop-canvas">
      <div className="left-rail">
        <span className="left-rail-logo">MS</span>
        <div className="left-rail-icons">
          <a href="#kimlik" aria-label="Kimlik">
            <User size={16} />
          </a>
          <a href="#uzmanlik" aria-label="Uzmanlık">
            <BriefcaseBusiness size={16} />
          </a>
          <a href="#projeler" aria-label="Projeler">
            <MapPin size={16} />
          </a>
          <a href="#iletisim" aria-label="İletişim">
            <Mail size={16} />
          </a>
        </div>
      </div>

      <main className="resume-shell">
        <section id="kimlik" className="identity-column">
          <div className="identity-photo">
            <SmartImage
              src={projeler("MEHMET_SEYRİMEZ.jpg")}
              alt="Mehmet Seyrimez portre"
              priority
            />
          </div>
          <div className="identity-meta">
            <h1>Mehmet Seyrimez</h1>
            <p className="identity-role">Mühendislik Yazılımı Geliştirici</p>
            <div className="identity-links">
              <a href={`mailto:${person.email}`} aria-label="E-posta">
                <Mail size={16} />
              </a>
              <a href={`tel:${person.phoneTel}`} aria-label="Telefon">
                <Phone size={16} />
              </a>
              <a href={person.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </section>

        <section className="content-column">
          <section id="ozet" className="resume-panel">
            <h2 className="resume-title">resume</h2>
            <p className="resume-kpis">
              <span>7+ years in engineering</span>
              <span>3 kurum saha tecrübesi</span>
              <span>SolidWorks + C# + C++</span>
            </p>
            <p className="resume-body">
              Üretim hatlarına yakın mühendislik yazılımı geliştiriyorum. SolidWorks API,
              VBA, .NET ve C# ile parametrik montajdan teknik resme uzanan tek akışlar
              kuruyor; prefabrik ve hafif çelik için C++ tabanlı CAD/CAM platformlarında
              roll-form uyumlu veri üretiyorum.
            </p>
          </section>

          <SkillBars barsActive={barsActive} />

          <section id="projeler" className="resume-panel">
            <div className="resume-panel-head">
              <MapPin size={18} />
              <h2>projeler</h2>
            </div>
            <div className="project-grid">
              {projectShowcase.map((project) => (
                <article key={project.tag} className="project-card">
                  <span className="project-tag">{project.tag}</span>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                  <div className="project-media">
                    {project.media.kind === "video" ? (
                      <SmartVideo
                        src={project.media.src}
                        poster={project.media.poster}
                        caption={project.media.caption}
                      />
                    ) : (
                      <SmartImage src={project.media.src} alt={project.media.alt} />
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="iletisim" className="resume-panel cta-panel">
            <h2>Ciddi projelerde doğrudan iletişim</h2>
            <p>
              CAD otomasyonu, SolidWorks tabanlı üretim araçları ve şirket içi CAD/CAM ürünleri
              için hızlı değerlendirme görüşmesi planlayabiliriz.
            </p>
            <div className="cta-row">
              <a href={`mailto:${person.email}`} className="cta-button">
                <Mail size={16} />
                E-posta ile ulaş
              </a>
              <a href={projeler("Güncel CV.pdf")} className="cta-button cta-button-secondary">
                <Download size={16} />
                Güncel CV indir
              </a>
              <Link
                href={person.linkedin}
                target="_blank"
                rel="noreferrer"
                className="cta-button cta-button-secondary"
              >
                <Linkedin size={16} />
                LinkedIn profili
              </Link>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}

function MobileLayout({ barsActive }: { barsActive: boolean }) {
  return (
    <main className="mobile-shell">
      <section className="mobile-hero" id="kimlik">
        <div className="mobile-photo">
          <SmartImage src={projeler("MEHMET_SEYRİMEZ.jpg")} alt="Mehmet Seyrimez portre" />
        </div>
        <h1>Mehmet Seyrimez</h1>
        <p>{person.roleLine}</p>
      </section>

      <section className="mobile-card" id="ozet">
        <h2>Hızlı Özet</h2>
        <p>
          SolidWorks API ve CAD/CAM ürün geliştirme odağında, üretim hattı gerçeklerine uygun
          yazılım çözümleri geliştiriyorum. Hedefim; daha az manuel iş, daha yüksek doğruluk,
          daha hızlı teslim.
        </p>
      </section>

      <section className="mobile-card">
        <h2>Yetkinlik Düzeyi</h2>
        <SkillBars barsActive={barsActive} />
      </section>

      <section className="mobile-card" id="projeler">
        <h2>Seçili Projeler</h2>
        <div className="project-grid">
          {projectShowcase.map((project) => (
            <article key={project.tag} className="project-card">
              <span className="project-tag">{project.tag}</span>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <div className="project-media">
                {project.media.kind === "video" ? (
                  <SmartVideo
                    src={project.media.src}
                    poster={project.media.poster}
                    caption={project.media.caption}
                  />
                ) : (
                  <SmartImage src={project.media.src} alt={project.media.alt} />
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mobile-card" id="iletisim">
        <h2>İletişim</h2>
        <div className="cta-row">
          <a href={`mailto:${person.email}`} className="cta-button">
            <Mail size={16} />
            E-posta
          </a>
          <a href={projeler("Güncel CV.pdf")} className="cta-button cta-button-secondary">
            <Download size={16} />
            CV
          </a>
          <a href={`tel:${person.phoneTel}`} className="cta-button cta-button-secondary">
            <Phone size={16} />
            Ara
          </a>
        </div>
      </section>
    </main>
  );
}

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(true);
  const [barsActive, setBarsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 960px)");
    const update = () =>
      setIsMobile(
        media.matches ||
          /Android|iPhone|iPad|iPod|Mobile|Opera Mini|IEMobile/i.test(
            window.navigator.userAgent,
          ),
      );
    update();
    media.addEventListener("change", update);
    const hideTimer = window.setTimeout(() => setShowIntro(false), 2000);
    const barsTimer = window.setTimeout(() => setBarsActive(true), 2300);
    return () => {
      media.removeEventListener("change", update);
      window.clearTimeout(hideTimer);
      window.clearTimeout(barsTimer);
    };
  }, []);

  return (
    <div className="site-root">
      <IntroOverlay hidden={!showIntro} />
      {isMobile ? <MobileLayout barsActive={barsActive} /> : <DesktopLayout barsActive={barsActive} />}
    </div>
  );
}
