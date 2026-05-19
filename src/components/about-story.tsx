import Image from "next/image";

export function AboutStory() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1920px] px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:py-28 xl:px-20 2xl:px-[164px] 2xl:py-[111px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-x-[64px] 2xl:gap-x-[225px]">
          <div className="order-1 flex max-w-[608px] flex-col gap-5 text-[#101881] lg:order-1 lg:basis-[608px] 2xl:gap-[22px]">
            <h2 className="font-display text-[26px] font-medium leading-[1.2] tracking-[0.02em] sm:text-[30px] md:text-[34px] lg:text-[36px] 2xl:text-[38px] 2xl:leading-[46px] 2xl:tracking-[0.38px]">
              Founded in 2003
            </h2>
            <p className="text-[15px] font-normal leading-[1.5] tracking-[0.18px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] 2xl:tracking-[0.2px]">
              Focus Diagnostics is Faridabad&rsquo;s first premium radiology
              center, established in 2003. We pioneered high-field imaging
              here &ndash; introducing the city&rsquo;s first MRI, First 1.5
              Tesla MRI and later the first 3 Tesla MRI, and digital
              mammography, whole body dexascans and digital X-ray systems. Over
              two decades, we&rsquo;ve earned the community&rsquo;s trust by
              combining technology with care. Our mission is simple: deliver
              accurate, timely diagnostics in a comfortable and compassionate
              setting.
            </p>
            <p className="text-[15px] font-normal leading-[1.5] tracking-[0.18px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] 2xl:tracking-[0.2px]">
              Our founder team set out to make complex testing simple and
              stress-free. Today, our facility at Rama Palace, Ajronda Chowk
              houses state-of-the-art suites for MRI, CT, CBCT, X-ray,
              ultrasound, mammography, and more, as well as pathology lab
              services.
            </p>
          </div>

          <div className="order-2 relative aspect-[759/623] w-full max-w-[759px] overflow-hidden rounded-[8px] lg:order-2 lg:basis-[759px]">
            <Image
              src="/about-page/mri.png"
              alt="MRI scanner suite at Focus Diagnostics"
              fill
              sizes="(max-width: 1024px) 100vw, 759px"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-12 sm:mt-20 md:mt-24 lg:mt-32 lg:flex-row lg:items-center lg:justify-between lg:gap-x-[64px] 2xl:mt-[200px] 2xl:gap-x-[225px]">
          <div className="order-2 relative aspect-[759/623] w-full max-w-[759px] overflow-hidden rounded-[8px] lg:order-1 lg:basis-[759px]">
            <Image
              src="/about-page/team.png"
              alt="Focus Diagnostics radiology team"
              fill
              sizes="(max-width: 1024px) 100vw, 759px"
              className="object-cover object-center"
            />
          </div>

          <div className="order-1 flex max-w-[608px] flex-col gap-5 text-[#101881] lg:order-2 lg:basis-[608px] 2xl:gap-[22px]">
            <h2 className="font-display text-[26px] font-medium leading-[1.2] tracking-[0.02em] sm:text-[30px] md:text-[34px] lg:text-[36px] 2xl:text-[38px] 2xl:leading-[46px] 2xl:tracking-[0.38px]">
              Led by Experience. Defined by Accuracy.
            </h2>
            <p className="text-[15px] font-normal leading-[1.5] tracking-[0.18px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] 2xl:tracking-[0.2px]">
              Under the guidance of Dr. Deepak Gupta (MBBS, MD &ndash;
              Radiology, 27 years&rsquo; experience), our board-certified
              radiologists and technologists follow strict quality protocols.
              We ensure every scan and test meets high standards. For you, this
              means accurate results you can trust. We keep our team small and
              focused so that every patient receives personal attention.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
