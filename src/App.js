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
import ProfileClick from "./Pages/ProfileClick";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
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
        <Route path="/ProfileClick" element={<ProfileClick />} />
      </Routes>
    </BrowserRouter>
  );
}
