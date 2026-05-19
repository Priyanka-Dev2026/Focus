import Image from "next/image";
import { ChevronDown } from "lucide-react";

const AVATARS = [
  "/hero/avatar-1.png",
  "/hero/avatar-2.png",
  "/hero/avatar-3.png",
  "/hero/avatar-4.png",
  "/hero/avatar-5.png",
] as const;

const FIELD_CLASS =
  "w-full rounded-[5px] border border-[#d2d2d2] bg-[#f6f9ff] p-[12px] text-[15px] leading-[1.5] tracking-[0.24px] text-[#111827] outline-none transition-[border-color,box-shadow] placeholder:text-[#c8c8c8] focus:border-[#161ab0] focus:ring-2 focus:ring-[#161ab0]/20 font-display md:text-[16px]";

const LABEL_CLASS =
  "block font-display text-[13px] leading-[1.5] tracking-[0.21px] text-[#111827] md:text-[14px]";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src="/hero/banner.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(247.97deg, rgba(0,0,0,0) 0%, rgba(56,63,151,0.46) 99.454%), linear-gradient(90deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.25) 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1920px] px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-12 lg:py-[120px] xl:px-20 xl:py-[160px] 2xl:px-[244px] 2xl:pt-[241px] 2xl:pb-[195px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-x-10 xl:gap-x-16 2xl:gap-x-[188px]">
          <div className="flex w-full max-w-[667px] flex-col gap-6 md:gap-7 lg:basis-[667px] lg:gap-8 lg:self-stretch">
            <h1 className="font-display text-[32px] font-medium leading-[1.1] tracking-[0.04em] text-white sm:text-[40px] md:text-[48px] lg:text-[52px] xl:text-[56px] 2xl:text-[58px] 2xl:leading-[62.72px] 2xl:tracking-[0.58px]">
              Faridabad&rsquo;s leading radiology center since 2003,
            </h1>

            <p className="text-[15px] font-semibold leading-relaxed tracking-[0.18px] text-[#ebecff] md:text-[16px] xl:text-[17px] 2xl:text-[18px]">
              Focus Diagnostics blends advanced technology with compassionate
              care. As regional pioneers in MRI, digital mammography, whole-body
              DEXA, and digital X-rays, we&rsquo;ve earned lasting trust. Open
              24&times;7, we provide emergency imaging and aim for same-day
              reports whenever possible.
            </p>

            <button
              type="button"
              className="inline-flex w-fit items-center justify-center rounded-[12px] bg-white px-[24px] py-[14px] text-[14px] font-normal uppercase leading-none tracking-[0.16px] text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-zinc-100 hover:shadow-[0_10px_24px_-8px_rgba(0,0,0,0.35)] active:translate-y-0 active:bg-zinc-200 md:text-[15px] 2xl:text-[16px]"
            >
              Learn more
            </button>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex">
                {AVATARS.map((src, i) => (
                  <div
                    key={src}
                    className={`relative size-[44px] overflow-hidden rounded-full ring-2 ring-white sm:size-[48px] 2xl:size-[51px] ${
                      i === 0 ? "" : "ml-[-12px] sm:ml-[-14px]"
                    }`}
                    style={{ zIndex: AVATARS.length - i }}
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="51px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="inline-flex items-center gap-[10px] rounded-[26px] bg-white p-[6px] pr-[14px] shadow-sm">
                <Image
                  src="/hero/google.svg"
                  alt="Google"
                  width={27}
                  height={27}
                  className="size-[24px] 2xl:size-[27px]"
                />
                <span className="text-[13px] font-medium tracking-[0.14px] text-[#101881] 2xl:text-[14px]">
                  4.5/5 from over 1000 reviews
                </span>
              </div>
            </div>
          </div>

          <div className="w-full rounded-[20px] bg-[#f7faff] p-6 shadow-[0_24px_60px_-20px_rgba(16,24,129,0.25)] sm:p-7 lg:basis-[577px] lg:p-[29px] 2xl:h-[460px]">
            <h2 className="font-display text-[26px] font-medium leading-[1.2] tracking-[0.38px] text-[#101881] sm:text-[30px] lg:text-[32px] xl:text-[36px] 2xl:text-[38px] 2xl:leading-[52px]">
              Book an appoinment
            </h2>
            <p className="mt-2 text-[14px] font-semibold tracking-[0.16px] text-[#30378c] md:text-[15px] 2xl:text-[16px]">
              Your life is waiting. Fast, long-lasting relief is nearby.
            </p>

            <div className="mt-6 grid gap-x-[14px] gap-y-4 sm:grid-cols-2 2xl:mt-[26px]">
              <div>
                <label htmlFor="hero-name" className={LABEL_CLASS}>
                  Full Name
                </label>
                <input
                  id="hero-name"
                  type="text"
                  placeholder="eg: John Doe"
                  className={`mt-2 ${FIELD_CLASS}`}
                />
              </div>

              <div>
                <label htmlFor="hero-dob" className={LABEL_CLASS}>
                  Date of Birth
                </label>
                <div className="relative mt-2">
                  <input
                    id="hero-dob"
                    type="text"
                    placeholder="dd/mm/yy"
                    className={`${FIELD_CLASS} pr-[40px]`}
                  />
                  <ChevronDown
                    aria-hidden
                    className="pointer-events-none absolute right-[12px] top-1/2 size-[22.725px] -translate-y-1/2 text-[#111827]"
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="hero-sex" className={LABEL_CLASS}>
                  Sex
                </label>
                <input
                  id="hero-sex"
                  type="text"
                  placeholder="Male"
                  className={`mt-2 ${FIELD_CLASS}`}
                />
              </div>

              <div>
                <label htmlFor="hero-phone" className={LABEL_CLASS}>
                  Mobile Number
                </label>
                <input
                  id="hero-phone"
                  type="tel"
                  placeholder="+91"
                  className={`mt-2 ${FIELD_CLASS}`}
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center rounded-[12px] bg-[#161ab0] px-[24px] py-[14px] text-[14px] font-normal uppercase leading-none tracking-[0.16px] text-[#fdfdfd] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0f1388] hover:shadow-[0_10px_24px_-8px_rgba(22,26,176,0.55)] active:translate-y-0 active:bg-[#0b0e6b] md:text-[15px] 2xl:text-[16px]"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
