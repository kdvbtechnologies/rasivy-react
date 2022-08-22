import DarkModeAction from "../components/DarkModeAction";
import Navigation from "../components/Navigation";
import { Helmet } from "react-helmet";
import { useState } from "react";

export default function DarkMode() {
  const [dark] = useState(localStorage.getItem("dark-mode") === "true");
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };
  return (
    <>
      <Helmet>
        <body className={`${dark ? "dark-body" : "light-body"}`}></body>
      </Helmet>
      <div
        id="darkmode"
        className={`${dark ? "dark" : "light"}`}
        style={family}
      >
        <Navigation />
        <DarkModeAction />
      </div>
    </>
  );
}
