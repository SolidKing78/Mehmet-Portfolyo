# Iletisim ve Form Notlari

Bu dosya iletisim bolumunun amacini ve en saglikli form mimarisini ozetler.

## Mevcut Durum

- Form su an `mailto:` ile calisiyor
- Avantaj: Hemen calisir, backend gerekmez
- Dezavantaj: Kullanici mail uygulamasina bagimli, kayit tutmaz

## Onerilen Uretim Mimari

En mantikli yapi:

1. `POST /api/contact` endpoint
2. Sunucu tarafinda dogrulama
3. Mail gonderimi (Resend / SendGrid / Postmark)
4. Ayni anda DB yedegi (Supabase / Neon / Vercel Postgres)

## Neden Bu Yapi?

- Mesajlar kaybolmaz (mail + db)
- Yonetilebilir raporlama saglar
- Spam ve guvenlik kontrolleri eklenebilir
- Gelecekte CRM veya panel entegrasyonu kolaylasir

## Ek Guvenlik Onerileri

- Rate limiting
- Honeypot alan
- Basit captcha
- Sunucuda e-posta format/doluluk kontrolu

## Hedef Kullanici Akisi

1. Kullanici formu doldurur
2. Sunucu dogrular
3. Mesaj DB'ye yazilir
4. Mehmet'e bildirim maili gider
5. Kullaniciya basari mesaji doner

