import Image from "next/image";
import type { ServiceDetailContent } from "@/lib/services-data";

export function ServiceDetail({ service }: { service: ServiceDetailContent }) {
  return (
    <>
      <section className="w-full bg-[#f1faff]">
        <div className="mx-auto max-w-[1920px] px-4 pt-6 pb-16 sm:px-6 sm:pt-8 sm:pb-20 md:px-10 md:pt-10 md:pb-24 xl:px-20 2xl:px-[244px] 2xl:pt-[60px] 2xl:pb-[100px]">
          <div className="flex flex-col gap-[6px]">
            <h1 className="font-display text-[36px] font-medium leading-[1.1] tracking-[0.04em] text-[#171515] sm:text-[44px] md:text-[52px] lg:text-[56px] 2xl:text-[58px] 2xl:leading-[62.72px] 2xl:tracking-[0.58px]">
              {service.title}
            </h1>
            <div className="h-[5px] w-[78px] bg-[#161ab0] sm:w-[96px] 2xl:w-[116px]" />
          </div>
        </div>
      </section>

      <section className="grid w-full lg:grid-cols-2">
        <div className="order-2 flex items-center bg-white px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:order-1 lg:px-12 lg:py-24 xl:px-20 2xl:py-[223px] 2xl:pl-[147px] 2xl:pr-[176px]">
          <p className="max-w-[598px] text-[15px] font-normal leading-[1.55] tracking-[0.2px] text-[#101881] md:text-[16px] xl:text-[18px] 2xl:text-[20px]">
            {service.description}
          </p>
        </div>
        <div className="order-1 relative aspect-[4/3] w-full lg:order-2 lg:aspect-auto lg:min-h-[600px] 2xl:min-h-[892px]">
          <Image
            src={service.images[0]}
            alt={`${service.title} equipment`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>
      </section>

      <section className="grid w-full lg:grid-cols-2">
        <div className="order-1 relative aspect-[4/3] w-full lg:aspect-auto lg:min-h-[600px] 2xl:min-h-[892px]">
          <Image
            src={service.images[1]}
            alt={`${service.title} care team`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>
        <div className="order-2 flex items-center bg-[#f2f2f2] px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-12 lg:py-24 xl:px-20 2xl:py-[223px] 2xl:pl-[171px] 2xl:pr-[204px]">
          <div className="flex max-w-[574px] flex-col gap-8 text-[#101881] 2xl:gap-[50px]">
            <h2 className="font-display text-[26px] font-medium leading-[1.2] tracking-[0.02em] sm:text-[30px] md:text-[34px] lg:text-[36px] 2xl:text-[38px] 2xl:leading-[46px] 2xl:tracking-[0.38px]">
              Key patient benefits:
            </h2>
            <ul className="list-disc space-y-3 pl-[24px] text-[15px] font-normal leading-[1.55] tracking-[0.2px] md:text-[16px] xl:text-[18px] 2xl:space-y-[12px] 2xl:pl-[30px] 2xl:text-[20px]">
              {service.benefits.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
