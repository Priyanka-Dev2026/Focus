import Image from "next/image";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Impact } from "@/components/impact";
import { Features } from "@/components/features";
import { Testimonials } from "@/components/testimonials";
import { Booking } from "@/components/booking";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <div className="relative overflow-hidden bg-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 flex justify-center"
        >
          <Image
            src="/impact/backdrop.svg"
            alt=""
            width={1924}
            height={1136}
            className="h-auto w-[320vw] max-w-[2400px] translate-y-[8%] opacity-70 sm:w-[240vw] sm:translate-y-[4%] md:w-[170vw] md:translate-y-[-6%] lg:w-[135vw] lg:translate-y-[-12%] xl:w-full xl:translate-y-[-15%] xl:max-w-[2200px]"
          />
        </div>
        <div className="relative">
          <Impact />
          <Features />
        </div>
      </div>
      <Testimonials />
      <Booking />
    </>
  );
}
