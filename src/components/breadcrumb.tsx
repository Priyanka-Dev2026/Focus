import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-[4px] text-[13px] font-medium tracking-[0.01em] sm:text-[14px]"
    >
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={`${item.label}-${i}`} className="flex items-center gap-[4px]">
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="rounded px-[4px] text-[#0162dd] hover:underline"
              >
                {item.label}
              </Link>
            ) : (
              <span className={`px-[4px] ${isLast ? "text-[#242e39]" : "text-[#0162dd]"}`}>
                {item.label}
              </span>
            )}
            {!isLast && (
              <ChevronRight
                aria-hidden
                className="size-4 text-[#a1aebe]"
                strokeWidth={2.25}
              />
            )}
          </span>
        );
      })}
    </nav>
  );
}

export function BreadcrumbBar({ items }: { items: BreadcrumbItem[] }) {
  return (
    <div className="w-full bg-[#f1faff]">
      <div className="mx-auto max-w-[1920px] px-4 py-3 sm:px-6 md:px-10 xl:px-20 2xl:px-[244px]">
        <Breadcrumb items={items} />
      </div>
    </div>
  );
}
