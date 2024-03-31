import { useState, type FC } from 'react';
import LoginComponent from '../../components/login/loginComponent';
import HeaderComponent from '../../components/header/headerComponent';

interface LoginContainerProps {}

const LoginContainer: FC<LoginContainerProps> = () => {
  
    const handleSubmit = (email :any)=> {

    }
    return (<>
     <HeaderComponent/>
       <div className='login-container'>

         <LoginComponent handleSubmit={handleSubmit}/>
       </div>
    </>);
}

export default LoginContainer;
