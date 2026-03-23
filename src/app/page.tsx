import { IdentityAside } from "@/components/identity/IdentityAside";
import { SideRail } from "@/components/layout/SideRail";
import { CapabilitySignals } from "@/components/sections/CapabilitySignals";
import { ContactClose } from "@/components/sections/ContactClose";
import { EditorialIntro } from "@/components/sections/EditorialIntro";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { FeaturedFlagships } from "@/components/sections/FeaturedFlagships";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <SideRail />
      <div className="lg:pl-[46px]">
        <div className="mx-auto max-w-[1180px] px-5 pb-8 pt-6 sm:px-8 sm:pt-10 lg:px-10">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-12 xl:gap-14">
            {/* left: identity */}
            <div className="lg:w-[min(100%,360px)] lg:shrink-0 xl:w-[380px]">
              <IdentityAside />
            </div>
            {/* right: content */}
            <div className="min-w-0 flex-1 space-y-24 sm:space-y-28 lg:space-y-32 lg:pt-0">
              <EditorialIntro />
              <CapabilitySignals />
              <FeaturedFlagships />
              <ExperienceSection />
              <ContactClose />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
