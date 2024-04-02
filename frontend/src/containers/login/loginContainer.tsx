import { useState, type FC } from 'react';
import LoginComponent from '../../components/login/loginComponent';
import HeaderComponent from '../../components/header/headerComponent';
import { useDispatch } from 'react-redux';
import{ login, loginAsyncThunk } from '../../redux/slice/loginSlice';
import { AppDispatch } from '../../redux/store/store';

interface LoginContainerProps {}

const LoginContainer: FC<LoginContainerProps> = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (email: string,password:string) => {
    console.log("click");
    
    dispatch(loginAsyncThunk({email,password}));
  }
    return (<>
 
       <div className='login-container'>
         <LoginComponent handleSubmit={handleSubmit}/>
       </div>
    </>);
}

export default LoginContainer;
