import { useState, type FC } from 'react';
import LoginComponent from '../../components/login/loginComponent';
import HeaderComponent from '../../components/header/headerComponent';
import { useDispatch } from 'react-redux';
import{ login } from '../../redux/slice/loginSlice';

interface LoginContainerProps {}

const LoginContainer: FC<LoginContainerProps> = () => {
  const dispatch = useDispatch();
  const handleSubmit = (email: string,password:string) => {
    dispatch(login(email));
  }
    return (<>
     <HeaderComponent/>
       <div className='login-container'>
         <LoginComponent handleSubmit={handleSubmit}/>
       </div>
    </>);
}

export default LoginContainer;
