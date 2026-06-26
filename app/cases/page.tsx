import type { Metadata } from "next";

import { PageHero } from "@/components/page/PageHero";
import { ProjectsSection } from "@/components/projects/projects-section";
import { CallToAction } from "@/components/sections/CallToAction";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { Testimonials } from "@/components/sections/Testimonials";

import { SITE } from "@/constants";

const PAGE_TITLE = "Portfolio Website Laten Ontwerpen | Cases | Sarte Global";
const PAGE_DESC =
  "Bekijk geselecteerde cases en portfolioprojecten van Sarte Global. Professionele websites Laten Ontwerpen voor ondernemers in Nederland — responsive, snel en conversiегericht.";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    alternates: { canonical: "/cases" },
    keywords: [
      "website laten ontwerpen",
      "website laten maken",
      "webdesign Laten Ontwerpen",
      "portfolio website laten maken",
      "Sarte Global projecten",
    ],
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESC,
      url: "/cases",
      type: "website",
      images: [
        {
          url: "/images/company-img.png",
          width: 1200,
          height: 800,
          alt: PAGE_TITLE,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: PAGE_TITLE,
      description: PAGE_DESC,
    },
  };
}

const HERO = {
  icon: "layers" as const,
  eyebrow: "Werk · Portfolio",
  titleLead: "Geselecteerde cases &",
  titleEm: "projecten Laten Ontwerpen.",
  intro:
    "Een verzorgde selectie recente projecten en websites Laten Ontwerpen — filter op categorie om het soort werk te bekijken.",
  align: "center" as const,
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Cases & Portfolio",
      item: `${SITE.url}/cases`,
    },
  ],
};

export default function CasesPage() {
  return (
    <main className="work-page" id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }}
      />
      <PageHero content={HERO} id="work-h" />
      <ProjectsSection />
      <ImpactStats />
      <Testimonials />
      <CallToAction />

      {/* Interne links */}
      <section className="lp-related" aria-label="Meer over Sarte Global">
        <div className="container">
          <nav className="lp-related__nav" aria-label="Gerelateerde pagina's">
            <a href="/">Home — website laten ontwerpen</a>
            <a href="/website-laten-maken">Website laten maken</a>
            <a href="/website-laten-ontwerpen">Website laten ontwerpen</a>
            <a href="/ecommerce-oplossingen">E-commerce oplossingen</a>
            <a href="/wordpress-website-laten-maken">
              WordPress website laten maken
            </a>
            <a href="/offerte-aanvragen">Offerte aanvragen</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      </section>
    </main>
  );
}
