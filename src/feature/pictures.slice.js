import { createSlice } from "@reduxjs/toolkit";

export const picturesSlice = createSlice({
  name: "pictures",
  initialState: {
    pictures: null,
  },
  reducers: {
    // get method
    setPicturesData: (state, { payload }) => {
      state.pictures = payload;
    },

    // post method
    addPicture: (state, { payload }) => {
      state.pictures.push(payload);
    },
  },
});

export const { setPicturesData, addPicture } = picturesSlice.actions;
export default picturesSlice.reducer;
