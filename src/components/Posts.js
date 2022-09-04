import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../feature/posts.slice";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Posts() {
  const { t } = useTranslation();
  const [online, setOnline] = useState(navigator.onLine);
  const dispatch = useDispatch();
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
  return (
    <>
      {posts?.map((post) => (
        <div className="posts" key={post.id}>
          {online ? (
            <>
              <div className="post">{post.posts.desc}</div>
            </>
          ) : (
            <>
              <h1>{t("--check-internet")}</h1>
            </>
          )}
        </div>
      ))}
    </>
  );
}
