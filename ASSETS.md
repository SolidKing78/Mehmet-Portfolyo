# Medya yerleşimi

Site, statik dosyaları yalnızca **`public/`** altından sunar. Görseller ve videolar **`public/Projeler/`** yapısından okunur (kökteki `Projeler/` klasörünü güncellediğinizde aynı içeriği `public/Projeler` ile senkron tutun).

## Önemli dosyalar (mevcut eşleşme)

| Dosya | Kullanım |
|-------|----------|
| `Projeler/MEHMET_SEYRİMEZ.jpg` | Hero portre |
| `Projeler/Güncel CV.pdf` | Kimlik bölümünden indir / aç |
| `Projeler/Solidworks Makro API - Eklenti - ParametriX/*.mp4` | ParametriX / makro videoları |
| `Projeler/İnsansız Hava Aracı/*` | İHA / AmphiDrone görselleri |
| `Projeler/OTONOM SUALTI KAYNAĞI VE SUALTI/*` | Sualtı kaynak / muayene görselleri |
| `Projeler/1000032332_...jpg` | Sahne fotoğrafı |
| `Projeler/image.png` | CAD / yazılım görseli, video poster |

**Not:** `20250722.mp4` (~173 MB) GitHub limitini aşar; sitede kullanılmıyor. İsterseniz YouTube / Vimeo veya küçültülmüş bir kopya ekleyin.

## Senkron

PowerShell örneği (büyük dosyayı hariç tutarak):

`robocopy ".\Projeler" ".\public\Projeler" /E /XF "20250722.mp4"`

Yol ve dosya adlarını değiştirirseniz `src/content/site.ts` ve `src/lib/paths.ts` kullanımını güncelleyin.

## İçerik

Kurum adları ve kesin tarihler: `site.ts` içindeki `timeline` ile **Güncel CV.pdf** uyumlu olmalıdır.
