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
              className="btn-darkmode"
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              enableBackground="new 0 0 206.622 206.622"
              version="1.1"
              viewBox="0 0 206.622 206.622"
              xmlSpace="preserve"
            >
              <path d="M155.287 58.38c-6.703-7.189-14.65-12.775-23.62-16.603a3.569 3.569 0 00-4.77 4.449c8.128 23.444 1.654 49.524-16.485 66.441-18.146 16.918-44.614 21.557-67.43 11.812a3.569 3.569 0 00-4.77 4.449c3.197 9.218 8.215 17.535 14.918 24.72 12.721 13.643 29.996 21.517 48.64 22.168.836.03 1.668.043 2.5.043 17.728 0 34.54-6.611 47.571-18.764 13.647-12.724 21.517-29.998 22.168-48.643.649-18.645-5.998-36.427-18.722-50.072zm11.596 49.823c-.585 16.74-7.655 32.251-19.905 43.675-12.25 11.423-28.223 17.425-44.959 16.809-16.743-.583-32.252-7.652-43.674-19.904a62.429 62.429 0 01-10.363-14.947c23.47 6.872 49.127.987 67.291-15.952 18.167-16.941 25.828-42.13 20.608-66.02a62.367 62.367 0 0114.19 11.382c11.425 12.25 17.394 28.218 16.812 44.957zM167.607 163.757c-1.393-1.393-3.649-1.393-5.042 0s-1.393 3.649 0 5.042l7.563 7.563a3.556 3.556 0 002.521 1.045 3.564 3.564 0 002.521-6.087l-7.563-7.563zM170.128 30.259l-7.563 7.565a3.564 3.564 0 002.521 6.087c.912 0 1.825-.348 2.521-1.045l7.563-7.565a3.564 3.564 0 000-5.042 3.564 3.564 0 00-5.042 0zM103.311 188.793a3.565 3.565 0 00-3.566 3.566v10.697a3.565 3.565 0 107.132 0v-10.697a3.565 3.565 0 00-3.566-3.566zM201.371 99.745h-10.697a3.565 3.565 0 100 7.132h10.697a3.565 3.565 0 100-7.132zM39.015 42.866c.696.696 1.609 1.045 2.521 1.045s1.825-.348 2.521-1.045a3.564 3.564 0 000-5.042l-7.563-7.565a3.564 3.564 0 00-5.042 0 3.564 3.564 0 000 5.042l7.563 7.565zM39.015 163.757l-7.563 7.563a3.564 3.564 0 002.521 6.087c.912 0 1.825-.348 2.521-1.045l7.563-7.563a3.564 3.564 0 000-5.042 3.564 3.564 0 00-5.042 0zM103.311 17.829a3.565 3.565 0 003.566-3.566V3.566a3.565 3.565 0 10-7.132 0v10.697a3.565 3.565 0 003.566 3.566zM15.949 99.745H5.251a3.565 3.565 0 100 7.132h10.697a3.565 3.565 0 10.001-7.132z"></path>
            </svg>
          </li>
        </NavLink>
        <NavLink className="navlink" to="/">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="svg-navbar-icon"
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
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6vmin"
              height="auto"
              className="svg-navbar-icon"
              x="0"
              y="0"
              enableBackground="new 0 0 479 479"
              version="1.1"
              viewBox="0 0 479 479"
              xmlSpace="preserve"
            >
              <path d="M231.5 120C156.785 120 96 180.785 96 255.5S156.785 391 231.5 391 367 330.215 367 255.5 306.215 120 231.5 120zm0 256C165.056 376 111 321.944 111 255.5S165.056 135 231.5 135 352 189.056 352 255.5 297.944 376 231.5 376z"></path>
              <path d="M231.5 160c-52.659 0-95.5 42.841-95.5 95.5s42.841 95.5 95.5 95.5 95.5-42.841 95.5-95.5-42.841-95.5-95.5-95.5zm0 176c-44.388 0-80.5-36.112-80.5-80.5s36.112-80.5 80.5-80.5 80.5 36.112 80.5 80.5-36.112 80.5-80.5 80.5zM407.5 120c-17.369 0-31.5 14.131-31.5 31.5s14.131 31.5 31.5 31.5 31.5-14.131 31.5-31.5-14.131-31.5-31.5-31.5zm0 48c-9.098 0-16.5-7.402-16.5-16.5s7.402-16.5 16.5-16.5 16.5 7.402 16.5 16.5-7.402 16.5-16.5 16.5z"></path>
              <path d="M423.5 80H151v-8.5c0-12.958-10.542-23.5-23.5-23.5h-32C82.542 48 72 58.542 72 71.5V80H55.5C24.897 80 0 104.897 0 135.5v240C0 406.103 24.897 431 55.5 431h368c30.603 0 55.5-24.897 55.5-55.5v-240c0-30.603-24.897-55.5-55.5-55.5zM87 71.5c0-4.687 3.813-8.5 8.5-8.5h32c4.687 0 8.5 3.813 8.5 8.5V80H87v-8.5zm377 304c0 22.332-18.168 40.5-40.5 40.5h-368C33.168 416 15 397.832 15 375.5v-240C15 113.168 33.168 95 55.5 95h368c22.332 0 40.5 18.168 40.5 40.5v240z"></path>
              <path d="M231.5 192c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5c26.743 0 48.5 21.757 48.5 48.5 0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5c0-35.014-28.486-63.5-63.5-63.5z"></path>
            </svg>
          </li>
        </NavLink>
        <NavLink className="navlink" to="/P/Streaming">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6vmin"
              height="auto"
              className="svg-navbar-icon"
              x="0"
              y="0"
              enableBackground="new 0 0 350.953 350.953"
              version="1.1"
              viewBox="0 0 350.953 350.953"
              xmlSpace="preserve"
            >
              <path d="M276.199 342.977c-1.988 0-3.985-.475-5.814-1.436l-94.908-49.896-94.908 49.896a12.502 12.502 0 01-18.137-13.179L80.557 222.68 3.775 147.836a12.5 12.5 0 016.928-21.321l106.111-15.418 47.454-96.153a12.498 12.498 0 0122.417 0l47.454 96.153 106.11 15.418a12.501 12.501 0 016.928 21.321l-76.783 74.845 18.126 105.682a12.503 12.503 0 01-12.321 14.614zM39.362 147.615l63.352 61.752a12.494 12.494 0 013.594 11.063l-14.955 87.196 78.306-41.17a12.504 12.504 0 0111.634 0l78.306 41.168-14.956-87.194a12.498 12.498 0 013.595-11.063l63.353-61.752-87.549-12.722a12.5 12.5 0 01-9.412-6.838l-39.152-79.334-39.153 79.334a12.501 12.501 0 01-9.412 6.838l-87.551 12.722z"></path>
            </svg>
          </li>
        </NavLink>
        <NavLink className="navlink" to="/P/Post">
          <li>
            <svg
              width="6vmin"
              height="auto"
              className="svg-navbar-icon"
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
              width="6vmin"
              height="auto"
              className="svg-navbar-icon"
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
          <li>
            <svg
              width="6vmin"
              height="auto"
              className="svg-navbar-icon"
              viewBox="0 0 20 20"
            >
              <path d="M3.314 4.8h13.372a.743.743 0 000-1.486H3.314a.743.743 0 000 1.486zm13.372 10.4H3.314a.743.743 0 000 1.486h13.372a.743.743 0 000-1.486zm0-5.943H3.314a.743.743 0 000 1.486h13.372a.743.743 0 000-1.486z"></path>
            </svg>
          </li>
        </NavLink>
      </div>
    </div>
  );
}
