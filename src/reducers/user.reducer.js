import { GET_USER } from "../actions/user.actions";

//Tout nos reducers auront un initial State (c-a-d un State de base)
const initialState = {};

/* Ici on Cree une function userReducer en mode export default qui aura un state(le state aura en
parametre un initialState qui est vide au debut) et une action */
export default function userReducer(state = initialState, action) {
  //action.type, le type d'action sera GET_USER
  //Dans ce switch on va se mettre un tas de chose. un switch par defaut return quelque chose
  switch (action.type) {
    //1er cas, si jamais c'est ce cas tu return ceci
    case GET_USER:
      return action.payload;
    default:
      return state;
  }
}
