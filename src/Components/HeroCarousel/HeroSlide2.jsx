import { Link } from "react-router-dom";
import deal from "../../assets/deal.png";
import blueDots from "../../assets/scratch.png";

export default function HeroSlide2() {
  return (
    <div
      className="relative flex flex-col md:flex-row justify-between min-h-[70vh] px-6 md:px-16 pt-2 pb-4  sm:py-10 rounded bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${blueDots})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-white/30"></div>

      {/* text content */}
      <div className="relative z-10 flex flex-col justify-center w-full md:w-1/2 items-center md:items-start text-center md:text-left gap-1 sm:gap-4 sm:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#d63772]">
          Kjør et kupp
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
          Kjøp hele samlingen som inkluderer "Dans på roser"; den aller første
          diktboken som det finnes begrenset antall igjen av
        </p>
        <Link
          to="/om-meg"
          className="inline-block mt-4 px-6 py-3 bg-[#d63772] text-white rounded-full font-semibold hover:bg-[#ae295a] transition"
        >
          Les mer
        </Link>
      </div>

      {/* image */}
      <div className="relative z-10 flex justify-center md:justify-end items-center w-full md:w-1/2 mt-8 md:mt-0">
        <img
          src={deal}
          alt="Bøker og gavepakke"
          className="w-[280px] md:w-[420px] pl-8 md:p-0 object-contain drop-shadow-lg hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
}
