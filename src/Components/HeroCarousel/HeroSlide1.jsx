import { Link } from "react-router-dom";
import heroMobile from "../../assets/hero-mobile.png";
import bgHero from "../../assets/bg-hero.png";
import maritina from "../../assets/maritina.png";

export default function HeroSlide1() {
  return (
    <section
      className="
        relative w-full overflow-hidden
        bg-cover bg-center bg-no-repeat
        min-h-[560px] lg:min-h-[640px]
        pt-8 lg:pt-0
      "
      style={{ backgroundImage: `url(${bgHero})` }}
    >
      {/* Desktop image behind, pinned bottom-right */}
      <img
        src={maritina}
        alt="Marit"
        className="
          hidden lg:block
          absolute bottom-30 xl:bottom-25 right-0 pl-4
          w-[520px] lg:w-[620px] xl:w-[720px]
          max-w-none
          object-contain
          z-0
          pointer-events-none select-none
          translate-y-12
        "
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div
          className="flex flex-col min-[789px]:max-[1023px]:flex-row items-center min-[761px]:items-center
  min-[1024px]:items-start  justify-center lg:min-h-[520px] lg:w-1/2 lg:pt-40"
        >
          <div
            className="w-full text-center lg:text-left space-y-4 lg:pl-8        min-[761px]:w-84
  min-[1149px]:w-full"
          >
            <h2 className="text-3xl homemade-apple-regular md:text-5xl  font-bold text-gray-800 leading-tight">
              Velkommen til Diktglede
            </h2>

            <p className="text-gray-700 manrope-write md:pt-4 text-base md:text-lg max-w-md mx-auto lg:mx-0">
              Utforsk Marits diktbøker – fylt med varme, kjærlighet og
              inspirasjon.
            </p>

            <Link
              to="/diktboker"
              className="inline-block mt-4 px-6 py-3 bg-rose text-white rounded-lg font-semibold hover:bg-rosedark transition"
            >
              Se diktbøkene
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile image */}
      <div className="relative z-10 flex w-full  justify-center lg:hidden">
        <img
          src={heroMobile}
          alt="Diktglede hero"
          className="px-4 pt-4 max-h-[800px] sm:max-h-[600px] object-contain"
        />
      </div>
    </section>
  );
}
// import { useCallback } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Link } from "react-router-dom";

// import bukett from "../../assets/bukett.png";
// import boksamling from "../../assets/bokgruppe.png";
// import heroMobile from "../../assets/hero-mobile.png";
// import bgHero from "../../assets/bg-hero.png";

// export default function HeroCarousel() {
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
//     Autoplay({ delay: 5000 }),
//   ]);

//   const scrollPrev = useCallback(() => {
//     if (emblaApi) emblaApi.scrollPrev();
//   }, [emblaApi]);

//   const scrollNext = useCallback(() => {
//     if (emblaApi) emblaApi.scrollNext();
//   }, [emblaApi]);

//   const slides = [
//     {
//       id: 1,
//       bg: bgHero,
//       title: "Velkommen til Diktglede 🌸",
//       text: "Utforsk Marits diktbøker – fylt med varme, kjærlighet og inspirasjon.",
//       buttonText: "Se diktbøkene",
//       buttonLink: "/diktboker",
//     },
//     // You can add more slides here:
//     // { id: 2, bg: anotherBackground, title: "...", text: "...", ... }
//   ];

//   return (
//     <section className="relative overflow-hidden w-full rounded">
//       {/* Carousel */}
//       <div ref={emblaRef} className="overflow-hidden">
//         <div className="flex">
//           {slides.map((slide) => (
//             <div
//               key={slide.id}
//               className="flex-[0_0_100%] relative flex flex-col lg:flex-row items-center justify-center lg:h-[70vh] pt-8 pb-4
//                 bg-cover bg-center bg-no-repeat"
//               style={{ backgroundImage: `url(${slide.bg})` }}
//             >
//               {/* TEXT BLOCK */}
//               <div className="w-full md:w-1/2 text-center lg:text-left px-4 lg:pr-0 md:pl-16 space-y-4 z-10">
//                 <h2 className="text-3xl homemade-apple-regular md:text-5xl font-bold text-gray-800 leading-tight">
//                   {slide.title}
//                 </h2>
//                 <p className="text-gray-700 manrope-write text-base md:text-lg max-w-md mx-auto md:mx-0">
//                   {slide.text}
//                 </p>
//                 <Link
//                   to={slide.buttonLink}
//                   className="inline-block mt-4 px-6 py-3 bg-rose text-white rounded-lg font-semibold hover:bg-rosedark transition"
//                 >
//                   {slide.buttonText}
//                 </Link>
//               </div>

//               {/* DESKTOP IMAGES */}
//               <div className="hidden lg:flex">
//                 <img
//                   src={boksamling}
//                   alt="Boksamling"
//                   className="object-contain md:max-w-[70%] lg:max-w-[99%] rotate-[-5deg] z-0 lg:pr-[190px] pb-8"
//                 />
//                 <img
//                   src={bukett}
//                   alt="Marit"
//                   className="absolute bottom-0 right-0 w-full sm:max-w-[34%] lg:max-w-[30%] object-contain z-10"
//                 />
//               </div>

//               {/* MOBILE combined image */}
//               <div className="lg:hidden flex justify-center mt-4">
//                 <img
//                   src={heroMobile}
//                   alt="Diktglede hero"
//                   className="w-4/5 max-h-[400px] md:max-h-[600px] object-contain"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ARROWS */}
//       <button
//         onClick={scrollPrev}
//         className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white text-[#d63772] rounded-full p-2 shadow-md transition"
//         aria-label="Forrige slide"
//       >
//         <ChevronLeft className="w-6 h-6" />
//       </button>

//       <button
//         onClick={scrollNext}
//         className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white text-[#d63772] rounded-full p-2 shadow-md transition"
//         aria-label="Neste slide"
//       >
//         <ChevronRight className="w-6 h-6" />
//       </button>
//     </section>
//   );
// }
