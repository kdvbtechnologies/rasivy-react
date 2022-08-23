import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import axios from "axios";

export default function PostAction() {
  const { t } = useTranslation();
  const [dark] = useState(localStorage.getItem("dark-mode") === "true");
  const [users, setUsers] = useState([]);
  const [online, setOnline] = useState(navigator.onLine);
  //const [userId, setUserId] = useState(localStorage.getItem("user-id") === "true");
  //const [desc, setDesc] = useState("");
  ///const user = localStorage.getItem("https://jamelfase.com/user-id");

  //getAllPost
  useEffect(() => {
    axios({
      method: "get",
      url: "https://api-adoony.herokuapp.com/api/user",
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    }).then((res) => {
      setUsers(res.data);

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

  /*
  function Post(e) {
    e.preventDefault();
    axios({
      method: "post",
      url: `https://api-adoony.herokuapp.com/api/post/add`,
      data: {
        userId: user,
        desc,
      },
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    }).then((res) => {
      console.log(res);
      window.location = "/";
    });
  }*/

  /*
  function Signin(e) {
    e.preventDefault();
    axios({
      method: "post",
      //url: `https://api-adoony.herokuapp.com/api/v1/auth/signin`,
      url: `http://localhost:5000/api/v1/auth/signin`,
      data: {
        email,
        password,
      },
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
      //credentials: "include",
    })
      .then((res) => {
        const name = res.data.blobName;
        const value = res.data.blobValue;
        cookies.set(`${name}`, `${value}`);
      })
      .catch(function (error) {
        console.log(error);
      });
  }*/

  /* input de type="file"  */

  return (
    <>
      <Helmet>
        <body className={`${dark ? "dark-body" : "light-body"}`}></body>
      </Helmet>

      <div id="post" className={`${dark ? "dark" : "light"}`}>
        <h1>{t("--friends")}</h1>
        <div>
          <br />
          <div>
            {users.map((user) => (
              <div className="users" key={user.id}>
                {online ? (
                  <>
                    <div className="user">
                      <div>{user.username}</div>
                      <div>
                        <h2>S'abonner</h2>{" "}
                      </div>
                    </div>
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
    </>
  );
}

/*
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
  const [post, setPost] = useState("");
  const cookies = new Cookies();

  function Signin(e) {
    e.preventDefault();
    axios({
      method: "post",
      //url: `https://api-adoony.herokuapp.com/api/v1/auth/signin`,
      url: `http://localhost:5000/api/v1/auth/signin`,
      data: {
        email,
        password,
      },
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
      //credentials: "include",
    })
      .then((res) => {
        const name = res.data.blobName;
        const value = res.data.blobValue;
        cookies.set(`${name}`, `${value}`);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  /* input de type="file"  

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
          <br />
          <br />
          <div>
            <div>
              <input
                type="text"
                name="post"
                value={post}
                onChange={(e) => setPost(e.target.value)}
                placeholder="Write your post here"
                required
              />
            </div>
            <button type="submit">Post</button>
          </div>
        </div>
      </div>
    </>
  );
}
*/
