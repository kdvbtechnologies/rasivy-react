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
          post: "Feel free to post something",
          search: "Search",
          "--streaming-video": "Video Streaming",
          "--signup-success": "Successful registration. Welcome to jamelfase !",
          "--jamelfase": "jamelfase",
          "--check-internet": "Check your internet connection",
          "--signup": "Sign up",
          "--choose-language": "Choose your language",
          "--language": "Language",
          "--settings": "Settings",
          "--darkmode": "Dark Mode",
          "--profil": "Profil",
          "--menu": "Menu",
          "--post-photo": "Post a photo",

          "--": "",
        },
      },

      pt: {
        translations: {
          "--streaming-video": "Transmissão vídeo",
          "--signup-success": "Registro bem sucedido. Bem-vindo ao jamelfase!",
          "--jamelfase": "jamelfase",
          "--check-internet": "Verifique a sua conexão com a internet",
          "--signup": "Inscreve-te",
          "--choose-language": "Escolha seu idioma",
          "--language": "Língua",
          "--settings": "Configurações",
          "--darkmode": "Modo Escuro",
          "--profil": "Perfil",
          "--menu": "Menu",
          "--post-photo": "",
        },
      },

      fr: {
        translations: {
          post: "N'hésitez pas à publier quelque chose",
          search: "Recherche",
          "--streaming-video": "Streaming Vidéo",
          "--signup-success": "Inscription réussie. Bienvenue sur jamelfase !",
          "--jamelfase": "jamelfase",
          "--check-internet": "Vérifier votre connexion internet",
          "--signup": "Inscrivez-vous",
          "--choose-language": "Choisissez votre langue",
          "--language": "Langue",
          "--settings": "Paramètres",
          "--darkmode": "Mode Sombre",
          "--profil": "Profile",
          "--menu": "Menu",
          "--post-photo": "Publier une photo",
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
