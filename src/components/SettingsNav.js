import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useState } from "react";

export default function SettingsNav() {
  const { t } = useTranslation();
  const [dark] = useState(localStorage.getItem("dark-mode") === "true");
  return (
    <>
      <Helmet>
        <body className={`${dark ? "dark-body" : "light-body"}`}></body>
      </Helmet>
      <div id="menu-navigation" className={`${dark ? "dark" : "light"}`}>
        <NavLink className="navlink" to="/Logout">
          <li>{t("--logout")}</li>
        </NavLink>
      </div>
    </>
  );
}
