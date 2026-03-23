/**
 * Google Apps Script — Web sitesi iletişim formu → Google E-Tablolar
 *
 * Kurulum:
 * 1) Google Drive’da yeni bir Google E-Tablolar oluşturun.
 * 2) extensions.google.com/apps_script → Yeni proje → bu dosyadaki kodu yapıştırın.
 * 3) SHEET_ID ve (isteğe bağlı) SHEET_NAME değerlerini güncelleyin.
 * 4) Dağıt → Dağıtım oluştur → Tür: Web uygulaması
 *    - Çalıştır: Benim adıma
 *    - Erişen: Herkes (veya test için sadece siz)
 * 5) Web uygulaması URL’sini kopyalayıp projede .env.local içine yazın:
 *    NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/XXXX/exec
 */

/** E-Tablo dosya kimliği (URL’deki /d/ ile /edit arası) */
const SHEET_ID = "BURAYA_E_TABLO_ID_YAPISTIRIN";

/** Mesajların yazılacağı sayfa adı (yoksa oluşturulur) */
const SHEET_NAME = "ContactForm";

/**
 * POST ile gelen JSON: { firstName, lastName, email, message, lang }
 */
function doPost(e) {
  let data = {};
  try {
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    }
  } catch (err) {
    return jsonOut({ ok: false, error: "invalid_json" });
  }

  const firstName = String(data.firstName || "").trim();
  const lastName = String(data.lastName || "").trim();
  const email = String(data.email || "").trim();
  const message = String(data.message || "").trim();
  const lang = String(data.lang || "").trim();

  if (!firstName || !lastName || !email || !message) {
    return jsonOut({ ok: false, error: "missing_fields" });
  }

  try {
    const ss = SpreadsheetApp.openById(SHEET_ID);
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(["Zaman", "Ad", "Soyad", "E-posta", "Mesaj", "Dil"]);
    }
    sheet.appendRow([
      new Date(),
      firstName,
      lastName,
      email,
      message,
      lang,
    ]);
    return jsonOut({ ok: true });
  } catch (err) {
    return jsonOut({ ok: false, error: "sheet_write_failed" });
  }
}

function jsonOut(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  );
}

/** İsteğe bağlı: tarayıcıdan test için GET */
function doGet() {
  return ContentService.createTextOutput(
    JSON.stringify({ ok: true, message: "Contact endpoint is live" }),
  ).setMimeType(ContentService.MimeType.JSON);
}
