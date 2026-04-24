import { Link } from "react-router-dom";
import deal from "../../assets/deal.png";
import blueDots from "../../assets/scratch.png";
import allBooksOne from "../../assets/abfour.png";

export default function HeroSlide2() {
  return (
    <div
      className="relative flex flex-col sm:flex-row items-center justify-center h-full w-full px-6 lg:px-16 py-0 sm:py-10 rounded bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${blueDots})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0  bg-linear-to-b from-white/99  to-white/10 sm:bg-linear-to-r sm:from-white/99  sm:to-white/10"></div>

      {/* text content */}
      <div className="relative  lg:h-[300px]  z-10 px-4 sm:px-8 py-4 sm:p-8  lg:pl-8 lg:pr-8 rounded-xl flex flex-col  justify-center items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 max-w-lg gap-3 lg:gap-5">
        <h2 className="text-2xl flex flex-row justify-center items-center pb-3 md:text-4xl font-extrabold text-rose poppins ">
          Skaff deg alle bøkene
        </h2>
        <p className="text-gray-700 text-sm sm:text-md md:text-lg leading-relaxed font-poppins">
          Kjøp bokpakken som eksklusivt inkluderer den aller første diktboken{" "}
          <em>“Dans på roser”</em> som det kun finnes et begrenset antall igjen
          av
        </p>
        <Link
          to="/diktboker/pakke-med-alle-bokene"
          className="inline-block mt-2 px-6 py-3 bg-[#d63772] text-white rounded-lg font-semibold hover:bg-[#ae295a] transition"
        >
          Se mer
        </Link>
      </div>

      {/* image */}
      <div className="relative z-10 flex justify-center lg:justify-end items-center  sm:pl-12 lg:pl-0 w-full lg:w-1/2 mt-2 sm:mt-8 lg:mt-0">
        <img
          src={allBooksOne}
          alt="Bøker og gavepakke"
          className="w-[280px] sm:w-[360px] md:w-[300px] lg:w-[500px] object-contain drop-shadow-lg flex items-center justify-center  transition-transform duration-500"
        />
      </div>
    </div>
  );
}
