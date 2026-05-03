import { useNavigate } from "react-router-dom";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { PiArrowCircleLeft } from "react-icons/pi";
//  <PiArrowCircleLeft />

export default function BackButton({ fallbackTo = "/" }) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) navigate(-1);
    else navigate(fallbackTo);
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      className=" bg-white/40 py-2 px-4 rounded-lg shadow inline-flex items-center gap-2 text-base  text-[#d63772] hover:text-pink-800 transition-colors mb-8 cursor-pointer"
    >
      <IoIosArrowDropleftCircle className="text-4xl sm:text-3xl" />
      <span className="hidden sm:inline poppins-regular ">Tilbake</span>
    </button>
  );
}

{
  /* <Link
          to="/"
          className=""
        >
          <span className="text-2xl text-center">
            <PiArrowCircleLeft />
          </span>
          Til forsiden
        </Link> */
}
