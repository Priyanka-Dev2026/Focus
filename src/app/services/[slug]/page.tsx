import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BreadcrumbBar } from "@/components/breadcrumb";
import { ServiceDetail } from "@/components/service-detail";
import { SERVICES, getServiceBySlug } from "@/lib/services-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service — Focus Diagnostics" };
  return {
    title: `${service.title} — Focus Diagnostics`,
    description: service.description.slice(0, 160),
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <BreadcrumbBar
        items={[
          { label: "Home", href: "/" },
          { label: "Our Services", href: "/services" },
          { label: service.shortName ?? service.title },
        ]}
      />
      <ServiceDetail service={service} />
    </>
  );
}
