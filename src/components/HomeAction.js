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
    });
  }, []);

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
                <h1>Inscrivez-vous</h1>
                <div>
                  <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" onClick={Signup}>
                  S'inscrire
                </button>
              </div>
            </>
          )}

          <div>
            <div>
              {posts.map((post) => (
                <div className="posts" key={post.id}>
                  {posts ? (
                    <>
                      <div className="post">{post.desc}</div>
                    </>
                  ) : (
                    <>
                      <div>
                        <h1>Verifier votre connexion internet</h1>
                      </div>
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
