import { Link } from "react-router-dom";
import deal from "../../assets/deal.png";
import blueDots from "../../assets/scratch.png";

export default function HeroSlide2() {
  return (
    <div
      className="relative flex flex-col lg:flex-row items-center justify-center h-full w-full px-6 lg:px-16 py-0 sm:py-10 rounded bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${blueDots})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-red-400/30   to-white/80"></div>

      {/* text content */}
      <div className="relative backdrop-blur-md bg-pink-100 lg:h-[300px] shadow-lg z-10 px-4 sm:px-8 py-4 sm:p-8  lg:pl-8 lg:pr-8 rounded-xl flex flex-col  justify-center items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 max-w-lg gap-3 lg:gap-5">
        <h2 className="text-2xl flex flex-row justify-center items-center pb-3 md:text-4xl font-bold text-black homemade-apple-regular ">
          <p className="text-4xl md:text-5xl">g</p>jør et kupp !
        </h2>
        <p className="text-gray-700 text-sm sm:text-md md:text-lg leading-relaxed font-poppins">
          Kjøp hele samlingen som inkluderer <em>“Dans på roser”</em> - den
          aller første diktboken som det finnes kun et begrenset antall igjen av
        </p>
        <Link
          to="/om-meg"
          className="inline-block mt-2 px-6 py-3 bg-[#d63772] text-white rounded-full font-semibold hover:bg-[#ae295a] transition"
        >
          Les mer
        </Link>
      </div>

      {/* image */}
      <div className="relative z-10 flex justify-center lg:justify-end items-center pl-8 sm:pl-12 lg:pl-0 w-full lg:w-1/2 mt-8 lg:mt-0">
        <img
          src={deal}
          alt="Bøker og gavepakke"
          className="w-[280px] sm:w-[360px] md:w-[400px] lg:w-[420px] object-contain drop-shadow-lg hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
}
