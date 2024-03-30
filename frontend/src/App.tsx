import React from 'react';
import './assets/sass/index.scss'
import Header from './components/header/headerComponent';
import CardItem from './components/common/cards/cardItem';
import SubNavBarComponent from './components/header/subNavBar/subNavBarComponent';
function App() {
  return (
    <>
   
     
      <Header/>
      <CardItem imageUrl ={"https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"} description={"adasd"}/>
      <SubNavBarComponent/>
      <h1 className='header-bar'>xx</h1>
    </>
  );
}

export default App;
