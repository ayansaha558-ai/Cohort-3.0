import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/api";
import { toast } from "react-toastify";

export let loginUserAction = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      console.log("Thunk action triggered");
      let res = await api.post("/auth/login", credentials);
      toast.success("User Logged In");
      console.log("resposne from login Api", res);
      localStorage.setItem("accessToken", res.data.accessToken);

      return res.data;
    } catch (error) {
      toast.error("Invalid Credentials");
      return thunkApi.rejectWithValue("login failed");
    }
  },
);

export let hydrateUserAction = createAsyncThunk(
  "auth/hydrate",
  async (_, credentials) => {
    let token = localStorage.getItem("accessToken");

    try {
      let res = await api.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`, // Pass JWT via Authorization header
        },
      });
      console.log("resposne from login Api", res);

      return res.data;
    } catch (error) {
      toast.error("UnAuthorized User")
      return thunkApi.rejectWithValue("UnAuthorized User");
    }
  },
);
