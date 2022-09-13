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
          "--signin": "Log in",
          "--signin-btn": "Log in",
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
          "--friends": "Find friends",
          "--logout": "Logout",
          "--return": "Return",
          "--logout-action": "Do you want to log out of jamelfase ?",
          "--Unable-to-load-posts":
            "Unable to load posts, please refresh the page !",
        },
      },

      pt: {
        translations: {
          "--signup": "Regista-te",
          "--signup-btn": "Regista-te",
          "--signup-success": "Registro bem sucedido. Agora faça login !",
          "--signin": "Iniciar sessão",
          "--signin-btn": "Iniciar sessão",
          "--signin-success": "Você está conectado !",
          "--jamelfase": "jamelfase",
          "--check-internet": "Verifique a sua conexão com a internet",
          "--choose-language": "Escolha seu idioma",
          "--language": "Língua",
          "--settings": "Configurações",
          "--streaming-video": "Transmissão vídeo",
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
          "--friends": "Encontrar amigos",
          "--logout": "Sair",
          "--return": "Retorna",
          "--logout-action": "Deseja sair do jamelfase ?",
          "--Unable-to-load-posts":
            "Não foi possível carregar as postagens, atualize a página !",
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
          "--friends": "Trouver des amis",
          "--logout": "Déconnexion",
          "--return": "Retour",
          "--logout-action": "Voulez-vous vous déconnecter de jamelfase ?",
          "--Unable-to-load-posts":
            "Impossible de charger les publications, veuillez actualiser la page !",
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
