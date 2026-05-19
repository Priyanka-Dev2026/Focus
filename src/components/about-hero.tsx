import { PageHero } from "@/components/page-hero";

export function AboutHero() {
  return (
    <PageHero
      eyebrow="About Focus Diagnostics"
      title="Solving the world's toughest medical problems"
      bgSrc="/about-hero/bg.png"
      overlayStyle={{
        backgroundImage:
          "linear-gradient(240.18deg, rgba(0,0,0,0) 0%, rgba(56,63,151,0.46) 99.454%), linear-gradient(90deg, rgba(0,0,0,0.39) 0%, rgba(0,0,0,0.39) 100%)",
      }}
    />
  );
}
