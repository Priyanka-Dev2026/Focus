export type ServiceDetailContent = {
  slug: string;
  title: string;
  /** Breadcrumb label — defaults to `title` if omitted. */
  shortName?: string;
  description: string;
  benefits: string[];
  /** [overview-image, benefits-image] — full-bleed at lg+. */
  images: [string, string];
};

export const SERVICES: ServiceDetailContent[] = [
  {
    slug: "3t-mri",
    title: "MRI Scanning",
    shortName: "3T MRI",
    description:
      "Our Siemens MAGNETOM Spectra is a 3 Tesla MRI scanner – the most powerful field strength available clinically. It delivers unprecedented image clarity and diagnostic confidence. This means tiny abnormalities (in the brain, spine, joints, cardiac vessels, etc.) can be seen far more clearly than on lower-field machines. Cutting-edge technology like Siemens' Tim 4G DirectRF and TimTX TrueForm ensures consistently uniform, high-quality images. The system's smart workflow (“DOT”) helps our technologists tailor scan protocols, so you get personalized imaging with the minimum necessary scan time.",
    benefits: [
      "Rapid, Detailed Scans: 3T power shortens exam times and increases resolution. Many scans finish in 15–30 minutes.",
      "Comfort & Safety: The Spectra's 60 cm bore and advanced gradient design accommodate larger patients, and features like SlideConnect/DirectConnect allow faster, more comfortable positioning.",
      "No-Fear Environment: Our staff explain each step, and open communication (plus earplugs and music) help you relax. Sedation is available for claustrophobic or anxious patients.",
      "Versatility: We perform MRIs of the brain, spine, joints, heart, breast, angiography (MR angiograms), functional studies, and more, always with the highest resolution.",
    ],
    images: ["/about-page/mri.png", "/booking/team-v2.png"],
  },
  {
    slug: "96-slice-ct",
    title: "96 Slice CT",
    description:
      "Our 96-slice CT scanner produces rapid, full-body cross-sectional images at ultra-low radiation dose. From trauma and chest scans to abdomen, angiography and oncology follow-ups, the scanner delivers exceptional clarity in seconds. Advanced dose-modulation technology adapts the radiation to your body size, so adults, children and seniors all receive only what's needed for a confident diagnosis.",
    benefits: [
      "Speed: Full-body scans in under a minute mean less time on the table.",
      "Low Dose: Iterative reconstruction reduces radiation by up to 70% versus older scanners.",
      "Cardiac & Vascular: High-resolution coronary angiography and cerebral angiography without invasive catheterisation.",
      "Trauma-Ready: Open 24×7 for emergency imaging with same-shift reporting.",
    ],
    images: ["/services/advanced-v2.png", "/booking/team-v2.png"],
  },
  {
    slug: "digital-xray",
    title: "Digital X-Ray",
    description:
      "Our high-speed digital X-ray suite delivers superior image quality with significantly lower radiation than conventional film systems. Advanced flat-panel detectors capture chest, bones and all general radiography images in seconds, with reports typically ready the same day.",
    benefits: [
      "Faster Scans: Image acquisition in seconds means less time waiting.",
      "Lower Dose: Digital detectors require a fraction of the radiation of film X-rays.",
      "Sharper Images: High dynamic range reveals subtle fractures, infiltrates and calcifications.",
      "Instant Sharing: Reports and DICOM images delivered digitally to your phone or referring doctor.",
    ],
    images: ["/services/convenience-v2.png", "/booking/team-v2.png"],
  },
  {
    slug: "mammography",
    title: "Mammography",
    description:
      "Digital breast imaging for screening and diagnostics, with 2D and 3D (tomosynthesis) options for early detection. Our female-led mammography team prioritises comfort, dignity and clear communication, with private changing areas and gentle positioning throughout the exam.",
    benefits: [
      "Early Detection: 3D tomosynthesis catches lesions that 2D mammography can miss.",
      "Lower Compression: Modern paddles distribute pressure evenly for a more comfortable scan.",
      "Female Technologists: Every mammogram is performed by a female technologist for privacy.",
      "Same-day Reports: Most screening reports are available the same evening.",
    ],
    images: ["/services/patient-v2.png", "/booking/team-v2.png"],
  },
  {
    slug: "ultrasound-doppler",
    title: "Ultrasound & Doppler",
    description:
      "High-resolution sonography for abdomen, pelvic, thyroid, obstetric and vascular studies. Our Doppler studies assess blood flow non-invasively, helping diagnose vascular disease, deep vein thrombosis, varicose veins and fetal wellbeing.",
    benefits: [
      "Painless & Radiation-Free: Safe for pregnancy, infants and repeat follow-ups.",
      "Real-Time Imaging: Live, moving images of organs, blood flow and the fetus.",
      "Specialist Sonologists: Studies performed and reported by experienced radiologists.",
      "Quick Turnaround: Most reports are ready the same day.",
    ],
    images: ["/services/pioneering-v2.png", "/booking/team-v2.png"],
  },
  {
    slug: "dental-cbct",
    title: "Dental CBCT/OPG",
    shortName: "Dental CBCT",
    description:
      "3D cone-beam CT and panoramic X-rays for accurate dental implant planning, orthodontic assessment, TMJ evaluation and impacted tooth analysis. Our CBCT delivers a fraction of the radiation of medical CT while producing highly detailed 3D images of the jaw and dentition.",
    benefits: [
      "True 3D Imaging: Visualise teeth, roots, nerves and bone in any plane.",
      "Implant Planning: Precise measurement of bone height, width and density.",
      "Low Dose: Up to 10× lower dose than medical CT for the same region.",
      "DICOM Export: Compatible with all major implant-planning software.",
    ],
    images: ["/services/advanced-v2.png", "/booking/team-v2.png"],
  },
  {
    slug: "neurodiagnostics",
    title: "Neurodiagnostics",
    description:
      "Advanced EEG (electroencephalography) and EMG/NCV (electromyography/nerve conduction velocity) tests for precise neurological diagnosis. Useful in evaluating seizures, neuropathy, carpal tunnel syndrome, muscle disorders and unexplained weakness or numbness.",
    benefits: [
      "Comprehensive EEG: Routine, sleep-deprived and ambulatory EEGs available.",
      "EMG/NCV: Detailed nerve and muscle assessment for accurate diagnosis.",
      "Detailed Reports: Interpretations by neurologists with clinical correlation.",
      "Patient Comfort: Quiet, climate-controlled rooms with privacy and trained staff.",
    ],
    images: ["/services/pioneering-v2.png", "/booking/team-v2.png"],
  },
  {
    slug: "bone-densitometry",
    title: "Bone Densitometry",
    description:
      "Gold-standard osteoporosis screening with quick, non-invasive DEXA (dual-energy X-ray absorptiometry) for bone density and body composition. A simple 10-minute scan provides accurate, reproducible measurements of fracture risk and skeletal health.",
    benefits: [
      "Gold Standard: DEXA is the WHO-recommended method for osteoporosis diagnosis.",
      "Whole-body Composition: Optional whole-body scans give precise fat and lean-mass breakdowns.",
      "Quick & Non-invasive: Lie still for under 10 minutes — no injections, no fasting.",
      "Trend Tracking: Annual scans monitor bone health and treatment response over time.",
    ],
    images: ["/services/convenience-v2.png", "/booking/team-v2.png"],
  },
  {
    slug: "pathology",
    title: "Pathology Laboratory",
    description:
      "Full-service lab for blood, urine and other tests with fast, accurate results. From routine biochemistry and haematology to hormone panels, tumour markers and infectious-disease screening — most results are available the same day or within 24 hours.",
    benefits: [
      "Same-day Routine Reports: CBC, lipid profile, sugar, thyroid panels and more.",
      "Home Sample Collection: Trained phlebotomists at your doorstep on request.",
      "Strict QC: Daily calibration and proficiency testing for every analyser.",
      "Digital Delivery: Reports sent via WhatsApp and email; collect printed copies on request.",
    ],
    images: ["/services/patient-v2.png", "/booking/team-v2.png"],
  },
];

export function getServiceBySlug(slug: string): ServiceDetailContent | null {
  return SERVICES.find((s) => s.slug === slug) ?? null;
}
