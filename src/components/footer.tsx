"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
] as const;

const SERVICE_LINKS = [
  { label: "3T MRI", href: "/services/mri" },
  { label: "96 Slice CT", href: "/services/ct" },
  { label: "Digital X-Ray", href: "/services/xray" },
  { label: "Mammography", href: "/services/mammography" },
] as const;

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com", src: "/social/instagram.svg" },
  { label: "Twitter", href: "https://twitter.com", src: "/social/twitter.svg" },
  { label: "LinkedIn", href: "https://linkedin.com", src: "/social/linkedin.svg" },
] as const;

export function Footer() {
  return (
    <footer className="w-full bg-[#f7f7ff]">
      <div className="mx-auto max-w-[1920px] px-4 pt-12 pb-8 sm:px-6 sm:pt-14 sm:pb-10 md:px-10 md:pt-16 md:pb-12 xl:px-20 2xl:px-[244px] 2xl:pt-[70px] 2xl:pb-[72px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-x-10 2xl:gap-x-[112px]">
          <Link
            href="/"
            aria-label="Focus Diagnostics — Home"
            className="block w-[140px] shrink-0 sm:w-[160px] lg:w-[180px] 2xl:w-[210px]"
          >
            <Image
              src="/logo.png"
              alt="Focus Diagnostics"
              width={294}
              height={153}
              className="h-auto w-full"
            />
          </Link>

          <div className="flex flex-1 flex-col divide-y divide-zinc-200 lg:flex-row lg:items-start lg:justify-end lg:gap-x-[64px] lg:divide-y-0 2xl:gap-x-[64px]">
            <FooterColumn title="Quick Links">
              <ul className="flex flex-col gap-3 md:gap-4 2xl:gap-[20px]">
                {QUICK_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-[16px] font-medium tracking-[-0.18px] text-[#646464] transition-colors hover:text-[#101881] 2xl:text-[18px]"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>

            <FooterColumn title="Services">
              <ul className="flex flex-col gap-3 md:gap-4 2xl:gap-[20px]">
                {SERVICE_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-[16px] font-medium tracking-[-0.18px] text-[#646464] transition-colors hover:text-[#101881] 2xl:text-[18px]"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>

            <FooterColumn title="Contact" className="lg:w-[339px]">
              <div className="flex flex-col gap-3 md:gap-4 2xl:gap-[20px]">
                <p className="text-[16px] font-medium leading-[1.5] tracking-[-0.18px] text-[#646464] 2xl:text-[18px]">
                  Rama Place, G-5/6, Ajronda, New Industrial Township,
                  Faridabad, Haryana 121007
                </p>
                <a
                  href="tel:01292227333"
                  className="w-fit text-[16px] font-medium tracking-[-0.18px] text-[#646464] underline underline-offset-2 transition-colors hover:text-[#101881] 2xl:text-[18px]"
                >
                  0129 222 7333
                </a>
              </div>
            </FooterColumn>
          </div>
        </div>
      </div>

      <div className="border-t border-[#dedede]">
        <div className="mx-auto flex max-w-[1920px] flex-col items-center gap-4 px-4 py-6 sm:px-6 md:flex-row md:justify-between md:px-10 md:py-8 xl:px-20 2xl:px-[244px] 2xl:py-[40px]">
          <p className="text-center text-[14px] font-medium tracking-[-0.18px] text-[#8c8c8c] md:text-left 2xl:text-[18px]">
            © Focus diagnostics 2025. All Right Reserved.
          </p>
          <ul className="flex items-center gap-5 2xl:gap-[30px]">
            {SOCIALS.map(({ label, href, src }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex size-[30px] items-center justify-center transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <Image src={src} alt="" width={30} height={30} className="size-[30px]" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`flex flex-col lg:gap-[30px] ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-4 text-left font-display text-[18px] font-medium tracking-[-0.2px] text-[#101881] lg:pointer-events-none lg:cursor-default lg:py-0 lg:text-[20px]"
      >
        {title}
        <ChevronDown
          className={`size-5 text-[#101881] transition-transform duration-300 lg:hidden ${
            open ? "rotate-180" : ""
          }`}
          strokeWidth={2.25}
        />
      </button>
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out lg:!grid-rows-[1fr] lg:!opacity-100 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-4 lg:pb-0">{children}</div>
        </div>
      </div>
    </div>
  );
}
