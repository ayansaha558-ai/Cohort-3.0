import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useState } from "react";
import { loginUserApi } from "../api/authApi";
import { useDispatch } from "react-redux";

import { toast } from "react-toastify";
import { loginUserAction } from "./useAuthAction";

export const useAuth = () => {
  let navigate = useNavigate();

  let dispatch = useDispatch();

  const [registeredUsers, setRegisteredUsers] = useState([]);

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let registerForm = (data) => {
    let arr = [...registeredUsers, data];
    setRegisteredUsers(arr);
    localStorage.setItem("registeredUsers", JSON.stringify(arr));
    navigate("/");
  };

  let loginForm = async (data) => {
    try {
      // let response = await loginUserApi(data);
      // console.log("login", response);
      // dispatch(addUser(response))

      
      dispatch(loginUserAction(data));
    } catch (error) {
      console.log("error in form Api", error);
    }
  };

  return {
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    loginForm,
    registerForm,
  };
};
