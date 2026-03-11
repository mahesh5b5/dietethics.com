export default function CarouselDots({ slides, activeIndex, onSelect }) {
  return (
    <div className="absolute right-3 top-1/2 z-10 flex -translate-y-1/2 flex-col items-center gap-1 rounded-full bg-white/75 px-1.5 py-1 backdrop-blur-sm md:right-4 md:gap-2 md:px-2 md:py-3">
      {slides.map((slide, index) => (
        <button
          key={slide.title}
          aria-label={`Go to slide ${index + 1}`}
          onClick={() => onSelect(index)}
          className={`rounded-full transition ${
            activeIndex === index ? "h-6 w-2 bg-[#973131] md:h-8" : "h-2 w-2 bg-[#e3c7c7]"
          }`}
        />
      ))}
    </div>
  );
}

