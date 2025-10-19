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
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50 poppins-regular ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />

          {/* Desktop navigation */}
          <DesktopNav
            dropdownRef={dropdownRef}
            dropdownOpen={dropdownOpen}
            setDropdownOpen={setDropdownOpen}
          />

          {/* burger button */}
          <button
            className="md:hidden text-[#d63772]  cursor-pointer"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </div>

      {/* bcackground on page when menu is open*/}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[#882046]/80 z-40"></div>
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
