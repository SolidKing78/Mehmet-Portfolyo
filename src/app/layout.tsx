import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { person } from "@/content/site";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-family-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-family-display",
  display: "swap",
  style: ["normal", "italic"],
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
    default: `${person.name} — Mühendislik yazılımı · CAD otomasyonu`,
    template: `%s · ${person.name}`,
  },
  description:
    "Mehmet Seyrimez: SolidWorks API, C# / .NET, prefabrik ve hafif çelik için CAD/CAM yazılımı, üretim otomasyonu ve AI destekli mühendislik ürün geliştirme.",
  keywords: [
    "Mehmet Seyrimez",
    "CAD otomasyonu",
    "SolidWorks API",
    "Prefabrik CAD CAM",
    "Mühendislik yazılımı",
    "Gencer Otomotiv",
    "ZMT Prefabrik",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: `https://${person.domain}`,
    siteName: person.name,
    title: `${person.name} — Mühendislik yazılımı & CAD otomasyonu`,
    description:
      "Üretim hatlarına yakın mühendislik yazılımı: SolidWorks API, CAD/CAM ve AI destekli ürün geliştirme.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${person.name} — CAD otomasyonu`,
    description:
      "SolidWorks API, C# / .NET ve prefabrik üretim yazılımı.",
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
  jobTitle: "Engineering Software Developer",
  knowsAbout: [
    "CAD automation",
    "SolidWorks API",
    "Manufacturing software",
    "C#",
    ".NET",
    "C++",
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
      className={`${inter.variable} ${instrumentSerif.variable} ${plexMono.variable}`}
    >
      <body className="min-h-screen font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
