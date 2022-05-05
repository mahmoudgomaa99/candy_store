import { EntityKeys } from "../schema";
import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import adapter from "./adapter";
import thunks from "./thunks";
import actions from "./actions";
import selectors from "./selectors";

const slice = createSlice({
  name: EntityKeys.USERS,
  initialState: adapter.getInitialState({}),
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      isAnyOf(
        thunks.doSignIn.fulfilled,
        thunks.doSignup.fulfilled,
        thunks.doGetCurrentUser.fulfilled
      ),
      (state: any, action) => {
        adapter.upsertMany(state, action.payload.data);
        state.currentUser = action.payload?.data.user._id;
      }
    );
  },
});

const User = {
  thunks,
  slice,
  adapter,
  actions,
  selectors,
};

export default User;
