import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type BodyPart = string | { bold: string };

type Service = {
  title: string;
  icon: string;
  slug: string;
  body: BodyPart[];
  href?: string;
};

const SERVICES: Service[] = [
  {
    title: "3T MRI",
    icon: "/services-icons/mri.svg",
    slug: "3t-mri",
    body: ["Exceptional detail for ", { bold: "brain, spine, joints" }, " and more."],
  },
  {
    title: "96 Slice CT",
    icon: "/services-icons/ct.svg",
    slug: "96-slice-ct",
    body: [
      { bold: "Rapid full-body scans" },
      " (trauma, chest, abdomen, angiography) at ultra-low dose.",
    ],
  },
  {
    title: "Digital X-Ray",
    icon: "/services-icons/xray.svg",
    slug: "digital-xray",
    body: [
      "High-speed digital X-rays for ",
      { bold: "chest, bones, and all general radiography." },
    ],
  },
  {
    title: "Mammography",
    icon: "/services-icons/mammo.svg",
    slug: "mammography",
    body: [
      { bold: "Digital breast imaging" },
      " for screening and diagnostics, with 2D/3D (tomosynthesis) options for early detection.",
    ],
  },
  {
    title: "Ultrasound & Doppler",
    icon: "/services-icons/ultrasound.svg",
    slug: "ultrasound-doppler",
    body: [
      "High-resolution sonography for ",
      { bold: "abdomen, pelvic, thyroid, obstetrics, vascular studies" },
      " and more.",
    ],
  },
  {
    title: "Dental CBCT/OPG",
    icon: "/services-icons/dental.svg",
    slug: "dental-cbct",
    body: [
      { bold: "3D cone-beam CT" },
      " and panoramic X-rays for accurate dental implant planning and tooth evaluation.",
    ],
  },
  {
    title: "Neurodiagnostics",
    icon: "/services-icons/neuro.svg",
    slug: "neurodiagnostics",
    body: [
      "Advanced ",
      { bold: "EEG" },
      " and ",
      { bold: "EMG/NCV" },
      " tests for precise neurological diagnosis.",
    ],
  },
  {
    title: "Bone Densitometry",
    icon: "/services-icons/bone.svg",
    slug: "bone-densitometry",
    body: [
      "Gold-standard osteoporosis screening with quick, non-invasive ",
      { bold: "DEXA" },
      " for bone density and body composition.",
    ],
  },
  {
    title: "Pathology Laboratory",
    icon: "/services-icons/pathology.svg",
    slug: "pathology",
    body: [
      "Full-service lab for ",
      { bold: "blood, urine, and other tests" },
      " with fast, accurate results. Same-day or 24-hour reporting available.",
    ],
  },
];

export function MainServices() {
  return (
    <section
      aria-labelledby="main-services-heading"
      className="w-full bg-white"
    >
      <div className="mx-auto max-w-[1920px] px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:py-28 xl:px-20 2xl:px-[244px] 2xl:pt-[118px] 2xl:pb-[120px]">
        <div className="grid gap-8 lg:grid-cols-[506px_1fr] lg:items-start lg:gap-x-[146px]">
          <h2
            id="main-services-heading"
            className="max-w-[506px] font-display text-[26px] font-medium leading-[1.2] tracking-[0.02em] text-[#101881] sm:text-[30px] md:text-[34px] lg:text-[36px] xl:text-[38px] 2xl:leading-[46px] 2xl:tracking-[0.38px]"
          >
            Compassionate, always-on care for every journey
          </h2>
          <p className="max-w-[780px] text-[15px] font-normal leading-[1.5] tracking-[0.2px] text-[#101881] md:text-[16px] xl:text-[18px] 2xl:text-[20px]">
            At Focus Diagnostics, we offer a comprehensive range of radiology
            and pathology services under one roof. Whether you need advanced
            imaging or routine lab tests, our team is equipped to help. All
            services are backed by fast reporting and expert interpretation.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 2xl:mt-[80px] 2xl:gap-[22px]">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        <p className="mx-auto mt-16 max-w-[1054px] text-center text-[15px] font-normal leading-[1.5] tracking-[0.2px] text-[#1d1b1b] md:mt-20 md:text-[17px] xl:text-[19px] 2xl:mt-[140px] 2xl:text-[20px]">
          Each of these services uses state-of-the-art equipment. For example,
          our digital X-ray system means you get results faster with minimal
          exposure. We handle all routine procedures (like diabetes screening,
          cholesterol, hormone tests, etc.) efficiently so you spend less time
          waiting. And in emergencies, we provide urgent scans any time, day or
          night, with priority reporting.
        </p>
      </div>
    </section>
  );
}

function ServiceCard({ title, icon, slug, body, href }: Service) {
  const targetHref = href ?? `/services/${slug}`;
  return (
    <article className="group flex h-full min-h-[320px] flex-col justify-between gap-6 rounded-[20px] bg-[#f7f7f7] px-[20px] py-[36px] transition-shadow duration-200 hover:shadow-[0_10px_30px_-12px_rgba(16,24,129,0.18)] md:px-[24px] md:py-[44px] 2xl:min-h-[349px] 2xl:gap-[24px] 2xl:px-[24px] 2xl:py-[48px]">
      <div className="inline-flex size-[52px] items-center justify-center self-start rounded-full bg-[#e6e6e6] p-[8px] 2xl:size-[56px]">
        <Image
          src={icon}
          alt=""
          width={40}
          height={40}
          className="h-full w-auto max-h-full max-w-full object-contain"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-display text-[24px] font-medium leading-[1.2] tracking-[-0.02em] text-[#101881] md:text-[26px] xl:text-[28px] 2xl:text-[32px] 2xl:tracking-[-0.64px]">
          {title}
        </h3>
        <p className="text-[15px] leading-[1.43] tracking-[-0.01em] text-[#808080] md:text-[16px] xl:text-[18px] 2xl:text-[20px] 2xl:tracking-[-0.4px]">
          {body.map((part, i) =>
            typeof part === "string" ? (
              <span key={i}>{part}</span>
            ) : (
              <strong key={i} className="font-semibold text-[#353537]">
                {part.bold}
              </strong>
            )
          )}
        </p>
      </div>

      <Link
        href={targetHref}
        className="inline-flex items-center gap-[8px] text-[15px] font-medium leading-[1.5] tracking-[-0.01em] text-[#101881] transition-colors hover:text-[#0b0e6b] xl:text-[18px] 2xl:text-[20px] 2xl:tracking-[-0.4px]"
      >
        Learn More
        <ArrowRight
          className="size-4 transition-transform duration-200 group-hover:translate-x-1 2xl:size-5"
          strokeWidth={2.25}
        />
      </Link>
    </article>
  );
}
