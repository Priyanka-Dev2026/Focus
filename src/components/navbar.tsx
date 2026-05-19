"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact us", href: "/contact" },
] as const;

const LINK_CLASS =
  "relative leading-none transition-colors duration-200 hover:text-[#161ab0] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#161ab0] after:transition-transform after:duration-200 hover:after:scale-x-100";

const CTA_CLASS =
  "items-center justify-center rounded-[12px] bg-[#161ab0] text-[#fdfdfd] font-normal uppercase tracking-[0.16px] shadow-[0_0_0_0_rgba(22,26,176,0)] transition-all duration-200 hover:bg-[#0f1388] hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-8px_rgba(22,26,176,0.55)] active:translate-y-0 active:bg-[#0b0e6b]";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="mx-auto flex h-[64px] max-w-[1920px] items-center justify-between gap-4 px-4 sm:h-[72px] sm:px-6 md:h-[80px] md:px-10 lg:h-[90px] lg:px-12 xl:px-20 2xl:px-[244px]">
        <Link
          href="/"
          aria-label="Focus Diagnostics — Home"
          className="block shrink-0"
          onClick={closeMenu}
        >
          <Image
            src="/logo.png"
            alt="Focus Diagnostics"
            width={127}
            height={65}
            priority
            className="h-[40px] w-auto sm:h-[48px] md:h-[56px] lg:h-[65px]"
          />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-5 text-[13px] font-normal uppercase tracking-[0.16px] text-black lg:flex xl:gap-10 xl:text-[15px] 2xl:gap-[78px] 2xl:text-[16px]"
        >
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={LINK_CLASS}>
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/book"
          className={`${CTA_CLASS} hidden lg:inline-flex lg:px-[20px] lg:py-[12px] lg:text-[14px] xl:px-[24px] xl:py-[14px] xl:text-[16px]`}
        >
          Book Appointment
        </Link>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-md p-2 text-black transition-colors hover:bg-zinc-100 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-zinc-100 bg-white transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile primary"
          className="mx-auto flex max-w-[1920px] flex-col gap-1 px-4 py-4 sm:px-6"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="block rounded-md px-3 py-3 text-[15px] font-normal uppercase tracking-[0.16px] text-black transition-colors hover:bg-zinc-100 hover:text-[#161ab0]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book"
            onClick={closeMenu}
            className={`${CTA_CLASS} mt-2 inline-flex w-full px-[24px] py-[14px] text-[15px]`}
          >
            Book Appointment
          </Link>
        </nav>
      </div>
    </header>
  );
}
