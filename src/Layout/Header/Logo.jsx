import { Link } from "react-router-dom";
import logo from "../../assets/logo-marit.png";

export default function Logo() {
  return (
    <Link
      to="/"
      className="text-xl font-semibold tracking-tight text-gray-800 hover:text-gray-900"
    >
      <img src={logo} alt="Marits Diktbøker logo" className="h-10 w-auto" />
    </Link>
  );
}
