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
        <h1>{t("--post-photo")}</h1>
        <div className="myimage">
          <div className="image">
            <img
              src="https://res.cloudinary.com/rasivyy/image/upload/v1660878007/Mes%20images/magic-photo1_cy9ftf.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/rasivyy/image/upload/v1660878006/Mes%20images/magic-petite-fille_okjqvt.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/rasivyy/image/upload/v1660878006/Mes%20images/magic-policiere_qxjkag.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/rasivyy/image/upload/v1660877983/Mes%20images/magic-fille_ivhge0.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
