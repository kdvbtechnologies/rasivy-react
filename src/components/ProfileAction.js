import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProfileAction() {
  const { t } = useTranslation();
  const [dark] = useState(localStorage.getItem("dark-mode") === "true");
  const [posts, setPosts] = useState([]);
  //const getUserId = localStorage.getItem("https://jamelfase.com/user-id");
  const getToken = localStorage.getItem("https://jamelfase.com/user-token");
  const getUsername = localStorage.getItem("https://jamelfase.com/username");

  useEffect(() => {
    axios
      .get("https://api-adoony.herokuapp.com/api/post")
      .then((res) => setPosts(res.data));
  }, []);

  return (
    <>
      <Helmet>
        <body className={`${dark ? "dark-body" : "light-body"}`}></body>
      </Helmet>

      <div id="profile" className={`${dark ? "dark" : "light"}`}>
        {getToken ? (
          <>
            <h1>@{getUsername}</h1>
          </>
        ) : (
          <>
            <h1>{t("--profil")}</h1>
          </>
        )}
        <div>
          <ul>
            {posts.map((post) => (
              <div key={post.id}>
                <h2>{post.desc}</h2>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
