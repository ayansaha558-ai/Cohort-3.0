import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

export const useAuth = () => {
  let {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  let navigate = useNavigate();

  let loginForm = (data) => {
    console.log(data);
  };

  let registerForm = (data) => {
    console.log(data);
  };

  return {
    register,
    handleSubmit,
    reset,
    errors,
    watch,
    loginForm,
    registerForm,
    navigate,
  };
};
