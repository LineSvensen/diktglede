export default function Kontakt() {
  return (
    <div className="max-w-[330px] sm:max-w-[500px]  mx-auto p-8 flex flex-col items-center text-blackdark  mt-8  mb-12 rounded-lg shadow-lg border-1 border-gray-100 ">
      <h1 className="text-3xl font-bold text-rose   ">Kontakt Marit</h1>
      <div className="  pt-8 pb-4 pl-4 pr-4   flex flex-col text-center justify-center items-center">
        <p className="text-gray-700 text-lg pb-4">
          Her kan du kontakte Marit for å bestille:
        </p>

        <ul className="space-y-2 text-sm ">
          <li className="flex items-center space-x-2 m-4">
            <a
              href="mailto:maritsvensen@gmail.com"
              className="hover:bg-cyandark bg-cyan text-lg hover:text-white shadow-lg rounded-lg py-2 px-7 text-center flex justify-center transition"
            >
              maritsvensen@gmail.com
            </a>
          </li>
          {/* <li className="flex items-center space-x-2">
            <span>+47 900 00 000</span>
          </li> */}
        </ul>
      </div>
      <p className="text-gray-700 text-base   text-center ">
        Et nytt vindu vil åpne der du kan skrive mail. Du kan også sende mail
        dersom du har spørsmål.
      </p>
    </div>
  );
}
