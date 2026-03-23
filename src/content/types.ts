export type MediaItem = {
  src: string;
  alt: string;
  kind: "image" | "video";
  poster?: string;
  caption?: string;
};

/** 1–3: çizgi uzunluğu / vurgu (yüzde değil). */
export type SignalStrength = 1 | 2 | 3;

export type CapabilitySignal = {
  id: string;
  label: string;
  strength: SignalStrength;
  note: string;
};

export type FlagshipProject = {
  slug: string;
  title: string;
  context: string;
  role: string;
  technologies: string[];
  outcome: string;
  media: MediaItem[];
};

export type TimelineEntry = {
  id: string;
  period: string;
  title: string;
  org: string;
  summary: string;
};

export type EducationEntry = {
  institution: string;
  detail: string;
  period: string;
};

export type Certification = {
  name: string;
};

export type RailNavItem = {
  id: string;
  href: string;
  label: string;
};
