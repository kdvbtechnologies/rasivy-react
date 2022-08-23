import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { useState } from "react";
import axios from "axios";
import Posts from "./Posts";

export default function HomeAction() {
  const { t } = useTranslation();
  const [dark] = useState(localStorage.getItem("dark-mode") === "true");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [emaill, setEmaill] = useState("");
  const [password, setPassword] = useState("");
  const [passwordd, setPasswordd] = useState("");
  const [errors, setErrors] = useState("");

  const [afterLogin, setAfterLogin] = useState("");
  const getEmail = localStorage.getItem("https://jamelfase.com/user-email");
  const getUserId = localStorage.getItem("https://jamelfase.com/user-id");
  const getToken = localStorage.getItem("https://jamelfase.com/user-token");
  const getUsername = "Sarah Labelle";

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
                    value={emaill || getEmail}
                    onChange={(e) => setEmaill(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder={t("--password")}
                    name="password"
                    value={passwordd}
                    onChange={(e) => setPasswordd(e.target.value)}
                  />
                </div>
                <button type="submit" onClick={SignIn}>
                  {t("--signin-btn")}
                </button>
              </div>
            </div>
          )}

          <br />
          <br />
          <br />

          <Posts />
        </div>
      </div>
    </>
  );
}
