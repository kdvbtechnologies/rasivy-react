import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useState } from "react";
import axios from "axios";

export default function MenuAction() {
  const { t } = useTranslation();
  const [dark] = useState(localStorage.getItem("dark-mode") === "true");
  //const getUserId = localStorage.getItem("https://jamelfase.com/user-id");
  const getToken = localStorage.getItem("https://jamelfase.com/user-token");
  const getUsername = localStorage.getItem("https://jamelfase.com/username");
  const [posts, setPosts] = useState([]);

  async function MyPost() {
    await axios
    .get("http://jsonplaceholder.typicode.com/posts")
    .then((res) => setPosts(res.data))
  }
  MyPost();

  return (
    <>
      <Helmet>
        <body className={`${dark ? "dark-body" : "light-body"}`}></body>
      </Helmet>
      <div id="menu-navigation" className={`${dark ? "dark" : "light"}`}>
        <div className="right">
          {posts.map((post) => (
            <li key={post.id}><h2>{post.title}</h2></li>
          ))}
          <h1>{t("--menu")}</h1>
          <NavLink className="navlink" to="/Profile">
            {getToken ? (
              <>
                <h1>{getUsername}</h1>
              </>
            ) : (
              <>
                <li>{t("--profil")}</li>
              </>
            )}
          </NavLink>
          <NavLink className="navlink" to="/DarkMode">
            <li>{t("--darkmode")}</li>
          </NavLink>
          <NavLink className="navlink" to="/Settings">
            <li>{t("--settings")}</li>
          </NavLink>
          <NavLink className="navlink" to="/Language">
            <li>{t("--language")}</li>
          </NavLink>
        </div>
      </div>
    </>
  );
}
