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
          "--streaming-video": "Video Streaming",
          "--signup-success": "Successful registration. Now log in!",
          "--jamelfase": "jamelfase",
          "--check-internet": "Check your internet connection",
          "--signup": "Sign up",
          "--signup-btn": "Sign up",
          "--choose-language": "Choose your language",
          "--language": "Language",
          "--settings": "Settings",
          "--darkmode": "Dark Mode",
          "--profil": "Profil",
          "--menu": "Menu",
          "--post-photo": "Post a photo",
          "--post": "Feel free to post something",
          "--search": "Search",
          "--input-post-placeholder": "Write your post here...",
          "--post-btn": "Post",
          "--username": "Username",
          "--email": "E-mail",
          "--password": "Password",
          "--signin": "",

          "--": "",
        },
      },

      pt: {
        translations: {
          "--streaming-video": "Transmissão vídeo",
          "--signup-success": "Registro bem sucedido. Agora faça login !",
          "--jamelfase": "jamelfase",
          "--check-internet": "Verifique a sua conexão com a internet",
          "--signup": "Inscreve-te",
          "--signup-btn": "Regista-te",
          "--choose-language": "Escolha seu idioma",
          "--language": "Língua",
          "--settings": "Configurações",
          "--darkmode": "Modo Escuro",
          "--profil": "Perfil",
          "--menu": "Menu",
          "--post-photo": "Postar uma foto",
          "--post": "Fique a vontade para postar algo",
          "--search": "Pesquise",
          "--input-post-placeholder": "Escreva seu post aqui...",
          "--post-btn": "Postar",
          "--username": "Nome de utilizador",
          "--email": "E-mail",
          "--password": "Palavra-passe",
        },
      },

      fr: {
        translations: {
          "--streaming-video": "Streaming Vidéo",
          "--signup-success":
            "Inscription réussie. Maintenant connectez-vous !",
          "--jamelfase": "jamelfase",
          "--check-internet": "Vérifier votre connexion internet",
          "--signup": "Inscrivez-vous",
          "--signup-btn": "S'inscrire",
          "--choose-language": "Choisissez votre langue",
          "--language": "Langue",
          "--settings": "Paramètres",
          "--darkmode": "Mode Sombre",
          "--profil": "Profile",
          "--menu": "Menu",
          "--post-photo": "Publier une photo",
          "--post": "N'hésitez pas à publier quelque chose",
          "--search": "Recherche",
          "--input-post-placeholder": "Écrivez votre publication ici...",
          "--post-btn": "Publier",
          "--username": "Nom d'utilisateur",
          "--email": "E-mail",
          "--password": "Mot de passe",
          "--signin": "Connexion",
          "--signin-btn": "Se connecter",
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
