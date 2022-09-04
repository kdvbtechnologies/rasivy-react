import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../feature/login.slice";
import picturesReducer from "../feature/pictures.slice";
import postsReducer from "../feature/posts.slice";

export default configureStore({
  reducer: {
    pictures: picturesReducer,
    posts: postsReducer,
    login: loginReducer,
  },
});
