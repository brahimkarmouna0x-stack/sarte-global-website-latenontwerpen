import type { Metadata } from "next";

import { PageHero } from "@/components/page/PageHero";
import { CallToAction } from "@/components/sections/CallToAction";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { SERVICES, SITE } from "@/constants";

const PATH = "/services";
const PAGE_TITLE = "Alle Website Diensten | Webdesign Bureau | Sarte Global";
const PAGE_DESC =
  "Ontdek alle diensten van Sarte Global: website laten ontwerpen, B2B en B2C websites, e-commerce oplossingen, SEO optimalisatie en webdesign Laten Ontwerpen. Eén bureau, alle digitale expertise.";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: { absolute: PAGE_TITLE },
    description: PAGE_DESC,
    alternates: { canonical: PATH },
    keywords: [
      "website laten ontwerpen",
      "website laten maken",
      "webdesign Laten Ontwerpen",
      "website voor bedrijven",
      "ecommerce oplossingen",
      "seo optimalisatie",
      "Sarte Global diensten",
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
      images: ["/images/company-img.png"],
    },
  };
}

const HERO = {
  icon: "layers" as const,
  eyebrow: "Diensten · Sarte Global",
  titleLead: "Eén partner voor",
  titleEm: "jouw digitale groei.",
  intro:
    "Van een nieuwe website of webshop laten maken tot SEO, UX/UI-design en online advertising. Bekijk wat Sarte Global voor jouw bedrijf kan betekenen.",
  align: "center" as const,
};

// BreadcrumbList — gives every /services/[slug] detail page a real parent URL.
const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Diensten",
      item: `${SITE.url}${PATH}`,
    },
  ],
};

// ItemList of every service, linking to its canonical URL (the four keyword
// offerings use their dedicated landing page via `service.href`).
const ITEM_LIST_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Diensten van Sarte Global",
  itemListElement: SERVICES.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: service.name,
    description: service.tagline,
    url: `${SITE.url}${service.href}`,
  })),
};

const WEBPAGE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE.url}${PATH}/#webpage`,
  url: `${SITE.url}${PATH}`,
  name: PAGE_TITLE,
  description: PAGE_DESC,
  inLanguage: "nl-NL",
  isPartOf: { "@id": `${SITE.url}/#website` },
};

export default function ServicesHubPage() {
  return (
    <main className="services-hub" id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ITEM_LIST_JSON_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_JSON_LD) }}
      />
      <PageHero content={HERO} id="services-hub-h" />
      <Services />
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
            <a href="/ecommerce-oplossingen">E-commerce oplossingen</a>
            <a href="/seo-optimalisatie">SEO optimalisatie</a>
            <a href="/landing-page-laten-maken">Landing page laten maken</a>
            <a href="/cases">Cases &amp; portfolio</a>
            <a href="/offerte-aanvragen">Offerte aanvragen</a>
          </nav>
        </div>
      </section>
    </main>
  );
}
