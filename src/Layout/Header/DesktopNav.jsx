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
        ? "text-[#d63772] font-semibold"
        : "text-[#d63772] hover:text-[#367268] "
    }`;

  return (
    <nav className="hidden md:flex items-center space-x-6 poppins-regular">
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
