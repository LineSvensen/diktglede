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
      className="  sm:border bg-white/50 sm:bg-transparent border-rose sm:py-1   sm:px-4 rounded-full  shadow inline-flex items-center gap-2 text-center text-base  text-rose hover:text-rosedark transition-colors mb-3 sm:mb-8 cursor-pointer"
    >
      <IoIosArrowDropleftCircle className="text-3xl sm:text-3xl " />
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
