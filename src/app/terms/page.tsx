import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms governing your use of Lockwood Technology Ltd's website and product suite, including Malipopay, Send, Wedding, and the rest of the family.",
};

const LAST_UPDATED = "2 May 2026";

const SECTIONS: { id: string; title: string }[] = [
  { id: "acceptance", title: "1. Acceptance of these terms" },
  { id: "definitions", title: "2. Definitions" },
  { id: "account", title: "3. Account registration" },
  { id: "use", title: "4. Acceptable use" },
  { id: "services", title: "5. Our services" },
  { id: "fees", title: "6. Fees and payment" },
  { id: "ip", title: "7. Intellectual property" },
  { id: "user-content", title: "8. User content" },
  { id: "third-party", title: "9. Third-party services" },
  { id: "privacy", title: "10. Privacy" },
  { id: "warranties", title: "11. Disclaimers" },
  { id: "liability", title: "12. Limitation of liability" },
  { id: "indemnity", title: "13. Indemnification" },
  { id: "termination", title: "14. Termination" },
  { id: "governing-law", title: "15. Governing law and disputes" },
  { id: "changes", title: "16. Changes to these terms" },
  { id: "contact", title: "17. Contact" },
];

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink-50 py-20 sm:py-28">
        <Container>
          <div className="eyebrow">Legal · Terms</div>
          <h1 className="display-lg mt-5 font-light tracking-[-0.03em] text-ink-950 max-w-[920px]">
            Terms of Service.{" "}
            <span className="text-ink-500">The agreement between you and Lockwood.</span>
          </h1>
          <p className="mt-7 text-lg leading-[1.6] text-ink-600 max-w-[720px] font-light">
            These Terms govern your access to and use of the website at <a href="https://lockwood.co.tz" className="text-primary-500 hover:underline">lockwood.co.tz</a> and the products in the Lockwood family. By using the services, you agree to these terms.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-500">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
            Last updated · {LAST_UPDATED}
          </div>
        </Container>
      </section>

      {/* Body */}
      <section className="py-16 sm:py-24">
        <Container className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12 lg:gap-16">
          <aside className="lg:sticky lg:top-24 self-start">
            <div className="eyebrow">On this page</div>
            <nav className="mt-4 flex flex-col gap-2 text-sm">
              {SECTIONS.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="text-ink-600 hover:text-primary-500 transition-colors leading-[1.5]"
                >
                  {s.title}
                </a>
              ))}
            </nav>
          </aside>

          <div className="max-w-[760px]">
            <Section id="acceptance" title="1. Acceptance of these terms">
              <p>
                These Terms of Service (&ldquo;Terms&rdquo;) form a binding agreement between you (&ldquo;you&rdquo;, &ldquo;user&rdquo;) and Lockwood Technology Ltd (&ldquo;Lockwood&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), a company registered in the United Republic of Tanzania with offices at Sinza Lion, Dar es Salaam.
              </p>
              <p>
                By accessing or using our website or any of our products, you confirm that you have read, understood, and agreed to be bound by these Terms and our <Link href="/privacy" className="text-primary-500 hover:underline">Privacy Policy</Link>. If you do not agree, do not use the services.
              </p>
            </Section>

            <Section id="definitions" title="2. Definitions">
              <ul className="mt-3">
                <li><strong>&ldquo;Services&rdquo;</strong> means the website at lockwood.co.tz and all Lockwood products including Malipopay, Wedding, Send, Link, Housing, Localhost, Investors, Kikaba, Drivers, Mchango, FungulaKumi, and Mziki.</li>
                <li><strong>&ldquo;Account&rdquo;</strong> means a user account created to access a Service.</li>
                <li><strong>&ldquo;Content&rdquo;</strong> means any text, image, video, listing, message, transaction, or other material submitted to or generated through the Services.</li>
                <li><strong>&ldquo;Fees&rdquo;</strong> means subscription, transaction, and other charges for the Services as published on the relevant product website or contract.</li>
              </ul>
            </Section>

            <Section id="account" title="3. Account registration">
              <p>
                To use most Services, you must create an Account. You agree to provide accurate, current, and complete information, and to keep it updated. You are responsible for safeguarding your credentials and for all activity under your Account.
              </p>
              <p>
                You must be at least 18 years old, or the age of majority in your jurisdiction. If you create an Account on behalf of an organisation, you represent that you have authority to bind that organisation to these Terms.
              </p>
              <p>
                Some Services are subject to identity verification (KYC) under Tanzanian financial regulations. We may suspend or close Accounts that fail verification, or that we reasonably suspect of fraud or abuse.
              </p>
            </Section>

            <Section id="use" title="4. Acceptable use">
              <p>You agree not to use the Services to:</p>
              <ul className="mt-3">
                <li>Violate any applicable law or regulation, including financial, anti-money-laundering, sanctions, communications, or consumer-protection laws.</li>
                <li>Infringe intellectual-property, privacy, or publicity rights of others.</li>
                <li>Send spam, deceptive messages, malware, or unsolicited commercial messages without lawful consent.</li>
                <li>Engage in fraud, money laundering, terrorism financing, or facilitate any of the above.</li>
                <li>Interfere with or disrupt the integrity or performance of the Services, including by reverse engineering, scraping at scale, or probing for vulnerabilities outside our responsible-disclosure programme.</li>
                <li>Resell, sublicense, or commercially redistribute the Services without our written consent.</li>
                <li>Impersonate any person or entity, or misrepresent your affiliation with one.</li>
              </ul>
              <p>
                We may suspend, throttle, or terminate access where we reasonably believe these Terms have been breached.
              </p>
            </Section>

            <Section id="services" title="5. Our services">
              <p>
                Each Lockwood product has its own functional scope and may have additional product-specific terms, pricing, and service-level commitments published on its product page. Where a product-level term conflicts with these general Terms, the product-level term controls only for that product.
              </p>
              <p>
                We may modify, suspend, or discontinue any Service or feature at any time. Where reasonably possible we will give notice before discontinuing a paid feature, and pro-rate refunds for prepaid periods affected.
              </p>
            </Section>

            <Section id="fees" title="6. Fees and payment">
              <p>
                Fees are published on each product&apos;s pricing page or set in your written agreement with us. Unless stated otherwise, fees are quoted in Tanzanian Shillings (TZS), exclusive of VAT and other applicable taxes.
              </p>
              <p>
                You authorise us, or our payment partners, to charge your selected payment method for all fees due. Late payments may incur interest at the maximum rate permitted by law and may result in suspension of the Services.
              </p>
              <p>
                Except where required by law or expressly stated, fees are non-refundable.
              </p>
            </Section>

            <Section id="ip" title="7. Intellectual property">
              <p>
                The Services, including their software, design, branding, content, and trademarks, are owned by Lockwood or our licensors and are protected by copyright, trademark, and other intellectual-property laws. We grant you a limited, non-exclusive, non-transferable, revocable licence to access and use the Services solely as permitted by these Terms.
              </p>
              <p>
                The names, logos, and product marks of Lockwood, Malipopay, Wedding, Send, Link, Housing, Localhost, Investors, Kikaba, Drivers, Mchango, FungulaKumi, and Mziki are trademarks of Lockwood Technology Ltd. You may not use them without our prior written consent.
              </p>
            </Section>

            <Section id="user-content" title="8. User content">
              <p>
                You retain ownership of Content you submit. You grant Lockwood a worldwide, non-exclusive, royalty-free licence to host, store, reproduce, modify, distribute, publish, and display your Content solely as needed to provide the Services and to improve them.
              </p>
              <p>
                You are responsible for your Content and represent that you have all rights necessary to grant this licence. We may remove Content that violates these Terms or applicable law.
              </p>
            </Section>

            <Section id="third-party" title="9. Third-party services">
              <p>
                The Services may integrate with third parties, including mobile network operators, banks, card networks, identity-verification providers, and analytics platforms. Your use of these third-party services is subject to their own terms. We are not responsible for the availability, accuracy, or practices of third parties.
              </p>
            </Section>

            <Section id="privacy" title="10. Privacy">
              <p>
                Our handling of personal information is described in our <Link href="/privacy" className="text-primary-500 hover:underline">Privacy Policy</Link>, which forms part of these Terms by reference.
              </p>
            </Section>

            <Section id="warranties" title="11. Disclaimers">
              <p>
                The Services are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;. To the fullest extent permitted by law, Lockwood disclaims all warranties, express or implied, including merchantability, fitness for a particular purpose, non-infringement, and any warranties arising out of course of dealing or usage of trade.
              </p>
              <p>
                We do not warrant that the Services will be uninterrupted, error-free, or secure, that defects will be corrected, or that any specific outcome will be achieved.
              </p>
            </Section>

            <Section id="liability" title="12. Limitation of liability">
              <p>
                To the fullest extent permitted by law, Lockwood and its affiliates, officers, employees, and agents will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenue, data, or goodwill, arising from or relating to your use of the Services, even if advised of the possibility of such damages.
              </p>
              <p>
                Our total aggregate liability arising from or relating to these Terms or the Services will not exceed the greater of (a) the fees you paid to Lockwood for the Service giving rise to the claim during the twelve (12) months immediately preceding the event, or (b) one hundred United States dollars (USD 100), or its TZS equivalent.
              </p>
              <p>
                Nothing in these Terms limits liability for fraud, gross negligence, wilful misconduct, or any liability that cannot be excluded under applicable law.
              </p>
            </Section>

            <Section id="indemnity" title="13. Indemnification">
              <p>
                You agree to indemnify and hold harmless Lockwood and its affiliates, officers, employees, and agents from any claim, demand, loss, liability, cost, or expense (including reasonable legal fees) arising out of (a) your Content, (b) your use of the Services, (c) your breach of these Terms, or (d) your violation of any law or third-party right.
              </p>
            </Section>

            <Section id="termination" title="14. Termination">
              <p>
                You may terminate your Account at any time by contacting us or using in-product controls. We may suspend or terminate your access to the Services with or without notice for breach of these Terms, suspected fraud, regulatory requirement, or where continued provision is no longer commercially or legally viable.
              </p>
              <p>
                On termination, the rights and licences granted to you cease, but provisions that by their nature should survive (including IP, disclaimers, liability, indemnification, and governing law) will survive.
              </p>
            </Section>

            <Section id="governing-law" title="15. Governing law and disputes">
              <p>
                These Terms are governed by the laws of the United Republic of Tanzania, without regard to its conflict-of-laws principles.
              </p>
              <p>
                Any dispute arising out of or relating to these Terms or the Services will be resolved by the courts of Tanzania sitting in Dar es Salaam, which will have exclusive jurisdiction. Either party may seek injunctive or equitable relief in any court of competent jurisdiction to protect intellectual-property or confidentiality rights.
              </p>
            </Section>

            <Section id="changes" title="16. Changes to these terms">
              <p>
                We may update these Terms from time to time. The &ldquo;Last updated&rdquo; date at the top of this page reflects when changes were last made. Material changes will be communicated by email or in-product notice. Your continued use of the Services after changes take effect constitutes acceptance.
              </p>
            </Section>

            <Section id="contact" title="17. Contact">
              <p>For legal enquiries:</p>
              <ul className="mt-3">
                <li>Email — <a href="mailto:legal@lockwood.co.tz" className="text-primary-500 hover:underline">legal@lockwood.co.tz</a></li>
                <li>General — <a href="mailto:info@lockwood.co.tz" className="text-primary-500 hover:underline">info@lockwood.co.tz</a></li>
                <li>Phone — <a href="tel:+255655128012" className="text-primary-500 hover:underline">+255 655 128 012</a></li>
                <li>Post — Lockwood Technology Ltd, Sinza Lion, Dar es Salaam, Tanzania</li>
              </ul>
            </Section>
          </div>
        </Container>
      </section>
    </>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 py-8 first:pt-0 border-b border-ink-100 last:border-b-0">
      <h2 className="font-light text-[28px] sm:text-[32px] tracking-[-0.02em] text-ink-950">
        {title}
      </h2>
      <div className="mt-5 flex flex-col gap-4 text-[16px] leading-[1.7] text-ink-600 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2 [&_strong]:text-ink-950">
        {children}
      </div>
    </section>
  );
}
