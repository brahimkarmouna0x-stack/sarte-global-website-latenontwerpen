import Link from "next/link";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

// SECTION 4 FAQ Items
const FAQ_ITEMS = [
  {
    question: "Wat is een website Laten Ontwerpen?",
    answer:
      "Een website Laten Ontwerpen wordt vanaf nul ontworpen en gecodeerd, specifiek afgestemd op de doelen en doelgroep van jouw bedrijf. Dit zorgt voor superieure snelheid (Next.js/React), onbeperkte functionele vrijheid, en een uniek premium design dat perfect aansluit bij jouw branding.",
  },
  {
    question: "Hoe lang duurt het ontwikkelingsproces?",
    answer:
      "Voor een gemiddelde website Laten Ontwerpen is de doorlooptijd 2 tot 4 weken. We werken met een strak en beproefd proces: van strategische analyse en UX/UI ontwerp, tot de uiteindelijke bouw, grondige snelheidstesten en livegang.",
  },
  {
    question: "Waarom is een maatwerk website beter voor SEO?",
    answer:
      "Sjabloon-websites (zoals standaard WordPress of Wix) bevatten vaak overbodige code en zware plugins, wat laadtijden vertraagt. Een website Laten Ontwerpen maakt gebruik van geoptimaliseerde code, nette semantische HTML-structuur en ingebouwde schema.org structured data, wat Google beloont met hogere posities.",
  },
  {
    question: "Kan ik zelf de website aanpassen?",
    answer:
      "Zeker. We integreren een gebruiksvriendelijk CMS (zoals geoptimaliseerde WordPress of een headless CMS) waarmee je eenvoudig teksten, afbeeldingen, portfolio-items of blogs kunt bewerken zonder technische kennis.",
  },
  {
    question: "Zijn e-commerce functionaliteiten mogelijk Laten Ontwerpen?",
    answer:
      "Ja, we ontwikkelen hoogwaardige webshops en e-commerce koppelingen Laten Ontwerpen met Shopify of WooCommerce, volledig geïntegreerd in het unieke design van jouw website.",
  },
] as const;

export function CustomWebsiteSections() {
  return (
    <>
      {/* SECTION 1: Waarom Een website Laten Ontwerpen? */}
      <section
        className="nws"
        id="waarom-maatwerk"
        aria-labelledby="custom-why-h"
      >
        <Container>
          <Reveal as="div" className="nws__block">
            <header className="nws__head">
              <span className="eyebrow">Maatwerk vs Templates</span>
              <h2 className="h2 nws__title" id="custom-why-h">
                Waarom Een Website Laten Ontwerpen?
              </h2>
              <p className="sub nws__intro">
                Een standaard template is makkelijk, maar laat kansen liggen.
                Een website Laten Ontwerpen van Sarte Global is ontworpen om
                jouw merk te onderscheiden en resultaten te maximaliseren.
              </p>
            </header>

            <div className="nws__meaning">
              <div className="nws__paragraphs">
                <p>
                  Sjabloon-websites zien er vaak hetzelfde uit en laden traag
                  door overbodige code. Een website Laten Ontwerpen daarentegen,
                  is vanaf de eerste regel code opgebouwd met de focus op jouw
                  unieke doelen en doelgroep.
                </p>
                <p>
                  Met geavanceerde technologieën zoals Next.js en TailwindCSS
                  bouwen we websites die binnen milliseconden laden. Dit zorgt
                  voor een vlekkeloze gebruikerservaring die direct leidt tot
                  hogere conversies en betere resultaten in zoekmachines.
                </p>
                <div style={{ marginTop: "2rem" }}>
                  <Link
                    href="/offerte-aanvragen"
                    className="btn btn-primary btn-large"
                  >
                    Vraag voorstel aan <span className="arr">→</span>
                  </Link>
                </div>
              </div>

              <ul className="nws__points">
                <li className="nws__point">
                  <h3 className="nws__point-title">Onbeperkt uniek design</h3>
                  <p className="nws__point-desc">
                    Geen restricties van een template. We ontwerpen een visuele
                    identiteit die perfect past bij de uitstraling van jouw
                    onderneming.
                  </p>
                </li>
                <li className="nws__point">
                  <h3 className="nws__point-title">Extreme laadsnelheid</h3>
                  <p className="nws__point-desc">
                    Razendsnelle laadtijden verbeteren de conversie en dragen
                    bij aan een optimale score voor Core Web Vitals.
                  </p>
                </li>
                <li className="nws__point">
                  <h3 className="nws__point-title">
                    Zoekmachine optimalisatie
                  </h3>
                  <p className="nws__point-desc">
                    Nette, semantische code en ingebouwde schema structured data
                    zorgen voor uitstekende vindbaarheid in Google.
                  </p>
                </li>
                <li className="nws__point">
                  <h3 className="nws__point-title">Schaalbare integraties</h3>
                  <p className="nws__point-desc">
                    Koppel probleemloos met CRM-systemen, e-mailmarketing
                    software, boekhoudpakketten en e-commerce platforms.
                  </p>
                </li>
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* SECTION 2: Ons Ontwikkelingsproces */}
      <section
        className="nws"
        id="custom-proces"
        aria-labelledby="custom-process-h"
      >
        <Container>
          <Reveal as="div" className="nws__block">
            <header className="nws__head">
              <span className="eyebrow">Onze Werkwijze</span>
              <h2 className="h2 nws__title" id="custom-process-h">
                Ons Ontwikkelingsproces
              </h2>
              <p className="sub nws__intro">
                Een transparante en grondige aanpak in vijf duidelijke stappen —
                van het eerste idee tot een converterende website op het hoogste
                niveau.
              </p>
            </header>

            <ul className="nws__advantages">
              <li className="nws__advantage">
                <span className="nws__advantage-num">01</span>
                <h3 className="nws__advantage-title">Analyse & Strategie</h3>
                <p className="nws__advantage-desc">
                  We analyseren jouw markt, concurrentie en doelgroep om de
                  perfecte structuur en SEO-zoekwoordfocus te bepalen.
                </p>
              </li>
              <li className="nws__advantage">
                <span className="nws__advantage-num">02</span>
                <h3 className="nws__advantage-title">UX/UI Ontwerp</h3>
                <p className="nws__advantage-desc">
                  We ontwerpen een uniek visueel concept. Je ziet exact hoe jouw
                  website eruit komt te zien op mobiel en desktop.
                </p>
              </li>
              <li className="nws__advantage">
                <span className="nws__advantage-num">03</span>
                <h3 className="nws__advantage-title">Clean Coding</h3>
                <p className="nws__advantage-desc">
                  Onze senior developers bouwen de site op een snelle, veilige
                  stack (Next.js of WordPress) met schone code.
                </p>
              </li>
              <li className="nws__advantage">
                <span className="nws__advantage-num">04</span>
                <h3 className="nws__advantage-title">SEO & Speed Audit</h3>
                <p className="nws__advantage-desc">
                  We testen laadtijden en implementeren gestructureerde
                  schema.org data voor optimale prestaties in zoekmachines.
                </p>
              </li>
              <li className="nws__advantage">
                <span className="nws__advantage-num">05</span>
                <h3 className="nws__advantage-title">Lancering & Support</h3>
                <p className="nws__advantage-desc">
                  We zetten je site live op snelle hosting en blijven stand-by
                  voor updates, beveiliging en periodiek onderhoud.
                </p>
              </li>
            </ul>

            <div style={{ marginTop: "3rem", textAlign: "center" }}>
              <Link href="/contact" className="btn btn-outline btn-large">
                Plan gratis strategiesessie <span className="arr">→</span>
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* SECTION 3: Waarom Bedrijven Voor Sarte Global Kiezen */}
      <section
        className="nws"
        id="waarom-sarte"
        aria-labelledby="custom-sarte-h"
      >
        <Container>
          <Reveal as="div" className="nws__block">
            <header className="nws__head">
              <span className="eyebrow">Onze Belofte</span>
              <h2 className="h2 nws__title" id="custom-sarte-h">
                Waarom Bedrijven Voor Sarte Global Kiezen
              </h2>
              <p className="sub nws__intro">
                Als digitaal partner bouwen we niet alleen websites, we bouwen
                aan het succes en de online groei van jouw onderneming.
              </p>
            </header>

            <div
              className="nws__meaning"
              style={{ gridTemplateColumns: "1fr 1.2fr" }}
            >
              <div className="nws__paragraphs">
                <p>
                  Sarte Global is de vertrouwde partner voor Nederlandse
                  MKB-bedrijven en ambitieuze ondernemers. We geloven niet in
                  ingewikkeld vakjargon of onnodig lange doorlooptijden. We
                  bouwen wat werkt, snel en betrouwbaar.
                </p>
                <p>
                  Vanuit onze expertise in SEO en conversie-optimalisatie zorgen
                  we dat jouw website een actieve rol speelt in het aantrekken
                  van nieuwe klanten en opdrachten.
                </p>
                <div style={{ marginTop: "2rem" }}>
                  <Link
                    href="/over-ons"
                    className="btn btn-ghost btn-large"
                    style={{ paddingLeft: 0 }}
                  >
                    <span className="pr-4"></span>Lees meer over ons verhaal{" "}
                    <span className="arr">→</span>
                  </Link>
                </div>
              </div>

              <ul className="nws__points">
                <li className="nws__point">
                  <h3 className="nws__point-title">
                    Ervaren Senior Specialisten
                  </h3>
                  <p className="nws__point-desc">
                    Jouw project wordt uitsluitend behandeld door ervaren
                    designers en developers. Geen stagiairs of juniors.
                  </p>
                </li>
                <li className="nws__point">
                  <h3 className="nws__point-title">
                    Transparantie & Vaste Prijzen
                  </h3>
                  <p className="nws__point-desc">
                    Wij houden van heldere afspraken. Geen verrassingen
                    achteraf, maar duidelijke offertes met een vaste prijs.
                  </p>
                </li>
                <li className="nws__point">
                  <h3 className="nws__point-title">Full-service Ontzorging</h3>
                  <p className="nws__point-desc">
                    Van strategie, design en hosting tot online marketing en
                    SEO-onderhoud — we regelen alles onder één dak.
                  </p>
                </li>
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* SECTION 4: Veelgestelde Vragen Over websites Laten Ontwerpen */}
      <section
        className="lp-faq"
        id="custom-faq"
        aria-labelledby="custom-faq-h"
      >
        <Container>
          <Reveal as="header" className="section-head centered">
            <span className="eyebrow">FAQ</span>
            <h2 className="h2" id="custom-faq-h">
              Veelgestelde Vragen Over Websites Laten Ontwerpen
            </h2>
            <p className="sub">
              Heb je een andere vraag over onze werkwijze of tarieven? Neem
              gerust{" "}
              <Link
                href="/contact"
                style={{ color: "var(--accent)", textDecoration: "underline" }}
              >
                contact
              </Link>{" "}
              met ons op.
            </p>
          </Reveal>

          <div className="lp-faq__list">
            {FAQ_ITEMS.map((item, index) => (
              <Reveal
                key={item.question}
                as="div"
                className="lp-faq__item-wrap"
                index={index}
              >
                <details className="lp-faq__item" name="custom-faq">
                  <summary className="lp-faq__question">
                    <span>{item.question}</span>
                    <span className="lp-faq__icon" aria-hidden="true" />
                  </summary>
                  <p className="lp-faq__answer">{item.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>

          {/* Structured Data FAQPage */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: FAQ_ITEMS.map((item) => ({
                  "@type": "Question",
                  name: item.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: item.answer,
                  },
                })),
              }),
            }}
          />
        </Container>
      </section>
    </>
  );
}
