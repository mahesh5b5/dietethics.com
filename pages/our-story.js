import { Award, Eye, Leaf, Recycle, ShieldCheck, Users } from "lucide-react";
import SEO from "../components/SEO";

const standForItems = [
  { label: "Ethical Sourcing", icon: Leaf },
  { label: "Clean Ingredients", icon: ShieldCheck },
  { label: "Transparency", icon: Eye },
  { label: "Sustainability", icon: Recycle },
  { label: "Quality First", icon: Award },
  { label: "Community", icon: Users },
];

export default function OurStory() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Our Story - Diet Ethics",
    description:
      "Learn how Diet Ethics was built with a quality-first, sustainability-led approach to premium dry fruits and wellness products.",
    url: "https://www.dietethics.com/our-story",
  };

  return (
    <main className="page-shell">
      <SEO
        title="Our Story"
        description="Discover Diet Ethics: our founders, sustainability pillars, values, and journey in building quality-first dry fruit products."
        path="/our-story"
        keywords="about diet ethics, founders, sustainability, dry fruits brand story"
        structuredData={structuredData}
      />
      <section className="page-card overflow-hidden">
        <div className="rounded-3xl border border-[#e3c7c7] bg-gradient-to-br from-[#fffafa] via-[#f8f1f1] to-[#f5eded] p-6 sm:p-10">
          <p className="brand-tagline">pure . honest . nutritions</p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-5xl">Who We Are</h1>

          <div className="mt-6 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4 text-base leading-7 text-slate-700">
              <p>
                Diet Ethics began with a simple belief: wholesome food should be both exceptional in quality and truly
                accessible. As a team of friends and IT professionals, we fused engineering discipline with food
                craftsmanship to build a brand that is transparent, rigorous, and human-centered.
              </p>
              <p>
                We thrive on quality. From sourcing to sorting, we apply data-driven checks and meticulous standards
                to ensure our dry fruits meet a premium benchmark. Our commitment to fair pricing means you get the
                right product at the right value with no gimmicks, just honesty.
              </p>
              <p>
                Packaging and post-processing are where our innovation shines. We design with freshness, safety, and
                experience in mind, using thoughtful materials and processes that protect flavor, extend shelf life,
                and reduce waste.
              </p>
              <p>
                Above all, we believe friends can build anything when motivated by purpose. Diet Ethics is our
                expression of that: a different kind of business, craft-led, tech-informed, and relentlessly focused
                on your health.
              </p>
            </div>

            <div className="rounded-2xl border border-[#e3c7c7] bg-gradient-to-br from-[#fffdfd] to-[#f8eeee] p-5">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#973131]">Our Two Sustainability Pillars</p>
              <div className="mt-4 space-y-3">
                <div className="rounded-xl border border-[#e3c7c7] bg-white p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#973131]">Pillar 01 · Source Better</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    We focus on responsible sourcing partners and cleaner post-processing practices to improve quality at
                    origin and reduce avoidable waste before products even reach packaging.
                  </p>
                </div>
                <div className="rounded-xl border border-[#e3c7c7] bg-white p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#973131]">Pillar 02 · Deliver Smarter</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Through shelf-life-friendly design, right-size packs, and clear usage guidance, we help customers
                    store better, consume better, and waste less over time.
                  </p>
                </div>
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.14em] text-slate-500">
                Phase by phase, we measure and refine each step.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-[#e3c7c7] bg-white/85 p-5 sm:p-6">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#973131]">
              Designed In-House, Built for Better Outcomes
            </p>
            <p className="mt-3 text-base leading-7 text-slate-700">
              From our logo to labels, packaging, and every visual you see on a Diet Ethics product, everything is
              designed and implemented by us. We do not outsource or rely on third-party templates. This hands-on
              approach lets us observe closely, iterate faster, and sweat the small details that truly improve how our
              products look, read, and feel.
            </p>
            <p className="mt-3 text-base leading-7 text-slate-700">
              In-house design keeps our brand cohesive and purposeful. It ensures clarity on the shelf, accuracy in
              information, and a consistent experience across products while staying true to our health-first and
              ethics-driven values.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-[#e3c7c7] bg-white/90 p-5">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#973131]">People Behind The Purpose</p>
            <div className="mt-4 grid gap-3 lg:grid-cols-2">
              <div className="rounded-xl border border-dashed border-[#d6b0b0] bg-[#fffafa] p-3">
                <div className="flex h-56 w-full items-center justify-center rounded-lg border border-dashed border-[#d6b0b0] bg-white text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Photo Placeholder
                </div>
                <div className="mt-3">
                  <p className="text-base font-extrabold tracking-[0.02em] text-slate-900">Priyank Kumar</p>
                  <p className="mt-1 inline-block rounded-full bg-[#973131] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                    Co-founder CEO
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Leads customer relationships, builds brand visibility, and drives sales momentum through creative
                    marketing campaigns that turn first-time buyers into loyal community advocates.
                  </p>
                </div>
              </div>
              <div className="rounded-xl border border-dashed border-[#d6b0b0] bg-[#fffafa] p-3">
                <div className="flex h-56 w-full items-center justify-center rounded-lg border border-dashed border-[#d6b0b0] bg-white text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Photo Placeholder
                </div>
                <div className="mt-3">
                  <p className="text-base font-extrabold tracking-[0.02em] text-slate-900">Mahesh Talanki</p>
                  <p className="mt-1 inline-block rounded-full bg-[#973131] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                    Co-founder CTO
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Architects the technology backbone, shapes product design language, and steers creative product
                    onboarding so every launch feels intuitive, scalable, and experience-first.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-[#e3c7c7] bg-[#fff8f8] p-5 sm:p-6">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#973131]">What We Stand For</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {standForItems.map(({ label, icon: Icon }) => (
                <div key={label} className="rounded-xl border border-[#e3c7c7] bg-white px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="rounded-lg border border-[#e3c7c7] bg-[#fff8f8] p-1.5 text-[#973131]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <p className="text-sm font-semibold text-slate-900">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-[#e3c7c7] bg-white/90 p-5 sm:p-6">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#973131]">Our Journey</p>
            <div className="mt-5 space-y-5">
              {[
                {
                  phase: "Feb - Mar 2025",
                  title: "Foundations",
                  text: "The time when the Diet Ethics idea was born. What began as a heartfelt belief between friends soon became a clear plan: align licensing, shape the brand identity, and craft our first product line with purpose.",
                },
                {
                  phase: "Apr - May 2025",
                  title: "First Batch & Pilot",
                  text: "Our first batch went live. Early sales and real feedback helped us find the right balance between quality, value, and customer trust.",
                },
                {
                  phase: "Jun - Jul 2025",
                  title: "Second Line & Design",
                  text: "New variants took shape, labels matured, and design iterations made product information clearer and the experience more consistent.",
                },
                {
                  phase: "Aug - Sep 2025",
                  title: "Packaging & Batch Two",
                  text: "PET jars and refined visuals came together as we launched batch two with tighter processes and stronger execution confidence.",
                },
                {
                  phase: "Oct - Dec 2025",
                  title: "Portfolio Expansion",
                  text: "We broadened our catalogue and scaled from early offerings to a 15-product lineup, widening customer choice without compromising quality.",
                },
                {
                  phase: "Jan - Feb 2026",
                  title: "SKU Strategy & Channel Readiness",
                  text: "Through focused research, we rethought product design and finalized 13 growth-focused SKUs to strengthen multi-channel selling capacity.",
                },
                {
                  phase: "Mar 2026 - Present",
                  title: "Competitive Market Readiness",
                  text: "With packaging systems and sales playbooks in place, we are now positioned to serve the competitive market with quality-first, affordability-minded products.",
                },
              ].map((item, index, arr) => (
                <div key={item.phase} className="relative pl-10">
                  {index < arr.length - 1 ? (
                    <span className="absolute left-[11px] top-8 h-[calc(100%+1rem)] w-[2px] bg-[#e3c7c7]" />
                  ) : null}
                  <span className="absolute left-0 top-1.5 h-6 w-6 rounded-full border-2 border-[#973131] bg-white" />
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#973131]">{item.phase}</p>
                  <h3 className="mt-1 text-base font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


