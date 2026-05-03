import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Lockwood Technology Ltd collects, uses, shares, and protects personal information across our website and product suite.",
};

const LAST_UPDATED = "2 May 2026";

const SECTIONS: { id: string; title: string }[] = [
  { id: "who-we-are", title: "1. Who we are" },
  { id: "information", title: "2. Information we collect" },
  { id: "how-we-use", title: "3. How we use information" },
  { id: "sharing", title: "4. Sharing and disclosure" },
  { id: "retention", title: "5. Data retention" },
  { id: "your-rights", title: "6. Your rights" },
  { id: "security", title: "7. Security" },
  { id: "cookies", title: "8. Cookies and tracking" },
  { id: "children", title: "9. Children's privacy" },
  { id: "international", title: "10. International transfers" },
  { id: "updates", title: "11. Updates to this policy" },
  { id: "contact", title: "12. Contact us" },
];

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink-50 py-20 sm:py-28">
        <Container>
          <div className="eyebrow">Legal · Privacy</div>
          <h1 className="display-lg mt-5 font-light tracking-[-0.03em] text-ink-950 max-w-[920px]">
            Privacy Policy.{" "}
            <span className="text-ink-500">How we handle your data.</span>
          </h1>
          <p className="mt-7 text-lg leading-[1.6] text-ink-600 max-w-[720px] font-light">
            Lockwood Technology Ltd (&ldquo;Lockwood&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy. This policy explains what personal information we collect, how we use it, and the choices you have, across our website and the products in our suite.
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
          {/* Sticky TOC */}
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
            <Section id="who-we-are" title="1. Who we are">
              <p>
                Lockwood Technology Ltd is a Tanzanian software and digital solutions company, registered in the United Republic of Tanzania, with offices at Sinza Lion, Dar es Salaam. We operate <a href="https://lockwood.co.tz" className="text-primary-500 hover:underline">lockwood.co.tz</a> and the products listed at <Link href="/products/malipopay" className="text-primary-500 hover:underline">/products</Link>, including Malipopay, Wedding, Send, Link, Housing, Localhost, Investors, Kikaba, Drivers, Mchango, FungulaKumi, and Mziki.
              </p>
              <p>
                For each product, the relevant data controller is Lockwood Technology Ltd unless a separate product-level notice states otherwise.
              </p>
            </Section>

            <Section id="information" title="2. Information we collect">
              <p>We collect information in three categories:</p>
              <h3 className="font-bold text-lg tracking-[-0.015em] text-ink-950 mt-6">2.1 Information you provide</h3>
              <ul className="mt-3">
                <li>Account details — name, email address, phone number, organisation name.</li>
                <li>Identity & verification — national ID or passport details where required by Tanzanian financial regulations (KYC).</li>
                <li>Payment details — bank account, mobile money number, or card information processed by our regulated payment partners.</li>
                <li>Communications — messages, support tickets, feedback, and survey responses.</li>
                <li>Content you upload — listings, campaign assets, contact lists, vendor profiles, and similar.</li>
              </ul>

              <h3 className="font-bold text-lg tracking-[-0.015em] text-ink-950 mt-6">2.2 Information collected automatically</h3>
              <ul className="mt-3">
                <li>Device and usage — IP address, device type, browser, operating system, referring URL, pages viewed, and timestamps.</li>
                <li>Product telemetry — feature interactions, error logs, performance metrics.</li>
                <li>Cookies and similar technologies — see §8.</li>
              </ul>

              <h3 className="font-bold text-lg tracking-[-0.015em] text-ink-950 mt-6">2.3 Information from third parties</h3>
              <ul className="mt-3">
                <li>Payment confirmation and settlement data from mobile network operators and banks.</li>
                <li>Identity verification responses from accredited KYC providers.</li>
                <li>Authentication metadata from sign-in providers if you choose them.</li>
              </ul>
            </Section>

            <Section id="how-we-use" title="3. How we use information">
              <p>We use personal information to:</p>
              <ul className="mt-3">
                <li>Provide, maintain, and improve our products and the website.</li>
                <li>Process payments, settlements, and reconciliation.</li>
                <li>Verify identity and prevent fraud, money laundering, and abuse.</li>
                <li>Send transactional communications — receipts, notifications, security alerts.</li>
                <li>Send marketing communications, where you have opted in. You can opt out at any time.</li>
                <li>Provide customer support and respond to enquiries.</li>
                <li>Comply with legal, regulatory, and tax obligations.</li>
                <li>Run analytics to understand product usage and improve performance.</li>
              </ul>
              <p>
                Our lawful bases include performance of a contract with you, legitimate business interests, your consent (where applicable), and compliance with legal obligations.
              </p>
            </Section>

            <Section id="sharing" title="4. Sharing and disclosure">
              <p>We do not sell personal information. We share it only with:</p>
              <ul className="mt-3">
                <li><strong>Service providers</strong> — hosting, analytics, customer support, communications, and KYC vendors, bound by confidentiality and data-processing terms.</li>
                <li><strong>Payment partners</strong> — mobile network operators, banks, card networks, and acquirers needed to settle transactions.</li>
                <li><strong>Regulators and law enforcement</strong> — where required by Tanzanian law, court order, or to protect rights, safety, and property.</li>
                <li><strong>Corporate transactions</strong> — in the event of a merger, acquisition, or asset sale, with notice to affected users.</li>
                <li><strong>Other users</strong> — only the information you choose to publish (e.g. a public vendor profile or a fundraising campaign).</li>
              </ul>
            </Section>

            <Section id="retention" title="5. Data retention">
              <p>
                We retain personal information for as long as necessary to provide the services and to comply with legal obligations, resolve disputes, and enforce our agreements. Financial transaction records are retained for the periods required by Tanzanian financial regulators, typically a minimum of seven (7) years.
              </p>
              <p>
                When personal information is no longer needed, we delete or anonymise it.
              </p>
            </Section>

            <Section id="your-rights" title="6. Your rights">
              <p>Subject to applicable law, you have the right to:</p>
              <ul className="mt-3">
                <li>Access the personal information we hold about you.</li>
                <li>Correct inaccurate or incomplete information.</li>
                <li>Request deletion of your information, subject to legal retention requirements.</li>
                <li>Object to or restrict certain processing.</li>
                <li>Receive a copy of your data in a portable, machine-readable format.</li>
                <li>Withdraw consent where processing is based on consent.</li>
                <li>Lodge a complaint with the Tanzania Personal Data Protection Commission, or the relevant authority in your jurisdiction.</li>
              </ul>
              <p>
                To exercise any of these rights, contact us at <a href="mailto:privacy@lockwood.co.tz" className="text-primary-500 hover:underline">privacy@lockwood.co.tz</a>. We will respond within 30 days.
              </p>
            </Section>

            <Section id="security" title="7. Security">
              <p>
                We use industry-standard administrative, technical, and physical safeguards: encryption in transit (TLS 1.2+) and at rest, role-based access control, audit logging, regular vulnerability scanning, and staff training. No system can be guaranteed completely secure; we encourage you to use a strong unique password and enable two-factor authentication on your account.
              </p>
            </Section>

            <Section id="cookies" title="8. Cookies and tracking">
              <p>
                We use cookies and similar technologies to keep you signed in, remember preferences, measure traffic, and improve our services. We use:
              </p>
              <ul className="mt-3">
                <li><strong>Strictly necessary</strong> — required for authentication, security, and core functionality.</li>
                <li><strong>Functional</strong> — to remember your preferences and settings.</li>
                <li><strong>Analytics</strong> — anonymised metrics to understand how the site and products are used.</li>
                <li><strong>Marketing</strong> — only with your consent, to measure campaign effectiveness.</li>
              </ul>
              <p>
                Most browsers let you block or delete cookies. Blocking strictly necessary cookies will affect site functionality.
              </p>
            </Section>

            <Section id="children" title="9. Children's privacy">
              <p>
                Our services are intended for users 18 years and older, or the age of majority in your jurisdiction. We do not knowingly collect personal information from children. If you believe we have, contact us and we will delete it.
              </p>
            </Section>

            <Section id="international" title="10. International transfers">
              <p>
                Lockwood is headquartered in Tanzania and serves users across East Africa and the diaspora. Personal information may be processed in jurisdictions that have different data protection rules than your home country. Where we transfer data internationally, we use appropriate safeguards including contractual data-processing terms with our providers.
              </p>
            </Section>

            <Section id="updates" title="11. Updates to this policy">
              <p>
                We may update this policy from time to time. The &ldquo;Last updated&rdquo; date at the top of this page reflects when changes were last made. Material changes will be communicated by email or in-product notice before they take effect.
              </p>
            </Section>

            <Section id="contact" title="12. Contact us">
              <p>For privacy enquiries or to exercise any of your rights:</p>
              <ul className="mt-3">
                <li>Email — <a href="mailto:privacy@lockwood.co.tz" className="text-primary-500 hover:underline">privacy@lockwood.co.tz</a></li>
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
