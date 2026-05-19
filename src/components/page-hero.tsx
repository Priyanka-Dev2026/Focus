import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  bgSrc: string;
  /** Gradient overlay applied above the image. Override per-page if needed. */
  overlayStyle?: React.CSSProperties;
};

const DEFAULT_OVERLAY: React.CSSProperties = {
  backgroundImage:
    "linear-gradient(240.18deg, rgba(0,0,0,0) 0%, rgba(56,63,151,0.5) 99.454%), linear-gradient(90deg, rgba(0,0,0,0.32) 0%, rgba(0,0,0,0.32) 100%)",
};

export function PageHero({
  eyebrow,
  title,
  bgSrc,
  overlayStyle = DEFAULT_OVERLAY,
}: PageHeroProps) {
  return (
    <section className="relative w-full overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src={bgSrc}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0" style={overlayStyle} />
      </div>

      <div className="relative mx-auto w-full max-w-[1920px] px-4 py-24 sm:px-6 sm:py-28 md:px-10 md:py-32 lg:px-12 lg:py-36 xl:px-20 xl:py-44 2xl:px-[244px] 2xl:pt-[296px] 2xl:pb-[180px]">
        <p className="text-[13px] font-normal uppercase leading-none tracking-[0.16px] text-white sm:text-[14px] 2xl:text-[16px]">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-[823px] font-display text-[32px] font-medium leading-[1.1] tracking-[0.04em] text-white sm:text-[40px] md:text-[48px] lg:text-[52px] xl:text-[56px] 2xl:mt-[20px] 2xl:text-[58px] 2xl:leading-[62.72px] 2xl:tracking-[0.58px]">
          {title}
        </h1>
      </div>
    </section>
  );
}
