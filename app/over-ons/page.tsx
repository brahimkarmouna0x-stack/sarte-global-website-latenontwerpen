import type { Metadata } from "next";

import { AboutCompany } from "@/components/sections/AboutCompany";
import { PageHero } from "@/components/page/PageHero";
import { CallToAction } from "@/components/sections/CallToAction";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { Process } from "@/components/sections/Process";
import { TeamShowcase } from "@/components/sections/TeamShowcase";
import { Testimonials } from "@/components/sections/Testimonials";
import { SITE } from "@/constants";
import { buildBreadcrumbSchema } from "@/lib/seo";

const PATH = "/over-ons";
const PAGE_TITLE = "Over Ons — Webdesign Bureau Nederland | Sarte Global";
const PAGE_DESC =
  "Sarte Global is het webdesign bureau achter website-latenontwerpen.nl. Wij ontwerpen en ontwikkelen professionele websites Laten Ontwerpen voor ondernemers en bedrijven in heel Nederland. Modern design, sterke SEO.";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    alternates: { canonical: PATH },
    keywords: [
      "over ons webdesign bureau",
      "website laten ontwerpen bureau",
      "professioneel webdesign nederland",
      "webdesign specialist",
      "website laten maken bedrijf",
      "Sarte Global",
    ],
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESC,
      url: PATH,
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
  icon: "shield" as const,
  eyebrow: "Over ons · Het bureau",
  titleLead: "Een gefocust team dat",
  titleEm: "ambitieus werk levert.",
  intro:
    "Een klein, ervaren team in Nederland — strategie, design en development voor ondernemers en bedrijven die om kwaliteit geven.",
  align: "center" as const,
};

const ABOUT_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${SITE.url}${PATH}/#aboutpage`,
  url: `${SITE.url}${PATH}`,
  name: PAGE_TITLE,
  description: PAGE_DESC,
  inLanguage: "nl-NL",
  isPartOf: { "@id": `${SITE.url}/#website` },
  about: { "@id": `${SITE.url}/#organization` },
};

const BREADCRUMB_JSON_LD = buildBreadcrumbSchema("Over ons", PATH);

export default function OverOnsPage() {
  return (
    <main className="about-page" id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ABOUT_JSON_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }}
      />
      <PageHero content={HERO} id="about-h" />
      <AboutCompany />
      <ImpactStats />
      <Process />
      <TeamShowcase />
      <Testimonials />
      <CallToAction />

      {/* Interne links */}
      <section className="lp-related" aria-label="Meer over Sarte Global">
        <div className="container">
          <nav className="lp-related__nav" aria-label="Gerelateerde pagina's">
            <a href="/">Home — website laten ontwerpen</a>
            <a href="/website-laten-maken">Website laten maken</a>
            <a href="/website-laten-ontwerpen">
              Professionele website laten ontwerpen
            </a>
            <a href="/services">Alle diensten</a>
            <a href="/cases">Cases &amp; portfolio</a>
            <a href="/contact">Neem contact op</a>
            <a href="/journal">Journal &amp; tips</a>
          </nav>
        </div>
      </section>
    </main>
  );
}
