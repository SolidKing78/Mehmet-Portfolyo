/** `public/` altındaki yolu güvenli URL’ye çevirir (Türkçe karakter, boşluk). */
export function publicAsset(...segments: string[]): string {
  return "/" + segments.map((s) => encodeURIComponent(s)).join("/");
}

/** Kök `Projeler` klasörü ( `public/Projeler` ) için kısayol. */
export function projeler(...pathWithin: string[]): string {
  return publicAsset("Projeler", ...pathWithin);
}
