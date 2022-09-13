import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//import { useDispatch, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addPicture } from "../feature/pictures.slice";
import Signupp from "./Signupp";
import Loginn from "./Loginn";

export default function ProfileAction() {
  const { t } = useTranslation();
  const [dark] = useState(localStorage.getItem("dark-mode") === "true");
  //const getUserId = localStorage.getItem("https://jamelfase.com/user-id");
  const getToken = localStorage.getItem("https://jamelfase.com/user-token");
  const getUsername = localStorage.getItem("https://jamelfase.com/username");
  const [desc, setDesc] = useState("");
  const user = localStorage.getItem("https://jamelfase.com/user-id");
  const navigate = useNavigate();
  const [signup, setSignup] = useState(true);
  const [addPostError, setAddPostError] = useState("");

  const dispatch = useDispatch();
  //const users = useSelector((state) => state.pictures.pictures);

  /*
  async function MyPost() {
    await axios
      .get("https://api-adoony.herokuapp.com/api/user")
      .then((res) => dispatch(setPicturesData(res.data)));
  }
  MyPost();
*/
  async function Post(e) {
    e.preventDefault();
    await axios({
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
    })
      .then((res) => {
        dispatch(addPicture(res));
        //window.location = "/";
      })
      .catch((err) => {
        if (err) {
          setAddPostError(`${t("--unable-to-add-post")}`);
        }
      });
  }

  return (
    <>
      <Helmet>
        <body className={`${dark ? "dark-body" : "light-body"}`}></body>
      </Helmet>

      <div id="profile" className={`${dark ? "dark" : "light"}`}>
        <div className="back-btn">
          <button onClick={() => navigate(-1)}>{t("--return")}</button>
        </div>
        {getToken ? (
          <>
            <h1>@{getUsername}</h1>
          </>
        ) : (
          <>
            <h1>{t("--profil")}</h1>
          </>
        )}
        <hr />
        <h2 style={{ color: "red" }} align="center">
          {addPostError}
        </h2>
        <h2>{t("--post")}</h2>
        <br />
        <div>
          <div>
            <input
              type="text"
              name="post"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder={t("--input-post-placeholder")}
              required
            />
          </div>
          <button onClick={Post} type="submit">
            {t("--post-btn")}
          </button>
        </div>
        <br />
        <br />
        <div>
          <button
            style={{ color: signup ? "blue" : "black" }}
            onClick={() => setSignup(true)}
          >
            Login
          </button>
          <button
            style={{ color: signup ? "black" : "blue" }}
            onClick={() => setSignup(false)}
          >
            Signup
          </button>
        </div>
        {signup ? <Loginn /> : <Signupp />}
      </div>
    </>
  );
}
