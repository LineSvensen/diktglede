import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />

          {/* Desktop navigation */}
          <DesktopNav
            dropdownRef={dropdownRef}
            dropdownOpen={dropdownOpen}
            setDropdownOpen={setDropdownOpen}
          />

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 hover:text-gray-900"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </div>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
      )}

      {/* Mobile Drawer */}
      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        mobileMenuRef={mobileMenuRef}
      />
    </header>
  );
}


// import { useState, useEffect, useRef } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { Menu, X, ChevronDown } from "lucide-react";
// import { client } from "../../sanityClient";

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);
//   const mobileMenuRef = useRef(null);
//   const [books, setBooks] = useState([]);

//   // Close dropdown / mobile menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setDropdownOpen(false);
//       }
//       if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
//         setMobileMenuOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Fetch books from Sanity
//   useEffect(() => {
//     const fetchBooks = async () => {
//       const data = await client.fetch(
//         `*[_type == "book"] | order(title asc) {
//           title,
//           "slug": slug.current
//         }`
//       );
//       setBooks(data);
//     };
//     fetchBooks();
//   }, []);

//   return (
//     <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link
//             to="/"
//             className="text-xl font-semibold tracking-tight text-gray-800"
//           >
//             Logo
//           </Link>

//           {/* Desktop navigation */}
//           <nav className="hidden md:flex items-center space-x-6">
//             <NavLink
//               to="/"
//               end
//               className={({ isActive }) =>
//                 `transition-colors ${
//                   isActive
//                     ? "text-black font-semibold"
//                     : "text-gray-700 hover:text-gray-900"
//                 }`
//               }
//             >
//               Hjem
//             </NavLink>

//             <NavLink
//               to="/om-meg"
//               className={({ isActive }) =>
//                 `transition-colors ${
//                   isActive
//                     ? "text-black font-semibold"
//                     : "text-gray-700 hover:text-gray-900"
//                 }`
//               }
//             >
//               Om meg
//             </NavLink>

//             {/* Diktbøker dropdown */}
//             <div className="relative" ref={dropdownRef}>
//               <button
//                 onClick={() => setDropdownOpen((prev) => !prev)}
//                 className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
//               >
//                 Diktbøker
//                 <ChevronDown
//                   className={`ml-1 h-4 w-4 transition-transform duration-200 ${
//                     dropdownOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>

//               {dropdownOpen && (
//                 <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2 animate-fadeIn z-50">
//                   {/* “Vis alle” link */}
//                   <Link
//                     to="/diktboker"
//                     onClick={() => setDropdownOpen(false)}
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
//                   >
//                     Vis alle
//                   </Link>

//                   {/* Dynamic list of books */}
//                   {books.map((book) => (
//                     <Link
//                       key={book.slug}
//                       to={`/diktboker/${book.slug}`}
//                       onClick={() => setDropdownOpen(false)}
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
//                     >
//                       {book.title}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <NavLink
//               to="/kontakt"
//               className={({ isActive }) =>
//                 `transition-colors ${
//                   isActive
//                     ? "text-black font-semibold"
//                     : "text-gray-700 hover:text-gray-900"
//                 }`
//               }
//             >
//               Kontakt
//             </NavLink>

//             <NavLink
//               to="/kundeomtaler"
//               className={({ isActive }) =>
//                 `transition-colors ${
//                   isActive
//                     ? "text-black font-semibold"
//                     : "text-gray-700 hover:text-gray-900"
//                 }`
//               }
//             >
//               Kundeomtaler
//             </NavLink>

//             <NavLink
//               to="/presse"
//               className={({ isActive }) =>
//                 `transition-colors ${
//                   isActive
//                     ? "text-black font-semibold"
//                     : "text-gray-700 hover:text-gray-900"
//                 }`
//               }
//             >
//               Presse
//             </NavLink>
//           </nav>

//           {/* Mobile menu button */}
//           <button
//             className="md:hidden text-gray-700 hover:text-gray-900"
//             onClick={() => setMobileMenuOpen(true)}
//           >
//             <Menu className="w-7 h-7" />
//           </button>
//         </div>
//       </div>

//       {/* Overlay */}
//       {mobileMenuOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
//       )}

//       {/* Mobile drawer */}
//       <div
//         ref={mobileMenuRef}
//         className={`fixed top-0 right-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
//           mobileMenuOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="flex justify-between items-center p-4 border-b">
//           <span className="text-lg font-semibold text-gray-800">Meny</span>
//           <button
//             onClick={() => setMobileMenuOpen(false)}
//             className="text-gray-700 hover:text-gray-900"
//           >
//             <X className="w-7 h-7" />
//           </button>
//         </div>

//         <nav className="flex flex-col p-4 space-y-3">
//           <NavLink
//             to="/"
//             end
//             className="text-gray-700 hover:text-gray-900"
//             onClick={() => setMobileMenuOpen(false)}
//           >
//             Hjem
//           </NavLink>

//           <div className="flex flex-col space-y-1">
//             <span className="font-medium text-gray-800">Diktbøker</span>
//             <Link
//               to="/diktboker"
//               onClick={() => setMobileMenuOpen(false)}
//               className="pl-3 text-gray-600 hover:text-gray-900 text-sm"
//             >
//               Vis alle
//             </Link>
//             {books.map((book) => (
//               <Link
//                 key={book.slug}
//                 to={`/diktboker/${book.slug}`}
//                 onClick={() => setMobileMenuOpen(false)}
//                 className="pl-3 text-gray-600 hover:text-gray-900 text-sm"
//               >
//                 {book.title}
//               </Link>
//             ))}
//           </div>

//           <NavLink
//             to="/om-meg"
//             className="text-gray-700 hover:text-gray-900"
//             onClick={() => setMobileMenuOpen(false)}
//           >
//             Om meg
//           </NavLink>

//           <NavLink
//             to="/kontakt"
//             className="text-gray-700 hover:text-gray-900"
//             onClick={() => setMobileMenuOpen(false)}
//           >
//             Kontakt
//           </NavLink>

//           <NavLink
//             to="/kundeomtaler"
//             className="text-gray-700 hover:text-gray-900"
//             onClick={() => setMobileMenuOpen(false)}
//           >
//             Kundeomtaler
//           </NavLink>

//           <NavLink
//             to="/presse"
//             className="text-gray-700 hover:text-gray-900"
//             onClick={() => setMobileMenuOpen(false)}
//           >
//             Presse
//           </NavLink>
//         </nav>
//       </div>
//     </header>
//   );
// }
