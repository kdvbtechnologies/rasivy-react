import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navigation() {
  const { t } = useTranslation();

  return (
    <div className="navigation">
      <div className="left-navigation">
        <NavLink className="navlink" to="/">
          <li>{t("--jamelfase")}</li>
        </NavLink>
      </div>
      <div className="right-navigation">
        <NavLink className="navlink" to="/">
          <li>Home</li>
        </NavLink>
        <NavLink className="navlink" to="/P/Photos">
          <li>Photos</li>
        </NavLink>
        <NavLink className="navlink" to="/P/Streaming">
          <li>stream</li>
        </NavLink>
        <NavLink className="navlink" to="/P/Post">
          <li>Post</li>
        </NavLink>

        <NavLink className="navlink" to="/P/Search">
          <li>Search</li>
        </NavLink>

        <NavLink className="navlink" to="/P/Menu">
          <li>Menu</li>
        </NavLink>
      </div>
    </div>
  );
}
