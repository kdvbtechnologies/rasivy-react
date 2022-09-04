import { useTranslation } from "react-i18next";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setLogin } from "../feature/login.slice";

export default function Login() {
  const { t } = useTranslation();
  const [emaill, setEmaill] = useState("");
  const [passwordd, setPasswordd] = useState("");
  const [afterLogin, setAfterLogin] = useState("");
  const getEmail = localStorage.getItem("https://jamelfase.com/user-email");
  const getToken = localStorage.getItem("https://jamelfase.com/user-token");
  const getUsername = "Sarah Labelle";
  const dispatch = useDispatch();

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
      dispatch(setLogin(res));
      const tokenStore = res.data.token;
      localStorage.setItem("https://jamelfase.com/user-token", tokenStore);
      setAfterLogin(`${t("--signin-success")}`);
      localStorage.removeItem("https://jamelfase.com/user-email");
      localStorage.setItem("https://jamelfase.com/username", getUsername);
    });
  };

  return (
    <>
      {getToken ? (
        <>
          <h1>{afterLogin}</h1>
        </>
      ) : (
        <form action="" onSubmit={SignIn} className="signin-form">
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
              <button align="center" type="submit">
                {t("--signin-btn")}
              </button>
            </div>
          </div>
        </form>
      )}
    </>
  );
}
