import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import HeroSlide1 from "./HeroSlide1";
import HeroSlide2 from "./HeroSlide2";
import HeroSlide3 from "./HeroSlide3";

export default function HeroCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 7000 }),
  ]);

  // You can import as many as you like
  const slides = [<HeroSlide1 />, <HeroSlide2 />, <HeroSlide3 />];

  return (
    <section
      ref={emblaRef}
      className="w-full overflow-x-hidden overflow-y-visible relative rounded"
    >
      <div className="flex">
        {slides.map((Slide, i) => (
          <div key={i} className="flex-[0_0_100%]">
            {Slide}
          </div>
        ))}
      </div>
    </section>
  );
}
