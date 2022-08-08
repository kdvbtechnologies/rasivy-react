import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

export default function PostAction() {
  const { t } = useTranslation();
  const [dark] = useState(localStorage.getItem("dark-mode") === "true");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const cookies = new Cookies();

  async function Signin(e) {
    e.preventDefault();
    await axios({
      method: "post",
      url: `https://api-adoony.herokuapp.com/api/v1/auth/signin`,
      //url: `http://localhost:5000/api/v1/auth/signin`,
      data: {
        email,
        password,
      },
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
      .then((res) => {
        let name = res.data.blobName;
        let value = res.data.blobValue;
        cookies.set(`${name}`, `${value}`, {
          domain: "jamelfase.com",
          path: "/",
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <Helmet>
        <body className={`${dark ? "dark-body" : "light-body"}`}></body>
      </Helmet>

      <div id="post" className={`${dark ? "dark" : "light"}`}>
        <h1>{t("post")}</h1>
        <div>
          <h1>Connexion</h1>
          <form action="" onSubmit={Signin}>
            <div>
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Se connecter</button>
          </form>
        </div>
      </div>
    </>
  );
}
