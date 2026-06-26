import type { Metadata } from "next";
import Link from "next/link";

import { FAQAccordion } from "@/components/landing/FAQAccordion";
import { LandingCases } from "@/components/landing/LandingCases";
import { LandingLocalSeo } from "@/components/landing/LandingLocalSeo";
import { LandingWhyStats } from "@/components/landing/LandingWhyStats";
import { LandingFeaturesSlider } from "@/components/landing/LandingFeaturesSlider";
import { LandingFinalCTA } from "@/components/landing/LandingFinalCTA";
import { LandingHero } from "@/components/landing/LandingHero";
import { LandingIndustries } from "@/components/landing/LandingIndustries";
import { LandingProcess } from "@/components/landing/LandingProcess";
import { LandingTrustStats } from "@/components/landing/LandingTrustStats";
import { LandingWhy } from "@/components/landing/LandingWhy";
import { PricingSchema } from "@/components/pricing/PricingSchema";
import { PricingSection } from "@/components/pricing/PricingSection";
import { TrustedMarquee } from "@/components/sections/TrustedMarquee";
import { Services } from "@/components/sections/Services";
import { ProjectsSection } from "@/components/projects/projects-section";
import { Testimonials } from "@/components/sections/Testimonials";
import { Container } from "@/components/ui/Container";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildServiceSchema,
} from "@/lib/seo";
import { LANDING_BENEFITS, LANDING_FAQ } from "@/constants";

const PATH = "/website-laten-ontwerpen";
const PAGE_TITLE = "Website Laten Ontwerpen Laten Ontwerpen | Sarte Global";
const PAGE_DESC =
  "Professionele website laten ontwerpen Laten Ontwerpen. Next.js, WordPress en maatwerk design met sterke SEO en hoge conversie voor bedrijven in Nederland. Vraag een offerte aan.";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: { absolute: PAGE_TITLE },
    description: PAGE_DESC,
    alternates: { canonical: PATH },
    keywords: [
      "website laten ontwerpen",
      "professionele website laten ontwerpen",
      "webdesign Laten Ontwerpen",
      "maatwerk webdesign",
      "website Laten Ontwerpen",
      "maatwerk website",
      "professionele website",
      "website voor bedrijven",
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
          alt: "Website laten ontwerpen Laten Ontwerpen · Sarte Global",
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

const CUSTOM_FAQ = [
  {
    question: "Wat is een website Laten Ontwerpen?",
    answer:
      "Een website Laten Ontwerpen wordt vanaf de grond af ontworpen en ontwikkeld specifiek voor jouw merk, doelgroep en functionele eisen. Geen kant-en-klaar template, maar uniek design en geoptimaliseerde techniek (zoals Next.js of WordPress) gericht op maximale conversie en laadsnelheid.",
  },
  {
    question: "Wat kost een website Laten Ontwerpen laten ontwerpen?",
    answer:
      "Bij Sarte Global start een professionele website Laten Ontwerpen vanaf €1.995. De exacte prijs is afhankelijk van de complexiteit, het aantal pagina's en specifieke functionaliteiten zoals filters, meertaligheid of API-koppelingen. Je ontvangt vooraf altijd een transparant voorstel met een vaste prijs.",
  },
  ...LANDING_FAQ,
];

const SERVICE_JSON_LD = buildServiceSchema({
  path: PATH,
  name: "Website laten ontwerpen Laten Ontwerpen",
  description: PAGE_DESC,
  offerCatalogName: "Voordelen van een website Laten Ontwerpen",
  offers: LANDING_BENEFITS,
});

const BREADCRUMB_JSON_LD = buildBreadcrumbSchema(
  "Website laten ontwerpen",
  PATH,
);
const FAQ_JSON_LD = buildFaqSchema(CUSTOM_FAQ);

const HERO_CONTENT = {
  eyebrow: "Website laten ontwerpen Laten Ontwerpen · Sarte Global",
  badge: "Maatwerk design · Nu 3 plekken beschikbaar",
  titleLead: "Website Laten Ontwerpen laten",
  titleEm: "ontwerpen voor maximaal resultaat.",
  sub: "Sarte Global ontwerpt en ontwikkelt unieke, responsive websites Laten Ontwerpen voor ambitieuze bedrijven. Razendsnel, SEO-geoptimaliseerd en gebouwd om bezoekers om te zetten in klanten.",
  primaryCta: "Offerte aanvragen",
  secondaryCta: { label: "Bekijk ons werk", href: "#cases" },
  rating: { score: "4,9", label: "Gemiddeld 4,9 / 5 uit 100+ reviews" },
  pills: [
    { label: "100% uniek design" },
    { label: "0,8s laadtijd" },
    { label: "SEO-geoptimaliseerd" },
    { label: "Conversiegericht" },
  ],
  trust: [
    "150+ projecten opgeleverd",
    "Nederlandse specialisten",
    "Maatwerk code",
    "100% eigenaarschap",
  ],
  benefits: [
    "Uniek design passend bij je merk",
    "Sterk SEO fundament",
    "Koppelingen & API's mogelijk",
    "Persoonlijke support",
  ],
};

export default function WebsiteLatenOntwerpenPage() {
  return (
    <main className="wlm" id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSON_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
      <PricingSchema serviceSlug="web-development" emitFaq={false} />

      <LandingHero content={HERO_CONTENT} primaryCtaHref="/offerte-aanvragen" />
      <TrustedMarquee />
      <LandingTrustStats />
      <LandingWhyStats />
      <LandingWhy />
      <LandingProcess />
      <LandingFeaturesSlider />
      <Services />
      <LandingCases />

      <div id="cases">
        <ProjectsSection />
      </div>

      <LandingIndustries />
      <PricingSection defaultServiceSlug="web-development" />
      <Testimonials />
      <FAQAccordion
        items={CUSTOM_FAQ}
        title="Veelgestelde vragen over websites Laten Ontwerpen"
      />
      <LandingLocalSeo serviceLabel="Website laten ontwerpen" />
      <LandingFinalCTA />

      {/* Interne links */}
      <section className="lp-related" aria-label="Meer over Sarte Global">
        <Container>
          <nav className="lp-related__nav" aria-label="Gerelateerde pagina's">
            <Link href="/">Home</Link>
            <Link href="/website-laten-maken">Website laten maken</Link>
            <Link href="/ecommerce-oplossingen">E-commerce oplossingen</Link>
            <Link href="/woocommerce-website-laten-ontwerpen">
              WooCommerce website Laten Ontwerpen
            </Link>
            <Link href="/shopify-website-laten-ontwerpen">
              Shopify website Laten Ontwerpen
            </Link>
            <Link href="/cases">Cases & projecten</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </Container>
      </section>
    </main>
  );
}
