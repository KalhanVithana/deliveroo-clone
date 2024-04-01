import React, { useEffect } from 'react';
import './assets/sass/index.scss'
import Header from './components/header/headerComponent';
import CardItem from './components/common/cards/cardItem';
import SubNavBarComponent from './components/header/subNavBar/subNavBarComponent';
import LandingPage from './containers/landingPage/LandingPage';
import LoginContainer from './containers/login/loginContainer';
import { Provider, useDispatch } from 'react-redux';
import store from './redux/store/store';
import mockAPI from './utils/api';
import { addFoodMenu } from './redux/slice/foodMenuSlice';
import MainPage from './containers/MainContainer/MainPage';
import FooterComponent from './components/footer/footerComponent';
function App() {
  return (
    <>

<Provider store={store}>
     <MainPage/>
     <FooterComponent/>
    </Provider>
        {/* <LandingPage/>  */}
       

      <h1 className='header-bar'>xx</h1>
    </>
  );
}

export default App;
