import type { Metadata } from "next";

import { PageHero } from "@/components/page/PageHero";
import { CallToAction } from "@/components/sections/CallToAction";
import { Journal } from "@/components/sections/Journal";
import { Container } from "@/components/ui/Container";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { Reveal } from "@/components/ui/Reveal";
import { NEWSLETTER, SITE } from "@/constants";

const PAGE_TITLE = "Website Tips & SEO Blog | Kennis Over Webdesign";
const PAGE_DESC =
  "Praktische artikelen over website laten ontwerpen, webdesign, SEO en online groei voor ondernemers. Geschreven door Sarte Global — webdesign bureau in Nederland.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: "/journal" },
  keywords: [
    "website tips",
    "webdesign tips nederland",
    "seo tips website",
    "website laten ontwerpen blog",
    "online groei ondernemers",
    "website laten maken",
    "Sarte Global journal",
  ],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: "/journal",
    type: "website",
    images: [{ url: "/images/company-img.png", width: 1200, height: 800, alt: PAGE_TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESC,
  },
};

const BLOG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${SITE.url}/journal/#blog`,
  url: `${SITE.url}/journal`,
  name: "Website Tips & SEO Blog | Sarte Global",
  description: PAGE_DESC,
  inLanguage: "nl-NL",
  publisher: { "@id": `${SITE.url}/#organization` },
  isPartOf: { "@id": `${SITE.url}/#website` },
};

const HERO = {
  icon: "spark" as const,
  eyebrow: "Journal · Inzichten",
  titleLead: "Inzichten vanuit",
  titleEm: "ons bureau.",
  intro:
    "Praktische artikelen over websites, SEO en online groei voor ondernemers. Lang genoeg om nuttig te zijn, kort genoeg om bij de koffie te lezen.",
  align: "center" as const,
};

export default function JournalPage() {
  return (
    <main className="journal-page" id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BLOG_JSON_LD) }}
      />
      <PageHero content={HERO} id="journal-h" />
      <Journal />

      <section className="journal-news" aria-labelledby="journal-news-h">
        <Container>
          <Reveal className="journal-news__card">
            <div className="journal-news__body">
              <span className="eyebrow">{NEWSLETTER.title}</span>
              <h2 id="journal-news-h" className="journal-news__title">
                Ontvang inzichten in <em>jouw inbox.</em>
              </h2>
              <p className="journal-news__sub">{NEWSLETTER.description}</p>
            </div>
            <div className="journal-news__form">
              <NewsletterForm />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Interne links naar commerciële pagina's */}
      <section className="lp-related" aria-label="Website laten ontwerpen">
        <Container>
          <nav className="lp-related__nav" aria-label="Onze diensten">
            <a href="/website-laten-ontwerpen">Website laten ontwerpen</a>
            <a href="/website-laten-maken">Nieuwe website laten maken</a>
            <a href="/wordpress-website-laten-maken">WordPress website laten maken</a>
            <a href="/seo-optimalisatie">SEO optimalisatie</a>
            <a href="/landing-page-laten-maken">Landing page laten maken</a>
            <a href="/offerte-aanvragen">Offerte aanvragen</a>
          </nav>
        </Container>
      </section>

      <CallToAction />
    </main>
  );
}
