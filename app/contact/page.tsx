import type { Metadata } from "next";

import { ContactChannels } from "@/components/contact/ContactChannels";
import { ContactPageBody } from "@/components/contact/ContactPageBody";
import { PageHero } from "@/components/page/PageHero";
import { CONTACT_CHANNELS, CONTACT_HERO } from "@/constants/contact-page";
import { SITE } from "@/constants";
import { getSiteSettings } from "@/lib/settings";
import type { ContactChannel, SiteSettings } from "@/types";

const PAGE_TITLE = "Contact — Website Laten Ontwerpen | Sarte Global";
const PAGE_DESC =
  "Neem contact op met Sarte Global voor een professionele website Laten Ontwerpen. We reageren binnen één werkdag — per e-mail of WhatsApp. Vrijblijvend gesprek aanvragen.";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: { absolute: PAGE_TITLE },
    description: PAGE_DESC,
    alternates: { canonical: "/contact" },
    keywords: [
      "contact website laten ontwerpen",
      "website laten maken offerte",
      "webdesign bureau nederland contact",
      "offerte website laten maken",
      "Sarte Global contact",
    ],
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESC,
      url: "/contact",
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

const SITE_URL = SITE.url;

/** Merges the static channel copy (labels, notes, icons) with live settings values from Supabase. */
function buildContactChannels(
  settings: SiteSettings,
): readonly ContactChannel[] {
  return CONTACT_CHANNELS.flatMap((channel) => {
    switch (channel.icon) {
      case "mail":
        return [
          {
            ...channel,
            value: settings.email,
            href: `mailto:${settings.email}`,
          },
        ];
      case "phone":
        // Online-only/national: hide the phone channel entirely when no valid
        // number is configured, rather than showing an empty `tel:` link.
        if (!settings.phone) return [];
        return [
          {
            ...channel,
            value: settings.phone,
            // Keep only digits and a leading "+" so the result is always a valid
            // `tel:` URL (mirrors the footer; avoids React's `about:invalid` href
            // sanitization on numbers containing spaces or punctuation).
            href: `tel:${settings.phone.replace(/[^\d+]/g, "")}`,
          },
        ];
      case "chat":
        return [{ ...channel, href: `https://wa.me/${settings.whatsapp}` }];
      default:
        return [channel];
    }
  });
}

function buildContactJsonLd(settings: SiteSettings) {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: `${SITE_URL}/contact`,
    name: "Contact · Sarte Global",
    description: PAGE_DESC,
    mainEntity: {
      "@type": "Organization",
      name: "Sarte Global",
      email: settings.email,
      ...(settings.phone ? { telephone: settings.phone } : {}),
      address: {
        // Online-only / nationaal: alleen land, geen (fictief) vestigingsadres.
        "@type": "PostalAddress",
        addressCountry: "NL",
      },
    },
  };
}

export default async function ContactPage() {
  const settings = await getSiteSettings();
  const channels = buildContactChannels(settings);
  const contactJsonLd = buildContactJsonLd(settings);

  return (
    <main className="contact-page" id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: SITE_URL,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Contact",
                item: `${SITE_URL}/contact`,
              },
            ],
          }),
        }}
      />
      <PageHero content={CONTACT_HERO} id="contact-h" />
      <ContactChannels channels={channels} />
      <ContactPageBody />

      {/* Interne links */}
      <section className="lp-related" aria-label="Meer over Sarte Global">
        <div className="container">
          <nav className="lp-related__nav" aria-label="Gerelateerde pagina's">
            <a href="/">Home</a>
            <a href="/website-laten-ontwerpen">Website laten ontwerpen</a>
            <a href="/website-laten-maken">Nieuwe website laten maken</a>
            <a href="/offerte-aanvragen">Offerte aanvragen</a>
            <a href="/over-ons">Over ons — webdesign bureau</a>
            <a href="/services">Alle diensten</a>
            <a href="/cases">Cases &amp; projecten</a>
          </nav>
        </div>
      </section>
    </main>
  );
}
