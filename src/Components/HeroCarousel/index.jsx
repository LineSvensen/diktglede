import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

import HeroSlide1 from "./HeroSlide1";
import HeroSlide2 from "./HeroSlide2";
import HeroSlide3 from "./HeroSlide3";

export default function HeroCarousel() {
  // 🩷 set up Embla with autoplay
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 7000, stopOnInteraction: false }),
  ]);

  // 🩷 state for enabling/disabling arrows
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  // 🩷 update arrow states when selection changes
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  // 🩷 attach listener when Embla is ready
  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  // 🩷 scroll functions — only fire when Embla is ready
  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  // 🩷 your slides
  const slides = [
    <HeroSlide1 key="1" />,
    <HeroSlide2 key="2" />,
    <HeroSlide3 key="3" />,
  ];

  return (
    <section className="relative w-full overflow-hidden rounded-lg mt-4 sm:mt-6">
      {/* Viewport (MUST have ref) */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%]">
              {slide}
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        className="absolute top-1/2 left-4 -translate-y-1/2 
          bg-white/80 hover:bg-white text-[#d63772] 
          rounded-full p-2 shadow-md transition z-20"
        aria-label="Forrige slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={scrollNext}
        disabled={!canScrollNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 
          bg-white/80 hover:bg-white text-[#d63772] 
          rounded-full p-2 shadow-md transition z-20"
        aria-label="Neste slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </section>
  );
}

// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
// import HeroSlide1 from "./HeroSlide1";
// import HeroSlide2 from "./HeroSlide2";
// import HeroSlide3 from "./HeroSlide3";

// export default function HeroCarousel() {
//   const [emblaRef] = useEmblaCarousel({ loop: true }, [
//     Autoplay({ delay: 7000 }),
//   ]);

//   // You can import as many as you like
//   const slides = [<HeroSlide1 />, <HeroSlide2 />, <HeroSlide3 />];

//   return (
//     <section
//       ref={emblaRef}
//       className="w-full overflow-x-hidden overflow-y-visible relative rounded"
//     >
//       <div className="flex">
//         {slides.map((Slide, i) => (
//           <div key={i} className="flex-[0_0_100%]">
//             {Slide}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
