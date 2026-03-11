import CarouselDots from "../atoms/CarouselDots";
import HeroSlide from "../molecules/HeroSlide";

export default function HomeCarousel({ slides, activeIndex, onSelect }) {
  return (
    <div className="relative h-[72vh] min-h-[540px] overflow-hidden rounded-[2rem] border border-[#e3c7c7] shadow-[0_22px_70px_rgba(43,110,79,0.22)] sm:h-[68vh] sm:min-h-0">
      <div
        className="h-full transition-transform duration-700 ease-out"
        style={{ transform: `translateY(-${activeIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <HeroSlide key={slide.title} slide={slide} index={index} />
        ))}
      </div>

      <CarouselDots slides={slides} activeIndex={activeIndex} onSelect={onSelect} />
    </div>
  );
}

