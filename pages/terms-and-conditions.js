import SEO from "../components/SEO";

export default function TermsAndConditionsPage() {
  return (
    <main className="page-shell">
      <SEO
        title="Terms and Conditions"
        description="Read Diet Ethics terms and conditions for site usage, product information, payments, and liability."
        path="/terms-and-conditions"
      />
      <section className="page-card">
        <p className="brand-tagline">Policies</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Terms & Conditions</h1>
        <p className="mt-4 text-sm text-slate-600">Effective Date: March 11, 2026</p>

        <div className="mt-6 space-y-5 text-sm leading-7 text-slate-700">
          <section>
            <h2 className="text-base font-bold text-slate-900">1. Usage</h2>
            <p>
              By accessing DietEthics, you agree to use this site for lawful purposes and in a way that does not
              disrupt our services or other users.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900">2. Product Information</h2>
            <p>
              We aim to keep pricing, availability, and product details accurate. Minor variations may occur due to
              packaging updates, sourcing, or seasonal supply.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900">3. Orders & Payments</h2>
            <p>
              Orders are confirmed only after successful payment and stock verification. We reserve the right to
              cancel orders in rare cases such as payment failures or inventory mismatch.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900">4. Liability</h2>
            <p>
              Product content is provided for general information and is not medical advice. Please consult a medical
              professional for dietary concerns or allergies.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}


