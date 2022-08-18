import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { useState } from "react";

export default function StreamingAction() {
  const { t } = useTranslation();
  const [dark] = useState(localStorage.getItem("dark-mode") === "true");
  return (
    <>
      <Helmet>
        <body className={`${dark ? "dark-body" : "light-body"}`}></body>
      </Helmet>

      <div id="threemin" className={`${dark ? "dark" : "light"}`}>
        <h1>{t("Streaming Video")}</h1>
        <div>
          <video width="400" controls>
            <source
              src="https://res.cloudinary.com/rasivyy/video/upload/v1657142512/VideoUploads/Y2Mate.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </>
  );
}
