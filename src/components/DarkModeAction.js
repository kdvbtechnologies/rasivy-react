import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import "../darkmode.css";

export default function DarkModeAction() {
  const { t } = useTranslation();
  const [dark, setDark] = useState(
    localStorage.getItem("dark-mode") === "true"
  );

  useEffect(() => {
    localStorage.setItem("dark-mode", dark);
  }, [dark]);

  function darkFunction() {
    setDark(!dark);
  }

  return (
    <>
      <Helmet>
        <body className={`${dark ? "dark-body" : "light-body"}`}></body>
      </Helmet>
      <div id="darkmode" className={`${dark ? "dark" : "light"}`}>
        <h1>{t("--darkmode")}</h1>

        <div onClick={darkFunction}>
          <svg
            className="btn-darkmode"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            enableBackground="new 0 0 206.622 206.622"
            version="1.1"
            viewBox="0 0 206.622 206.622"
            xmlSpace="preserve"
          >
            <path d="M155.287 58.38c-6.703-7.189-14.65-12.775-23.62-16.603a3.569 3.569 0 00-4.77 4.449c8.128 23.444 1.654 49.524-16.485 66.441-18.146 16.918-44.614 21.557-67.43 11.812a3.569 3.569 0 00-4.77 4.449c3.197 9.218 8.215 17.535 14.918 24.72 12.721 13.643 29.996 21.517 48.64 22.168.836.03 1.668.043 2.5.043 17.728 0 34.54-6.611 47.571-18.764 13.647-12.724 21.517-29.998 22.168-48.643.649-18.645-5.998-36.427-18.722-50.072zm11.596 49.823c-.585 16.74-7.655 32.251-19.905 43.675-12.25 11.423-28.223 17.425-44.959 16.809-16.743-.583-32.252-7.652-43.674-19.904a62.429 62.429 0 01-10.363-14.947c23.47 6.872 49.127.987 67.291-15.952 18.167-16.941 25.828-42.13 20.608-66.02a62.367 62.367 0 0114.19 11.382c11.425 12.25 17.394 28.218 16.812 44.957zM167.607 163.757c-1.393-1.393-3.649-1.393-5.042 0s-1.393 3.649 0 5.042l7.563 7.563a3.556 3.556 0 002.521 1.045 3.564 3.564 0 002.521-6.087l-7.563-7.563zM170.128 30.259l-7.563 7.565a3.564 3.564 0 002.521 6.087c.912 0 1.825-.348 2.521-1.045l7.563-7.565a3.564 3.564 0 000-5.042 3.564 3.564 0 00-5.042 0zM103.311 188.793a3.565 3.565 0 00-3.566 3.566v10.697a3.565 3.565 0 107.132 0v-10.697a3.565 3.565 0 00-3.566-3.566zM201.371 99.745h-10.697a3.565 3.565 0 100 7.132h10.697a3.565 3.565 0 100-7.132zM39.015 42.866c.696.696 1.609 1.045 2.521 1.045s1.825-.348 2.521-1.045a3.564 3.564 0 000-5.042l-7.563-7.565a3.564 3.564 0 00-5.042 0 3.564 3.564 0 000 5.042l7.563 7.565zM39.015 163.757l-7.563 7.563a3.564 3.564 0 002.521 6.087c.912 0 1.825-.348 2.521-1.045l7.563-7.563a3.564 3.564 0 000-5.042 3.564 3.564 0 00-5.042 0zM103.311 17.829a3.565 3.565 0 003.566-3.566V3.566a3.565 3.565 0 10-7.132 0v10.697a3.565 3.565 0 003.566 3.566zM15.949 99.745H5.251a3.565 3.565 0 100 7.132h10.697a3.565 3.565 0 10.001-7.132z"></path>
          </svg>
        </div>
      </div>
    </>
  );
}
