import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="navigation">
      <div className="left-navigation">
        <NavLink className="navlink" to="/">
          <li>ertiden</li>
        </NavLink>
      </div>
      <div className="right-navigation">
        <NavLink className="navlink" to="/">
          <li>Home</li>
        </NavLink>
        <NavLink className="navlink" to="/P/ThreeMin">
          <li>ThreeMin</li>
        </NavLink>
        <NavLink className="navlink" to="/P/RasiGIF">
          <li>RasiGIF</li>
        </NavLink>
        <NavLink className="navlink" to="/P/Post">
          <li>Post</li>
        </NavLink>

        <NavLink className="navlink" to="/P/Search">
          <li>Search</li>
        </NavLink>

        <NavLink className="navlink" to="/P/Menu">
          <li>Menu</li>
        </NavLink>
      </div>
    </div>
  );
}
