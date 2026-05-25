"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

type AccordionItem = { title: string; body: string };

const VISIT_ITEMS: AccordionItem[] = [
  {
    title: "Before Your Visit",
    body: "Schedule via phone or our online form, choosing a convenient date/time. Bring a doctor’s prescription or requisition form, any prior reports, and a government ID. Inform us of any pregnancy or implantable devices. For tests requiring fasting (e.g. abdominal ultrasound, certain CT scans), you’ll be instructed to avoid food/drink for 3-4 hours beforehand. For contrast-enhanced CT or MRI, we may advise drinking extra water after the scan to flush the contrast.",
  },
  {
    title: "Arrival & Check-In",
    body: "We are open 24×7. Upon arrival, our friendly staff will check you in and guide you to the preparation area. You can change into a gown (free lockers available). If you have any anxiety, let us know – we can provide earplugs, music, or sedation as needed (MRI only).",
  },
  {
    title: "During the Scan",
    body: "Our technologist will explain the procedure. MRI and CT are painless and non-invasive, though you may hear beeps or whirrs. You will lie comfortably on the scanning table. For MRI, headsets or cushions help keep still. For CT and X-ray, you may be asked to hold your breath briefly during the scan. Our focus is on your comfort: we do everything to help you relax.",
  },
  {
    title: "For Ultrasound & X-ray",
    body: "These are quick (5–15 minutes). For ultrasound, you may need a full bladder (drink water beforehand) or fasting (abdomen scans). Otherwise, no special prep. Mammograms require no lotions or deodorants, and the female technologist will position you gently.",
  },
  {
    title: "EEG/EMG",
    body: "These tests typically have no special prep, except avoiding hair products for EEG. Your hair should be oil free / shampooed. You can resume normal activities immediately after.",
  },
  {
    title: "Blood Tests (Pathology)",
    body: "You can visit the lab or request home blood collection. Our phlebotomists will draw sample tubes, label them, and perform all handling on-site. Most routine lab reports are ready within 24 hours (often same day for basic tests).",
  },
  {
    title: "After the Test",
    body: "Once scanning is done, you’ll be given instructions (e.g. drink water after contrast). Our radiologists intly. In most cases, reports are ready by evening of the test day. You can collect a printed report at the center or receive it by email/WhatsApp as arranged. Pathology results will be delivered in the timeframe advised (urgent tests may be within hours; others by next day).",
  },
  {
    title: "Results & Follow-up",
    body: "Our reports are clear and detailed, helping your doctor understand your condition. If needed, our radiologists are available to discuss findings with you or your physician. We encourage you to ask questions.",
  },
];

const BOOKING_ITEMS: AccordionItem[] = [
  {
    title: "Online Booking",
    body: "Use the Book Appointment button on our website to choose a service and time. You will receive an SMS/email confirmation.",
  },
  {
    title: "Phone/Walk-in",
    body: "Call +91 129 2227 333, +91 129 2225 222 or +91 129 4009870 any time. For emergency scans, come directly to our 24×7 center without appointment.",
  },
  {
    title: "Important Note",
    body: "Please arrive 10 minutes early. If you have any questions about prep, tests, or results, our staff is happy to help.",
  },
];

export function PatientGuide() {
  return (
    <>
      <section className="w-full bg-[#f1faff]">
        <div className="mx-auto max-w-[1920px] px-4 pt-8 pb-16 sm:px-6 sm:pt-10 sm:pb-20 md:px-10 md:pt-12 md:pb-24 xl:px-20 2xl:px-[244px] 2xl:pt-[40px] 2xl:pb-[80px]">
          <div className="flex flex-col gap-[6px]">
            <h1 className="font-display text-[36px] font-medium leading-[1.1] tracking-[0.04em] text-[#171515] sm:text-[44px] md:text-[52px] lg:text-[56px] 2xl:text-[58px] 2xl:leading-[62.72px] 2xl:tracking-[0.58px]">
              Patient Guide
            </h1>
            <div className="h-[5px] w-[78px] bg-[#161ab0] sm:w-[96px] 2xl:w-[116px]" />
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1920px] px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20 xl:px-20 2xl:px-[244px] 2xl:py-[56px]">
          <p className="max-w-[651px] text-[15px] font-normal leading-[1.5] tracking-[0.2px] text-[#101881] md:text-[16px] xl:text-[18px] 2xl:text-[20px]">
            We want your visit to Focus Diagnostics to be smooth and
            stress-free. Here&rsquo;s what to expect and how to prepare for
            your tests:
          </p>

          <Accordion items={VISIT_ITEMS} className="mt-10 2xl:mt-[80px]" />

          <h2 className="mt-12 text-[18px] font-normal leading-[1.5] tracking-[0.2px] text-[#101881] md:mt-16 md:text-[19px] 2xl:mt-[80px] 2xl:text-[20px]">
            Booking & Appointments
          </h2>

          <Accordion items={BOOKING_ITEMS} className="mt-6 2xl:mt-[36px]" />

          <p className="mt-10 text-[15px] font-normal leading-[1.5] tracking-[0.2px] text-[#1d1b1b] md:mt-12 md:text-[17px] xl:text-[19px] 2xl:mt-[90px] 2xl:text-[20px]">
            Your health and comfort are our priority. From booking to
            reporting, Focus Diagnostics provides guidance at every step. We
            look forward to serving you.
          </p>
        </div>
      </section>
    </>
  );
}

function Accordion({
  items,
  className = "",
}: {
  items: AccordionItem[];
  className?: string;
}) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <div className={`flex flex-col border-t border-[#cdd6da]/40 ${className}`}>
      {items.map((item, i) => (
        <AccordionRow
          key={item.title + i}
          item={item}
          open={openIdx === i}
          onToggle={() => setOpenIdx(openIdx === i ? null : i)}
        />
      ))}
    </div>
  );
}

function AccordionRow({
  item,
  open,
  onToggle,
}: {
  item: AccordionItem;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-[#cdd6da]/40">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-4 text-left"
      >
        <span className="text-[16px] font-medium leading-[1.2] text-black sm:text-[17px] 2xl:text-[18px]">
          {item.title}
        </span>
        {open ? (
          <X
            className="size-5 shrink-0 text-black 2xl:size-6"
            strokeWidth={2}
            aria-hidden
          />
        ) : (
          <Plus
            className="size-5 shrink-0 text-black 2xl:size-6"
            strokeWidth={2}
            aria-hidden
          />
        )}
      </button>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-8 pr-2 text-[14px] leading-[1.4] text-[rgba(60,60,67,0.85)] sm:pr-4 sm:text-[15px] 2xl:pr-6 2xl:text-[16px]">
            {item.body}
          </p>
        </div>
      </div>
    </div>
  );
}
