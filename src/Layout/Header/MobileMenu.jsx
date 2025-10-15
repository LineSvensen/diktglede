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
      className={`fixed top-0 right-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <span className="text-lg font-semibold text-gray-800">Meny</span>
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="text-gray-700 hover:text-gray-900"
        >
          <X className="w-7 h-7" />
        </button>
      </div>

      <nav className="flex flex-col p-4 space-y-3">
        <NavLink to="/" end onClick={() => setMobileMenuOpen(false)}>
          Hjem
        </NavLink>

        <div className="flex flex-col space-y-1">
          <span className="font-medium text-gray-800">Diktbøker</span>
          <Link
            to="/diktboker"
            onClick={() => setMobileMenuOpen(false)}
            className="pl-3 text-gray-600 hover:text-gray-900 text-sm"
          >
            Vis alle
          </Link>
          {books.map((book) => (
            <Link
              key={book.slug}
              to={`/diktboker/${book.slug}`}
              onClick={() => setMobileMenuOpen(false)}
              className="pl-3 text-gray-600 hover:text-gray-900 text-sm"
            >
              {book.title}
            </Link>
          ))}
        </div>

        <NavLink to="/om-meg" onClick={() => setMobileMenuOpen(false)}>
          Om meg
        </NavLink>
        <NavLink to="/kontakt" onClick={() => setMobileMenuOpen(false)}>
          Kontakt
        </NavLink>
        <NavLink to="/kundeomtaler" onClick={() => setMobileMenuOpen(false)}>
          Kundeomtaler
        </NavLink>
        <NavLink to="/presse" onClick={() => setMobileMenuOpen(false)}>
          Presse
        </NavLink>
      </nav>
    </div>
  );
}
