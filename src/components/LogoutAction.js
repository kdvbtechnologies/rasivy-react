import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LogoutAction() {
  const { t } = useTranslation();
  const [dark] = useState(localStorage.getItem("dark-mode") === "true");
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <body className={`${dark ? "dark-body" : "light-body"}`}></body>
      </Helmet>

      <div id="settings" className={`${dark ? "dark" : "light"}`}>
        <div>
          <button onClick={() => navigate(-1)}>{t("--return")}</button>
        </div>
        <h1>{t("--logout")}</h1>
        <p>Voulez-vous vous déconnecter ?</p>
      </div>
    </>
  );
}
