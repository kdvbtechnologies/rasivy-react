import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";

export default function LanguageAction() {
  const { t, i18n } = useTranslation();
  const [dark] = useState(localStorage.getItem("dark-mode") === "true");
  const [status, setStatus] = useState("");
  const [languageModel, setLanguageModel] = useState(
    localStorage.getItem("language-model") === "true"
  );

  // language model (change language and select language)
  // Here change language
  function changeLanguage(lng) {
    i18n.changeLanguage(lng);
  }

  // Here select language
  function selectLanguage(e) {
    setStatus(e.target.value);
    i18n.changeLanguage(e.target.value);
  }

  const storage = localStorage.getItem("i18nextLng");

  const fr = "fr";
  const langFr = "Français";
  const preferenceLangFr = storage === fr;
  if (storage === fr) {
    localStorage.setItem("preference-lang", langFr);
  }

  const en = "en";
  const langEn = "English";
  const preferenceLangEn = storage === en;
  if (storage === en) {
    localStorage.setItem("preference-lang", langEn);
  }

  // toggle language model + localstorage
  useEffect(() => {
    localStorage.setItem("language-model", languageModel);
  }, [languageModel]);

  function LanguageModel() {
    setLanguageModel(!languageModel);
  }

  return (
    <div>
      <Helmet>
        <body className={`${dark ? "dark-body" : "light-body"}`}></body>
      </Helmet>
      <div id="title" className={`${dark ? "dark" : "light"}`}>
        <div className="settings">
          <p style={{ cursor: "pointer" }} onClick={LanguageModel}>
            &#127989;
          </p>
        </div>
        <h1>{t("ma tradu title")}</h1>
        {languageModel ? (
          <div className="language-select-language-btn">
            <div className="language-btn">
              <button
                className={`${preferenceLangFr ? "btn-active" : "btn"}`}
                onClick={() => changeLanguage("fr")}
              >
                Français
              </button>
              <button
                className={`${preferenceLangEn ? "btn-active" : "btn"}`}
                onClick={() => changeLanguage("en")}
              >
                English
              </button>
            </div>
          </div>
        ) : (
          <div className="language-select-language-btn">
            <div className="language-select">
              <select id="lang" onChange={selectLanguage} value={status}>
                <option value="" id="mylang">
                  <p>&#127760;</p>
                  {localStorage.getItem("preference-lang")}
                </option>
                <option value="">- - -</option>
                <option value="fr">
                  <p>&#127760;</p> Français
                </option>
                <option value="en">
                  <p>&#127760;</p> English
                </option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
