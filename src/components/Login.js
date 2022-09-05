import { useTranslation } from "react-i18next";
import { useState } from "react";
import axios from "axios";
//import { useDispatch, useSelector } from "react-redux";
//import { useDispatch } from "react-redux";
//import { setLogin } from "../feature/login.slice";

export default function Login() {
  const { t } = useTranslation();
  const [emaill, setEmaill] = useState("");
  const [passwordd, setPasswordd] = useState("");
  const [afterLogin, setAfterLogin] = useState("");
  const getEmail = localStorage.getItem("https://jamelfase.com/user-email");
  const getToken = localStorage.getItem("https://jamelfase.com/user-token");
  //const getUsername = "Sarah Labelle";
  //const dispatch = useDispatch();
  //const login = useSelector((state) => state.login.login);

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
      console.log(res.data);
      //dispatch(setLogin(res));
      const tokenStore = res.data.token;
      const emailStore = res.data.email;
      const idStore = res.data.id;
      const usernameStore = res.data.username;
      localStorage.setItem("https://jamelfase.com/user-token", tokenStore);
      localStorage.setItem("https://jamelfase.com/user-email-json", emailStore);
      localStorage.setItem("https://jamelfase.com/user-id", idStore);
      localStorage.setItem("https://jamelfase.com/username", usernameStore);
      setAfterLogin(`${t("--signin-success")}`);
      localStorage.removeItem("https://jamelfase.com/user-email");
    });
  };
  //console.log(login);

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
