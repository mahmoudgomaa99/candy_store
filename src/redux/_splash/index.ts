import { doSetSplashDone } from "./actions";
import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./actions";

const initialState = {
  splashDone: false,
};

const slice = createSlice({
  name: "splash",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doSetSplashDone, (state: any) => {
      state.splashDone = true;
    });
  },
});

const Splash = {
  slice,
  actions,
};

export default Splash;
