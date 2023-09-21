import { NavLink } from "react-router-dom";
import "./NavBar.css";

export function NavBar() {
  return (
    <header className="header">
      <h1>Welcome to Campus Talent APIs Excercises</h1>
      <hr></hr>
      <nav className="nav-bar">
        <ul>
          <NavLink to="/">Home</NavLink>

          <NavLink to="/movies">
            <li>Movies</li>
          </NavLink>
          <NavLink to="/actors">
            <li>Actors</li>
          </NavLink>
        </ul>
      </nav>
      
    </header>
  );
}
