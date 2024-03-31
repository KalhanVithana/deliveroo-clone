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
  const [email, setEmail] = useState<string>('');


  useEffect(() => {
    console.log("is", isEnable, isContinue);
  }, [isEnable]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isValid: boolean = validationHelper.emailValidation(e.target.value);
    console.log("isValid", isValid);

    setEmail(e.target.value);
    setIsEnable(isValid);
  };

  const handleRegister = () => {
    setIsContinue(true);
  };

  return (
    <div className="login-component">
      <Typography variant="h3" className="sign-up">
        Sign up or log in
      </Typography>
      {isContinue ? (
        <>
          <TextField
            label="Email Address"
            className="email-input"
            onChange={handleEmailChange}
          />
          <Button
            className="continue-btn"
            disabled={!isEnable}
            style={{ backgroundColor: isEnable ? "#00b8a9" : "#e2e5e5" ,color: isEnable ? 'white' :'#abadad',fontWeight:'bold'}}
            onClick={()=> {
              handleSubmit(email)
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

          <Typography className="login-section-1"> or</Typography>
          <Button className="login-email" onClick={handleRegister}>
            <EmailOutlinedIcon style={{ marginRight: "10px" }} /> Continue
            with Email
          </Button>

          <Typography className="login-section-2"> {TEXT}</Typography>
        </>
      )}
    </div>
  );
};

export default LoginComponent;
