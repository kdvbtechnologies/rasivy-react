//import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
//import { useState } from "react";
//import axios from "axios";
//import Posts from "./Posts";
import Login from "./Login";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../feature/posts.slice";
import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function HomeAction() {
  //const { t } = useTranslation();
  const [dark] = useState(localStorage.getItem("dark-mode") === "true");
  const [online, setOnline] = useState(navigator.onLine);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  //const [postss, setPostss] = useState("");

  console.log(posts);
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

  /*profile
  function ProfileClick() {
    localStorage.setItem("click", post.userId)
  }*/

  return (
    <>
      <Helmet>
        <body className={`${dark ? "dark-body" : "light-body"}`}></body>
      </Helmet>

      <div id="home" className={`${dark ? "dark" : "light"}`}>
        <Login />
        <br />
        <br />

        {posts?.map((post) => (
          <div className="posts" key={post.id}>
            <NavLink className="navlink-profile-click" to="/ProfileClick">
              <h5>{post.username}</h5>
            </NavLink>
            <div className="post">{post.desc}</div>
          </div>
        ))}
      </div>
    </>
  );
}
