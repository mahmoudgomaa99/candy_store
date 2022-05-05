import UserAPI from "./API";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const doSignIn = createAsyncThunk<any, any, any>(
  "users/login",
  async (data, thunkAPI) => {
    try {
      const response = await UserAPI.signIn(data);
      console.log(response);
      return {
        data: response.data,
        headers: response.headers,
      };
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const doSignup = createAsyncThunk<any, any, any>(
  "users/signUp",
  async (data, thunkAPI) => {
    try {
      return await UserAPI.signUp(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const doGetCurrentUser = createAsyncThunk(
  "users/",
  async (_, thunkAPI) => {
    try {
      const response = await UserAPI.getCurrentUser();
      return {
        data: response.data,
        headers: response.headers,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const thunks = {
  doSignIn,
  doSignup,
  doGetCurrentUser,
};

export default thunks;
