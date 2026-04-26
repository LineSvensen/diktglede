import { Link } from "react-router-dom";
import newBookImg from "../../assets/nyshine2.png";
import bgToSlide from "../../assets/bgcartoon.png";

export default function HeroSlide3() {
  return (
    <div
      className="bg-rose/10 lg:gap-16 flex flex-col sm:flex-row justify-center items-center text-center h-full w-full px-6 "
      style={{ backgroundImage: `url(${bgToSlide})` }}
    >
      <div className="flex flex-col text-center items-center ">
        <img
          src={newBookImg}
          alt="ny-bok"
          className="max-w-[280px] sm:hidden  p-2 "
        ></img>
        <h2 className="text-3xl md:text-5xl  text-rose mb-4  pb-2  font-poppins font-extrabold">
          Ny bok 2026
        </h2>
        <p className="text-gray-700 text-lg max-w-md mb-6 pl-8 pr-4">
          Skaff deg den nyeste boken "Ekte verdi"
        </p>
        <Link
          to="/kontakt"
          className="px-6 py-3 bg-rose text-white rounded-lg font-semibold hover:bg-rosedark transition w-40"
        >
          Kontakt Marit
        </Link>
      </div>

      <img
        src={newBookImg}
        alt="ny-bok"
        className="hidden sm:block p-2 sm:max-w-1/2 sm:p-4"
      ></img>
    </div>
  );
}
