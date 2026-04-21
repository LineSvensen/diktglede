export default function Kontakt() {
  return (
    <div className="max-w-5xl mx-auto p-8 flex flex-col items-center text-blackdark ">
      <h1 className="text-3xl font-bold text-rose  mb-8 ">Kontakt Marit</h1>
      <div className="max-w-[330px] sm:w-1/2 pt-8 pb-4 pl-8 pr-8 bg-babypink rounded-lg shadow-lg border-1 border-gray-100 flex flex-col text-center justify-center items-center">
        <p className="text-gray-700 text-lg pb-4 ">
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
      <p className="text-gray-700 text-base pt-8  text-center max-w-[330px]">
        Et nytt vindu vil åpne der du kan skrive mail. Du kan også sende mail
        dersom du har spørsmål.
      </p>
    </div>
  );
}
