import React, { useEffect, useState } from "react";
import { FaFacebookF, FaGoogle, FaApple } from "react-icons/fa";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Button, TextField, Typography } from "@mui/material";
import { validationHelper } from "../../utils/validationHelptwr";
import { useDispatch } from "react-redux";

interface LoginComponentProps {
  handleSubmit: Function;
}

const TEXT =
  "By continuing you agree to our T&Cs. Please also check out our Privacy Policy. We use your data to offer you a personalised experience and to better understand and improve our services. For more information see here.";

const LoginComponent: React.FC<LoginComponentProps> = ({ handleSubmit }) => {
  const [isContinue, setIsContinue] = useState<boolean>(false);
  const [isEnable, setIsEnable] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [isSignUP, setIsSignUp] = useState<boolean>(false);

  useEffect(() => {
    console.log("is", isEnable, isContinue);

    let validation = !isSignUP
      ? validationHelper.emailValidation(email)
      : validationHelper.emailValidation(email) && password.length > 0;
    console.log("is", isEnable, isContinue, email, password);
    if (validation) {
      setIsEnable(true);
      setIsContinue(true);
    } else {
      setIsEnable(false);
    }
  }, [email, password]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(e.target);
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const handleRegister = () => {
    console.log("iss", isContinue, isEnable);

    setIsContinue(true);
  };

  return (
    <div className="login-component">
      <Typography variant="h3" className="sign-up">
        <a className="sign-up-sub1" onClick={() => {
          setIsSignUp(true)
          setIsEnable(false)
        }}>
          Sign up
        </a>{" "}
        or{" "}
        <a className="sign-up-sub1" onClick={() =>{
          setIsSignUp(false)
          setIsEnable(false)
        }}>
          log in{" "}
        </a>
      </Typography>
      {isContinue ? (
        <>
          <TextField
            label="Email Address"
            name="email"
            className="email-input"
            onChange={handleInputChange}
          />
       
            <TextField
              label="Password"
              name="password"
              className="email-input"
              onChange={handleInputChange}
              style={{ marginTop: 10 }}
            />
          
          <Button
            className="continue-btn"
            disabled={!isEnable}
            style={{
              backgroundColor: isEnable ? "#00b8a9" : "#e2e5e5",
              color: isEnable ? "white" : "#abadad",
              fontWeight: "bold",
            }}
            onClick={() => {
              handleSubmit(email,password);
            }}
          >
            Continue
          </Button>
          <Button className="forgot-btn">Forgot Password</Button>
        </>
      ) : (
        <>
          <Button className="login-button facebook">
            <FaFacebookF /> Continue with Facebook
          </Button>
          <Button className="login-button google">
            <FaGoogle /> Continue with Google
          </Button>
          <Button className="login-button apple">
            <FaApple /> Continue with Apple
          </Button>

        
        
          <div className="login-section-1">
          <div  className= "login-inner-1"style={{marginRight:'3px', }} />
           <a>  or</a>
            <div className= "login-inner-1" style={{marginLeft:'3px'}} />
          </div>
          <Button className="login-email" onClick={handleRegister}>
            <EmailOutlinedIcon style={{ marginRight: "10px" }} /> Continue with
            Email
          </Button>

          <Typography className="login-section-2"> {TEXT}</Typography>
        </>
      )}
    </div>
  );
};

export default LoginComponent;
