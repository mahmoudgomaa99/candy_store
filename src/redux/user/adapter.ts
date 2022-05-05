import { createEntityAdapter } from "@reduxjs/toolkit";
import { TUser } from "./model";

const adapter = createEntityAdapter<TUser>({
  selectId: (user) => user["_id"],
});

export default adapter;
