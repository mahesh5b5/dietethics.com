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
      "Premium Pista delivers a clean roasted crunch with fiber and protein to keep your day light, focused, and satisfying.",
    cta: "View Premium Pista",
    productName: "Premium Pista",
    productImage: "/assets/carousel/pista-hero.png",
    tone: "from-[#4d6b4f] via-[#89a874] to-[#efe5c6]",
    overlayTone: "bg-[radial-gradient(circle_at_84%_16%,rgba(255,228,188,0.45),transparent_42%)]",
  },
  {
    eyebrow: "Premium Gifting",
    title: "Healthy gifting with a professional finish.",
    description:
      "Whole Cashews bring a creamy bite and premium finish that fits perfectly into festive hampers and thoughtful office gifting.",
    cta: "View Whole Cashews",
    productName: "Whole Cashews",
    productImage: "/assets/carousel/cashews-hero.png",
    tone: "from-[#2f5568] via-[#4f8196] to-[#d8ecf2]",
    overlayTone: "bg-[radial-gradient(circle_at_82%_18%,rgba(255,255,255,0.35),transparent_44%)]",
  },
  {
    eyebrow: "Signature Quality",
    title: "pure . honest . nutritious!",
    description:
      "Premium Almonds add healthy fats, vitamin E, and satisfying texture for an everyday nutrition routine you can sustain.",
    cta: "View Premium Almonds",
    productName: "Premium Almonds",
    productImage: "/assets/carousel/almonds-hero.png",
    tone: "from-[#7f3f30] via-[#b9704d] to-[#f2dcc8]",
    overlayTone: "bg-[radial-gradient(circle_at_80%_20%,rgba(255,210,180,0.34),transparent_44%)]",
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

