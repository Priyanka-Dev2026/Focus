import Image from "next/image";
import Link from "next/link";

export function Booking() {
  return (
    <section
      aria-labelledby="booking-heading"
      className="w-full bg-[#f2f2f2]"
    >
      <div className="mx-auto max-w-[1920px] px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20 xl:px-20 lg:py-24 2xl:px-[244px] 2xl:pt-[92px] 2xl:pb-[80px]">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-x-[270px]">
          <h2
            id="booking-heading"
            className="max-w-[540px] font-display text-[28px] font-medium leading-[1.15] tracking-[0.02em] text-[#101881] sm:text-[32px] md:text-[38px] lg:text-[42px] xl:text-[44px] 2xl:text-[48px] 2xl:leading-[52px] 2xl:tracking-[0.48px]"
          >
            Ready to book your test?
          </h2>

          <div className="flex max-w-[622px] flex-col items-start gap-6 2xl:gap-[36px]">
            <p className="text-[15px] font-normal leading-[1.5] tracking-[0.18px] text-[#101881] md:text-[16px] xl:text-[17px] 2xl:text-[18px] 2xl:pt-[22px]">
              Call us or use our online Book Appointment form at any time.
              We&rsquo;re committed to providing you with accurate answers and a
              reassuring experience from start to finish.
            </p>
            <Link
              href="/book"
              className="inline-flex items-center justify-center rounded-[12px] bg-[#161ab0] px-[24px] py-[14px] text-[14px] font-normal uppercase leading-none tracking-[0.16px] text-[#fdfdfd] shadow-[0_0_0_0_rgba(22,26,176,0)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0f1388] hover:shadow-[0_10px_24px_-8px_rgba(22,26,176,0.55)] active:translate-y-0 active:bg-[#0b0e6b] md:text-[15px] 2xl:text-[16px]"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>

      <div className="relative h-[280px] w-full sm:h-[360px] md:h-[440px] lg:h-[500px] xl:h-[560px] 2xl:h-[583px]">
        <Image
          src="/booking/team-v2.png"
          alt="Focus Diagnostics radiology team reviewing scans"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
    </section>
  );
}
