"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  number: number;
  suffix: string;
  label: string;
};

const STATS: Stat[] = [
  { number: 23, suffix: "+", label: "Years of experience" },
  { number: 8, suffix: "L", label: "Happy patients" },
  { number: 12, suffix: "L", label: "Accurate tests performed" },
];

export function Impact() {
  return (
    <section
      aria-labelledby="impact-heading"
      className="relative w-full py-16 sm:py-20 md:py-24 lg:py-28 2xl:pt-[201px] 2xl:pb-[80px]"
    >
      <h2 id="impact-heading" className="sr-only">
        Our impact in numbers
      </h2>

      <div className="relative mx-auto grid max-w-[1432px] grid-cols-1 gap-y-12 gap-x-6 px-4 text-center sm:px-6 md:grid-cols-3 md:gap-x-10 md:px-10 lg:gap-x-16 xl:px-20 xl:gap-x-24 2xl:gap-x-[244px] 2xl:px-[244px]">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center gap-3 md:gap-4 2xl:gap-[19px]"
          >
            <p className="font-display text-[52px] font-medium leading-[1.05] tracking-[0.02em] text-[#101881] sm:text-[68px] md:text-[80px] lg:text-[92px] xl:text-[108px] 2xl:text-[120px] 2xl:leading-[130px] 2xl:tracking-[1.2px]">
              <CountUp to={stat.number} suffix={stat.suffix} />
            </p>
            <p className="text-[15px] leading-[1.4] tracking-[-0.02em] text-[#5b62b9] md:text-[17px] xl:text-[20px] 2xl:text-[22px] 2xl:tracking-[-0.44px]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CountUp({
  to,
  suffix,
  duration = 1800,
}: {
  to: number;
  suffix: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setValue(to);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || startedRef.current) return;
        startedRef.current = true;
        obs.disconnect();

        const start = performance.now();
        let raf = 0;
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.round(to * eased));
          if (progress < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);

        return () => cancelAnimationFrame(raf);
      },
      { threshold: 0.4 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} aria-label={`${to}${suffix}`}>
      {value}
      {suffix}
    </span>
  );
}
