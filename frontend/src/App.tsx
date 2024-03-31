import React from 'react';
import './assets/sass/index.scss'
import Header from './components/header/headerComponent';
import CardItem from './components/common/cards/cardItem';
import SubNavBarComponent from './components/header/subNavBar/subNavBarComponent';
import LandingPage from './containers/landingPage/LandingPage';
function App() {
  return (
    <>
       <div>
       <LandingPage/>
       </div>
  
     
      <h1 className='header-bar'>xx</h1>
    </>
  );
}

export default App;
