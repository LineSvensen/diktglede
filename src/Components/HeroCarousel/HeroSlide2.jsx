import { Link } from "react-router-dom";
import rose from "../../assets/rose-b.png";

export default function HeroSlide2() {
  return (
    <div className="bg-babypink flex flex-col md:flex-row items-center justify-center min-h-[70vh] text-center px-6 md:px-16 rounded">
      <div className="space-y-4 ">
        <h2 className="text-lg md:text-lg font-bold text-gray-800">
          Når ordene blomstrer 🌷
        </h2>
        <p className="text-gray-700 text-base md:text-lg">
          Oppdag dikt skrevet fra hjertet – en reise i ord og følelser.
        </p>
        <Link
          to="/om-meg"
          className="inline-block mt-4 px-6 py-3 bg-rose text-white rounded-lg font-semibold hover:bg-rosedark transition"
        >
          Les mer
        </Link>
      </div>

      <div className="mt-6 md:mt-0 md:ml-8">
        <img
          src={rose}
          alt="Rose"
          className="w-[300px] md:w-[400px] object-contain"
        />
      </div>
    </div>
  );
}
