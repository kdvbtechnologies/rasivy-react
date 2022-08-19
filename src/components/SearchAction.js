import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { useState } from "react";
//import cookie from "js-cookie";
//import axios from "axios";

export default function SearchAction() {
  const { t } = useTranslation();
  const [dark] = useState(localStorage.getItem("dark-mode") === "true");
  /*
  const removeCookie = (key) => {
    if (window !== "undefined") {
      cookie.remove(key, { expires: 1 });
    }
  };
/*
  const logout = async (e) => {
    e.preventDefault();
    await axios({
      method: "get",
      //url: `http://localhost:5000/api/v1/auth/logout`,
      url: `https://api-adoony.herokuapp.com/api/v1/auth/logout`,
      withCredentials: true,
    })
      .then(() => removeCookie("jwt"))
      .catch((err) => console.log(err));

    window.location = "/";
  };*/

  return (
    <>
      <Helmet>
        <body className={`${dark ? "dark-body" : "light-body"}`}></body>
      </Helmet>

      <div id="search" className={`${dark ? "dark" : "light"}`}>
        <h1>{t("search")}</h1>

        <div style={{ width: "30vmin", backgroundColor: "green" }}>
          <svg
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="8"
              cy="8"
              r="7.25"
              stroke="#FBFBFE"
              stroke-width="1.5"
            />
            <path
              d="M8 15.25C7.7649 15.25 7.48181 15.1442 7.15894 14.8321C6.83246 14.5165 6.50419 14.0235 6.21224 13.3562C5.62932 12.0239 5.25 10.1307 5.25 8C5.25 5.86928 5.62932 3.97615 6.21224 2.64376C6.50419 1.97645 6.83246 1.48352 7.15894 1.16789C7.48181 0.855751 7.7649 0.75 8 0.75C8.2351 0.75 8.51819 0.855751 8.84106 1.16789C9.16754 1.48352 9.49581 1.97645 9.78776 2.64376C10.3707 3.97615 10.75 5.86928 10.75 8C10.75 10.1307 10.3707 12.0239 9.78776 13.3562C9.49581 14.0235 9.16754 14.5165 8.84106 14.8321C8.51819 15.1442 8.2351 15.25 8 15.25Z"
              stroke="#FBFBFE"
              stroke-width="1.5"
            />
            <line
              x1="1"
              y1="5.75"
              x2="15"
              y2="5.75"
              stroke="#FBFBFE"
              stroke-width="1.5"
            />
            <line
              x1="1"
              y1="10.25"
              x2="15"
              y2="10.25"
              stroke="#FBFBFE"
              stroke-width="1.5"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
