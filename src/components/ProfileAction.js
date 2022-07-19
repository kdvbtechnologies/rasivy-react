import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProfileAction() {
  const { t } = useTranslation();
  const [dark] = useState(localStorage.getItem("dark-mode") === "true");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data));
  }, []);

  return (
    <>
      <Helmet>
        <body className={`${dark ? "dark-body" : "light-body"}`}></body>
      </Helmet>

      <div id="profile" className={`${dark ? "dark" : "light"}`}>
        <h1>{t("profile")}</h1>
        <div>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
