# Medya yerleşimi (PROJELER → `public/media`)

CV ve **PROJELER** klasörünüzdeki dosyaları aşağıdaki yapıya kopyalayın; gerekirse dosya adlarını eşleştirip `src/content/site.ts` içindeki `src` yollarını güncelleyin.

## Portre

| Hedef yol | Kullanıldığı bölüm |
|-----------|-------------------|
| `public/media/portrait/hero.jpg` | Hero sağ sütun |
| `public/media/portrait/editorial.jpg` | Medya duvarı (üst sıra) |

## Proje klasörleri (vaka çalışmaları + medya duvarı)

| Klasör | İçerik önerisi |
|--------|----------------|
| `public/media/projeler/prefab-cad-cam/` | Prefabrik / hafif çelik CAD–CAM arayüz, çıktı, `hero.jpg`, isteğe bağlı `demo.mp4` + `demo-poster.jpg` |
| `public/media/projeler/solidworks-automation/` | SolidWorks otomasyon ekranları, `hero.jpg` |
| `public/media/projeler/parametrix/` | 2D→3D / ParametriX, `hero.jpg`, isteğe bağlı `demo.mp4` + `demo-poster.jpg` |
| `public/media/projeler/uav/` | İHA / robotik görselleri, `hero.jpg` |
| `public/media/projeler/talks/` | Konferans / sahne fotoğrafları, `stage.jpg` |

## Dosya adıyla projeye atlama (sizin tarafınızda)

1. PROJELER içindeki dosyaları konuya göre gruplayın (prefab, SolidWorks, İHA, konuşma vb.).
2. Yukarıdaki klasörlere kopyalayın ve `site.ts` → `caseStudies[].media[].src` değerlerini gerçek dosya adlarıyla eşleştirin.
3. Videolar için `kind: "video"` ve `poster` ile ilk kare veya statik görsel verin (performans ve güven).

## İçerik doğruluğu

- Şirket adları, tarihler, eğitim ve sertifikalar: `src/content/site.ts` içindeki `timeline`, `credentials` ve `person` alanlarını CV ile birebir güncelleyin.
- Ölçülebilir iddia (yüzde, saat tasarrufu) yalnızca doğrulanabilirse ekleyin; şu an metinler niteliksel tutulmuştur.
