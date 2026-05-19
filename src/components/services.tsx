"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

type ServiceCardProps = {
  title: string;
  body: string;
  image: string;
};

const CARDS: ServiceCardProps[] = [
  {
    title: "Pioneering Expertise",
    body: "Led by Chief Radiologist Dr. Deepak Gupta (MBBS, MD – Radio Diagnosis) with 27 years of experience, our team brings unparalleled skill set and personal attention to every exam.",
    image: "/services/pioneering-v2.png",
  },
  {
    title: "Advanced Technology",
    body: "Latest-generation imaging equipment — high-field MRI, digital mammography, whole-body DEXA, and digital X-rays — delivering precise, low-radiation results.",
    image: "/services/advanced-v2.png",
  },
  {
    title: "Patient-Centered Care",
    body: "Calm, dignified spaces and walk-through processes designed around patients, not paperwork. Reports are explained, not just delivered.",
    image: "/services/patient-v2.png",
  },
  {
    title: "Convenience",
    body: "Open 24×7 with same-day report turnarounds where possible, online appointments, and digital report delivery to your phone or doctor.",
    image: "/services/convenience-v2.png",
  },
];

const GRADIENT_STYLE = {
  backgroundImage:
    "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(16,24,129,0.5) 75.797%), linear-gradient(90deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 100%)",
};

export function Services() {
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
    const card = el.querySelector<HTMLElement>("[data-service-card]");
    const gap = 34;
    const step = (card?.clientWidth ?? 400) + gap;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section
      aria-labelledby="services-heading"
      className="w-full overflow-hidden bg-[#f2f2f2] py-16 sm:py-20 md:py-24 lg:py-28 2xl:py-[137px] 2xl:pb-[121px]"
    >
      <div className="mx-auto max-w-[1920px] px-4 sm:px-6 md:px-10 xl:px-20 2xl:px-[244px]">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-x-[221px]">
          <h2
            id="services-heading"
            className="max-w-[600px] font-display text-[24px] font-medium leading-[1.2] tracking-[0.02em] text-[#101881] sm:text-[28px] md:text-[32px] lg:text-[34px] xl:text-[36px] 2xl:text-[38px] 2xl:leading-[46px] 2xl:tracking-[0.38px]"
          >
            Our welcoming environment, transparent pricing, and expert team
          </h2>
          <p className="max-w-[651px] text-[16px] font-normal leading-[1.5] tracking-[0.2px] text-[#101881] md:text-[18px] xl:text-[19px] 2xl:text-[20px]">
            In our 23+ years (established 2003), over 8 lakh patients have
            relied on us for accurate diagnosis and more than 12 lakh tests
            have been performed under one roof. Our comfortable,
            patient-friendly environment and transparent pricing ensures you
            get premium care with complete peace of mind.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-[1920px] md:mt-14 2xl:mt-[90px]">
        <div
          ref={scrollerRef}
          className="snap-x snap-proximity overflow-x-auto scroll-smooth py-2 scroll-pl-4 scrollbar-none sm:scroll-pl-6 md:scroll-pl-10 xl:scroll-pl-20 2xl:scroll-pl-[244px]"
        >
          <div className="flex w-max gap-4 pl-4 pr-4 sm:pl-6 sm:pr-6 md:gap-6 md:pl-10 md:pr-10 lg:gap-7 xl:pl-20 xl:pr-20 2xl:gap-[34px] 2xl:pl-[244px] 2xl:pr-[60px]">
            {CARDS.map((card) => (
              <ServiceCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1920px] px-4 sm:px-6 md:px-10 xl:px-20 2xl:px-[244px]">
        <div className="mt-8 flex items-center justify-center gap-[24px] md:mt-10 md:gap-[40px] 2xl:mt-[64px]">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={!canPrev}
            aria-label="Previous services"
            className="inline-flex size-[44px] items-center justify-center rounded-full bg-[#c8c8c8] text-white transition-all duration-200 hover:bg-[#a8a8a8] disabled:cursor-not-allowed disabled:opacity-50 md:size-[56px]"
          >
            <ArrowLeft className="size-5 md:size-6" strokeWidth={2.25} />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={!canNext}
            aria-label="Next services"
            className="inline-flex size-[44px] items-center justify-center rounded-full bg-[#101881] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0b0e6b] hover:shadow-[0_10px_24px_-8px_rgba(16,24,129,0.55)] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 md:size-[56px]"
          >
            <ArrowRight className="size-5 md:size-6" strokeWidth={2.25} />
          </button>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, body, image }: ServiceCardProps) {
  return (
    <article
      data-service-card
      tabIndex={0}
      className="group relative h-[340px] w-[280px] shrink-0 cursor-pointer snap-start overflow-hidden rounded-[20px] shadow-[5px_2px_13px_0_rgba(0,0,0,0.05)] outline-none ring-offset-2 transition-shadow duration-300 hover:shadow-[5px_4px_20px_0_rgba(16,24,129,0.12)] focus-visible:ring-2 focus-visible:ring-[#161ab0] sm:w-[320px] md:h-[345px] md:w-[360px] lg:w-[400px] 2xl:w-[435px]"
    >
      <div className="absolute inset-0 transition-opacity duration-300 ease-out group-hover:opacity-0 group-focus:opacity-0">
        <Image
          src={image}
          alt=""
          fill
          sizes="(max-width: 768px) 320px, (max-width: 1280px) 400px, 435px"
          className="scale-[1.08] object-cover"
        />
        <div className="absolute inset-0" style={GRADIENT_STYLE} />
        <h3 className="absolute right-[30px] bottom-[30px] left-[30px] flex items-end justify-between gap-3 font-display text-[22px] font-medium leading-[1.2] tracking-[-0.02em] text-white md:text-[26px] xl:text-[28px] 2xl:text-[32px] 2xl:tracking-[-0.64px]">
          <span>{title}</span>
          <ArrowUpRight
            aria-hidden
            className="size-6 shrink-0 text-white lg:hidden"
            strokeWidth={2.25}
          />
        </h3>
      </div>

      <div className="absolute inset-0 flex flex-col bg-[#f7f7f7] p-[30px] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-focus:opacity-100">
        <h3 className="font-display text-[22px] font-medium leading-[1.2] tracking-[-0.02em] text-[#101881] md:text-[26px] xl:text-[28px] 2xl:text-[32px] 2xl:tracking-[-0.64px]">
          {title}
        </h3>
        <p className="mt-4 text-[14px] leading-[1.46] tracking-[-0.01em] text-[#808080] md:text-[15px] xl:text-[17px] 2xl:text-[20px] 2xl:tracking-[-0.4px]">
          {body}
        </p>
      </div>
    </article>
  );
}
