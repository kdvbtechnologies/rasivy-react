import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Pages/Menu";
import Search from "./Pages/Search";
import Photos from "./Pages/Photos";
import Streaming from "./Pages/Streaming";
import Post from "./Pages/Post";
import DarkMode from "./Pages/DarkMode";
import Home from "./Pages/Home";
import Language from "./Pages/Language";
import Profile from "./Pages/Profile";
import Settings from "./Pages/Settings";
import Logout from "./Pages/Logout";
import { UidContext } from "./components/AppContext";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "./actions/user.actions";

export default function App() {
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: "https://api-adoony.herokuapp.com/jwtid",
        withCredentials: true,
      })
        .then((res) => {
          console.log(res);
          setUid(res.data);
        })
        .catch((err) => console.log(err));
    };
    fetchToken();

    if (uid) dispatch(getUser(uid));
  }, [uid]);

  return (
    <UidContext.Provider value={uid}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="/P/Menu" element={<Menu />} />
          <Route path="/P/Photos" element={<Photos />} />
          <Route path="/P/Streaming" element={<Streaming />} />
          <Route path="/P/Search" element={<Search />} />
          <Route path="/P/Post" element={<Post />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/DarkMode" element={<DarkMode />} />
          <Route path="/Language" element={<Language />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </UidContext.Provider>
  );
}
