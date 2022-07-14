import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { useState } from "react";

export default function PostAction() {
  const { t } = useTranslation();
  const [dark] = useState(localStorage.getItem("dark-mode") === "true");
  return (
    <>
      <Helmet>
        <body className={`${dark ? "dark-body" : "light-body"}`}></body>
      </Helmet>

      <div id="post" className={`${dark ? "dark" : "light"}`}>
        <h1>{t("post")}</h1>
      </div>
    </>
  );
}
