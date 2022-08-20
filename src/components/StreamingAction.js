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
        <h1>{t("--streaming-video")}</h1>
        <div>
          <video width="400" controls>
            <source
              src="https://res.cloudinary.com/rasivyy/video/upload/v1660877107/VideoUploads/Humood_-_Kun_Anta___%D8%AD%D9%85%D9%88%D8%AF_%D8%A7%D9%84%D8%AE%D8%B6%D8%B1_-_%D9%83%D9%86_%D8%A3%D9%86%D8%AA___Official_Music_Video_ok9dga.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </>
  );
}
