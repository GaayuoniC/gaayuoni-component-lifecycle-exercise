import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom";
import "../index.css";

export function RootLayout() {
  return (
    <>
      <header>
        {" "}
        <NavBar />{" "}
      </header>

      <main>
        {/* {" "}
        <h1>Welcome to Campus Talent APIs Exercises</h1> */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
