import { Link } from "react-router-dom";
import deal from "../../assets/deal.png";
import blueDots from "../../assets/scratch.png";

export default function HeroSlide2() {
  return (
    <div
      className="relative flex flex-col lg:flex-row items-center justify-center h-full px-6 lg:px-16 py-10 rounded bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${blueDots})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-white/30"></div>

      {/* text content */}
      <div className="relative z-10 flex flex-col justify-center items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 max-w-lg gap-3 lg:gap-5">
        <h2 className="text-2xl md:text-3xl font-bold text-[#d63772]">
          Kjør et kupp
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Kjøp hele samlingen som inkluderer <em>“Dans på roser”</em>; den aller
          første diktboken som det finnes begrenset antall igjen av.
        </p>
        <Link
          to="/om-meg"
          className="inline-block mt-4 px-6 py-3 bg-[#d63772] text-white rounded-full font-semibold hover:bg-[#ae295a] transition"
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
