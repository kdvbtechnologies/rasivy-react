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
          "--signup": "Sign up",
          "--signup-btn": "Sign up",
          "--signup-success": "Successful registration. Now log in !",
          "--signin": "",
          "--signin-success": "You are connected !",
          "--jamelfase": "jamelfase",
          "--check-internet": "Check your internet connection",
          "--choose-language": "Choose your language",
          "--language": "Language",
          "--settings": "Settings",
          "--streaming-video": "Video Streaming",
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

          "--": "",
        },
      },

      pt: {
        translations: {
          "--streaming-video": "Transmissão vídeo",
          "--signup-success": "Registro bem sucedido. Agora faça login !",
          "--signin-success": "",
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
          "--signup": "Inscrivez-vous",
          "--signup-btn": "S'inscrire",
          "--signup-success":
            "Inscription réussie. Maintenant connectez-vous !",
          "--signin": "Connexion",
          "--signin-btn": "Se connecter",
          "--signin-success": "Vous êtes connecté !",
          "--choose-language": "Choisissez votre langue",
          "--language": "Langue",
          "--settings": "Paramètres",
          "--check-internet": "Vérifier votre connexion internet",
          "--jamelfase": "jamelfase",
          "--streaming-video": "Streaming Vidéo",
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
