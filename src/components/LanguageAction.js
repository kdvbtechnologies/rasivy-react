import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import "../darkmode.css";

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
  /*const FR = "fr-FR";
  /*const BE = "fr-BE";
  const CA = "fr-CA";
  const CH = "fr-CH";
  const LU = "fr-LU";
  const MC = "fr-MC";*/
  const langFr = "Français";
  const preferenceLangFr =
    storage === fr; /*|| FR; /*|| BE || CA || CH || LU || MC;*/
  if (
    storage === fr /*||
    storage === FR /*||
    storage === BE ||
    storage === CA ||
    storage === CH ||
    storage === LU ||
    storage === MC*/
  ) {
    localStorage.setItem("preference-lang", langFr);
  }

  const en = "en"; /*
  const US = "en-US";
  /*const TT = "en-TT";
  const ZA = "en-ZA";
  const ZW = "en-ZW";
  const PH = "en-PH";
  const NZ = "en-NZ";
  const JM = "en-JM";
  const IE = "en-IE";
  const GB = "en-GB";
  const CB = "en-CB";
  const enCA = "en-CA";
  const BZ = "en-BZ";
  const AU = "en-AU";*/
  const langEn = "English";
  const preferenceLangEn = storage === en; /*|| US;
  /*TT ||
    ZA ||
    ZW ||
    PH ||
    NZ ||
    JM ||
    IE ||
    GB ||
    CB ||
    enCA ||
    BZ ||
    AU;*/
  if (
    storage === en /*||
    storage === US
    /*storage === TT ||
    storage === ZA ||
    storage === ZW ||
    storage === PH ||
    storage === NZ ||
    storage === JM ||
    storage === IE ||
    storage === GB ||
    storage === CB ||
    storage === enCA ||
    storage === BZ ||
    storage === AU*/
  ) {
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
                <option value="en">
                  <p>&#127760;</p> English
                </option>
                <option value="" id="mylang">
                  <p>&#127760;</p>
                  {localStorage.getItem("preference-lang")}
                </option>
                <option value="">- - -</option>
                <option value="fr">
                  <p>&#127760;</p> Français
                </option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
