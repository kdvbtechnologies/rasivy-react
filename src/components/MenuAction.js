import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useState } from "react";

export default function MenuAction() {
  const { t } = useTranslation();
  const [dark] = useState(localStorage.getItem("dark-mode") === "true");

  return (
    <>
      <Helmet>
        <body className={`${dark ? "dark-body" : "light-body"}`}></body>
      </Helmet>
      <div id="menu-navigation" className={`${dark ? "dark" : "light"}`}>
        <div className="right">
          <h1>Menu</h1>
          <NavLink className="navlink" to="/Profile">
            <li>Profile</li>
          </NavLink>
          <NavLink className="navlink" to="/DarkMode">
            <li>DarkMode</li>
          </NavLink>
          <NavLink className="navlink" to="/Settings">
            <li>Parametres</li>
          </NavLink>
          <NavLink className="navlink" to="/Language">
            <li>{t("--language")}</li>
          </NavLink>
        </div>
      </div>
    </>
  );
}
