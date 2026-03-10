import { Gift, Mail, PackageCheck, Palette, Truck } from "lucide-react";
import siteConfig from "../data/site-config.json";
import SEO from "../components/SEO";

const { contact } = siteConfig;
const affiliateMailto = `mailto:${contact.affiliateEmail}`;
const affiliateMailtoWithSubject = `mailto:${contact.affiliateEmail}?subject=Corporate%20Gifting%20Collaboration`;

export default function CorporateGifting() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Corporate Gifting by Diet Ethics",
    description: "Premium dry fruit corporate gifting hampers with customization and bulk dispatch support.",
    provider: { "@type": "Organization", name: "Diet Ethics" },
    areaServed: "IN",
  };
  const faqs = [
    {
      q: "What is the minimum order quantity for corporate gifting?",
      a: (
        <>
          MOQ depends on box type and customization level. Share your requirement on{" "}
          <a href={affiliateMailto} className="font-bold text-[#973131] underline">
            {contact.affiliateEmail}
          </a>{" "}
          and we will suggest the best option for your budget and volume.
        </>
      ),
    },
    {
      q: "Can we customize the gift box with our company branding?",
      a: "Yes. We support branded sleeves, custom message cards, and curated product combinations based on your event or campaign.",
    },
    {
      q: "Do you support bulk and multi-location deliveries?",
      a: "Yes. We handle single-location and multi-address dispatches across India with planned batch shipping.",
    },
    {
      q: "How much lead time is needed?",
      a: "For standard boxes, we recommend 5-7 working days. For fully customized orders, 10-15 working days is ideal depending on quantity.",
    },
    {
      q: "Can you help us choose gifts within a fixed budget?",
      a: "Absolutely. We create curated options across budget slabs so you can balance quality, presentation, and quantity.",
    },
    {
      q: "How do we start a corporate gifting collaboration?",
      a: (
        <>
          Send your brief to{" "}
          <a href={affiliateMailto} className="font-bold text-[#973131] underline">
            {contact.affiliateEmail}
          </a>{" "}
          with quantity, budget, expected delivery date, and any branding needs. We will respond with a proposal and
          next steps.
        </>
      ),
    },
  ];

  return (
    <main className="page-shell">
      <SEO
        title="Corporate Gifting"
        description="Corporate dry fruit gifting by Diet Ethics with custom branding, bulk ordering, and multi-location delivery across India."
        path="/corporate-gifting"
        keywords="corporate gifting, dry fruit hampers, employee gifts, client gifting"
        structuredData={structuredData}
      />
      <section className="page-card overflow-hidden">
        <p className="brand-tagline">pure . honest . nutritions</p>
        <div className="mt-3 rounded-3xl border border-[#e3c7c7] bg-gradient-to-br from-[#fffafa] to-[#f7efef] p-6 sm:p-8">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Corporate Gifting</h1>
          <p className="mt-4 max-w-3xl text-slate-700">
            As festive moments and milestones approach, it is the perfect time to appreciate the people who help build
            your journey every day, your employees, teams, and corporate partners. At Diet Ethics, we help you express
            that gratitude through premium dry fruit hampers that are wholesome, elegant, and memorable.
          </p>
          <p className="mt-3 max-w-3xl text-slate-700">
            From festive gifting to leadership appreciation and client relationship gifting, our curated hampers blend
            health, taste, and presentation in one thoughtful gesture. Every box is crafted to spread joy, goodwill,
            and a culture of care.
          </p>

          <a
            href={affiliateMailtoWithSubject}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#973131] px-5 py-2.5 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#7f2929]"
          >
            <Mail className="h-4 w-4" />
            Reach Out: {contact.affiliateEmail}
          </a>
        </div>

        <div className="mt-6 rounded-2xl border border-[#e3c7c7] bg-white p-5 sm:p-6">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#973131]">
            Why Corporate Gifting Works
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            Corporate gifting goes beyond a festive formality. It helps teams feel seen, encourages a stronger work
            culture, and reinforces trust with clients and partners. A well-curated health-forward hamper also reflects
            your company values: thoughtful, responsible, and quality-led.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            In practice, it improves morale, builds goodwill, and creates positive recall for your brand long after
            the festival season is over.
          </p>
        </div>

        <div className="mt-6 rounded-2xl border border-[#e3c7c7] bg-[#fff8f8] p-5 sm:p-6">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#973131]">How It Works</p>
          <p className="mt-2 max-w-3xl text-sm text-slate-600">
            Simple, structured, and hassle-free. We manage the complete corporate gifting cycle from brief to
            doorstep delivery.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                icon: Mail,
                title: "1. Requirement Brief",
                text: "Share quantity, budget, gifting occasion, timeline, and delivery locations over email.",
              },
              {
                icon: Gift,
                title: "2. Curated Options",
                text: "We share gift combinations by price tier, product mix, and packaging format.",
              },
              {
                icon: Palette,
                title: "3. Branding & Approval",
                text: "Confirm logo placement, gift cards, and final pack design before production.",
              },
              {
                icon: PackageCheck,
                title: "4. Batch Packing",
                text: "Each hamper is quality-checked, batch-packed, and prepped with recipient mapping.",
              },
              {
                icon: Truck,
                title: "5. Dispatch & Tracking",
                text: "Pan-India, single or multi-address shipping with proactive delivery updates.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-xl border border-[#e3c7c7] bg-white p-4 text-center">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-[#e3c7c7] bg-[#fff8f8]">
                  <Icon className="h-12 w-12 text-[#973131]" />
                </div>
                <p className="mt-3 text-sm font-bold text-slate-900">{title}</p>
                <p className="mt-1 text-sm text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-[#e3c7c7] bg-white p-5 sm:p-6">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#973131]">
            Popular Corporate Gift Ideas
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            Popular options include dry fruit gift hampers, premium festive pairings, wellness-led curated boxes,
            elegant spiritual gifting sets, and practical home or desk utility hampers. If your goal is a gift that
            feels premium, useful, and widely appreciated, dry fruit hampers remain the most versatile choice across
            employee, staff, and client segments.
          </p>
          <p className="mt-4 text-sm text-slate-700">
            Want help choosing based on budget and team size? Write to{" "}
            <a href={affiliateMailto} className="font-bold text-[#973131] underline">
              {contact.affiliateEmail}
            </a>{" "}
            and we will curate options for you.
          </p>
        </div>

        <div className="mt-6 rounded-2xl border border-[#e3c7c7] bg-[#fff8f8] p-5 sm:p-6">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#973131]">
            Bulk Ordering Made Easy
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            Share your quantity, budget, delivery window, and customization preferences. We respond with curated
            options, finalize design and branding in one streamlined flow, and coordinate tracked dispatch to single or
            multiple locations. The process is built to save your team time while ensuring delivery confidence.
          </p>
        </div>

        <div className="mt-6 rounded-2xl border border-[#e3c7c7] bg-white p-5 sm:p-6">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#973131]">FAQs</p>
          <div className="mt-4 space-y-3">
            {faqs.map((item) => (
              <details key={item.q} className="group rounded-xl border border-[#e3c7c7] bg-[#fff8f8] p-4">
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


