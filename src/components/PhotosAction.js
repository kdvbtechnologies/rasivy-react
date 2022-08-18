import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { useState } from "react";

export default function PhotosAction() {
  const { t } = useTranslation();
  const [dark] = useState(localStorage.getItem("dark-mode") === "true");
  return (
    <>
      <Helmet>
        <body className={`${dark ? "dark-body" : "light-body"}`}></body>
      </Helmet>

      <div id="rasigif" className={`${dark ? "dark" : "light"}`}>
        <h1>{t("rasigif")}</h1>
        <div className="myimage">
          <div className="image">
            <img
              src="https://res.cloudinary.com/rasivyy/image/upload/v1657222558/Mes%20images-multiple/bp2w8b5mojr2ewkxvubr.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/rasivyy/image/upload/v1657222555/Mes%20images-multiple/uveyixizk1jdwyk6zrmz.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/rasivyy/image/upload/v1657222555/Mes%20images-multiple/cah6po0mkm9oosixbsyq.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
