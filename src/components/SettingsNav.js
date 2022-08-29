import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SettingsNav() {
  const { t } = useTranslation();
  const [dark] = useState(localStorage.getItem("dark-mode") === "true");
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <body className={`${dark ? "dark-body" : "light-body"}`}></body>
      </Helmet>
      <div id="menu-navigation" className={`${dark ? "dark" : "light"}`}>
        <div>
          <button onClick={() => navigate(-1)}>{t("--return")}</button>
        </div>
        <div className="right">
          <h1>{t("--settings")}</h1>
          <NavLink className="navlink" to="/Logout">
            <li>{t("--logout")}</li>
          </NavLink>
        </div>
      </div>
    </>
  );
}
