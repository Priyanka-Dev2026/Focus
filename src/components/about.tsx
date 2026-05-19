import Image from "next/image";

export function About() {
  return (
    <section
      aria-labelledby="about-heading"
      className="w-full bg-white px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-12 lg:py-28 xl:px-20 2xl:px-[244px] 2xl:py-[124px]"
    >
      <div className="mx-auto flex max-w-[1432px] flex-col items-center text-center">
        <p
          id="about-heading"
          className="text-[13px] font-normal uppercase tracking-[0.16px] text-black sm:text-[14px] 2xl:text-[16px]"
        >
          About Focus Diagnostics
        </p>

        <blockquote className="mt-6 max-w-[1187px] font-display text-[20px] font-normal leading-[1.28] tracking-[0.02em] text-[#101881] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[34px] 2xl:text-[38px] 2xl:leading-[46px] 2xl:tracking-[0.38px]">
          &ldquo;At Focus Diagnostics, our mission has always been simple&mdash;make
          world-class diagnostic care accessible, accurate, and compassionate.
          Every scan, every report, every patient matters. That&rsquo;s the
          promise we&rsquo;ve upheld for over two decades, and it continues to
          guide us every day.&rdquo;
        </blockquote>

        <div className="relative mt-10 flex h-[90px] w-full items-center justify-center sm:mt-12 sm:h-[110px] 2xl:mt-[44px] 2xl:h-[121px]">
          <Image
            src="/about/signature.svg"
            alt=""
            width={423}
            height={121}
            className="h-auto w-[280px] sm:w-[360px] 2xl:w-[423px]"
          />
          <div className="absolute left-1/2 top-1/2 size-[64px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full ring-4 ring-white sm:size-[72px] 2xl:size-[85px]">
            <Image
              src="/about/avatar.png"
              alt="Dr. Deepak Gupta"
              fill
              sizes="85px"
              className="object-cover"
            />
          </div>
        </div>

        <p className="mt-6 text-[18px] font-normal uppercase tracking-[0.24px] text-black sm:text-[20px] 2xl:text-[24px]">
          Dr. Deepak Gupta
        </p>
        <p className="mt-2 text-[14px] font-normal uppercase tracking-[0.18px] text-black sm:text-[16px] 2xl:text-[18px]">
          (MBBS, MD &ndash; Radiology)
        </p>
      </div>
    </section>
  );
}
