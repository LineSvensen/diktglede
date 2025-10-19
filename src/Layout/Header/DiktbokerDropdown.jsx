import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { client } from "../../sanityClient";

export default function DiktbokerDropdown({
  dropdownRef,
  dropdownOpen,
  setDropdownOpen,
}) {
  const [books, setBooks] = useState([]);
  const location = useLocation();

  // 👇 detect if current route starts with /diktboker
  const isActive = location.pathname.startsWith("/diktboker");

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
    <div className="relative poppins-regular" ref={dropdownRef}>
      <button
        onClick={() => setDropdownOpen((prev) => !prev)}
        className={`flex items-center transition-colors cursor-pointer ${
          isActive
            ? "text-[#d63772] font-semibold"
            : "text-[#d63772] hover:text-[#367268] "
        }`}
      >
        Diktbøker
        <ChevronDown
          className={`ml-1 h-4 w-4 transition-transform duration-200  ${
            dropdownOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {dropdownOpen && (
        <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2 animate-fadeIn z-50">
          <Link
            to="/diktboker"
            onClick={() => setDropdownOpen(false)}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#69d2c0]/50 transition-colors"
          >
            Vis alle
          </Link>

          {books.map((book) => (
            <Link
              key={book.slug}
              to={`/diktboker/${book.slug}`}
              onClick={() => setDropdownOpen(false)}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#69d2c0]/50 transition-colors"
            >
              {book.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
