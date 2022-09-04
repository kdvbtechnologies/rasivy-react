import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    login: null,
  },
  reducers: {
    // post method
    setLogin: (state, { payload }) => {
      state.login.push(payload);
    },
  },
});

export const { setLogin } = loginSlice.actions;
export default loginSlice.reducer;
