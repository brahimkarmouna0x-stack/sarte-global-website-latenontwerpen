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

const PATH = "/b2c-website";
const PAGE_TITLE =
  "B2C Website Laten Maken | Conversiegericht & Laten Ontwerpen | Sarte Global";
const PAGE_DESC =
  "Professionele B2C website Laten Ontwerpen laten maken. Sterke branding, mobielvriendelijk design en maximale laadsnelheid voor de consumentenmarkt. Vraag een offerte aan.";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: { absolute: PAGE_TITLE },
    description: PAGE_DESC,
    alternates: { canonical: PATH },
    keywords: [
      "website laten maken",
      "website laten ontwerpen",
      "b2c website laten maken",
      "website Laten Ontwerpen b2c",
      "website voor bedrijven",
      "Sarte Global B2C",
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
          alt: "B2C website Laten Ontwerpen · Sarte Global",
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

const B2C_FAQ = [
  {
    question:
      "Waarom is mobiele optimalisatie zo belangrijk voor B2C websites?",
    answer:
      "Meer dan 70% van de consumenten bezoekt websites via hun smartphone. Een B2C website moet daarom perfect schalen, snel laden op mobiele netwerken en duidelijke, makkelijk tikbare knoppen hebben.",
  },
  {
    question:
      "Hoe helpt een website Laten Ontwerpen bij het verhogen van de verkoop?",
    answer:
      "Een Laten Ontwerpen gemaakte B2C website is ontworpen rondom het gedrag van jouw specifieke doelgroep. Dit minimaliseert de stappen naar contact of aankoop en verhoogt de betrouwbaarheid, wat leidt tot een aanzienlijk hogere conversie vergeleken met standaard templates.",
  },
  {
    question: "Is SEO inbegrepen bij een B2C website?",
    answer:
      "Zeker. We leveren alle websites op met een ijzersterke on-page SEO-basis, gestructureerde data (schema.org) en snelle laadtijden, zodat je direct vindbaar bent voor consumenten.",
  },
];

const B2C_BENEFITS = [
  {
    title: "Mobile-First Design",
    description:
      "Vlekkeloze presentatie en snelle laadtijden op smartphones en tablets.",
  },
  {
    title: "Optimale Conversie",
    description:
      "Duidelijke navigatie en effectieve call-to-actions die de consument aanzetten tot actie.",
  },
  {
    title: "Sterke Merkbeleving",
    description:
      "Uniek grafisch ontwerp dat aansluit bij jouw huisstijl en betrouwbaarheid uitstraalt.",
  },
  {
    title: "Lokale Vindbaarheid",
    description:
      "SEO-optimalisatie gericht op consumenten in jouw directe werkgebied.",
  },
];

const SERVICE_JSON_LD = buildServiceSchema({
  path: PATH,
  name: "B2C website Laten Ontwerpen",
  description: PAGE_DESC,
  offerCatalogName: "B2C website voordelen",
  offers: B2C_BENEFITS,
});

const BREADCRUMB_JSON_LD = buildBreadcrumbSchema("B2C website", PATH);
const FAQ_JSON_LD = buildFaqSchema(B2C_FAQ);

const HERO_CONTENT = {
  eyebrow: "B2C website ontwikkeling · Sarte Global",
  badge: "B2C Conversie · Custom Webdesign",
  titleLead: "B2C website Laten Ontwerpen die",
  titleEm: "bezoekers overtuigt en activeert.",
  sub: "Wij ontwerpen en bouwen conversiegerichte B2C websites voor ondernemers die consumenten willen bereiken. Modern, razendsnel en optimaal vindbaar in Google.",
  primaryCta: "Offerte aanvragen",
  secondaryCta: { label: "Bekijk ons proces", href: "#proces" },
  rating: { score: "4,9", label: "Vertrouwd door consumentgerichte bedrijven" },
  pills: [
    { label: "Mobile-First" },
    { label: "CRO Geoptimaliseerd" },
    { label: "Razendsnel" },
    { label: "Modern Design" },
  ],
  trust: [
    "150+ projecten opgeleverd",
    "Conversie-experts",
    "Snelle laadtijd",
    "Nederlandse support",
  ],
  benefits: [
    "Ontworpen voor consumenten",
    "Snelheid & SEO-optimalisatie",
    "Eenvoudig beheer (CMS)",
    "Conversie-gericht",
  ],
};

const B2C_PILLARS = [
  {
    iconName: "layers",
    title: "Mobile-First Design",
    description:
      "Vlekkeloze presentatie en snelle laadtijden op smartphones en tablets.",
  },
  {
    iconName: "spark",
    title: "Optimale Conversie",
    description:
      "Duidelijke navigatie en effectieve call-to-actions die de consument aanzetten tot actie.",
  },
  {
    iconName: "palette",
    title: "Sterke Merkbeleving",
    description:
      "Uniek grafisch ontwerp dat aansluit bij jouw huisstijl en betrouwbaarheid uitstraalt.",
  },
  {
    iconName: "search",
    title: "Lokale Vindbaarheid",
    description:
      "SEO-optimalisatie gericht op consumenten in jouw directe werkgebied.",
  },
] as const;

const B2C_WHY_CONTENT = {
  eyebrow: "Waarom een B2C website",
  titleLead: "Het visitekaartje dat",
  titleEm: "consumenten overtuigt.",
  lead: "Consumenten beslissen binnen enkele seconden of ze op een website blijven. Een professionele, moderne website Laten Ontwerpen zorgt voor een onvergetelijke eerste indruk en wekt direct het nodige vertrouwen.",
  media: {
    image: "/images/company-img.png",
    alt: "B2C website Laten Ontwerpen ontwerpen door het team van Sarte Global.",
    caption: "Sarte Global · B2C",
    tag: "B2C Specialist",
  },
  proof: [
    "Snelle mobiele beleving",
    "Duidelijke CTA's",
    "SEO-klaar vanaf oplevering",
  ],
  pillars: B2C_PILLARS,
  paragraphs: [
    "Bij Sarte Global bouwen we websites Laten Ontwerpen die de ideale koper aanspreken. We analyseren de customer journey en stemmen het design en de copy hier volledig op af.",
    "Bovendien zorgen we voor een gebruiksvriendelijk CMS, zodat je zelf makkelijk teksten, foto's of acties kunt aanpassen zonder dat je technische kennis nodig hebt.",
  ],
};

export default function B2cWebsitePage() {
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
      <LandingWhy content={B2C_WHY_CONTENT} />
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
        items={B2C_FAQ}
        title="Veelgestelde vragen over B2C websites"
      />
      <LandingLocalSeo serviceLabel="B2C website laten maken" />
      <LandingFinalCTA />

      {/* Interne links */}
      <section className="lp-related" aria-label="Meer over Sarte Global">
        <Container>
          <nav className="lp-related__nav" aria-label="Gerelateerde pagina's">
            <Link href="/">Home</Link>
            <Link href="/website-laten-ontwerpen">Website laten ontwerpen</Link>
            <Link href="/b2b-website">B2B website Laten Ontwerpen</Link>
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
