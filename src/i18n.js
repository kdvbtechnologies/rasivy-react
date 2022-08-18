import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          "ma tradu title": "Choose your language",
          darkmode: "DarkMode",
          home: "Home Page",
          "Streaming Video": "Video Streaming",
          rasigif: "RasiGIF here",
          post: "Post here",
          search: "Search here",
          profile: "Profile here",
          settings: "Settings here",
        },
      },

      fr: {
        translations: {
          "ma tradu title": "Choisissez votre langue",
          darkmode: "Mode Sombre",
          home: "Page d'accueil",
          "Streaming Video": "Streaming Vidéo",
          rasigif: "RasiGIF ici",
          post: "Publier ici",
          search: "Rechercher ici",
          profile: "Profil ici",
          settings: "Paramètres ici",
        },
      },
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
