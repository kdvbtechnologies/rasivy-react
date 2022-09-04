//import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { useState } from "react";
//import axios from "axios";
import Posts from "./Posts";
import Login from "./Login";
import Signup from "./Signup";

export default function HomeAction() {
  //const { t } = useTranslation();
  const [dark] = useState(localStorage.getItem("dark-mode") === "true");

  return (
    <>
      <Helmet>
        <body className={`${dark ? "dark-body" : "light-body"}`}></body>
      </Helmet>

      <div id="home" className={`${dark ? "dark" : "light"}`}>
        <Signup />
        <Login />
        <br />
        <br />
        <Posts />
      </div>
    </>
  );
}
