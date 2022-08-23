import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import axios from "axios";

export default async function Posts() {
  const { t } = useTranslation();
  const [posts, setPosts] = useState([]);
  const [online, setOnline] = useState(navigator.onLine);

  await axios.get("https://api-adoony.herokuapp.com/api/post").then((res) => {
    setPosts(res.data);
  });

  //getAllPost
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
    <div>
      {posts.map((post) => (
        <div className="posts" key={post.id}>
          {online ? (
            <>
              <div className="post">{post.desc}</div>
            </>
          ) : (
            <>
              <h1>{t("--check-internet")}</h1>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
