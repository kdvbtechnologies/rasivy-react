import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import axios from "axios";

export default function HomeAction() {
  const { t } = useTranslation();
  const [dark] = useState(localStorage.getItem("dark-mode") === "true");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const [posts, setPosts] = useState([]);
  const [online, setOnline] = useState(navigator.onLine);

  //Signup
  const Signup = async (e) => {
    e.preventDefault();
    await axios({
      method: "post",
      url: `https://api-adoony.herokuapp.com/api/auth/signup`,
      data: {
        username,
        email,
        password,
      },
    }).then((res) => {
      const userStore = res.data.message;
      if (userStore) {
        setErrors(`${t("--signup-success")}`);
      }
      localStorage.setItem("https://jamelfase.com/user-id", userStore);
    });
  };

  const success = localStorage.getItem("https://jamelfase.com/user-id");

  //getAllPost
  useEffect(() => {
    axios.get("https://api-adoony.herokuapp.com/api/post").then((res) => {
      setPosts(res.data);

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
    });
  }, [online]);
  console.log(online);

  return (
    <>
      <Helmet>
        <body className={`${dark ? "dark-body" : "light-body"}`}></body>
      </Helmet>

      <div id="home" className={`${dark ? "dark" : "light"}`}>
        <div>
          {success ? (
            <>
              <h2 style={{ color: "blue" }}>{errors}</h2>
            </>
          ) : (
            <>
              <div>
                <h1>{t("--signup")}</h1>
                <div>
                  <input
                    type="text"
                    placeholder={t("--username")}
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder={t("--email")}
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder={t("--password")}
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" onClick={Signup}>
                  {t("--signup-btn")}
                </button>
              </div>
            </>
          )}
          <br />
          <div>
            <div>
              <h2>{t("--signin")}</h2>
            </div>
            <div>
              <div>
                <input
                  type="email"
                  placeholder={t("--email")}
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder={t("--password")}
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" onClick={Signup}>
                {t("--signin-btn")}
              </button>
            </div>
          </div>

          <br />
          <br />

          <div>
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
          </div>
        </div>
      </div>
    </>
  );
}
