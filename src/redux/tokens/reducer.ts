import { TokenKeys, TTokenKeys } from "../../constants";
import Users from "../user";
import { doSetToken } from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const initialState: Partial<TTokenKeys> = {};

type TAction = {
  payload: {
    key: keyof TTokenKeys;
    value: string | null;
  };
};

const tokenReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(Users.actions.doSignOut, (state) => {
      state[TokenKeys.USER_TOKEN] = null;
      state[TokenKeys.UID_TOKEN] = null;
    })
    .addCase(
      Users.thunks.doSignIn.fulfilled,
      (state, { payload: { headers } }) => {
        const { token, uid } = headers;
        state[TokenKeys.USER_TOKEN] = token;
        state[TokenKeys.UID_TOKEN] = uid;
      }
    )
    .addCase(doSetToken, (state, { payload: { key, value } }: TAction) => {
      state[key] = value;
    });
});

export default tokenReducer;
