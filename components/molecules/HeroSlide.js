import Image from "next/image";
import Link from "next/link";

const pistaSprinkles = [
  { top: "8%", left: "7%", size: 120, rotate: -18, opacity: 0.58 },
  { top: "14%", left: "24%", size: 156, rotate: 24, opacity: 0.66 },
  { top: "6%", left: "46%", size: 102, rotate: -32, opacity: 0.52 },
  { top: "19%", left: "68%", size: 132, rotate: 11, opacity: 0.62 },
  { top: "31%", left: "12%", size: 108, rotate: 36, opacity: 0.6 },
  { top: "40%", left: "56%", size: 144, rotate: -8, opacity: 0.64 },
  { top: "50%", left: "77%", size: 114, rotate: 27, opacity: 0.56 },
  { top: "63%", left: "19%", size: 150, rotate: -26, opacity: 0.54 },
  { top: "71%", left: "44%", size: 90, rotate: 15, opacity: 0.5 },
  { top: "80%", left: "90%", size: 126, rotate: -14, opacity: 0.57 },
];

export default function HeroSlide({ slide, index }) {
  const seedPatternByProduct = {
    "Premium Pista": "/assets/carousel/pattern/pista-seed.png",
    "Whole Cashews": "/assets/carousel/pattern/cashew-seed.png",
    "Premium Almonds": "/assets/carousel/pattern/almond-seed.png",
  };
  const seedPatternImage = seedPatternByProduct[slide.productName];

  return (
    <article
      className={`relative flex h-[72vh] min-h-[540px] items-end overflow-hidden bg-gradient-to-br ${slide.tone} p-4 pb-16 sm:h-[68vh] sm:min-h-0 sm:p-10`}
    >
      {seedPatternImage ? (
        <div className="pointer-events-none absolute inset-0 z-[1]">
          {pistaSprinkles.map((seed, seedIndex) => (
            <Image
              key={`${slide.productName}-seed-${seedIndex}`}
              src={seedPatternImage}
              alt=""
              width={seed.size}
              height={seed.size}
              className="absolute object-contain mix-blend-multiply"
              style={{
                top: seed.top,
                left: seed.left,
                opacity: seed.opacity,
                transform: `rotate(${seed.rotate}deg)`,
              }}
            />
          ))}
        </div>
      ) : null}

      {slide.productImage ? (
        <div className="pointer-events-none absolute left-1/2 top-0 z-[4] h-[80%] w-[80%] -translate-x-1/2 sm:bottom-5 sm:left-auto sm:right-28 sm:top-auto sm:h-[92%] sm:w-[56%] sm:translate-x-0">
          <Image
            src={slide.productImage}
            alt={slide.productName || slide.title}
            fill
            className="object-contain object-top mix-blend-multiply drop-shadow-[0_24px_30px_rgba(15,23,42,0.3)] sm:object-bottom-right"
            sizes="(max-width: 640px) 80vw, 56vw"
          />
        </div>
      ) : null}

      <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(circle_at_12%_20%,rgba(255,255,255,0.32),transparent_36%)]" />
      <div className={`pointer-events-none absolute inset-0 z-[2] ${slide.overlayTone}`} />

      <div className="glass-card absolute bottom-4 left-[5%] z-10 w-[90%] rounded-3xl p-3 pr-4 sm:relative sm:bottom-auto sm:left-auto sm:mb-0 sm:w-1/2 sm:max-w-none sm:p-8">
        <p
          className="mb-2 text-[9px] font-bold uppercase tracking-[0.14em] text-[#973131] sm:mb-4 sm:text-xs sm:tracking-[0.2em]"
        >
          {slide.eyebrow}
        </p>
        <h1
          className="brand-display mb-3 text-[1.15rem] leading-[1.12] text-slate-900 sm:mb-5 sm:text-4xl lg:text-5xl"
        >
          {slide.title}
        </h1>
        <p className="w-full text-xs text-slate-700 sm:text-lg">{slide.description}</p>
        <Link
          href={{
            pathname: "/",
            query: { product: slide.productName || "" },
            hash: "products",
          }}
          className="mt-4 inline-flex rounded-full bg-slate-900 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.1em] text-white transition hover:scale-[1.02] hover:bg-black sm:mt-7 sm:px-6 sm:py-3 sm:text-sm sm:tracking-widest"
        >
          {slide.cta}
        </Link>
      </div>

      <div className="absolute right-5 top-5 z-10 rounded-full bg-white/70 px-4 py-2 text-xs font-bold text-slate-700">
        0{index + 1}
      </div>
    </article>
  );
}
