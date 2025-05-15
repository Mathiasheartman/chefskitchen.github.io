import useEmblaCarousel from "embla-carousel-react";

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        <div className="min-w-0 flex-none basis-full">Slide 1</div>
        <div className="min-w-0 flex-none basis-full">Slide 2</div>
        <div className="min-w-0 flex-none basis-full">Slide 3</div>
      </div>
    </div>
  );
}
