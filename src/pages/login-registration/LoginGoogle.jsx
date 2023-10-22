import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../../redux/store";
import { ToastContainer, toast } from "react-toastify";

export const LoginGoogle = () => {
  const [token, setToken] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setToken(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  //   console.log(token);
  useEffect(() => {
    const Login = async () => {
      try {
        if (!token) {
          console.log("User is not defined");
          return;
        }
        const response = await axios.post(
          "https://backend-group10.onrender.com/api/user/loginGoogle",
          {
            token: token.access_token,
          }
        );
        // console.log(response);
        if (response.status === 200) {
          toast.success("Login Success");
          dispatch(authActions.login());
          localStorage.setItem("token", response.data.token);
          navigate("/");
        }
      } catch (error) {
        toast.error(
          "Error during login contact admin thorexercisetracking@gmail.com :",
          error
        );
      }
    };
    Login();
  }, [!token]);

  return (
    <div>
      <button
        onClick={() => login()}
        className="mx-auto px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700  hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
      >
        <img
          className="w-6 h-6"
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          loading="lazy"
          alt="google logo"
        />

        <span>Login with Google</span>
      </button>
      <ToastContainer />
    </div>
  );
};
