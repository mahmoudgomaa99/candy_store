import { createAction } from "@reduxjs/toolkit";
const doSignOut = createAction("user_sign_out");
const actions = {
  doSignOut,
};
export default actions;
