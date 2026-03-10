export default function CarouselDots({ slides, activeIndex, onSelect }) {
  return (
    <div className="absolute right-4 top-1/2 z-10 flex -translate-y-1/2 flex-col items-center gap-2 rounded-full bg-white/75 px-2 py-3 backdrop-blur-sm">
      {slides.map((slide, index) => (
        <button
          key={slide.title}
          aria-label={`Go to slide ${index + 1}`}
          onClick={() => onSelect(index)}
          className={`rounded-full transition ${
            activeIndex === index ? "h-8 w-2 bg-[#973131]" : "h-2.5 w-2.5 bg-[#e3c7c7]"
          }`}
        />
      ))}
    </div>
  );
}

