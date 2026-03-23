export type Locale = "tr" | "en";

export type MediaItem = {
  src: string;
  alt: string;
  kind: "image" | "video";
  poster?: string;
  caption?: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  tagline: string;
  problem: string;
  context: string;
  role: string;
  technologies: string[];
  process: string[];
  impact: string[];
  strategic: string;
  media: MediaItem[];
};

export type TimelineEntry = {
  id: string;
  period: string;
  title: string;
  org: string;
  summary: string;
  focus: string[];
};

export type CapabilityGroup = {
  id: string;
  title: string;
  items: string[];
};

export type Credential = {
  label: string;
  detail: string;
};

export type ProofChip = {
  label: string;
};
