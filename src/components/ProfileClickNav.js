import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProfileClickNav() {
  const { t } = useTranslation();
  const [dark] = useState(localStorage.getItem("dark-mode") === "true");
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <body className={`${dark ? "dark-body" : "light-body"}`}></body>
      </Helmet>
      <div id="menu-navigation" className={`${dark ? "dark" : "light"}`}>
        <div className="back-btn">
          <button onClick={() => navigate(-1)}>{t("--return")}</button>
          <h1>Profil de Zacharie</h1>
        </div>
      </div>
    </>
  );
}
