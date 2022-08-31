// ici on va creer les actions. on commence d'abord par importer axios
import axios from "axios";

//Pour toute nos actions on va appeler GET_USER au niveau du reducer
export const GET_USER = "GET_USER";

export const getUser = (uid) => {
  // le dispatch c'est les donnees envoyer au reducer
  return (dispatch) => {
    return axios
      .get(`https://api-adoony.herokuapp.com/api/user/${uid}`)
      .then((res) => {
        dispatch({ type: GET_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};
