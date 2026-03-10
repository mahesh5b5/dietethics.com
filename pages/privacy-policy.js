import SEO from "../components/SEO";

export default function PrivacyPolicyPage() {
  return (
    <main className="page-shell">
      <SEO
        title="Privacy Policy"
        description="Read the Diet Ethics privacy policy on data collection, usage, sharing, and customer rights."
        path="/privacy-policy"
      />
      <section className="page-card">
        <p className="brand-tagline">Policies</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-slate-600">Effective Date: March 11, 2026</p>

        <div className="mt-6 space-y-5 text-sm leading-7 text-slate-700">
          <section>
            <h2 className="text-base font-bold text-slate-900">1. Information We Collect</h2>
            <p>
              We may collect contact details, delivery information, and order history when you place an order or
              submit forms on our site.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900">2. How We Use Data</h2>
            <p>
              Data is used to process orders, improve service quality, provide customer support, and send important
              order updates.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900">3. Data Sharing</h2>
            <p>
              We do not sell personal information. Limited data may be shared with payment, logistics, or support
              partners only as required to fulfill services.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900">4. Contact</h2>
            <p>
              For privacy requests or data questions, contact us through the Contact Us page and include the email or
              phone number used for your orders.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}


