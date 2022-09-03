import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setPosts } from "../feature/posts.slice";

export default function HomeAction() {
  const { t } = useTranslation();
  const [dark] = useState(localStorage.getItem("dark-mode") === "true");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [emaill, setEmaill] = useState("");
  const [password, setPassword] = useState("");
  const [passwordd, setPasswordd] = useState("");
  const [errors, setErrors] = useState("");

  const [online, setOnline] = useState(navigator.onLine);
  const [afterLogin, setAfterLogin] = useState("");
  const getEmail = localStorage.getItem("https://jamelfase.com/user-email");
  const getUserId = localStorage.getItem("https://jamelfase.com/user-id");
  const getToken = localStorage.getItem("https://jamelfase.com/user-token");
  const getUsername = "Sarah Labelle";
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

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
      const userIdStore = res.data.message;
      const userEmailStore = res.data.email;
      //console.log(res.data);
      if (userIdStore) {
        setErrors(`${t("--signup-success")}`);
        //console.log(errors);
      }
      localStorage.setItem("https://jamelfase.com/user-id", userIdStore);
      localStorage.setItem("https://jamelfase.com/user-email", userEmailStore);
    });
  };

  //getAllPost
  async function MyPosts() {
    await axios.get("https://api-adoony.herokuapp.com/api/post").then((res) => {
      dispatch(setPosts(res.data));
    });
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

  //SignIn
  const SignIn = async (e) => {
    e.preventDefault();
    await axios({
      method: "post",
      url: `https://api-adoony.herokuapp.com/api/auth/signin`,
      data: {
        email: emaill || getEmail,
        password: passwordd,
      },
    }).then((res) => {
      console.log(res);
      const tokenStore = res.data.token;
      localStorage.setItem("https://jamelfase.com/user-token", tokenStore);
      setAfterLogin(`${t("--signin-success")}`);
      localStorage.removeItem("https://jamelfase.com/user-email");
      localStorage.setItem("https://jamelfase.com/username", getUsername);
    });
  };

  return (
    <>
      <Helmet>
        <body className={`${dark ? "dark-body" : "light-body"}`}></body>
      </Helmet>

      <div id="home" className={`${dark ? "dark" : "light"}`}>
        <div>
          {getUserId ? (
            <>
              <h2 style={{ color: "blue" }}>{errors}</h2>
            </>
          ) : (
            <>
              {!getToken && (
                <>
                  <form className="signup-form">
                    <h1>{t("--signup")}</h1>
                    <div className="inputs">
                      <input
                        type="text"
                        placeholder={t("--username")}
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div className="inputs">
                      <input
                        type="email"
                        placeholder={t("--email")}
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="inputs">
                      <input
                        type="password"
                        placeholder={t("--password")}
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <br />
                    <button type="submit" onClick={Signup}>
                      {t("--signup-btn")}
                    </button>
                  </form>
                </>
              )}
            </>
          )}

          <br />

          {getToken ? (
            <>
              <h1>{afterLogin}</h1>
            </>
          ) : (
            <div className="signin-form">
              <div className="signin">
                <div className="inputs">
                  <h2>{t("--signin")}</h2>
                  <input
                    type="email"
                    placeholder={t("--email")}
                    name="email"
                    value={emaill || getEmail}
                    onChange={(e) => setEmaill(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder={t("--password")}
                    name="password"
                    value={passwordd}
                    onChange={(e) => setPasswordd(e.target.value)}
                  />
                </div>
                <br />
                <div className="btn-signin">
                  <button align="center" type="submit" onClick={SignIn}>
                    {t("--signin-btn")}
                  </button>
                </div>
              </div>
            </div>
          )}

          <br />
          <br />
          <br />

          <div>
            <div>
              {posts?.map((post) => (
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
