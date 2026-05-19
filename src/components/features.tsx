"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Feature = {
  title: string;
  body: string;
  icon: string;
};

const FEATURES: Feature[] = [
  {
    title: "3T MRI",
    body: "Exceptional detail for brain, spine, joints and more.",
    icon: "/features/mri.svg",
  },
  {
    title: "96 Slice CT",
    body: "Rapid full-body scans (trauma, chest, abdomen, angiography) at ultra-low dose.",
    icon: "/features/ct.svg",
  },
  {
    title: "Digital X-Ray",
    body: "High-speed digital X-rays for chest, bones, and all general radiography. Advanced detectors give faster scans, superior image quality, and much lower radiation.",
    icon: "/features/xray.svg",
  },
  {
    title: "Mammography",
    body: "Specializing in children's healthcare, from infancy to adolescence.",
    icon: "/features/mammo.svg",
  },
];

export function Features() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateButtons = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollLeft = 0;
    updateButtons();
    el.addEventListener("scroll", updateButtons, { passive: true });
    window.addEventListener("resize", updateButtons);
    return () => {
      el.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
    };
  }, [updateButtons]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-feature-card]");
    const gap = 24;
    const step = (card?.clientWidth ?? 400) + gap;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section
      aria-labelledby="features-heading"
      className="relative w-full pb-16 pt-8 sm:pb-20 sm:pt-12 md:pb-24 md:pt-16 lg:pb-28 lg:pt-20 2xl:pt-[40px] 2xl:pb-[121px]"
    >
      <div className="mx-auto max-w-[1920px] px-4 sm:px-6 md:px-10 xl:px-20 2xl:px-[256px]">
        <h2
          id="features-heading"
          className="mx-auto max-w-[716px] text-center font-display text-[28px] font-medium leading-[1.15] tracking-[0.02em] text-[#101881] sm:text-[32px] md:text-[38px] lg:text-[42px] xl:text-[44px] 2xl:text-[48px] 2xl:leading-[52px] 2xl:tracking-[0.48px]"
        >
          Compassionate, always-on care for every journey
        </h2>
      </div>

      <div className="mx-auto mt-10 max-w-[1920px] md:mt-12 2xl:mt-[58px]">
        <div
          ref={scrollerRef}
          className="snap-x snap-proximity overflow-x-auto scroll-smooth py-2 scroll-pl-4 scrollbar-none sm:scroll-pl-6 md:scroll-pl-10 xl:scroll-pl-20 2xl:scroll-pl-[256px]"
        >
          <div className="flex w-max gap-4 pl-4 pr-4 sm:pl-6 sm:pr-6 md:gap-5 md:pl-10 md:pr-10 lg:gap-6 xl:pl-20 xl:pr-20 2xl:gap-[24px] 2xl:pl-[256px] 2xl:pr-[60px]">
            {FEATURES.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1920px] px-4 sm:px-6 md:px-10 xl:px-20 2xl:px-[244px]">
        <div className="mt-10 flex items-center justify-center gap-[24px] md:gap-[40px] 2xl:mt-[55px]">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={!canPrev}
            aria-label="Previous features"
            className="inline-flex size-[44px] items-center justify-center rounded-full bg-[#c8c8c8] text-white transition-all duration-200 hover:bg-[#a8a8a8] disabled:cursor-not-allowed disabled:opacity-50 md:size-[56px]"
          >
            <ArrowLeft className="size-5 md:size-6" strokeWidth={2.25} />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={!canNext}
            aria-label="Next features"
            className="inline-flex size-[44px] items-center justify-center rounded-full bg-[#101881] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0b0e6b] hover:shadow-[0_10px_24px_-8px_rgba(16,24,129,0.55)] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 md:size-[56px]"
          >
            <ArrowRight className="size-5 md:size-6" strokeWidth={2.25} />
          </button>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, body, icon }: Feature) {
  return (
    <article
      data-feature-card
      className="group flex h-[340px] w-[260px] shrink-0 snap-start flex-col justify-between rounded-[18px] bg-[#f7f7f7] px-[20px] py-[36px] transition-shadow duration-200 hover:shadow-[0_10px_30px_-12px_rgba(16,24,129,0.18)] sm:w-[290px] md:w-[320px] lg:w-[340px] 2xl:w-[360px]"
    >
      <div className="inline-flex items-start self-start rounded-full bg-[#e6e6e6] p-[7px]">
        <Image src={icon} alt="" width={36} height={36} className="size-[36px]" />
      </div>

      <div className="flex flex-col gap-[6px]">
        <h3 className="font-display text-[22px] font-medium leading-[1.2] tracking-[-0.02em] text-[#101881] md:text-[23px] xl:text-[24px] 2xl:text-[26px] 2xl:tracking-[-0.52px]">
          {title}
        </h3>
        <p className="text-[14px] leading-[1.43] tracking-[-0.01em] text-[#808080] md:text-[15px] xl:text-[15px] 2xl:text-[16px] 2xl:tracking-[-0.32px]">
          {body}
        </p>
      </div>

      <Link
        href="/book"
        className="inline-flex items-center gap-[6px] text-[14px] font-medium leading-[1.5] tracking-[-0.01em] text-[#101881] transition-colors hover:text-[#0b0e6b] 2xl:text-[16px] 2xl:tracking-[-0.32px]"
      >
        Book Consultation
        <ArrowRight
          className="size-4 transition-transform duration-200 group-hover:translate-x-1"
          strokeWidth={2.25}
        />
      </Link>
    </article>
  );
}
