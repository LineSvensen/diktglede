import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import koderaLogo from "../../assets/k-in-kodera.svg";

export default function Footer() {
  return (
    <footer className="bg-babypink text-gray-700 border-t border-pink-100 mt-16 poppins-regular">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">
        {/* --- Column 1: Logo + intro --- */}
        <div>
          <h2 className="text-2xl font-semibold text-[#d63772] mb-3">
            Dikt & Ord
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Velkommen til min verden av dikt, ord og følelser. Her finner du
            mine diktbøker, inspirasjon og kontaktinformasjon.
          </p>
        </div>

        {/* --- Column 2: Quick links --- */}
        <div>
          <h3 className="text-lg font-medium text-[#d63772] mb-3">Utforsk</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-[#ae295a] transition-colors">
                Hjem
              </Link>
            </li>
            <li>
              <Link
                to="/diktboker"
                className="hover:text-[#ae295a] transition-colors"
              >
                Diktbøker
              </Link>
            </li>
            <li>
              <Link
                to="/om-meg"
                className="hover:text-[#ae295a] transition-colors"
              >
                Om meg
              </Link>
            </li>
            <li>
              <Link
                to="/kontakt"
                className="hover:text-[#ae295a] transition-colors"
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </div>

        {/* --- Column 3: Contact / socials --- */}
        <div>
          <h3 className="text-lg font-medium text-[#d63772] mb-3">Kontakt</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-[#d63772]" />
              <a
                href="mailto:post@diktogord.no"
                className="hover:text-[#ae295a] transition"
              >
                post@diktogord.no
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-[#d63772]" />
              <span>+47 900 00 000</span>
            </li>
          </ul>
        </div>
      </div>

      {/* --- Bottom bar --- */}
      <div className="flex justify-evenly items-center flex-col gap-4 border-t border-pink-100 mt-8 py-4 text-center text-xs text-gray-500">
        <p className="flex items-center gap-2 justify-center">

            <img src={koderaLogo} alt="Kodera" className="h-6" />
          
          Denne nettsiden er utviklet med ❤️ av kvinner i Kodera
          
          
          <a
            href="https://kodera.no"
            className="text-[#d63772] hover:text-[#ae295a] transition"
          >
            Kodera.no
          </a>
        </p>
        <p>
          © {new Date().getFullYear()} Marit TH Svensen – Alle rettigheter
          forbeholdt
        </p>
      </div>
    </footer>
  );
}
