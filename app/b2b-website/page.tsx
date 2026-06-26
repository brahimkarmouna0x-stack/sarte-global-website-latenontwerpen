import type { Metadata } from "next";
import Link from "next/link";

import { FAQAccordion } from "@/components/landing/FAQAccordion";
import { LandingCases } from "@/components/landing/LandingCases";
import { LandingLocalSeo } from "@/components/landing/LandingLocalSeo";
import { LandingWhyStats } from "@/components/landing/LandingWhyStats";
import { LandingFeaturesSlider } from "@/components/landing/LandingFeaturesSlider";
import { LandingFinalCTA } from "@/components/landing/LandingFinalCTA";
import { LandingHero } from "@/components/landing/LandingHero";
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

const PATH = "/b2b-website";
const PAGE_TITLE =
  "B2B Website Laten Maken | Professioneel & Laten Ontwerpen | Sarte Global";
const PAGE_DESC =
  "Professionele B2B website Laten Ontwerpen laten maken. Genereren van hoogwaardige leads, naadloze koppelingen en premium design voor bedrijven. Vraag een offerte aan.";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: { absolute: PAGE_TITLE },
    description: PAGE_DESC,
    alternates: { canonical: PATH },
    keywords: [
      "website laten maken",
      "website laten ontwerpen",
      "b2b website laten maken",
      "professionele website",
      "website voor bedrijven",
      "Sarte Global B2B",
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
          alt: "B2B website Laten Ontwerpen · Sarte Global",
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

const B2B_FAQ = [
  {
    question: "Wat maakt een website een goede B2B website?",
    answer:
      "Een sterke B2B website is volledig gericht op leadgeneratie en het informeren van zakelijke beslissers. Dit vereist een heldere waardepropositie, duidelijke call-to-actions, professionele case studies (social proof) en de mogelijkheid tot naadloze integraties met CRM-systemen.",
  },
  {
    question: "Kunnen we onze B2B website koppelen aan ons CRM?",
    answer:
      "Ja. We bouwen koppelingen met gangbare CRM- en marketing-automation platformen zoals HubSpot, Salesforce, ActiveCampaign en Mailchimp, zodat binnengekomen leads direct op de juiste plek belanden.",
  },
  {
    question: "Wat is de doorlooptijd van een B2B website Laten Ontwerpen?",
    answer:
      "Gemiddeld staat een B2B website Laten Ontwerpen binnen 3 tot 5 weken online. Dit is inclusief de strategische fase, het unieke UX/UI design, de daadwerkelijke bouw (Next.js of WordPress) en uitvoerige conversie- en snelheidstesten.",
  },
];

const B2B_BENEFITS = [
  {
    title: "Leadgeneratie focus",
    description:
      "Geoptimaliseerde funnels en slimme contactformulieren die prospects omzetten in gekwalificeerde leads.",
  },
  {
    title: "CRM & API Koppelingen",
    description:
      "Naadloze verbinding met jouw interne systemen voor geautomatiseerde leadopvolging.",
  },
  {
    title: "Premium Uitstraling",
    description:
      "Een professioneel design dat direct autoriteit en betrouwbaarheid uitstraalt naar zakelijke beslissers.",
  },
  {
    title: "Snelle Performance",
    description:
      "Hoge laadsnelheid voor een vlekkeloze ervaring op mobiel en desktop, wat leidt tot betere SEO-resultaten.",
  },
];

const SERVICE_JSON_LD = buildServiceSchema({
  path: PATH,
  name: "B2B website Laten Ontwerpen",
  description: PAGE_DESC,
  offerCatalogName: "B2B website voordelen",
  offers: B2B_BENEFITS,
});

const BREADCRUMB_JSON_LD = buildBreadcrumbSchema("B2B website", PATH);
const FAQ_JSON_LD = buildFaqSchema(B2B_FAQ);

const HERO_CONTENT = {
  eyebrow: "B2B website ontwikkeling Laten Ontwerpen · Sarte Global",
  badge: "B2B Leadgeneratie · Custom Development",
  titleLead: "B2B website Laten Ontwerpen die",
  titleEm: "nieuwe klanten en leads genereert.",
  sub: "Wij bouwen snelle, professionele B2B websites gericht op de zakelijke markt. Geoptimaliseerd voor Google, gekoppeld aan jouw systemen en ontworpen voor conversie.",
  primaryCta: "Offerte aanvragen",
  secondaryCta: { label: "Bekijk ons proces", href: "#proces" },
  rating: { score: "4,9", label: "Vertrouwd door MKB & B2B bedrijven" },
  pills: [
    { label: "CRM Integratie" },
    { label: "Hoge Lead Conversie" },
    { label: "Next.js & WordPress" },
    { label: "100% Maatwerk" },
  ],
  trust: [
    "150+ projecten opgeleverd",
    "B2B specialisten",
    "Conversiegericht design",
    "Snelle hosting",
  ],
  benefits: [
    "Ontworpen voor zakelijke beslissers",
    "Snelheid & SEO-optimalisatie",
    "Geavanceerde formulieren",
    "Duidelijke rapportages",
  ],
};

const B2B_PILLARS = [
  {
    iconName: "spark",
    title: "Leadgeneratie focus",
    description:
      "Geoptimaliseerde funnels en slimme contactformulieren die prospects omzetten in gekwalificeerde leads.",
  },
  {
    iconName: "cpu",
    title: "CRM & API Koppelingen",
    description:
      "Naadloze verbinding met jouw interne systemen voor geautomatiseerde leadopvolging.",
  },
  {
    iconName: "palette",
    title: "Premium Uitstraling",
    description:
      "Een professioneel design dat direct autoriteit en betrouwbaarheid uitstraalt naar zakelijke beslissers.",
  },
  {
    iconName: "lightning",
    title: "Snelle Performance",
    description:
      "Hoge laadsnelheid voor een vlekkeloze ervaring op mobiel en desktop, wat leidt tot betere SEO-resultaten.",
  },
] as const;

const B2B_WHY_CONTENT = {
  eyebrow: "Waarom een B2B website",
  titleLead: "De online motor van",
  titleEm: "jouw zakelijke groei.",
  lead: "Zakelijke kopers oriënteren zich grondig. Een standaard template schiet dan vaak tekort. Sarte Global ontwerpt een B2B website Laten Ontwerpen die naadloos aansluit bij het inkooptraject van jouw doelgroep.",
  media: {
    image: "/images/company-img.png",
    alt: "B2B website Laten Ontwerpen ontwerpen in de studio van Sarte Global.",
    caption: "Sarte Global · B2B",
    tag: "B2B Specialist",
  },
  proof: [
    "Professionele positionering",
    "Geautomatiseerde lead flows",
    "Schaalbaar en toekomstbestendig",
  ],
  pillars: B2B_PILLARS,
  paragraphs: [
    "Een B2B website is geen statische folder, maar een actieve leadgeneratie machine. Wij zorgen ervoor dat jouw diensten helder worden gepresenteerd en dat drempels voor contactmomenten tot een minimum worden beperkt.",
    "Door de technische basis (Next.js/React of geoptimaliseerde WordPress) is de site extreem snel, wat direct resulteert in betere posities in de Google zoekresultaten.",
  ],
};

export default function B2bWebsitePage() {
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
      <LandingWhy content={B2B_WHY_CONTENT} />
      <div id="proces">
        <LandingProcess />
      </div>
      <LandingFeaturesSlider />
      <Services />
      <LandingCases />
      <ProjectsSection />
      <PricingSection defaultServiceSlug="web-development" />
      <Testimonials />
      <FAQAccordion
        items={B2B_FAQ}
        title="Veelgestelde vragen over B2B websites"
      />
      <LandingLocalSeo serviceLabel="B2B website laten maken" />
      <LandingFinalCTA />

      {/* Interne links */}
      <section className="lp-related" aria-label="Meer over Sarte Global">
        <Container>
          <nav className="lp-related__nav" aria-label="Gerelateerde pagina's">
            <Link href="/">Home</Link>
            <Link href="/website-laten-ontwerpen">Website laten ontwerpen</Link>
            <Link href="/b2c-website">B2C website Laten Ontwerpen</Link>
            <Link href="/ecommerce-oplossingen">E-commerce oplossingen</Link>
            <Link href="/woocommerce-website-laten-ontwerpen">
              WooCommerce website
            </Link>
            <Link href="/shopify-website-laten-ontwerpen">Shopify website</Link>
            <Link href="/cases">Cases & projecten</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </Container>
      </section>
    </main>
  );
}
