import { useState, useEffect } from "react";
import Loader from "../../Components/Loader/loader";

export default function Kontakt() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="  flex flex-col items-center text-black  text-center bg-palepink poppins-regular ">
      <div className=" max-w-[330px] sm:max-w-[500px] bg-antiquePink rounded-lg  p-16 m-12 flex flex-col text-center justify-center items-center ">
        <h1 className="text-3xl poppins-bold text-rose   ">Kontakt Marit</h1>
        <p className="text-black text-lg pb-2 pt-4">
          Send mail for bestilling:
        </p>

        <ul className="space-y-2 text-sm ">
          <li className="flex items-center space-x-2 m-4">
            <a
              href="mailto:maritsvensen@gmail.com"
              className="hover:bg-cyandark bg-cyan text-lg  poppins-bold  hover:text-white shadow-lg rounded-lg py-2 px-7 text-center flex justify-center transition"
            >
              maritsvensen@gmail.com
            </a>
          </li>
          {/* <li className="flex items-center space-x-2">
            <span>+47 900 00 000</span>
          </li> */}
        </ul>
        <p className="text-gray text-base   text-center pt-4 ">
          (Et nytt vindu vil åpne der du kan skrive en mail med dine ønsker
          eller andre spørsmål)
        </p>
        <p className=" text-lg  rounded-full  text-center p-4 mt-4  homemade-apple-regular-skinny ">
          Husk å si ifra om bøkene skal bli signert og/eller inkludere en
          hyggelig melding! ❤️
        </p>
      </div>
    </div>
  );
}
