import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

import HeroSlide1 from "./HeroSlide1";
import HeroSlide2 from "./HeroSlide2";
import HeroSlide3 from "./HeroSlide3";

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 8000, stopOnInteraction: false }),
  ]);

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const slides = [
    <HeroSlide1 key="1" />,
    <HeroSlide2 key="2" />,
    <HeroSlide3 key="3" />,
  ];

  return (
    <section
      className="
        relative w-full overflow-hidden rounded-lg
        h-[85vh] md:h-[80vh]  mt-0 sm:mt-6
      "
    >
      {/* Viewport */}
      <div ref={emblaRef} className="overflow-hidden h-full w-full">
        <div className="flex h-full w-full">
          {slides.map((slide, i) => (
            <div
              key={i}
              className="
                flex-[0_0_100%]
                w-full h-full
                flex items-stretch justify-center
                bg-cover bg-center
              "
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        className="
          absolute top-1/2 left-4 -translate-y-1/2
          bg-white/80 hover:bg-white text-[#d63772]
          rounded-full p-2 shadow-md transition z-20
          disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer
        "
        aria-label="Forrige slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={scrollNext}
        disabled={!canScrollNext}
        className="
          absolute top-1/2 right-4 -translate-y-1/2
          bg-white/80 hover:bg-white text-[#d63772]
          rounded-full p-2 shadow-md transition z-20
          disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer
        "
        aria-label="Neste slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </section>
  );
}

// import { useCallback, useEffect, useState } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// import HeroSlide1 from "./HeroSlide1";
// import HeroSlide2 from "./HeroSlide2";
// import HeroSlide3 from "./HeroSlide3";

// export default function HeroCarousel() {
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
//     Autoplay({ delay: 8000, stopOnInteraction: false }),
//   ]);

//   const [canScrollPrev, setCanScrollPrev] = useState(false);
//   const [canScrollNext, setCanScrollNext] = useState(false);

//   const onSelect = useCallback(() => {
//     if (!emblaApi) return;
//     setCanScrollPrev(emblaApi.canScrollPrev());
//     setCanScrollNext(emblaApi.canScrollNext());
//   }, [emblaApi]);

//   useEffect(() => {
//     if (!emblaApi) return;
//     emblaApi.on("select", onSelect);
//     onSelect();
//   }, [emblaApi, onSelect]);

//   const scrollPrev = useCallback(() => {
//     if (!emblaApi) return;
//     emblaApi.scrollPrev();
//   }, [emblaApi]);

//   const scrollNext = useCallback(() => {
//     if (!emblaApi) return;
//     emblaApi.scrollNext();
//   }, [emblaApi]);

//   const slides = [
//     <HeroSlide1 key="1" />,
//     <HeroSlide2 key="2" />,
//     <HeroSlide3 key="3" />,
//   ];

//   return (
//     <section className="relative w-full overflow-hidden rounded-lg mt-4 sm:mt-6">
//       <div ref={emblaRef} className="overflow-hidden">
//         <div className="flex">
//           {slides.map((slide, index) => (
//             <div key={index} className="flex-[0_0_100%]">
//               {slide}
//             </div>
//           ))}
//         </div>
//       </div>

//       <button
//         onClick={scrollPrev}
//         disabled={!canScrollPrev}
//         className="absolute top-1/2 left-4 -translate-y-1/2
//           bg-white/80 hover:bg-white text-[#d63772]
//           rounded-full p-2 shadow-md transition z-20"
//         aria-label="Forrige slide"
//       >
//         <ChevronLeft className="w-6 h-6" />
//       </button>

//       <button
//         onClick={scrollNext}
//         disabled={!canScrollNext}
//         className="absolute top-1/2 right-4 -translate-y-1/2
//           bg-white/80 hover:bg-white text-[#d63772]
//           rounded-full p-2 shadow-md transition z-20"
//         aria-label="Neste slide"
//       >
//         <ChevronRight className="w-6 h-6" />
//       </button>
//     </section>
//   );
// }
