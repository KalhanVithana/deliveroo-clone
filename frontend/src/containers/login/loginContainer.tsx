import { useState, type FC, useEffect } from "react";
import LoginComponent from "../../components/login/loginComponent";
import HeaderComponent from "../../components/header/headerComponent";
import { useDispatch, useSelector } from "react-redux";
import { login, loginAsyncThunk } from "../../redux/slice/loginSlice";
import { AppDispatch } from "../../redux/store/store";
import { useNavigate } from "react-router-dom";

interface LoginContainerProps {}

const LoginContainer: FC<LoginContainerProps> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isAuth = useSelector((state: any) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  const handleSubmit = (email: string, password: string) => {
    console.log("click");
    dispatch(loginAsyncThunk({ email, password }));
  };
  useEffect(() => {
    console.log("isAuth", isAuth);

    isAuth && navigate("/main");
  }, [isAuth]);
  return (
    <>
      <div className="login-container">
        <LoginComponent handleSubmit={handleSubmit} />
      </div>
    </>
  );
};

export default LoginContainer;
