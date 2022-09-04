import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
//import { useState } from "react";
//import axios from "axios";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addPicture, setPicturesData } from "../feature/pictures.slice";
import { setPosts } from "../feature/posts.slice";
import { useState, useEffect } from "react";

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
  const users = useSelector((state) => state.pictures.pictures);

  const [online, setOnline] = useState(navigator.onLine);
  const posts = useSelector((state) => state.posts.posts);

  //getAllPost
  async function MyPosts() {
    await axios
      .get("https://api-adoony.herokuapp.com/api/post")
      .then((res) => dispatch(setPosts(res.data)));
  }
  MyPosts();

  // online
  useEffect(() => {
    //update network status
    function handleStatusChange() {
      setOnline(navigator.onLine);
    }
    //Listen to the online status
    window.addEventListener("online", handleStatusChange);
    //Listen to the offline status
    window.addEventListener("offline", handleStatusChange);
    //Ici c'est pour nettoyer apres l'effet, pour ameliorer les performances
    return () => {
      window.removeEventListener("online", handleStatusChange);
      window.removeEventListener("offline", handleStatusChange);
    };
  }, [online]);
  //console.log(online);

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
          <div className="posts" key={post.id}>
            {post.desc}
            {/*online ? (
              <>
                <div className="post">{post.desc}</div>
                <h6>{post.userId}</h6>
              </>
            ) : (
              <>
                <h1>{t("--check-internet")}</h1>
              </>
            )*/}
          </div>
        ))}
        {users?.map((user) => (
          <li key={user.id}>
            <h2>{user.username}</h2>
            <p>{user.email}</p>
          </li>
        ))}
      </div>
    </>
  );
}
