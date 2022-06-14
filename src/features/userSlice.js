import { createSlice } from "@reduxjs/toolkit";

import { auth, provider, signInWithPopup } from "../firebase";

const initialState = {
  userData: {},
};

export const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export const selectUser = (state) => state.userData.userData;

export default userSlice.reducer;

export const login = () => (dispatch) => {
  // Si no está logueado, abrimos login
  signInWithPopup(auth, provider)
    .then((response) => {
      dispatch(setUser(response.user));
    })
    .catch((error) => {});
};
