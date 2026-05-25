import type { Metadata } from "next";
import { BreadcrumbBar } from "@/components/breadcrumb";
import { PatientGuide } from "@/components/patient-guide";

export const metadata: Metadata = {
  title: "Patient Guide — Focus Diagnostics",
  description:
    "What to expect at Focus Diagnostics — preparation, arrival, scans, results, and booking guidance.",
};

export default function PatientGuidePage() {
  return (
    <>
      <BreadcrumbBar
        items={[
          { label: "Home", href: "/" },
          { label: "Patient Guide" },
        ]}
      />
      <PatientGuide />
    </>
  );
}
