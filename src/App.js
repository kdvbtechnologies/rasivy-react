import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Pages/Menu";
import Search from "./Pages/Search";
import RasiGIF from "./Pages/RasiGIF";
import ThreeMin from "./Pages/ThreeMin";
import Post from "./Pages/Post";
import DarkMode from "./Pages/DarkMode";
import Home from "./Pages/Home";
import Language from "./Pages/Language";
import Profile from "./Pages/Profile";
import Settings from "./Pages/Settings";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/P/Menu" element={<Menu />} />
        <Route path="/P/RasiGIF" element={<RasiGIF />} />
        <Route path="/P/ThreeMin" element={<ThreeMin />} />
        <Route path="/P/Search" element={<Search />} />
        <Route path="/P/Post" element={<Post />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/DarkMode" element={<DarkMode />} />
        <Route path="/Language" element={<Language />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
