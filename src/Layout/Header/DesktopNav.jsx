import { NavLink } from "react-router-dom";
import DiktbokerDropdown from "./DiktbokerDropdown";

export default function DesktopNav({
  dropdownRef,
  dropdownOpen,
  setDropdownOpen,
}) {
  const linkStyle = ({ isActive }) =>
    `transition-colors ${
      isActive
        ? "text-black font-semibold"
        : "text-gray-700 hover:text-gray-900"
    }`;

  return (
    <nav className="hidden md:flex items-center space-x-6">
      <NavLink to="/" end className={linkStyle}>
        Hjem
      </NavLink>
      <NavLink to="/om-meg" className={linkStyle}>
        Om meg
      </NavLink>

      {/* Dropdown */}
      <DiktbokerDropdown
        dropdownRef={dropdownRef}
        dropdownOpen={dropdownOpen}
        setDropdownOpen={setDropdownOpen}
      />

      <NavLink to="/kontakt" className={linkStyle}>
        Kontakt
      </NavLink>
      <NavLink to="/kundeomtaler" className={linkStyle}>
        Kundeomtaler
      </NavLink>
      <NavLink to="/presse" className={linkStyle}>
        Presse
      </NavLink>
    </nav>
  );
}
