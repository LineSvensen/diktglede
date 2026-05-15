import { useState, useEffect } from "react";
import Loader from "../../Components/Loader/loader";
import fbgruppe from "../../assets/maritfb2.png";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Kontakt() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-palepink poppins-regular flex flex-col items-center   px-4 py-16 text-black">
      {/* Page title */}
      <h1 className="text-4xl  poppins-bold text-rose mb-4 text-center">
        Kontakt og bestill
      </h1>
      <p className="text-gray-500 text-base mb-8 pl-4 pr-4 text-center">
        Ta kontakt for bestilling — Marit svarer så snart hun kan!
      </p>

      <div className="flex flex-col lg:flex-row items-center  justify-center gap-8 w-full ">
        {/* Email card */}
        <div className="flex-1 bg-antiquePink max-w-2xl rounded-lg p-8 lg:pb-24 lg:pt-12 lg:px-20 flex flex-col items-center text-center shadow-sm">
          {/* Icon circle */}
          <div className="w-14 h-14 rounded-full bg-rose/10 flex items-center justify-center mb-5">
            <svg
              className="w-7 h-7 text-rose"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0L12 13.5 2.25 6.75"
              />
            </svg>
          </div>

          <h2 className="text-xl poppins-bold text-rose mb-2">Send en mail</h2>
          <p className="text-gray-600 text-sm mb-4">
            For bestilling og spørsmål — klikk knappen under:
          </p>

          <a
            href="mailto:marithardeberg@gmail.com"
            className="btn-base btn-small"
          >
            marithardeberg@gmail.com
          </a>

          <p className="text-gray-400 text-xs mt-4 leading-relaxed">
            Et nytt vindu åpnes der du kan skrive med dine ønsker eller
            spørsmål.
          </p>

          {/* Divider */}
          <div className="w-full border-t border-rose/20 my-6" />

          <p className="homemade-apple-regular-skinny text-base text-gray-700 leading-relaxed">
            Husk å si ifra om bøkene skal bli signert og/eller inkludere en
            hyggelig melding! ❤️
          </p>
        </div>

        {/* Facebook card */}
        <div className="flex-1 max-w-md    rounded-lg pt-8 flex flex-col items-center text-center border border-rose ">
          {/* Icon circle */}
          <div className="w-14 h-14 rounded-full bg-rose/10 flex items-center justify-center mb-5">
            <svg
              className="w-7 h-7 text-rose"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </div>

          <h2 className="text-xl poppins-bold text-rose mb-2">Facebook</h2>
          <p className="text-gray-600 text-sm pl-4 pr-4 mb-4">
            Følg med på{" "}
            <span className="poppins-bold text-gray-700">
              "Engler, Hjerter og Sommerfugler"
            </span>{" "}
            på Facebook — du kan også sende bestilling der.
          </p>

          <a
            href="https://www.facebook.com/engleroghjerter"
            target="_blank"
            rel="noreferrer"
            className="btn-descret btn-small mb-4 flex flex-row items-center text-center justify-center gap-1"
          >
            Gå til Facebook-siden <FaLongArrowAltRight />
          </a>
          <p className="text-gray-400 text-base mb-6">
            facebook.com/engleroghjerter
          </p>

          <img
            src={fbgruppe}
            alt="Facebook-gruppen til Marit"
            className="rounded-lg w-full max-h-40 object-cover mask-t-from-50% shadow-sm"
          />
        </div>
      </div>
    </div>
  );
}
