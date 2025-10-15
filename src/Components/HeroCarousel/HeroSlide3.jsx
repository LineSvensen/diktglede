import { Link } from "react-router-dom";

export default function HeroSlide3() {
  return (
    <div className="bg-cream flex flex-col justify-center items-center text-center min-h-[70vh] px-6">
      <h2 className="text-lg md:text-lg font-bold text-gray-800 mb-4">
        Roser langs veien 🌹
      </h2>
      <p className="text-gray-700 text-lg max-w-md mb-6">
        Finn varme, håp og glede i Marits ord.
      </p>
      <Link
        to="/kontakt"
        className="px-6 py-3 bg-rose text-white rounded-lg font-semibold hover:bg-rosedark transition"
      >
        Kontakt Marit
      </Link>
    </div>
  );
}
