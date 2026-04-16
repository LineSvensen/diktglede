export default function Kontakt() {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Kontakt Marit</h1>
      <p className="text-gray-700">Her kan du kontakte Marit for å bestille:</p>
      <ul className="space-y-2 text-sm ">
        <li className="flex items-center space-x-2 m-4">
          <a
            href="mailto:post@diktogord.no"
            className="hover:bg-[#57aa9d] bg-[#69d2c0] rounded-full py-2 px-4 text-center transition"
          >
            post@diktogord.no
          </a>
        </li>
        <li className="flex items-center space-x-2">
          <span>+47 900 00 000</span>
        </li>
      </ul>
    </div>
  );
}
