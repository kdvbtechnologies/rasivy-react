import { configureStore } from "@reduxjs/toolkit";
import picturesReducer from "../feature/pictures.slice";
import postsReducer from "../feature/posts.slice";

export default configureStore({
  reducer: {
    pictures: picturesReducer,
    posts: postsReducer,
  },
});
