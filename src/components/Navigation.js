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
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10vmin"
              height="auto"
              x="0"
              y="0"
              enableBackground="new 0 0 512 512"
              version="1.1"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
            >
              <path d="M494.529 217.671L291.533 14.677c-19.547-19.559-51.5-19.579-71.063-.003L17.472 217.672c-19.619 19.619-19.615 51.373.016 70.988 15.342 15.33 37.317 18.24 54.897 10.84v195.807c0 9.219 7.474 16.692 16.692 16.692h333.846c9.219 0 16.581-7.474 16.581-16.692V299.501c17.576 7.399 39.668 4.488 55.008-10.842 19.628-19.611 19.638-51.365.017-70.988zM306.077 478.616H205.812V378.462h100.265v100.154zm100.154 0H339.35V361.769c0-9.219-7.362-16.692-16.581-16.692H189.231c-9.219 0-16.692 7.474-16.692 16.692v116.846h-66.881V271.29c46.134-46.212 118.445-118.521 150.324-150.43 32.991 33 108.131 108.247 150.249 150.431v207.325zm64.685-213.573c-6.541 6.536-17.083 6.676-23.669.081C421.264 239.096 293.651 111.283 267.77 85.44c-6.517-6.509-17.081-6.509-23.598.009-26.726 26.73-152.558 152.766-179.419 179.674-6.462 6.473-17.005 6.577-23.67-.08-6.57-6.566-6.573-17.195-.004-23.764l203-203.002c6.53-6.532 17.337-6.508 23.844.003l202.999 202.999c6.567 6.569 6.567 17.198-.006 23.764z"></path>
              <path d="M257.076 200.41c-27.612 0-50.077 22.464-50.077 50.077s22.465 50.077 50.077 50.077 50.077-22.464 50.077-50.077-22.465-50.077-50.077-50.077zm0 66.77c-9.204 0-16.692-7.488-16.692-16.692s7.488-16.692 16.692-16.692 16.692 7.488 16.692 16.692c0 9.203-7.488 16.692-16.692 16.692z"></path>
            </svg>
          </li>
        </NavLink>
        <NavLink className="navlink" to="/P/Photos">
          <li>Photos</li>
        </NavLink>
        <NavLink className="navlink" to="/P/Streaming">
          <li>stream</li>
        </NavLink>
        <NavLink className="navlink" to="/P/Post">
          <li>
            <svg
              width="10vmin"
              height="auto"
              className="svg-icon"
              viewBox="0 0 20 20"
            >
              <path d="M13.68 9.448h-3.128V6.319a.552.552 0 00-1.104 0v3.129H6.319a.551.551 0 000 1.102h3.129v3.129a.552.552 0 001.104 0V10.55h3.128a.552.552 0 100-1.102zM10 .968a9.031 9.031 0 100 18.063A9.031 9.031 0 0010 .968zm0 16.934a7.903 7.903 0 11.002-15.806A7.903 7.903 0 0110 17.902z"></path>
            </svg>
          </li>
        </NavLink>

        <NavLink className="navlink" to="/P/Search">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10vmin"
              height="auto"
              x="0"
              y="0"
              enableBackground="new 0 0 487.95 487.95"
              version="1.1"
              viewBox="0 0 487.95 487.95"
              xmlSpace="preserve"
            >
              <path d="M481.8 453l-140-140.1c27.6-33.1 44.2-75.4 44.2-121.6C386 85.9 299.5.2 193.1.2S0 86 0 191.4s86.5 191.1 192.9 191.1c45.2 0 86.8-15.5 119.8-41.4l140.5 140.5c8.2 8.2 20.4 8.2 28.6 0 8.2-8.2 8.2-20.4 0-28.6zM41 191.4c0-82.8 68.2-150.1 151.9-150.1s151.9 67.3 151.9 150.1-68.2 150.1-151.9 150.1S41 274.1 41 191.4z"></path>
            </svg>
          </li>
        </NavLink>

        <NavLink className="navlink" to="/P/Menu">
          <li>Menu</li>
        </NavLink>
      </div>
    </div>
  );
}
