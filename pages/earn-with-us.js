import {
  BadgePercent,
  Camera,
  Handshake,
  Mail,
  Megaphone,
  Rocket,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import siteConfig from "../data/site-config.json";
import SEO from "../components/SEO";

const { contact } = siteConfig;
const affiliateMailto = `mailto:${contact.affiliateEmail}`;
const affiliateMailtoWithSubject = `mailto:${contact.affiliateEmail}?subject=Affiliate%20Collaboration%20with%20Diet%20Ethics`;
const contactTel = `tel:${contact.phoneE164}`;

export default function EarnWithUs() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Earn With Us - Diet Ethics Affiliate Program",
    description: "Join Diet Ethics affiliate model and earn 2-5% by promoting quality-first nutrition products.",
    url: "https://www.dietethics.com/earn-with-us",
  };
  const faqs = [
    {
      q: "How do I get my affiliate code?",
      a: (
        <>
          Contact us at{" "}
          <a href={affiliateMailto} className="font-bold text-[#973131] underline">
            {contact.affiliateEmail}
          </a>{" "}
          or{" "}
          <a href={contactTel} className="font-bold text-[#973131] underline">
            {contact.phoneDisplay}
          </a>{" "}
          with your social profile details. After review, we issue your affiliate code and onboarding notes.
        </>
      ),
    },
    {
      q: "How much can I earn as an affiliate?",
      a: "You earn 2-5% of the order value on successful code-based purchases, depending on campaign and product mix.",
    },
    {
      q: "Where can I promote my affiliate code?",
      a: "You can promote it on Instagram, YouTube, WhatsApp communities, and other social channels where your audience engages with your recommendations.",
    },
    {
      q: "Who is this model best suited for?",
      a: "Creators, wellness influencers, community sellers, and promoters who want passive income while recommending quality-first nutrition products.",
    },
  ];

  return (
    <main className="page-shell">
      <SEO
        title="Earn With Us"
        description="Join Diet Ethics affiliate program for creators and influencers. Get your affiliate code and earn 2-5% per successful order."
        path="/earn-with-us"
        keywords="affiliate program, earn with us, influencer collaboration, passive income"
        structuredData={structuredData}
      />
      <section className="page-card overflow-hidden">
        <p className="brand-tagline">pure . honest . nutritious!</p>

        <div className="mt-3 rounded-3xl border border-[#e3c7c7] bg-gradient-to-br from-[#fffafa] to-[#f7efef] p-6 sm:p-8">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#973131]">Creator Partnership Program</p>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
            Grow Your Influence. Build Passive Income.
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">
            If you are a social creator, wellness promoter, or community voice, this model is built for you. Get your
            unique affiliate code, share it across your content channels, and earn from every converted order.
          </p>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">
            Every successful code-based order gives you a <b>2-5% reward</b> on order value. You grow your brand, your
            audience gets quality-first nutrition, and you earn with consistency.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={affiliateMailtoWithSubject}
              className="inline-flex items-center gap-2 rounded-full bg-[#973131] px-5 py-2.5 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#7f2929]"
            >
              <Mail className="h-4 w-4" />
              Apply: {contact.affiliateEmail}
            </a>
            <a
              href={contactTel}
              className="inline-flex items-center gap-2 rounded-full border border-[#e3c7c7] bg-white px-5 py-2.5 text-sm font-bold uppercase tracking-[0.12em] text-[#973131] transition hover:bg-[#fbf3f3]"
            >
              Call: {contact.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-[#e3c7c7] bg-[#fff8f8] p-5 sm:p-6">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#973131]">Influencer Hook</p>
          <p className="mt-3 text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl">
            Get Your Affiliate Code and Start Earning from the Content You Already Create.
          </p>
        </div>

        <div className="mt-6 rounded-2xl border border-[#e3c7c7] bg-white p-5 sm:p-6">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#973131]">Distribution Collaboration</p>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            Want to take Diet Ethics products to your local shop network? Reach us via phone or email to explore
            vendor and supplier collaboration alongside affiliate opportunities.
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-[#e3c7c7] bg-white p-4">
            <BadgePercent className="h-5 w-5 text-[#973131]" />
            <p className="mt-2 text-sm font-bold text-slate-900">Commission Engine</p>
            <p className="mt-1 text-sm text-slate-600">Earn 2-5% on every successful order using your affiliate code.</p>
          </div>
          <div className="rounded-2xl border border-[#e3c7c7] bg-white p-4">
            <Camera className="h-5 w-5 text-[#973131]" />
            <p className="mt-2 text-sm font-bold text-slate-900">Creator-First Fit</p>
            <p className="mt-1 text-sm text-slate-600">Designed for Instagram, Shorts, Stories, and WhatsApp sharing.</p>
          </div>
          <div className="rounded-2xl border border-[#e3c7c7] bg-white p-4">
            <TrendingUp className="h-5 w-5 text-[#973131]" />
            <p className="mt-2 text-sm font-bold text-slate-900">Scalable Income</p>
            <p className="mt-1 text-sm text-slate-600">Build long-term passive earning from recurring trust and repeat buyers.</p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-[#e3c7c7] bg-white p-5 sm:p-6">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#973131]">How The Model Works</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Mail,
                title: "1. Apply",
                text: "Share your profile through email or call us to initiate onboarding.",
              },
              {
                icon: Handshake,
                title: "2. Receive Code",
                text: "Get your unique affiliate code with clear reward terms.",
              },
              {
                icon: Megaphone,
                title: "3. Promote",
                text: "Use your social channels to share product stories and your code.",
              },
              {
                icon: Rocket,
                title: "4. Earn",
                text: "Collect 2-5% commission on every successful code-based order.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-xl border border-[#e3c7c7] bg-[#fff8f8] p-4 text-center">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-[#e3c7c7] bg-white">
                  <Icon className="h-12 w-12 text-[#973131]" />
                </div>
                <p className="mt-3 text-sm font-bold text-slate-900">{title}</p>
                <p className="mt-1 text-sm text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-[#e3c7c7] bg-[#fff8f8] p-5 sm:p-6">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#973131]">What You Get</p>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            We support creators with product context, positioning clarity, and a partnership flow that is simple to use
            and easy to explain to audiences. You stay focused on authentic content; we handle quality products and
            fulfillment.
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-slate-800">
            <Users className="h-4 w-4 text-[#973131]" />
            Build trust-led influence with a brand centered on health and quality.
          </div>
          <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-slate-800">
            <Sparkles className="h-4 w-4 text-[#973131]" />
            Turn engagement into income without changing your content style.
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



