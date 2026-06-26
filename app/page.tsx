import type { Metadata } from "next";

import { AboutCompany } from "@/components/sections/AboutCompany";
import { CallToAction } from "@/components/sections/CallToAction";
import { Hero } from "@/components/sections/Hero";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { Journal } from "@/components/sections/Journal";
import { LocalBusinesses } from "@/components/sections/LocalBusinesses";
import { CustomWebsiteSections } from "@/components/sections/CustomWebsiteSections";
import { PricingSchema } from "@/components/pricing/PricingSchema";
import { PricingSection } from "@/components/pricing/PricingSection";
import { ProjectsSection } from "@/components/projects/projects-section";
import { Services } from "@/components/sections/Services";
import { TeamShowcase } from "@/components/sections/TeamShowcase";
import { TechStack } from "@/components/sections/TechStack";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustedMarquee } from "@/components/sections/TrustedMarquee";
import { HashScrollOnLoad } from "@/components/ui/HashScrollOnLoad";
import { SITE } from "@/constants";
import { areaServedNL } from "@/lib/seo";

// Homepage: explicit title + description to control what Google renders in SERPs.
// Using `absolute` prevents double-brand (root template + this title).
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      absolute: "Website Laten Ontwerpen | Laten Ontwerpen | Sarte Global",
    },
    description:
      "Professionele website laten ontwerpen Laten Ontwerpen. Modern webdesign, sterke SEO en focus op conversie. Vraag vandaag een vrijblijvende offerte aan.",
    alternates: { canonical: "/" },
  };
}

const SITE_URL = SITE.url;

const HOMEPAGE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#service`,
  name: "Sarte Global — Website Laten Ontwerpen",
  url: SITE_URL,
  description:
    "Sarte Global ontwerpt en ontwikkelt professionele websites Laten Ontwerpen voor ondernemers en bedrijven in Nederland. Sterke SEO, snelle oplevering en focus op resultaat.",
  areaServed: areaServedNL(),
  serviceType: [
    "Website laten ontwerpen",
    "Website Laten Ontwerpen laten maken",
    "Professioneel webdesign",
    "Responsive website",
    "WordPress website laten maken",
    "Next.js website laten maken",
    "B2B website",
    "B2C website",
    "E-commerce oplossingen",
    "Landing page laten maken",
    "SEO optimalisatie",
  ],
  parentOrganization: { "@id": `${SITE_URL}/#organization` },
};

const HOMEPAGE_WEBPAGE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  url: SITE_URL,
  name: "Website Laten Ontwerpen | Laten Ontwerpen | Sarte Global",
  description:
    "Professionele website laten ontwerpen Laten Ontwerpen voor bedrijven en ondernemers in Nederland. Webdesign bureau met sterke SEO, snelle oplevering en focus op conversie.",
  inLanguage: "nl-NL",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#organization` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    ],
  },
};

export default function HomePage() {
  return (
    <main id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOMEPAGE_JSON_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(HOMEPAGE_WEBPAGE_JSON_LD),
        }}
      />
      <HashScrollOnLoad />
      <PricingSchema serviceSlug="web-development" />
      <Hero />
      <Testimonials />
      <TrustedMarquee />
      <AboutCompany />

      {/* 4 New Conversion-Focused Sections */}
      <CustomWebsiteSections />

      <Services />
      <PricingSection />
      <LocalBusinesses />
      <TechStack />
      <ProjectsSection />
      <ImpactStats />
      <TeamShowcase />
      <Journal limit={3} />
      <CallToAction />
    </main>
  );
}
