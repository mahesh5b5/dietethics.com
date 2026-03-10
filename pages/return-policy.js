import SEO from "../components/SEO";

export default function ReturnPolicyPage() {
  return (
    <main className="page-shell">
      <SEO
        title="Return Policy"
        description="Read Diet Ethics return policy including eligibility, reporting window, and refund or replacement guidelines."
        path="/return-policy"
      />
      <section className="page-card">
        <p className="brand-tagline">Policies</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Return Policy</h1>
        <p className="mt-4 text-sm text-slate-600">Effective Date: March 11, 2026</p>

        <div className="mt-6 space-y-5 text-sm leading-7 text-slate-700">
          <section>
            <h2 className="text-base font-bold text-slate-900">1. Eligibility</h2>
            <p>
              Returns are accepted only for damaged, incorrect, or defective items reported promptly after delivery.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900">2. Reporting Window</h2>
            <p>
              Please raise a return request within 48 hours of delivery with order details and clear photos of the
              issue.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900">3. Refunds & Replacements</h2>
            <p>
              Approved cases may be resolved via replacement, wallet credit, or original-payment refund based on
              product condition and availability.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900">4. Non-returnable Cases</h2>
            <p>
              Opened consumable products without quality issues, change-of-mind cases, or requests outside the
              reporting window may not be eligible.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}


