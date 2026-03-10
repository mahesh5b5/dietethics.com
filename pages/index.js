import { useEffect, useMemo, useState } from "react";
import HomeCarousel from "../components/organisms/HomeCarousel";
import HomeHighlights from "../components/organisms/HomeHighlights";
import ProductShowcase from "../components/organisms/ProductShowcase";
import products from "../data/products.json";
import SEO from "../components/SEO";

const slides = [
  {
    eyebrow: "Daily Fuel",
    title: "Pure nutrition for focused days.",
    description:
      "Roasted nuts, trail mixes, and protein-rich dry fruits crafted for clean energy and all-day focus.",
    cta: "Shop Signature Mixes",
    tone: "from-[#b45a5a] via-[#cf8f8f] to-[#f3dede]",
  },
  {
    eyebrow: "Premium Gifting",
    title: "Healthy gifting with a professional finish.",
    description:
      "Build custom snack boxes for birthdays, college squads, and teams with playful notes and vibrant packs.",
    cta: "Create Gift Box",
    tone: "from-[#9f3f3f] via-[#c27a7a] to-[#f0d7d7]",
  },
  {
    eyebrow: "Signature Quality",
    title: "pure . honest . nutritions",
    description:
      "From almonds and pistachios to seeds and berries, every bite is a nutrient dense micro-win.",
    cta: "Start Your Routine",
    tone: "from-[#973131] via-[#b45a5a] to-[#efd6d6]",
    imageMobile: "/assets/carousel/walnuts-mobile.png",
    imageDesktop: "/assets/carousel/walnuts-wide.png",
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideCount = useMemo(() => slides.length, []);
  const homeStructuredData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "CollectionPage",
          name: "Diet Ethics - Premium Dry Fruits and Healthy Snacks",
          url: "https://www.dietethics.com/",
          description:
            "Shop premium dry fruits, healthy seeds, and curated nutrition packs from Diet Ethics.",
        },
        {
          "@type": "ItemList",
          name: "Diet Ethics Product Collection",
          itemListElement: products.slice(0, 12).map((product, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "Product",
              name: product.name,
              image: `https://www.dietethics.com${product.image}`,
              description: product.note,
            },
          })),
        },
      ],
    }),
    []
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slideCount);
    }, 4500);
    return () => clearInterval(timer);
  }, [slideCount]);

  return (
    <main className="px-4 pb-10 pt-8 sm:px-6 lg:px-10">
      <SEO
        title="Premium Dry Fruits and Healthy Snacks"
        description="Shop premium dry fruits, healthy seeds, and curated nutrition packs from Diet Ethics. Quality-first products for daily wellness and gifting."
        path="/"
        keywords="dry fruits, nuts, healthy snacks, seeds, nutrition, gifting hampers, diet ethics"
        structuredData={homeStructuredData}
      />
      <section className="mx-auto w-full max-w-[110rem]">
        <HomeCarousel slides={slides} activeIndex={activeIndex} onSelect={setActiveIndex} />
      </section>
      <ProductShowcase products={products} />
      <section className="mx-auto mt-8 w-full max-w-[110rem]">
        <HomeHighlights />
      </section>
    </main>
  );
}
