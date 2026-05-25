import type { Metadata } from "next";
import { BreadcrumbBar } from "@/components/breadcrumb";
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
      <BreadcrumbBar
        items={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />
      <AboutHero />
      <AboutStory />
    </>
  );
}
