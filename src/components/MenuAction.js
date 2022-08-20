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
          <h1>{t("--menu")}</h1>
          <NavLink className="navlink" to="/Profile">
            <li>{t("--profil")}</li>
          </NavLink>
          <NavLink className="navlink" to="/DarkMode">
            <li>{t("--darkmode")}</li>
          </NavLink>
          <NavLink className="navlink" to="/Settings">
            <li>{t("--settings")}</li>
          </NavLink>
          <NavLink className="navlink" to="/Language">
            <li>{t("--language")}</li>
          </NavLink>
        </div>
      </div>
    </>
  );
}
