import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { useState } from "react";
//import axios from "axios";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addPicture, setPicturesData } from "../feature/pictures.slice";

export default function ProfileAction() {
  const { t } = useTranslation();
  const [dark] = useState(localStorage.getItem("dark-mode") === "true");
  //const getUserId = localStorage.getItem("https://jamelfase.com/user-id");
  const getToken = localStorage.getItem("https://jamelfase.com/user-token");
  const getUsername = localStorage.getItem("https://jamelfase.com/username");
  const [desc, setDesc] = useState("");
  const user = localStorage.getItem("https://jamelfase.com/user-id");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.pictures.pictures);
  /*
  const [posts, setPosts] = useState([]);

  async function MyPost() {
    await axios
      .get("https://api-adoony.herokuapp.com/api/user")
      .then((res) => setPosts(res.data));
  }
  MyPost();
*/

  async function MyPost() {
    await axios
      .get("https://api-adoony.herokuapp.com/api/user")
      .then((res) => dispatch(setPicturesData(res.data)));
  }
  MyPost();

  function Post(e) {
    e.preventDefault();
    axios({
      method: "post",
      url: `https://api-adoony.herokuapp.com/api/post/add`,
      data: {
        userId: user,
        desc,
      },
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    }).then((res) => {
      dispatch(addPicture(res));
      //window.location = "/";
    });
  }

  return (
    <>
      <Helmet>
        <body className={`${dark ? "dark-body" : "light-body"}`}></body>
      </Helmet>

      <div id="profile" className={`${dark ? "dark" : "light"}`}>
        <div className="back-btn">
          <button onClick={() => navigate(-1)}>{t("--return")}</button>
        </div>

        {getToken ? (
          <>
            <h1>@{getUsername}</h1>
          </>
        ) : (
          <>
            <h1>{t("--profil")}</h1>
          </>
        )}
        <h1>{t("--post")}</h1>
        <div>
          <br />
          <div>
            <div>
              <input
                type="text"
                name="post"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder={t("--input-post-placeholder")}
                required
              />
            </div>
            <button onClick={Post} type="submit">
              {t("--post-btn")}
            </button>
          </div>
        </div>
        {posts?.map((post) => (
          <li key={post.id}>
            <h2>{post.username}</h2>
            <p>{post.email}</p>
          </li>
        ))}
      </div>
    </>
  );
}
