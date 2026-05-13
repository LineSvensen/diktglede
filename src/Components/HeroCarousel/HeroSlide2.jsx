import { Link } from "react-router-dom";
// import deal from "../../assets/deal.png";
import blueDots from "../../assets/scratch.webp";
import allBooksOne from "../../assets/abfour.webp";

export default function HeroSlide2() {
  return (
    <div
      className="relative flex flex-col sm:flex-row items-center justify-center h-full w-full px-6 lg:px-16 py-0 sm:py-10 rounded bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${blueDots})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0  bg-linear-to-b from-white/99  to-white/10 sm:bg-linear-to-r sm:from-white/99  sm:to-white/10"></div>

      <div className="relative z-10 flex justify-center lg:justify-end items-center ">
        <img
          src={allBooksOne}
          alt="Bøker og gavepakke"
          className="w-[220px] sm:hidden object-contain drop-shadow-lg flex items-center justify-center  transition-transform duration-500"
        />
      </div>

      {/* text content */}
      <div className="relative  lg:h-[300px]  z-10 px-4 sm:px-8 py-4 sm:p-8  lg:pl-8 lg:pr-8 rounded-xl flex flex-col  justify-center items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 max-w-lg gap-3 lg:gap-5">
        <h2 className="text-3xl flex flex-row justify-center items-center  md:text-5xl font-extrabold text-rose poppins ">
          Bokpakken
        </h2>
        <h3 className="text-base flex flex-row justify-center items-center  md:text-3xl font-extrabold text-black sm:text-cyandark poppins ">
          Skaff deg alle bøkene !
        </h3>
        <p className="text-gray-700 text-base sm:text-md md:text-lg leading-relaxed poppins-regular">
          Kjøp bokpakken som eksklusivt inkluderer den aller første diktboken{" "}
          <em>“Dans på roser”</em> - kun i begrenset opplag
        </p>
        <Link
          to="/diktboker/pakke-med-alle-bokene"
          className="inline-block mt-2 px-6 py-3 bg-[#d63772] text-white rounded-full poppins-medium shadow hover:bg-[#ae295a] transition"
        >
          Se mer
        </Link>
      </div>

      {/* image */}
      <div className="relative z-10 flex justify-center lg:justify-end items-center  sm:pl-12 lg:pl-0 w-full lg:w-1/2 mt-2 sm:mt-8 lg:mt-0">
        <img
          src={allBooksOne}
          alt="Bøker og gavepakke"
          className="hidden sm:block sm:w-[360px] md:w-[300px] lg:w-[500px] object-contain drop-shadow-lg flex items-center justify-center  transition-transform duration-500"
        />
      </div>
    </div>
  );
}
