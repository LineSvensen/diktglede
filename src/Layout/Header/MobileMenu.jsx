import { NavLink, Link } from "react-router-dom";
import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { client } from "../../sanityClient";

export default function MobileMenu({
  mobileMenuOpen,
  setMobileMenuOpen,
  mobileMenuRef,
}) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await client.fetch(
        `*[_type == "book"] | order(title asc) {
          title,
          "slug": slug.current
        }`
      );
      setBooks(data);
    };
    fetchBooks();
  }, []);

  return (
    <div
      ref={mobileMenuRef}
      className={`fixed top-0 right-0 h-full w-64 bg-white  z-50 poppins-regular transform transition-transform duration-300 ease-in-out ${
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b border-[#d63772]">
        <span className="text-lg font-semibold text-[#d63772]">Meny</span>
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="text-[#d63772] hover:text-gray-900"
        >
          <X className="w-10 h-10 cursor-pointer" />
        </button>
      </div>

      <nav className="flex flex-col p-4 space-y-3 poppins-semibold text-[#d63772] ">
        <NavLink
          to="/"
          className="hover:text-[#367268]"
          end
          onClick={() => setMobileMenuOpen(false)}
        >
          Hjem
        </NavLink>

        <div className="flex flex-col space-y-1">
          <span className="poppins-semibold  pb-2">Diktbøker</span>
          <Link
            to="/diktboker"
            onClick={() => setMobileMenuOpen(false)}
            className="pl-3 text-gray-600 hover:text-[#d63772]    text-md"
          >
            Vis alle
          </Link>
          {books.map((book) => (
            <Link
              key={book.slug}
              to={`/diktboker/${book.slug}`}
              onClick={() => setMobileMenuOpen(false)}
              className="pl-3 text-[#367268] hover:text-[#d63772]  ext-md p-1"
            >
              {book.title}
            </Link>
          ))}
        </div>

        <NavLink
          to="/om-meg"
          className="hover:text-[#367268] font-semibold"
          onClick={() => setMobileMenuOpen(false)}
        >
          Om meg
        </NavLink>
        <NavLink
          to="/kontakt"
          className="hover:text-[#367268] font-semibold"
          onClick={() => setMobileMenuOpen(false)}
        >
          Kontakt
        </NavLink>
        <NavLink
          to="/kundeomtaler"
          className="hover:text-[#367268] font-semibold"
          onClick={() => setMobileMenuOpen(false)}
        >
          Kundeomtaler
        </NavLink>
        <NavLink
          to="/presse"
          className="hover:text-[#367268] font-semibold"
          onClick={() => setMobileMenuOpen(false)}
        >
          Presse
        </NavLink>
      </nav>
    </div>
  );
}
