import { api } from "../../../config/api";

export const loginUserApi = async (credentials) => {
  try {
    let res = await api.post("/auth/login", credentials);
    console.log("resposne from login Api", res);
    localStorage.setItem("accessToken", res.data.accessToken);

    return res.data;
  } catch (error) {
    console.log("Error in authApi", error);
  }
};

export const hydrateUser = async () => {
  // let token = localStorage.getItem("accessToken");

  // try {
  //   let res = await api.get("/auth/me", {
  //     headers: {
  //       Authorization: `Bearer ${token}`, // Pass JWT via Authorization header
  //     },
  //   });
  //   console.log("resposne from login Api", res);

  //   return res.data;
  // } catch (error) {
  //   console.log("Error in authApi", error);
  // }
};
