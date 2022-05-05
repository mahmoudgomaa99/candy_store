import { createSelector, EntitySelectors } from "@reduxjs/toolkit";
import { TUser } from "./model";
import adapter from "./adapter";

const adapterSelectors: EntitySelectors<TUser, any> = adapter.getSelectors(
  (state: any) => state.users
);

type TCurrentUser = (state: any) => TUser | undefined;

const currentUser: TCurrentUser = (state: any) =>
  adapterSelectors.selectById(state, state.users.currentUser || "");

const selectors = {
  currentUser,
  ...adapterSelectors,
};

export default selectors;
