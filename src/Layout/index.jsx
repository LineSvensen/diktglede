import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Layout() {
  console.log("Layout rendered");

  return (
    <div className="">
      <Header />
      <main className="pt-16 ">
        {" "}
        {/* Add padding for fixed header */}
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}
