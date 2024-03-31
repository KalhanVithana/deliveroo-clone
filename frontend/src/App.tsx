import React from 'react';
import './assets/sass/index.scss'
import Header from './components/header/headerComponent';
import CardItem from './components/common/cards/cardItem';
import SubNavBarComponent from './components/header/subNavBar/subNavBarComponent';
import LandingPage from './containers/landingPage/LandingPage';
import LoginContainer from './containers/login/loginContainer';
import { Provider } from 'react-redux';
import store from './redux/store/store';
function App() {
  return (
    <>

<Provider store={store}>
<LoginContainer/>
    </Provider>
        {/* <LandingPage/>  */}
      <h1 className='header-bar'>xx</h1>
    </>
  );
}

export default App;
