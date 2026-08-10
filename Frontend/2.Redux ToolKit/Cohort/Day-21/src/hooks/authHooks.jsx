import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser } from "../features/authSlice";

export const useAuth = () => {
  let navigate = useNavigate();

  let dispatch=useDispatch();

  const [registeredUsers, setRegisteredUsers] = useState(
    JSON.parse(localStorage.getItem("registeredUsers")) || [],
  );

  const [loggedUsers, setLoggedUsers] = useState(
    JSON.parse(localStorage.getItem("loggedUsers")),
  );

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
    navigate("/")
  };

  let loginForm = (data) => {
    let user = registeredUsers.find(
      (item) => item.email === data.email && item.password === data.password,
    );

    if (!user){
      toast.error("Invalid Credentials");
      return
    }

    dispatch(addUser(user))
    localStorage.setItem("loggedInUser",JSON.stringify(user)); 
    toast.success("login sucessfull");
    navigate("/main")
  };

  return {
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    registerForm,
    loginForm,
  };
};
