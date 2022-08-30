//index.js c'est le chef des reducers car son role c'est de regrouper tout les reducers
/*importons combineReducers qui va combiner(regrouper) tout les reducers et les envoyers
 dans le store*/
import { combineReducers } from "redux";
import userReducer from "./user.reducer";

export default combineReducers({
  userReducer,
});
