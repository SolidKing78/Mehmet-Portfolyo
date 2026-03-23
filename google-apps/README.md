# Google Apps Script — İletişim formu → E-Tablolar

## Özet

Sitedeki iletişim formu, `NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL` adresine JSON POST atar. Bu script satırı E-Tabloya ekler.

## Adımlar

1. [Google Sheets](https://sheets.google.com) üzerinde yeni bir e-tablo oluşturun.
2. URL’den **Tablo kimliğini** kopyalayın:  
   `https://docs.google.com/spreadsheets/d/`**`BURASI_ID`**`/edit`
3. [script.google.com](https://script.google.com) → **Yeni proje** → `Code.gs` içeriğini bu klasördeki `Code.gs` ile değiştirin.
4. `SHEET_ID` sabitini yapıştırdığınız kimlik ile doldurun.
5. Üst menü **Dağıt** → **Yeni dağıtım** → Tür: **Web uygulaması**
   - Açıklama: örn. `contact-v1`
   - **Çalıştır:** Benim adıma
   - **Erişimi olanlar:** Herkes (anonim kullanıcıdan form gelmesi için genelde gerekir)
6. **Dağıt** → çıkan **Web uygulaması URL**’sini kopyalayın.
7. Proje kökünde `.env.local` oluşturun:

```env
NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/AKfycb.../exec
```

8. `npm run dev` / yeniden build ile ortam değişkeninin yüklendiğinden emin olun.

## Güvenlik notları

- URL’yi herkese açtığınızda kötüye kullanım riski vardır; gerekirse Apps Script içinde basit doğrulama / hız sınırı ekleyin.
- Hassas anahtarları asla istemci koduna koymayın; bu örnekte sadece **yayınlanmış web uygulaması URL’si** tarayıcıda kullanılır (normal kullanım).

## Sütunlar

İlk satır başlıkları script ilk çalıştığında oluşturulabilir:

| Zaman | Ad | Soyad | E-posta | Mesaj | Dil |
