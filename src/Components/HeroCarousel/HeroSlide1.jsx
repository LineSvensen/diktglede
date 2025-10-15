import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";

import bukett from "../../assets/bukett.png";
import boksamling from "../../assets/bokgruppe.png";
import heroMobile from "../../assets/hero-mobile.png"; // keep this for mobile
import bgHero from "../../assets/bg-hero.png";

export default function HeroCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000 }),
  ]);

  const slides = [
    {
      id: 1,
      bg: bgHero,
      title: "Velkommen til Diktglede 🌸",
      text: "Utforsk Marits diktbøker – fylt med varme, kjærlighet og inspirasjon.",
      buttonText: "Se diktbøkene",
      buttonLink: "/diktboker",
    },
  ];

  return (
    <section ref={emblaRef} className="overflow-hidden w-full rounded">
      <div className="flex">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="flex-[0_0_100%] relative flex flex-col lg:flex-row items-center justify-center lg:h-[70vh] pt-8 pb-4
              bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.bg})` }}
          >
            {/* TEXT BLOCK */}
            <div className="w-full md:w-1/2 text-center md:text-center lg:text-left px-6 md:px-16 space-y-4 z-10 ">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
                {slide.title}
              </h2>
              <p className="text-gray-700 text-base md:text-lg max-w-md mx-auto md:mx-0">
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
              {/* Books (slightly rotated behind Marit) */}
              <img
                src={boksamling}
                alt="Boksamling"
                className="object-contain md:max-w-[70%] lg:max-w-[90%] rotate-[-5deg] z-0 lg:pr-16"
              />
              {/* Marit (front layer) */}
              <img
                src={bukett}
                alt="Marit"
                className="absolute bottom-0 right-0 w-full sm:max-w-[34%] lg:max-w-[30%]  object-contain z-10"
              />
            </div>

            {/* MOBILE combined image */}
            <div className="lg:hidden flex  justify-center mt-4">
              <img
                src={heroMobile}
                alt="Diktglede hero"
                className="w-4/5  max-h-[400px] md:max-h-[600px] object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
