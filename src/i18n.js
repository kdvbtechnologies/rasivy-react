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
          "Publish photo": "Publish a photo",
          post: "Login to post something here",
          search: "Search",
          profile: "Profile",
          settings: "Settings",
        },
      },

      fr: {
        translations: {
          "ma tradu title": "Choisissez votre langue",
          darkmode: "Mode Sombre",
          home: "Page d'accueil",
          "Streaming Video": "Streaming Vidéo",
          "Publish photo": "Publier une photo",
          post: "Connecter vous pour publier quelque chose ici",
          search: "Recherche",
          profile: "Profil",
          settings: "Paramètres",
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
