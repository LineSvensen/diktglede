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
        }`,
      );
      setBooks(data);
    };
    fetchBooks();
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <div
      ref={mobileMenuRef}
      className={`fixed top-0 right-0 w-64 bg-white z-50 poppins-regular transform transition-transform duration-300 ease-in-out
  h-[100dvh] max-h-[100dvh] overscroll-contain overflow-hidden
  ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* <div
      ref={mobileMenuRef}
      className={`fixed top-0 right-0 h-full w-64 bg-white  z-50 poppins-regular transform transition-transform duration-300 ease-in-out ${
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    ></div> */}

      <div className="flex justify-between items-center p-4 shadow border-rose">
        <span className="text-lg font-semibold text-rose poppins-bold">
          Meny
        </span>
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="text-rose hover:text-rosedark"
        >
          <X className="w-10 h-10 cursor-pointer" />
        </button>
      </div>

      {/* <nav className="flex flex-col p-4 space-y-3 poppins-regular text-[#d63772] "> */}
      <nav
        className="mobile-menu-scroll  flex flex-col p-4 space-y-3 poppins-regular text-rose
  overflow-y-auto
  h-[calc(100dvh-73px)]
  pb-[calc(2rem+env(safe-area-inset-bottom))]"
      >
        <NavLink
          to="/"
          className="hover:text-rosedark poppins-bold"
          end
          onClick={() => setMobileMenuOpen(false)}
        >
          Hjem
        </NavLink>

        <NavLink
          to="/om-meg"
          className="hover:text-rosedark poppins-bold"
          onClick={() => setMobileMenuOpen(false)}
        >
          Om Marit
        </NavLink>
        <NavLink
          to="/kontakt"
          className="hover:text-rosedark poppins-bold"
          onClick={() => setMobileMenuOpen(false)}
        >
          Kontakt og bestill
        </NavLink>
        <NavLink
          to="/kundeomtaler"
          className="hover:text-rosedark poppins-bold"
          onClick={() => setMobileMenuOpen(false)}
        >
          Kundeomtaler
        </NavLink>
        <NavLink
          to="/presse"
          className="hover:text-rosedark poppins-bold"
          onClick={() => setMobileMenuOpen(false)}
        >
          Presse
        </NavLink>
        <NavLink
          to="/handmade"
          className="hover:text-rosedark poppins-bold"
          onClick={() => setMobileMenuOpen(false)}
        >
          Diktgaver
        </NavLink>
        <div className="flex flex-col space-y-1">
          <Link
            to="/diktboker"
            onClick={() => setMobileMenuOpen(false)}
            className="poppins-bold hover:text-rosedark  "
          >
            Diktbøker
          </Link>
          {books.map((book) => (
            <Link
              key={book.slug}
              to={`/diktboker/${book.slug}`}
              onClick={() => setMobileMenuOpen(false)}
              className="pl-3 text-black hover:text-rose  text-md p-1"
            >
              {book.title}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
