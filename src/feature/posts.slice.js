import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: null,
  },
  reducers: {
    setPosts: (state, { payload }) => {
      state.posts = payload;
    },
  },
});

export const { setPosts } = postsSlice.actions;
export default postsSlice.reducer;
