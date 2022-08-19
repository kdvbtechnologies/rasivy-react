//import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { useState } from "react";
import axios from "axios";
import "../darkmode.css";

export default function HomeAction() {
  //const { t } = useTranslation();
  const [dark] = useState(localStorage.getItem("dark-mode") === "true");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

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
        setErrors("Bienvenue sur jamelfase !");
      }
      localStorage.setItem("https://jamelfase.com/user-id", userStore);
    });
  };

  console.log(errors);
  return (
    <>
      <Helmet>
        <body className={`${dark ? "dark-body" : "light-body"}`}></body>
      </Helmet>

      <div id="home" className={`${dark ? "dark" : "light"}`}>
        <div>
          <form>
            {errors ? (
              <>
                <h2>Inscription reussie</h2>
                <h2>{errors}</h2>
              </>
            ) : (
              <>
                <div className="loader"></div>
              </>
            )}

            <h1>Inscription</h1>
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
          </form>
        </div>
      </div>
    </>
  );
}
