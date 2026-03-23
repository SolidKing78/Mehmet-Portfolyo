import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { person } from "@/content/site";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-family-body",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-family-display",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-family-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${person.domain}`),
  title: {
    default: `${person.name} — AI-native mühendislik yazılımı · CAD otomasyonu`,
    template: `%s · ${person.name}`,
  },
  description:
    "Mehmet Seyrimez: SolidWorks API, C# / .NET ve üretim süreçlerinde CAD–CAM, prefabrik / hafif çelik yazılımı ve AI destekli ürün geliştirme. Ölçeklenebilir iç araçlar ve otomasyon.",
  keywords: [
    "Mehmet Seyrimez",
    "CAD otomasyonu",
    "SolidWorks API",
    "Manufacturing software",
    "Prefabrik CAD CAM",
    "Hafif çelik yazılımı",
    "C#",
    ".NET",
    "Mühendislik yazılımı",
    "AI destekli geliştirme",
    "Parametrik tasarım otomasyonu",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: `https://${person.domain}`,
    siteName: person.name,
    title: `${person.name} — AI-native mühendislik yazılımı`,
    description:
      "CAD otomasyonu, üretim yazılımı ve SolidWorks ekosisteminde ölçeklenebilir sistemler.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${person.name} — CAD otomasyonu & mühendislik yazılımı`,
    description:
      "Üretim gerçeklerinden ölçeklenebilir yazılım ürünleri. SolidWorks API, C# / .NET.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  url: `https://${person.domain}`,
  email: person.email,
  telephone: person.phoneTel,
  sameAs: [person.linkedin],
  jobTitle: "CAD Automation Engineer",
  knowsAbout: [
    "CAD automation",
    "SolidWorks API",
    "Manufacturing software",
    "C#",
    ".NET",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${jakarta.variable} ${fraunces.variable} ${plexMono.variable}`}
    >
      <body className="min-h-screen font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
