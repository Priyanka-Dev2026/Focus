import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { MainServices } from "@/components/main-services";

export const metadata: Metadata = {
  title: "Services — Focus Diagnostics",
  description:
    "Imaging and diagnostic services at Focus Diagnostics — 3T MRI, CT, X-ray, mammography, ultrasound and more.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Solving the world's toughest medical problems"
        bgSrc="/services-page/hero.png"
      />
      <MainServices />
    </>
  );
}
