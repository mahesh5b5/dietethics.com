import { Mail, MapPin, Phone, ShieldCheck, ShoppingBag, Truck } from "lucide-react";
import siteConfig from "../data/site-config.json";
import SEO from "../components/SEO";

const { contact } = siteConfig;
const supportMailto = `mailto:${contact.supportEmail}`;
const supportTel = `tel:${contact.phoneE164}`;

export default function Contact() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Diet Ethics",
    description: "Contact Diet Ethics for sales, support, vendor partnerships, quality, delivery, and refund assistance.",
    url: "https://www.dietethics.com/contact",
  };
  const faqs = [
    {
      q: "How can I contact Diet Ethics for sales or shop onboarding?",
      a: (
        <>
          You can reach us at{" "}
          <a href={supportMailto} className="font-bold text-[#973131] underline">
            {contact.supportEmail}
          </a>{" "}
          or{" "}
          <a href={supportTel} className="font-bold text-[#973131] underline">
            {contact.phoneDisplay}
          </a>{" "}
          for retail sales, bulk enquiries, or partner onboarding.
        </>
      ),
    },
    {
      q: "Do you work with vendors, suppliers, and store partners?",
      a: "Yes. We collaborate with vendors, distributors, and store owners. Share your location, business profile, and expected volume to get started.",
    },
    {
      q: "Can I contact you for delivery or refund support?",
      a: (
        <>
          Absolutely. For delivery, refund, replacement, and service-related updates, contact our support team on{" "}
          <a href={supportMailto} className="font-bold text-[#973131] underline">
            {contact.supportEmail}
          </a>{" "}
          or{" "}
          <a href={supportTel} className="font-bold text-[#973131] underline">
            {contact.phoneDisplay}
          </a>
          .
        </>
      ),
    },
    {
      q: "What location should I refer for physical operations?",
      a: "Our listed location for contact and coordination is Hyderabad, Sanath Nagar.",
    },
  ];

  return (
    <main className="page-shell">
      <SEO
        title="Contact Us"
        description="Contact Diet Ethics support for sales, product quality, refunds, delivery, and vendor collaboration enquiries."
        path="/contact"
        keywords="contact diet ethics, support, vendor partnership, supermarket collaboration"
        structuredData={structuredData}
      />
      <section className="page-card overflow-hidden">
        <p className="brand-tagline">pure . honest . nutritions</p>
        <div className="mt-3 rounded-3xl border border-[#e3c7c7] bg-gradient-to-br from-[#fffafa] to-[#f7efef] p-6 sm:p-8">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Contact Us</h1>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
            Reach out for sales support, product quality concerns, refund updates, delivery queries, or any general
            assistance. Our team is here to help.
          </p>
          <p className="mt-2 text-sm text-slate-600">We usually respond within one business day.</p>
        </div>

        <div className="mt-6 rounded-2xl border border-[#e3c7c7] bg-[#fff8f8] p-5 sm:p-6">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#973131]">Partner With Us</p>
          <p className="mt-3 text-xl font-extrabold leading-tight text-slate-900 sm:text-2xl">
            Bring Diet Ethics to your shelves. Become a Distributor or Supplier today.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            Whether you are a retailer, distributor, vendor, or sourcing partner, we would love to collaborate and
            grow together through quality-first products and dependable support.
          </p>
          <p className="mt-2 rounded-xl border border-[#e3c7c7] bg-white px-3 py-2 text-sm font-semibold leading-7 text-[#973131]">
            We actively collaborate with supermarkets, mini-marts, and independent stores looking to stock trusted
            dry fruit and wellness products.
          </p>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="rounded-2xl border border-[#e3c7c7] bg-white p-5">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#973131]">Support Channels</p>
              <div className="mt-4 space-y-3">
                <a
                  href={supportMailto}
                  className="flex items-center gap-3 rounded-xl border border-[#e3c7c7] bg-[#fff8f8] px-4 py-3 text-slate-800"
                >
                  <Mail className="h-5 w-5 text-[#973131]" />
                  <span className="font-semibold">{contact.supportEmail}</span>
                </a>
                <a
                  href={supportTel}
                  className="flex items-center gap-3 rounded-xl border border-[#e3c7c7] bg-[#fff8f8] px-4 py-3 text-slate-800"
                >
                  <Phone className="h-5 w-5 text-[#973131]" />
                  <span className="font-semibold">{contact.phoneDisplay}</span>
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-[#e3c7c7] bg-white p-5">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#973131]">We Can Help With</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-2 rounded-xl border border-[#e3c7c7] bg-[#fff8f8] px-3 py-2.5 text-sm font-semibold text-slate-800">
                  <ShoppingBag className="h-4 w-4 text-[#973131]" />
                  Sales Related
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-[#e3c7c7] bg-[#fff8f8] px-3 py-2.5 text-sm font-semibold text-slate-800">
                  <ShieldCheck className="h-4 w-4 text-[#973131]" />
                  Quality Related
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-[#e3c7c7] bg-[#fff8f8] px-3 py-2.5 text-sm font-semibold text-slate-800">
                  <Mail className="h-4 w-4 text-[#973131]" />
                  Refund Related
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-[#e3c7c7] bg-[#fff8f8] px-3 py-2.5 text-sm font-semibold text-slate-800">
                  <Truck className="h-4 w-4 text-[#973131]" />
                  Delivery Related
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[#e3c7c7] bg-white p-5">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#973131]">Location</p>
            <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-slate-800">
              <MapPin className="h-4 w-4 text-[#973131]" />
              {contact.locationLabel}
            </div>
            <div className="mt-4 overflow-hidden rounded-xl border border-[#e3c7c7]">
              <iframe
                title="DietEthics Location - Hyderabad Sanath Nagar"
                src={contact.locationMapEmbed}
                className="h-[320px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-[#e3c7c7] bg-white p-5 sm:p-6">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#973131]">FAQs</p>
          <div className="mt-4 space-y-3">
            {faqs.map((item) => (
              <details key={item.q} className="rounded-xl border border-[#e3c7c7] bg-[#fff8f8] p-4">
                <summary className="cursor-pointer list-none pr-6 text-sm font-bold text-slate-900">
                  {item.q}
                </summary>
                <div className="mt-2 text-sm leading-6 text-slate-700">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}


