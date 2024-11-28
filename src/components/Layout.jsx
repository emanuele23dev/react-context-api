import { Outlet, Link } from "react-router-dom";
import NavMenu from "./NavMenu";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <header>
        <div className="nav">
          <Link to="/">
            <img src="../src/assets/react.svg" alt="Logo" />
          </Link>
        </div>
        <NavMenu />
      </header>

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
} 