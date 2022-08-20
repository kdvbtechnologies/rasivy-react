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
          "Publish photo": "Publish a photo",
          post: "Feel free to post something",
          search: "Search",
          profile: "Profile",
          settings: "Settings",
          "--streaming-video": "Video Streaming",
          "--signup-success": "Successful registration. Welcome to jamelfase !",
          "--jamelfase": "jamelfase",
          "--check-internet": "Check your internet connection",
        },
      },

      pt: {
        translations: {
          "--streaming-video": "Transmissão vídeo",
          "--signup-success": "Registro bem sucedido. Bem-vindo ao jamelfase!",
          "--jamelfase": "jamelfase",
          "--check-internet": "Verifique a sua conexão com a internet",
        },
      },

      fr: {
        translations: {
          "ma tradu title": "Choisissez votre langue",
          darkmode: "Mode Sombre",
          home: "Page d'accueil",
          "Publish photo": "Publier une photo",
          post: "N'hésitez pas à publier quelque chose",
          search: "Recherche",
          profile: "Profil",
          settings: "Paramètres",
          "--streaming-video": "Streaming Vidéo",
          "--signup-success": "Inscription réussie. Bienvenue sur jamelfase !",
          "--jamelfase": "jamelfase",
          "--check-internet": "Vérifier votre connexion internet",
        },
      },
    },
    fallbackLng: "en",
    debug: true,

    //"--signup-success": "Inscription réussie. Bienvenue sur jamelfase !",

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
