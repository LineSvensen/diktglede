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

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div
          className="flex flex-col min-[640px]:max-[1024px]:flex-row items-center min-[760px]:items-center
  min-[1024px]:items-start  justify-start lg:min-h-[520px] lg:max-w-120 pt-0 sm:pt-8 md:pt-0  lg:pt-30 xl:pt-40"
        >
          <div
            className=" text-center  sm:text-left space-y-4 sm:pl-10  min-[455px]:w-70 min-[640px]:w-60    min-[768px]:w-84
  min-[1149px]:w-full"
          >
            {/* Mobile image */}
            <div className="relative z-10 flex w-full  justify-center sm:hidden">
              <img
                src={heroMobile}
                alt="Diktglede hero"
                className=" pt-0  max-h-[240px]   sm:max-h-[300px] object-cover"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl homemade-apple-regular md:text-5xl  font-bold text-gray-800 leading-tight">
              Velkommen til Diktglede
            </h2>

            <p className="text-gray-700 manrope-write sm:pt-4 lg:pt-8  text-base lg:text-lg md:pr-12 lg:pr-0 max-w-sm mx-auto lg:mx-0">
              Utforsk Marits diktbøker – fylt med varme, kjærlighet og
              inspirasjon.
            </p>

            <Link
              to="/diktboker"
              className="inline-block mt-2 sm:mt-4 px-6 py-3 bg-rose text-white rounded-lg font-semibold hover:bg-rosedark transition"
            >
              Se diktbøkene
            </Link>
            <img
              src={maritina}
              alt="Marit"
              className="
          hidden sm:block
          absolute bottom-[0px]   right-0 pl-4
           w-[350px] min-[640px]:w-[350px] min-[700px]:w-[410px] min-[857px]:w-[500px] lg:w-[630px] xl:w-[720px]
          max-w-none0
          object-cover
          z-0
          pointer-events-none select-none
          translate-y-[100px] sm:translate-y-16 md:translate-y-10 lg:translate-y-20
        "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
