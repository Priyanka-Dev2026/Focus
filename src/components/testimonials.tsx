import Image from "next/image";

type Testimonial = {
  body: string;
  name: string;
  role: string;
  avatar: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    body: "The MRI experience was completely seamless. The staff explained every step, the scanner was modern, and my report was emailed the same evening.",
    name: "Priya Sharma",
    role: "Patient, Faridabad",
    avatar: "/testimonials/avatar-1.png",
  },
  {
    body: "My mother needed an urgent CT after a fall. Focus had us in within an hour at 11 PM and the radiologist personally called us with the findings.",
    name: "Rohan Mehta",
    role: "Family caregiver",
    avatar: "/testimonials/avatar-2.png",
  },
  {
    body: "I've been getting my annual DEXA scans here for six years. Same-day reports, transparent pricing, and Dr. Gupta's team is genuinely warm.",
    name: "Anjali Verma",
    role: "Regular patient",
    avatar: "/testimonials/avatar-3.png",
  },
  {
    body: "I refer almost all my orthopaedic imaging here. The image quality is consistently excellent and they understand what a clinician actually needs.",
    name: "Dr. Sameer Khanna",
    role: "Orthopaedic Surgeon",
    avatar: "/testimonials/avatar-4.png",
  },
  {
    body: "Booking online was easy, the wait time was under 10 minutes, and they walked me through the digital X-ray report on a screen before I left.",
    name: "Vikas Singh",
    role: "Patient",
    avatar: "/testimonials/avatar-5.png",
  },
  {
    body: "I had a screening mammogram done here and the technician made me feel genuinely cared for, which honestly mattered more than I expected.",
    name: "Neha Kapoor",
    role: "Patient",
    avatar: "/testimonials/avatar-6.png",
  },
  {
    body: "We send our community-health camp patients to Focus for follow-up imaging. They consistently turn around quality reports in under 24 hours.",
    name: "Dr. Aakash Iyer",
    role: "General Physician",
    avatar: "/testimonials/avatar-7.png",
  },
  {
    body: "Brought my 3-year-old in for a chest X-ray and was nervous, but the paediatric team was patient and gentle. Completed without a single tear.",
    name: "Meera Joshi",
    role: "Parent",
    avatar: "/testimonials/avatar-8.png",
  },
  {
    body: "From booking to billing to report delivery — everything is transparent. The pricing is exactly what they quote upfront, no surprises.",
    name: "Arvind Bhatia",
    role: "Patient",
    avatar: "/testimonials/avatar-9.png",
  },
];

const ROWS: { items: Testimonial[]; reverse: boolean; duration: string }[] = [
  { items: TESTIMONIALS.slice(0, 5), reverse: true, duration: "60s" },
  { items: TESTIMONIALS.slice(4, 9), reverse: false, duration: "70s" },
];

export function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative w-full overflow-hidden bg-white pt-8 pb-16 sm:pt-10 sm:pb-20 md:pt-12 md:pb-24 lg:pt-14 lg:pb-28 2xl:pt-[64px] 2xl:pb-[120px]"
    >
      <div className="mx-auto max-w-[1920px] px-4 sm:px-6 md:px-10 xl:px-20 2xl:px-[244px]">
        <h2
          id="testimonials-heading"
          className="text-center font-display text-[28px] font-medium leading-[1.15] tracking-[0.02em] text-[#101881] sm:text-[32px] md:text-[38px] lg:text-[42px] xl:text-[44px] 2xl:text-[48px] 2xl:leading-[52px] 2xl:tracking-[0.48px]"
        >
          Our recent reviews
        </h2>

        <div className="mt-8 flex flex-col items-center sm:mt-10">
          <div className="flex w-fit items-center justify-center gap-3 rounded-[10px] bg-white px-5 py-3 shadow-[0_4px_24px_-8px_rgba(16,24,129,0.18)]">
            <Image
              src="/testimonials/google.svg"
              alt="Google"
              width={28}
              height={28}
              className="size-[28px] shrink-0"
            />
            <div className="flex flex-col text-left">
              <span className="text-[12px] font-medium tracking-[0.01em] text-[#5b62b9]">
                Google Rating
              </span>
              <div className="flex items-center gap-1">
                <span className="text-[18px] font-semibold text-[#101881]">
                  4.8
                </span>
                <Stars />
              </div>
            </div>
          </div>
          <p className="mt-2 text-[12px] text-[#5b62b9]">
            See all our reviews
          </p>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-4 marquee-pause sm:mt-12 sm:gap-5 md:gap-6 2xl:mt-[60px] 2xl:gap-[20px]">
        {ROWS.map((row, idx) => (
          <MarqueeRow key={idx} {...row} />
        ))}
      </div>
    </section>
  );
}

function Stars() {
  return (
    <div className="flex items-center gap-[2px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <Image
          key={i}
          src="/testimonials/star.svg"
          alt=""
          width={14}
          height={14}
          className="size-[14px]"
        />
      ))}
    </div>
  );
}

function MarqueeRow({
  items,
  reverse,
  duration,
}: {
  items: Testimonial[];
  reverse: boolean;
  duration: string;
}) {
  const doubled = [...items, ...items];
  return (
    <div
      className="relative overflow-hidden"
      style={
        {
          maskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        } as React.CSSProperties
      }
    >
      <div
        className={`flex w-max gap-4 sm:gap-5 md:gap-6 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
        style={{ "--marquee-duration": duration } as React.CSSProperties}
      >
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} {...t} />
        ))}
      </div>
    </div>
  );
}

function TestimonialCard({ body, name, role, avatar }: Testimonial) {
  return (
    <article className="flex w-[300px] shrink-0 flex-col justify-between gap-5 rounded-[16px] border border-[#eef0fb] bg-white p-5 shadow-[0_4px_18px_-10px_rgba(16,24,129,0.18)] sm:w-[340px] sm:p-6 md:w-[380px] xl:w-[420px]">
      <p className="text-[14px] leading-[1.55] tracking-[-0.01em] text-[#4b5563] sm:text-[15px] xl:text-[16px]">
        {body}
      </p>
      <div className="flex items-center gap-3">
        <div className="relative size-[44px] shrink-0 overflow-hidden rounded-full bg-[#eef0fb]">
          <Image
            src={avatar}
            alt=""
            fill
            sizes="44px"
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-display text-[14px] font-medium text-[#101881]">
            {name}
          </p>
          <p className="text-[12px] text-[#808080]">{role}</p>
        </div>
      </div>
    </article>
  );
}
