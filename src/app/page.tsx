import { About } from "@/components/sections/About";
import { Capabilities } from "@/components/sections/Capabilities";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Contact } from "@/components/sections/Contact";
import { Credentials } from "@/components/sections/Credentials";
import { Hero } from "@/components/sections/Hero";
import { MediaWall } from "@/components/sections/MediaWall";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { Timeline } from "@/components/sections/Timeline";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <CaseStudies />
      <Timeline />
      <Capabilities />
      <MediaWall />
      <About />
      <Credentials />
      <Contact />
    </>
  );
}
