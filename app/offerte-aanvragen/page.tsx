import type { Metadata } from "next";
import Link from "next/link";

import { LandingHero } from "@/components/landing/LandingHero";
import { TrustedMarquee } from "@/components/sections/TrustedMarquee";
import { ContactPageBody } from "@/components/contact/ContactPageBody";
import { LandingProcess } from "@/components/landing/LandingProcess";
import { FAQAccordion } from "@/components/landing/FAQAccordion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildServiceSchema,
} from "@/lib/seo";

const PATH = "/offerte-aanvragen";
const PAGE_TITLE = "Offerte Aanvragen | Website Laten Ontwerpen & Webshop";
const PAGE_DESC =
  "Vraag binnen 2 minuten een vrijblijvend voorstel of offerte aan voor een professionele website laten ontwerpen of website webshop Laten Ontwerpen. Binnen 24 uur reactie.";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: { absolute: `${PAGE_TITLE} | Sarte Global` },
    description: PAGE_DESC,
    alternates: { canonical: PATH },
    keywords: [
      "website laten ontwerpen",
      "website webshop",
      "offerte website laten maken",
      "webdesign offerte",
      "professionele website laten maken",
      "offerte website Laten Ontwerpen",
      "Sarte Global offerte",
    ],
    openGraph: {
      title: `${PAGE_TITLE} | Sarte Global`,
      description: PAGE_DESC,
      url: PATH,
      type: "website",
      images: [
        {
          url: "/images/company-img.png",
          width: 1200,
          height: 800,
          alt: "Offerte aanvragen · Sarte Global",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${PAGE_TITLE} | Sarte Global`,
      description: PAGE_DESC,
      images: ["/images/company-img.png"],
    },
  };
}

const HERO_CONTENT = {
  eyebrow: "Offerte Aanvragen · Sarte Global",
  badge: "Vrijblijvend voorstel · Binnen 24 uur reactie",
  titleLead: "Start jouw website of",
  titleEm: "webshop Laten Ontwerpen.",
  sub: "Ben je klaar voor een professionele website laten ontwerpen of een converterende website webshop? Vraag binnen 2 minuten een offerte aan. Onze specialisten vertalen jouw wensen naar een razendsnel Next.js of WordPress voorstel.",
  primaryCta: "Direct aanvragen",
  secondaryCta: { label: "Bekijk werkwijze", href: "#werkwijze" },
  rating: {
    score: "4,9",
    label: "Gemiddeld 4,9 / 5 uit reviews van ondernemers",
  },
  pills: [
    { label: "Binnen 24u reactie" },
    { label: "100% Maatwerk" },
    { label: "Direct via WhatsApp" },
    { label: "SEO Blueprint inclusief" },
  ],
  trust: ["Geen templates", "Nederlandse specialisten", "Persoonlijke service"],
  benefits: [
    "Offerte binnen 24 uur in je mailbox",
    "Volledig vrijblijvend adviesgesprek",
    "Inclusief technische SEO-check",
    "Direct contact met senior specialisten",
  ],
};

const OFFERS_FAQ = [
  {
    question: "Wat kost het om een website te laten ontwerpen?",
    answer:
      "Bij Sarte Global start een maatwerk website vanaf €1.995. De uiteindelijke prijs hangt af van specifieke features, het aantal pagina's, en complexiteit. Je ontvangt na de offerteaanvraag altijd een transparant voorstel met een vaste prijs.",
  },
  {
    question: "Wat is het verschil tussen een website en een webshop?",
    answer:
      "Een website richt zich primair op informatievoorziening en leadgeneratie (zoals het invullen van een offerteformulier). Een webshop (e-commerce site) bevat daarnaast productcatalogi, winkelwagens, filteropties en geïntegreerde online betalingssystemen zoals iDEAL en creditcards.",
  },
  {
    question: "Hoe snel ontvang ik de offerte na mijn aanvraag?",
    answer:
      "Je ontvangt binnen 24 uur een reactie van onze senior specialisten. Vaak plannen we eerst een kort (video)gesprek om je wensen door te nemen, waarna je een gedetailleerd voorstel Laten Ontwerpen ontvangt.",
  },
  {
    question:
      "Wordt mijn nieuwe website ook geoptimaliseerd voor Google (SEO)?",
    answer:
      "Ja, al onze websites en webshops worden standaard opgeleverd met een uitstekend SEO-fundament. Dit omvat een schone code-structuur, snelle laadtijd, mobiele optimalisatie en de juiste structured data schema's (JSON-LD) om direct goed te ranken.",
  },
  {
    question: "Kan ik mijn website of webshop later zelf aanpassen?",
    answer:
      "Zeker! Wij koppelen de website aan een gebruiksvriendelijk CMS (zoals WordPress of een headless CMS), waarmee je eenvoudig teksten, afbeeldingen, portfolio-items of producten kunt toevoegen en wijzigen zonder technische kennis.",
  },
  {
    question: "Wat zijn de maandelijkse kosten na oplevering?",
    answer:
      "Dit hangt af van jouw wensen qua hosting, beveiliging en technisch onderhoud. Wij bieden hosting- en onderhoudspakketten aan vanaf €49 per maand, zodat je website altijd snel, veilig en up-to-date blijft.",
  },
];

const SERVICE_JSON_LD = buildServiceSchema({
  path: PATH,
  name: "Website laten ontwerpen & Webshop offerte aanvragen",
  description: PAGE_DESC,
  offerCatalogName: "Website & Webshop Offerte Oplossingen",
  offers: [
    {
      title: "Website Laten Ontwerpen",
      description:
        "Unieke websites Laten Ontwerpen, gebouwd met Next.js of WordPress voor maximale conversie.",
    },
    {
      title: "Website Webshop",
      description:
        "Conversiegerichte webshops en e-commerce platforms Laten Ontwerpen met Shopify of WooCommerce.",
    },
    {
      title: "SEO-optimalisatie",
      description:
        "Ingebouwde schema's, perfecte semantiek en snelle laadtijden voor topposities in Google.",
    },
    {
      title: "Maatwerk functionaliteiten",
      description:
        "API-koppelingen, dynamic forms, en custom integraties specifiek voor jouw bedrijf.",
    },
  ],
});

const BREADCRUMB_JSON_LD = buildBreadcrumbSchema("Offerte aanvragen", PATH);
const FAQ_JSON_LD = buildFaqSchema(OFFERS_FAQ);

export default function OfferteAanvragenPage() {
  return (
    <main className="contact-page" id="top">
      {/* Structured SEO Schema Data */}
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

      {/* 1. Landing Hero Section */}
      <LandingHero content={HERO_CONTENT} primaryCtaHref="#contact-form" />

      {/* 2. Trusted Marquee Section */}
      <TrustedMarquee />

      {/* 3. Core Features / Value Grid Section */}
      <section className="nws" id="inbegrepen" aria-labelledby="features-h">
        <Container>
          <Reveal as="div" className="nws__block">
            <header className="nws__head">
              <span className="eyebrow">Wat zit er inbegrepen?</span>
              <h2 className="h2 nws__title" id="features-h">
                Altijd Een Complete Digitale Basis
              </h2>
              <p className="sub nws__intro">
                Een website laten ontwerpen of website webshop starten bij Sarte
                Global betekent dat je kiest voor kwaliteit zonder compromissen.
                Elk project bevat standaard deze essentiële onderdelen.
              </p>
            </header>

            <div className="nws__meaning">
              <div className="nws__paragraphs">
                <p>
                  Wij geloven niet in half werk. Waar andere bureaus extra
                  kosten rekenen voor mobiele optimalisatie, basis SEO of een
                  beveiligingscertificaat, zit dit bij onze maatwerk projecten
                  standaard inbegrepen.
                </p>
                <p>
                  Vanaf de eerste regel code richten we ons op de prestaties van
                  jouw nieuwe platform. Met een sterke focus op laadsnelheid en
                  conversie-optimalisatie zorgen we dat jouw investering zich
                  snel terugverdient.
                </p>
              </div>

              <ul className="nws__points">
                <li className="nws__point">
                  <h3 className="nws__point-title">100% Uniek UX/UI Design</h3>
                  <p className="nws__point-desc">
                    Geen dertien-in-een-dozijn templates. Jouw website wordt
                    Laten Ontwerpen ontworpen in Figma, volledig passend bij
                    jouw huisstijl.
                  </p>
                </li>
                <li className="nws__point">
                  <h3 className="nws__point-title">Next-Level Laadsnelheid</h3>
                  <p className="nws__point-desc">
                    Dankzij moderne technologieën zoals Next.js en React laden
                    onze websites binnen milliseconden. Goed voor de gebruiker
                    én Google.
                  </p>
                </li>
                <li className="nws__point">
                  <h3 className="nws__point-title">Expert SEO-Fundament</h3>
                  <p className="nws__point-desc">
                    Nette semantische HTML5-structuur, geoptimaliseerde
                    metadata, en JSON-LD structured data schema's voor maximale
                    vindbaarheid.
                  </p>
                </li>
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 4. Project Type Selector Section */}
      <section
        className="nws"
        id="project-types"
        style={{ background: "var(--color-background-secondary)" }}
      >
        <Container>
          <Reveal as="div" className="nws__block">
            <header className="nws__head">
              <span className="eyebrow">Mogelijkheden</span>
              <h2 className="h2 nws__title">Kies Jouw Project Type</h2>
              <p className="sub nws__intro">
                Of je nu een professionele website wilt laten ontwerpen of een
                complete website webshop wilt lanceren; wij stemmen de offerte
                af op jouw specifieke ambities.
              </p>
            </header>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "2rem",
                marginTop: "3rem",
              }}
            >
              <div
                style={{
                  padding: "2.5rem 2rem",
                  borderRadius: "12px",
                  border: "1px solid var(--color-border)",
                  background: "rgba(255,255,255,0.01)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 600,
                      color: "var(--color-accent)",
                      marginBottom: "1rem",
                    }}
                  >
                    Website Laten Ontwerpen
                  </h3>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "var(--color-text-secondary)",
                      lineHeight: 1.6,
                      marginBottom: "1.5rem",
                    }}
                  >
                    Een unieke website Laten Ontwerpen voor dienstverleners, B2B
                    en MKB. Ontworpen in Figma en ontwikkeld in Next.js of
                    WordPress voor een ongeëvenaarde klantervaring.
                  </p>
                  <ul
                    style={{
                      paddingLeft: "1.2rem",
                      margin: "1rem 0",
                      color: "var(--color-text-muted)",
                      fontSize: "0.9rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                    }}
                  >
                    <li>✓ Uniek UX/UI design</li>
                    <li>✓ Volledig responsive & mobielvriendelijk</li>
                    <li>✓ Eenvoudig zelf aan te passen via CMS</li>
                  </ul>
                </div>
                <a
                  href="#contact-form"
                  className="btn btn-outline"
                  style={{
                    marginTop: "1.5rem",
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  Kies deze optie
                </a>
              </div>

              <div
                style={{
                  padding: "2.5rem 2rem",
                  borderRadius: "12px",
                  border: "1px solid var(--color-border)",
                  background: "rgba(255,255,255,0.01)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 600,
                      color: "var(--color-accent)",
                      marginBottom: "1rem",
                    }}
                  >
                    Website Webshop
                  </h3>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "var(--color-text-secondary)",
                      lineHeight: 1.6,
                      marginBottom: "1.5rem",
                    }}
                  >
                    Een professionele webwinkel Laten Ontwerpen met naadloze
                    betalingskoppelingen (iDEAL, Stripe) en geavanceerd
                    productbeheer via WooCommerce of Shopify.
                  </p>
                  <ul
                    style={{
                      paddingLeft: "1.2rem",
                      margin: "1rem 0",
                      color: "var(--color-text-muted)",
                      fontSize: "0.9rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                    }}
                  >
                    <li>✓ Conversie-geoptimaliseerde checkout</li>
                    <li>✓ Geavanceerde filters & productopties</li>
                    <li>✓ Volledige controle over voorraad & orders</li>
                  </ul>
                </div>
                <a
                  href="#contact-form"
                  className="btn btn-outline"
                  style={{
                    marginTop: "1.5rem",
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  Kies deze optie
                </a>
              </div>

              <div
                style={{
                  padding: "2.5rem 2rem",
                  borderRadius: "12px",
                  border: "1px solid var(--color-border)",
                  background: "rgba(255,255,255,0.01)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 600,
                      color: "var(--color-accent)",
                      marginBottom: "1rem",
                    }}
                  >
                    Webapplicatie & Portaal
                  </h3>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "var(--color-text-secondary)",
                      lineHeight: 1.6,
                      marginBottom: "1.5rem",
                    }}
                  >
                    Maatwerk webapplicaties, klantportalen, e-learning platforms
                    of koppelingen met externe API's en CRM-systemen. Snelle en
                    schaalbare code.
                  </p>
                  <ul
                    style={{
                      paddingLeft: "1.2rem",
                      margin: "1rem 0",
                      color: "var(--color-text-muted)",
                      fontSize: "0.9rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                    }}
                  >
                    <li>✓ Headless CMS & API-integraties</li>
                    <li>✓ Gebruikersregistratie & rollenbeheer</li>
                    <li>✓ Schaalbaar en veilig gecodeerd</li>
                  </ul>
                </div>
                <a
                  href="#contact-form"
                  className="btn btn-outline"
                  style={{
                    marginTop: "1.5rem",
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  Kies deze optie
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 5. Interactive Quote Request Form Section */}
      <ContactPageBody />

      {/* 6. Snelheid & Performance Comparison Section */}
      <section
        className="nws"
        id="snelheid"
        style={{ background: "var(--color-background-tertiary)" }}
      >
        <Container>
          <Reveal as="div" className="nws__block">
            <header className="nws__head">
              <span className="eyebrow">Laadsnelheid & UX</span>
              <h2 className="h2 nws__title">
                Waarom Trage Templates Jouw Omzet Kosten
              </h2>
              <p className="sub nws__intro">
                Elke extra seconde laadtijd verlaagt de conversie met gemiddeld
                7%. Google eist snelle mobiele prestaties (Core Web Vitals) om
                hoog te ranken.
              </p>
            </header>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "3rem",
                marginTop: "3rem",
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    marginBottom: "1rem",
                    color: "#EF4444",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span>✕</span> Standaard WordPress / Elementor
                </h3>
                <div
                  style={{
                    height: "8px",
                    background: "rgba(239, 68, 68, 0.2)",
                    borderRadius: "4px",
                    overflow: "hidden",
                    marginBottom: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: "35%",
                      height: "100%",
                      background: "#EF4444",
                    }}
                  ></div>
                </div>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.6,
                  }}
                >
                  Veel plugins, zware drag-and-drop builders en overtollige code
                  zorgen voor een mobiele PageSpeed score van rond de 35/100.
                  Dit leidt tot hoge bouncepercentages en slechte vindbaarheid.
                </p>
              </div>

              <div>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    marginBottom: "1rem",
                    color: "#10B981",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span>✓</span> Sarte Global Maatwerk (Next.js)
                </h3>
                <div
                  style={{
                    height: "8px",
                    background: "rgba(16, 185, 129, 0.2)",
                    borderRadius: "4px",
                    overflow: "hidden",
                    marginBottom: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: "98%",
                      height: "100%",
                      background: "#10B981",
                    }}
                  ></div>
                </div>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.6,
                  }}
                >
                  Onze Laten Ontwerpen gecodeerde Next.js en React architecturen
                  bereiken mobiele prestatiescores van 95+ en laden binnen 0,8
                  seconden. Dit maximaliseert de conversie van elke bezoeker.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 7. Technical SEO & Vindbaarheid Blueprint Section */}
      <section className="nws" id="seo-blueprint">
        <Container>
          <Reveal as="div" className="nws__block">
            <header className="nws__head">
              <span className="eyebrow">Vindbaarheid In Google</span>
              <h2 className="h2 nws__title">
                Ingebouwde SEO Voor Maximaal Organisch Bereik
              </h2>
              <p className="sub nws__intro">
                Een prachtige website laten ontwerpen heeft alleen zin als
                potentiële klanten je ook daadwerkelijk kunnen vinden. Daarom is
                technische SEO de kern van ons proces.
              </p>
            </header>

            <div className="nws__meaning">
              <div className="nws__paragraphs">
                <p>
                  Bij Sarte Global bouwen we websites volgens de strengste eisen
                  van zoekmachines. Dit betekent dat we niet achteraf een
                  SEO-plugin installeren, maar dat de gehele code vanaf de
                  eerste regel is geoptimaliseerd voor keywords zoals **website
                  laten ontwerpen** en **website webshop**.
                </p>
                <p>
                  We implementeren geautomatiseerde sitemaps, nette robots.txt
                  bestanden, geoptimaliseerde header-hiërarchieën (H1, H2, H3)
                  en supersnelle laadtijden die Google beloont met hogere
                  posities.
                </p>
              </div>

              <ul className="nws__points">
                <li className="nws__point">
                  <h3 className="nws__point-title">
                    Schema.org Structured Data
                  </h3>
                  <p className="nws__point-desc">
                    Wij voegen JSON-LD codes toe aan je pagina's zodat
                    zoekmachines direct begrijpen wat jouw bedrijf, diensten of
                    producten inhouden.
                  </p>
                </li>
                <li className="nws__point">
                  <h3 className="nws__point-title">Semantische HTML5 Code</h3>
                  <p className="nws__point-desc">
                    Door gebruik te maken van schone, gestructureerde tags
                    kunnen crawlers van Google jouw content makkelijker
                    indexeren.
                  </p>
                </li>
                <li className="nws__point">
                  <h3 className="nws__point-title">Canonical URL's</h3>
                  <p className="nws__point-desc">
                    Wij voorkomen duplicate content-problemen door op elke
                    pagina de juiste canonical tags in te stellen.
                  </p>
                </li>
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 8. UX/UI Design & Figma Process Section */}
      <section
        className="nws"
        id="design-fase"
        style={{ background: "var(--color-background-secondary)" }}
      >
        <Container>
          <Reveal as="div" className="nws__block">
            <header className="nws__head">
              <span className="eyebrow">Design Eerst</span>
              <h2 className="h2 nws__title">
                UX/UI Ontwerp Laten Ontwerpen In Figma
              </h2>
              <p className="sub nws__intro">
                Voordat we ook maar één regel code schrijven, ontwerpen we de
                visuele identiteit van jouw nieuwe platform. Dit voorkomt
                verrassingen en garandeert een unieke uitstraling.
              </p>
            </header>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "2.5rem",
                marginTop: "3rem",
              }}
            >
              <div
                style={{
                  background: "rgba(255,255,255,0.01)",
                  padding: "2rem",
                  borderRadius: "8px",
                  border: "1px solid var(--color-border)",
                }}
              >
                <span
                  style={{ fontSize: "1.75rem", color: "var(--color-accent)" }}
                >
                  ①
                </span>
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    margin: "1rem 0 0.5rem",
                  }}
                >
                  Wireframes & Structuur
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.6,
                  }}
                >
                  We bepalen eerst de ideale paginastructuur en navigatie op
                  basis van jouw doelgroep en conversiedoelen.
                </p>
              </div>

              <div
                style={{
                  background: "rgba(255,255,255,0.01)",
                  padding: "2rem",
                  borderRadius: "8px",
                  border: "1px solid var(--color-border)",
                }}
              >
                <span
                  style={{ fontSize: "1.75rem", color: "var(--color-accent)" }}
                >
                  ②
                </span>
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    margin: "1rem 0 0.5rem",
                  }}
                >
                  Visueel UI-Ontwerp
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.6,
                  }}
                >
                  We ontwerpen the complete look & feel in Figma, inclusief
                  kleuren, typografie en interactieve elementen.
                </p>
              </div>

              <div
                style={{
                  background: "rgba(255,255,255,0.01)",
                  padding: "2rem",
                  borderRadius: "8px",
                  border: "1px solid var(--color-border)",
                }}
              >
                <span
                  style={{ fontSize: "1.75rem", color: "var(--color-accent)" }}
                >
                  ③
                </span>
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    margin: "1rem 0 0.5rem",
                  }}
                >
                  Interactief Prototype
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.6,
                  }}
                >
                  Je kunt door het interactieve design heen klikken en feedback
                  geven voordat de ontwikkelfase start.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 9. Our 5-Step Process Section */}
      <div id="werkwijze">
        <LandingProcess />
      </div>

      {/* 10. FAQ Accordion Section */}
      <FAQAccordion
        items={OFFERS_FAQ}
        title="Veelgestelde Vragen Over Website & Webshop Offertes"
        eyebrow="FAQ"
      />
    </main>
  );
}
