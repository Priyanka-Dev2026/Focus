import type { Metadata } from "next";
import { AboutHero } from "@/components/about-hero";
import { AboutStory } from "@/components/about-story";

export const metadata: Metadata = {
  title: "About — Focus Diagnostics",
  description:
    "About Focus Diagnostics — Faridabad's leading radiology centre since 2003.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
    </>
  );
}
