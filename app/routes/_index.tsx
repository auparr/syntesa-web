import type { MetaFunction } from "react-router";
import Hero from "~/components/home/Hero";
import Infrastructure from "~/components/home/Infrastructure";
import InterestGroups from "~/components/home/InterestGroups";
import JoinCard from "~/components/home/JoinCard";
import MarqueeDivider from "~/components/home/MarqueeDivider";
import MissionStatement from "~/components/home/MissionStatement";
import Partners from "~/components/home/Partners";
import Seniors from "~/components/home/Seniors";
import { LineReveal } from "~/components/Reveal";
import {
  getGroupDetails,
  interestGroups,
  labSpecs,
  partnerships,
  seniors,
} from "~/constants/index_contents";
import { SITE_META } from "~/constants/site_meta";
import { socialLinks } from "~/constants/socialLinks";

export const meta: MetaFunction = () => [
  { title: SITE_META.title },
  { name: "description", content: SITE_META.description },
];

export default function Index() {
  return (
    <div className="space-y-2">
      <Hero socialLinks={socialLinks} />
      <Partners partners={partnerships} />
      <div className="max-w-[1920px] mx-auto w-full px-6 sm:px-12">
        <LineReveal />
      </div>
      <MissionStatement />
      <div className="max-w-[1920px] mx-auto w-full px-6 sm:px-12">
        <LineReveal delay={0.1} />
      </div>
      <Infrastructure specs={labSpecs} />
      <div className="max-w-[1920px] mx-auto w-full px-6 sm:px-12">
        <LineReveal delay={0.1} />
      </div>
      <InterestGroups interestGroups={interestGroups} getClubDetails={getGroupDetails} />
      <div className="max-w-[1920px] mx-auto w-full px-6 sm:px-12">
        <LineReveal delay={0.1} />
      </div>
      <Seniors seniors={seniors} />
      <MarqueeDivider />
      <JoinCard />
    </div>
  );
}
