import { projeler } from "@/lib/paths";

export type PublicationEntry = {
  id: string;
  titleTr: string;
  titleEn: string;
  venueTr: string;
  venueEn: string;
  dateTr: string;
  dateEn: string;
  /** Tam metin / özet PDF (Drive vb.) */
  documentUrl: string;
  imageSegments?: string[];
};

export const publications: PublicationEntry[] = [
  {
    id: "gedik-kongre-otonom-sualti",
    titleTr: "Otonom Sualtı Kaynağı ve Sualtı Kaynak Muayene Aracı",
    titleEn: "Autonomous Underwater Welding and Underwater Welding Inspection Vehicle",
    venueTr:
      "Gedik Üniversitesi 1. Disiplinlerarası Yaklaşımlar Ulusal Kongresi",
    venueEn:
      "Gedik University 1st National Congress on Interdisciplinary Approaches",
    dateTr: "16 Mayıs 2022",
    dateEn: "May 16, 2022",
    documentUrl:
      "https://drive.google.com/file/d/1Ph4NBWWsnj4WsJlJu4AP3DIyBzfBXThi/view",
    imageSegments: ["Yayinlar", "otonom-sualti-kongre.png"],
  },
];

export function publicationImageHref(entry: PublicationEntry): string | undefined {
  if (!entry.imageSegments?.length) return undefined;
  return projeler(...entry.imageSegments);
}
