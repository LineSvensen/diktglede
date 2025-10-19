import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import bukett from "../../assets/bukett.png";
import boksamling from "../../assets/bokgruppe.png";
import heroMobile from "../../assets/hero-mobile.png";
import bgHero from "../../assets/bg-hero.png";

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000 }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const slides = [
    {
      id: 1,
      bg: bgHero,
      title: "Velkommen til Diktglede 🌸",
      text: "Utforsk Marits diktbøker – fylt med varme, kjærlighet og inspirasjon.",
      buttonText: "Se diktbøkene",
      buttonLink: "/diktboker",
    },
    // You can add more slides here:
    // { id: 2, bg: anotherBackground, title: "...", text: "...", ... }
  ];

  return (
    <section className="relative overflow-hidden w-full rounded">
      {/* Carousel */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="flex-[0_0_100%] relative flex flex-col lg:flex-row items-center justify-center lg:h-[70vh] pt-8 pb-4
                bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.bg})` }}
            >
              {/* TEXT BLOCK */}
              <div className="w-full md:w-1/2 text-center lg:text-left px-4 lg:pr-0 md:pl-16 space-y-4 z-10">
                <h2 className="text-3xl homemade-apple-regular md:text-5xl font-bold text-gray-800 leading-tight">
                  {slide.title}
                </h2>
                <p className="text-gray-700 manrope-write text-base md:text-lg max-w-md mx-auto md:mx-0">
                  {slide.text}
                </p>
                <Link
                  to={slide.buttonLink}
                  className="inline-block mt-4 px-6 py-3 bg-rose text-white rounded-lg font-semibold hover:bg-rosedark transition"
                >
                  {slide.buttonText}
                </Link>
              </div>

              {/* DESKTOP IMAGES */}
              <div className="hidden lg:flex">
                <img
                  src={boksamling}
                  alt="Boksamling"
                  className="object-contain md:max-w-[70%] lg:max-w-[99%] rotate-[-5deg] z-0 lg:pr-[190px] pb-8"
                />
                <img
                  src={bukett}
                  alt="Marit"
                  className="absolute bottom-0 right-0 w-full sm:max-w-[34%] lg:max-w-[30%] object-contain z-10"
                />
              </div>

              {/* MOBILE combined image */}
              <div className="lg:hidden flex justify-center mt-4">
                <img
                  src={heroMobile}
                  alt="Diktglede hero"
                  className="w-4/5 max-h-[400px] md:max-h-[600px] object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ARROWS */}
      <button
        onClick={scrollPrev}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white text-[#d63772] rounded-full p-2 shadow-md transition"
        aria-label="Forrige slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={scrollNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white text-[#d63772] rounded-full p-2 shadow-md transition"
        aria-label="Neste slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </section>
  );
}
