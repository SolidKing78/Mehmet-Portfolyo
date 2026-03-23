# Site Genel Ozeti

Bu dosya, portfolyo sitesinin mevcut yapisini hizlica anlamak icin hazirlandi.

## Ana Amac

- Mehmet Seyrimez'in CAD otomasyonu, SolidWorks API ve AI destekli urun gelistirme tecrubesini net anlatmak
- Is birlikleri icin guclu bir CTA (iletisim) akisi sunmak
- TR/EN dil degisimi ile iki dilde anlik icerik gostermek

## Sayfa Bolumleri

1. `Hero`
   - Kimlik, rol, e-posta, telefon, konum
   - Sosyal aksiyonlar: Mail, Telefon, WhatsApp, LinkedIn
2. `Hakkimda`
   - Kariyer hedefi odakli aciklama
   - AI / Vibe Coding / SolidWorks API etiketleri
3. `Neler Yapiyorum`
   - SolidWorks CAD otomasyonu
   - Urun yazilimlari (CAD/CAM)
   - AI-driven / Vibe coding odakli gelistirme
4. `One Cikan Projeler`
   - Slider yapisi
   - Proje detay sayfasina gecis
5. `Teknik Yetenekler`
   - Sadece ikon + yetenek kartlari
6. `Egitim / Is Deneyimi`
   - Timeline benzeri kart yapisi
7. `CTA + Iletisim`
   - Dogrudan iletisim linkleri
   - Form alanlari ve dogrulama

## Teknik Notlar

- Uygulama: Next.js App Router
- Stil: `globals.css` + Tailwind utility
- Medya kaynagi: `public/Projeler`
- Proje detay verisi: `src/content/projects.ts`
- Proje detay sayfasi: `src/app/projeler/[slug]/page.tsx`

