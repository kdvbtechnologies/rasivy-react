import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useState } from "react";

export default function MenuAction() {
  const [dark] = useState(localStorage.getItem("dark-mode") === "true");

  return (
    <>
      <Helmet>
        <body className={`${dark ? "dark-body" : "light-body"}`}></body>
      </Helmet>
      <div id="menu-navigation" className={`${dark ? "dark" : "light"}`}>
        <div className="right">
          <h1>Menu</h1>
          <NavLink className="navlink" to="/profile">
            <li>Profile</li>
          </NavLink>
          <NavLink className="navlink" to="/DarkMode">
            <li>DarkMode</li>
          </NavLink>
          <NavLink className="navlink" to="/settings">
            <li>Parametres</li>
          </NavLink>
          <NavLink className="navlink" to="/Language">
            <li>Langues</li>
          </NavLink>
        </div>
      </div>
    </>
  );
}
