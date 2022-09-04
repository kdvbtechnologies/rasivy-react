import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { useState } from "react";
import axios from "axios";
import Posts from "./Posts";
import Login from "./Login";

export default function HomeAction() {
  const { t } = useTranslation();
  const [dark] = useState(localStorage.getItem("dark-mode") === "true");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const getUserId = localStorage.getItem("https://jamelfase.com/user-id");
  const getToken = localStorage.getItem("https://jamelfase.com/user-token");

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
          <Login />
          <br />
          <br />
          <Posts />
        </div>
      </div>
    </>
  );
}
