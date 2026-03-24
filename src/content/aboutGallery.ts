import { projeler } from "@/lib/paths";

/** Hakkımda görsel slaytı — süre ms; öne çıkanlar daha uzun ve sırada önce gelir. */
export type AboutGallerySlide = {
  id: string;
  /** public/Projeler altı yolu parçaları */
  segments: string[];
  dwellMs: number;
};

const İHA = "İnsansız Hava Aracı";

export const aboutGallerySlides: AboutGallerySlide[] = [
  { id: "dsc-1307", segments: [İHA, "_DSC1307.NEF.jpg"], dwellMs: 7800 },
  { id: "dsc-1319", segments: [İHA, "_DSC1319.NEF.jpg"], dwellMs: 7800 },
  { id: "dsc-1309", segments: [İHA, "_DSC1309-1.NEF.jpg"], dwellMs: 4800 },
  { id: "dsc-1324", segments: [İHA, "_DSC1324.NEF (1).jpg"], dwellMs: 4800 },
  { id: "img-6016a", segments: [İHA, "IMG-6016 (1).JPG"], dwellMs: 4800 },
  { id: "img-6016", segments: [İHA, "IMG-6016.jpg"], dwellMs: 4800 },
  {
    id: "hero-scene",
    segments: ["1000032332_890c8c34641268895aacba6ef3c538aa-30.04.2023 07_47_02.jpg"],
    dwellMs: 4800,
  },
];

export function aboutSlideHref(slide: AboutGallerySlide): string {
  return projeler(...slide.segments);
}
