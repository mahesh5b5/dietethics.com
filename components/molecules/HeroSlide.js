export default function HeroSlide({ slide, index }) {
  return (
    <article
      className={`relative flex h-[68vh] items-end overflow-hidden bg-gradient-to-br ${slide.tone} p-7 sm:p-10`}
    >
      <div className="glass-card relative z-10 w-full rounded-3xl p-6 sm:w-1/2 sm:p-8">
        <p
          className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#973131]"
        >
          {slide.eyebrow}
        </p>
        <h1
          className="brand-display mb-5 text-3xl leading-[1.1] text-slate-900 sm:text-4xl lg:text-5xl"
        >
          {slide.title}
        </h1>
        <p className="max-w-xl text-base text-slate-700 sm:text-lg">{slide.description}</p>
        <button
          className="mt-7 rounded-full bg-slate-900 px-6 py-3 text-sm font-bold uppercase tracking-widest text-white transition hover:scale-[1.02] hover:bg-black"
        >
          {slide.cta}
        </button>
      </div>

      <div className="absolute right-5 top-5 z-10 rounded-full bg-white/70 px-4 py-2 text-xs font-bold text-slate-700">
        0{index + 1}
      </div>
    </article>
  );
}

