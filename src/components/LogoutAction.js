import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { useState } from "react";

export default function LogoutAction() {
  const { t } = useTranslation();
  const [dark] = useState(localStorage.getItem("dark-mode") === "true");
  return (
    <>
      <Helmet>
        <body className={`${dark ? "dark-body" : "light-body"}`}></body>
      </Helmet>

      <div id="settings" className={`${dark ? "dark" : "light"}`}>
        <h1>{t("--settings")}</h1>
        <p>Voulez-vous vous déconnecter ?</p>
      </div>
    </>
  );
}
