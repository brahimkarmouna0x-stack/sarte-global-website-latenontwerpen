import type {
  FooterColumn,
  HeroContent,
  NavItem,
  NavLink,
  NavMenuSection,
  SiteMeta,
} from "@/types";

import { SERVICES } from "./services";

export const SITE = {
  title: "Website Laten Ontwerpen | Laten Ontwerpen | Sarte Global",
  description:
    "Professionele website laten ontwerpen Laten Ontwerpen. Modern webdesign, sterke SEO en focus op conversie. Vraag vandaag een vrijblijvende offerte aan.",
  themeColor: "#0D0D0D",
  brandName: "SARTE GLOBAL",
  brandAccent: ".",
  url: "https://website-latenontwerpen.nl",
  name: "Sarte Global",
  email: "info@sarteglobal.com",
  // Online-only / nationaal: geen telefoonnummer getoond. Contact loopt via
  // e-mail en WhatsApp. Vul hier pas een nummer in als er een geldig
  // Nederlands telefoonnummer is — leeg laten betekent: geen telefoon in UI/schema.
  phone: "",
} as const satisfies SiteMeta;

export const TRUST_LINE =
  "Website laten ontwerpen Laten Ontwerpen is een dienst van Sarte Global." as const;

/**
 * The service pages — single source for the "Services" nav dropdown, the
 * mobile drawer group and the footer "Diensten" column. Keyword-rich labels +
 * canonical routes (all pages exist), so every Diensten link is SEO-relevant.
 */
export const SERVICE_LINKS: readonly NavLink[] = [
  { label: "Website laten maken", href: "/website-laten-maken" },
  { label: "Website laten ontwerpen", href: "/website-laten-ontwerpen" },
  { label: "B2B website laten maken", href: "/b2b-website" },
  { label: "B2C website laten maken", href: "/b2c-website" },
  {
    label: "WordPress website laten maken",
    href: "/wordpress-website-laten-maken",
  },
  { label: "Next.js website laten maken", href: "/nextjs-website-laten-maken" },
  { label: "E-commerce oplossingen", href: "/ecommerce-oplossingen" },
  {
    label: "WooCommerce website Laten Ontwerpen",
    href: "/woocommerce-website-laten-ontwerpen",
  },
  {
    label: "Shopify website Laten Ontwerpen",
    href: "/shopify-website-laten-ontwerpen",
  },
  { label: "Landing page laten maken", href: "/landing-page-laten-maken" },
  { label: "Webapp laten maken", href: "/webapp-laten-maken" },
  { label: "SEO optimalisatie", href: "/seo-optimalisatie" },
  { label: "Website onderhoud", href: "/website-onderhoud" },
];

/**
 * Service offerings that already have a dedicated keyword landing page.
 */
export const SERVICE_LANDING_PAGE_BY_SLUG = {
  "web-development": "/website-laten-maken",
  ecommerce: "/ecommerce-oplossingen",
  "landing-page-optimization": "/landing-page-laten-maken",
  seo: "/seo-optimalisatie",
} as const;

/**
 * Slugs from SERVICE_LANDING_PAGE_BY_SLUG as a Set. Used to exclude the four
 * keyword-page duplicates from the mega-menu's "Onze diensten" column (so the
 * two columns never list the same service twice) and from the sitemap.
 */
export const SERVICE_SLUGS_WITH_LANDING_PAGE: ReadonlySet<string> = new Set(
  Object.keys(SERVICE_LANDING_PAGE_BY_SLUG),
);

export const SERVICES_NAV: readonly NavLink[] = SERVICES.filter(
  (service) => !SERVICE_SLUGS_WITH_LANDING_PAGE.has(service.slug),
).map((service) => ({
  label: service.name,
  href: service.href,
}));

/**
 * The two titled columns inside the single "Diensten" mega-menu: the keyword
 * landing pages (SERVICE_LINKS) and the broader service catalogue (SERVICES_NAV).
 */
export const NAV_SERVICE_SECTIONS: readonly NavMenuSection[] = [
  { title: "Websites & webshops", items: SERVICE_LINKS },
  { title: "Onze diensten", items: SERVICES_NAV },
];

/**
 * Primary nav (explicit, user-defined order). One "Diensten" dropdown that
 * opens a wide mega-menu combining both service lists (see NAV_SERVICE_SECTIONS).
 */
export const NAV_ITEMS: readonly NavItem[] = [
  {
    kind: "link",
    label: "Website",
    href: "/",
    shortLabel: "Website Laten Ontwerpen",
  },
  { kind: "link", label: "Prijzen", href: "#pakketten" },
  {
    kind: "dropdown",
    label: "Diensten",
    menuId: "nav-diensten-menu",
    sections: NAV_SERVICE_SECTIONS,
  },
  {
    kind: "link",
    label: "Website Laten Maken",
    href: "/website-laten-maken",
    shortLabel: "Website Laten Maken",
  },
  {
    kind: "link",
    label: "Website Onderhoud",
    href: "/website-onderhoud",
    shortLabel: "Website Onderhoud",
  },
  {
    kind: "link",
    label: "WooCommerce Laten Ontwerpen",
    href: "/woocommerce-website-laten-ontwerpen",
    shortLabel: "Website WooCommerce",
  },
  {
    kind: "link",
    label: "Shopify Laten Ontwerpen",
    href: "/shopify-website-laten-ontwerpen",
    shortLabel: "Shopify Laten Ontwerpen",
  },

  { kind: "link", label: "Contact", href: "/contact" },
];

export const NAV_CTA = {
  label: "Offerte aanvragen",
  href: "/offerte-aanvragen",
} as const;

export const HERO = {
  eyebrow: "Sarte Global",
  title: [
    {
      words: [
        {
          text: "Professionele Website Laten Ontwerpen",
          italicAccent: true,
        },
      ],
    },
  ],
  subtitle:
    "Professionele, moderne en responsive websites Laten Ontwerpen voor bedrijven en ondernemers in Nederland. Sterke SEO, snelle oplevering en focus op conversie en groei.",
  primaryCta: {
    label: "Website Laten Ontwerpen aanvragen",
    href: "/offerte-aanvragen",
  },
  secondaryCta: { label: "Bekijk portfolio", href: "/cases" },
  pricingCta: { label: "Bekijk pakketten", href: "#pakketten" },
  stats: [
    { label: "Maatwerk & responsive design" },
    { label: "Binnen 2 weken online" },
    { label: "Voor MKB & ondernemers" },
  ],
  scrollLabel: "Scroll",
  badgeText:
    "WEBSITE Laten Ontwerpen · SARTE GLOBAL · WEBSITE Laten Ontwerpen · SARTE GLOBAL · ",
} as const satisfies HeroContent;

export const TRUSTED_LABEL = "Vertrouwd door Nederlandse ondernemers" as const;

export const TRUSTED_BRANDS = [
  "Meridian",
  "Volta",
  "Claros",
  "Orbis",
  "Fenix",
  "Stratum",
  "Kova",
  "Helion",
] as const satisfies readonly string[];

export const CTA_SECTION = {
  titleLead: "Laat jouw website",
  titleEm: "vandaag starten.",
  sub: "Plan een gratis kennismaking van 30 minuten — geen verplichtingen, gewoon een open gesprek over jouw website en doelen.",
  ctaLabel: "Neem contact op",
  ctaHref: "mailto:info@sarteglobal.com",
} as const;

export const FOOTER_MISSION =
  "Professionele website laten ontwerpen Laten Ontwerpen voor ondernemers en bedrijven in Nederland. Sarte Global — webdesign bureau voor groei, conversie en online zichtbaarheid." as const;

export const FOOTER_COLUMNS = [
  {
    title: "Diensten",
    links: SERVICE_LINKS,
  },
  {
    title: "Bedrijf",
    links: [
      { label: "Over ons", href: "/over-ons" },
      { label: "Cases", href: "/cases" },
      { label: "Journal", href: "/journal" },
      { label: "Vacatures", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
] as const satisfies readonly FooterColumn[];

export const NEWSLETTER = {
  title: "De Nieuwsbrief",
  description:
    "Eén beknopte e-mail per maand. Praktische tips over websites Laten Ontwerpen, SEO en online groei voor ondernemers.",
  placeholder: "jij@bedrijf.nl",
  buttonLabel: "Inschrijven",
  defaultNote: "Geen spam. Op elk moment uitschrijven.",
  errorNote: "Voer een geldig e-mailadres in.",
  successNote: "Bedankt! Je ontvangt binnenkort onze eerste e-mail.",
} as const;

export const FOOTER_LEGAL = {
  copyright: `© ${new Date().getFullYear()} Sarte Global`,
  links: [
    { label: "Privacy", href: "/privacy" },
    { label: "Voorwaarden", href: "/terms" },
    { label: "Cookies", href: "/cookies" },
  ],
} as const;

export const PAYMENT_METHODS_LABEL = "Wij accepteren" as const;

export const PAYMENT_METHODS = [
  { id: "ideal", label: "iDEAL", color: "#CC0066" },
  { id: "visa", label: "Visa", color: "#1A1F71" },
  { id: "mastercard", label: "Mastercard", color: "#EB001B" },
  { id: "paypal", label: "PayPal", color: "#00457C" },
  { id: "stripe", label: "Stripe", color: "#635BFF" },
] as const;

export type PaymentMethodId = (typeof PAYMENT_METHODS)[number]["id"];

export const COOKIE_COPY = {
  message:
    "We gebruiken een klein aantal cookies om verkeer te begrijpen en deze website te verbeteren.",
  policyLabel: "Lees onze cookieverklaring",
  policyHref: "/cookies",
  declineLabel: "Weigeren",
  acceptLabel: "Accepteren",
  storageKey: "sarte_cookies",
  delayMs: 1200,
} as const;

export * from "./about";
export * from "./new-website";
export * from "./landing-nieuwe-website";
export * from "./wordpress";
export * from "./webshop";
export * from "./woocommerce";
export * from "./shopify";
export * from "./landing-page";
export * from "./webapp";
export * from "./seo-optimalisatie";
export * from "./website-onderhoud";
export * from "./nextjs";
export * from "./pricing";
export * from "./journal";
export * from "./services";
export * from "./team";
export * from "./testimonials";
export * from "./work";
export * from "./process";
export * from "./impact";
export * from "./technologies";
export * from "./hero-projects";
export * from "./hero-stage";
export * from "./local-businesses";
export * from "./webshop-benefits";
export * from "./webshop-platforms";
export * from "./webshop-growth";
