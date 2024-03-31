import { useState, type FC, useEffect } from 'react';
import SubNavBarComponent from '../../components/header/subNavBar/subNavBarComponent';
import HeaderComponent from '../../components/header/headerComponent';
import CardItem from '../../components/common/cards/cardItem';
import FooodItemComponent from '../../components/common/FoodItem/FoodItemComponent';

interface LandingPageProps {}

const LandingPage: FC<LandingPageProps> = () => {
    const [scrollPosition, setScrollPosition] = useState<number>(0);

    const handleScroll = () => {
        const position = window.scrollY;
        console.log("scroller",position);

        if(position >100){
            setScrollPosition(position);
        }
        else {
            setScrollPosition(0);
        }
        
       
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (<>
      <HeaderComponent/>
      <CardItem imageUrl ={"https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"} description={"adasd"}/>
      <SubNavBarComponent isScroller= {scrollPosition > 400 ? true :false}/>
     <FooodItemComponent/>
     <h2>chg</h2>
     <h2>chg</h2>
     <h2>chg</h2>

     <h2>chg</h2>
    </>);
}

export default LandingPage;
