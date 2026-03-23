# İletişim ve form notları

## Mevcut durum

- Form, `NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL` adresine JSON **POST** atar (`mode: "no-cors"` — tarayıcı yanıt gövdesini okuyamaz; başarı varsayılır).
- Başarılı gönderimden sonra kullanıcıya sitede **modal (pop-up)** gösterilir.
- URL tanımlı değilse gönder butonu hata metni gösterir (`scriptMissing`).

## Kurulum

1. `google-apps/Code.gs` ve `google-apps/README.md` dosyalarını takip edin.
2. Proje kökünde `.env.local` oluşturup şunu ekleyin:

   ```env
   NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/.../exec
   ```

3. Örnek için `.env.example` dosyasına bakın.

## Google Apps Script tarafı

- `doPost` gelen JSON’u ayrıştırır ve E-Tabloya satır ekler.
- `SHEET_ID` ve isteğe bağlı `SHEET_NAME` script içinde doldurulmalıdır.

## Notlar

- Web uygulaması “Herkes” erişiminde yayınlanmalıdır (anonim form gönderimi için).
- İstemci tarafında spam önleme yok; gerekirse script tarafında ek kontroller eklenebilir.
- Alternatif üretim mimarisi: `POST /api/contact` + Resend/SendGrid + veritabanı (daha güçlü doğrulama ve raporlama).
