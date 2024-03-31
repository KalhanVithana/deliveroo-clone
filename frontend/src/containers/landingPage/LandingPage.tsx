import { useState, type FC, useEffect } from "react";
import SubNavBarComponent from "../../components/header/subNavBar/subNavBarComponent";
import HeaderComponent from "../../components/header/headerComponent";
import CardItem from "../../components/common/cards/cardItem";
import FooodItemComponent from "../../components/common/FoodItem/foodItemComponent";
import carImg1 from "../../assets/images/toastImg.jpeg";
import { Typography } from "@mui/material";

interface LandingPageProps {}

const LandingPage: FC<LandingPageProps> = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const initialCards = [
    {
      cardName: "The Italian",
      description: "646 kcal",
      price: "£12.69",
      imageUrl: carImg1,
    },
    {
      cardName: "Chipotle salad",
      description: "524 kcal",
      price: "£13.69",
      imageUrl: carImg1,
    },
    {
      cardName: "Salmon Greens",
      description: "554 kcal",
      price: "£12.69",
      imageUrl: carImg1,
    },
    {
      cardName: "Chicken ",
      description: "92 kcal",
      price: "£126.69",
      imageUrl: carImg1,
    },
    {
      cardName: "Buffalo chicken",
      description: "68 kcal",
      price: "£14.69",
      imageUrl: carImg1,
    },
    {
      cardName: "Superfood salad",
      description: "56 kcal",
      price: "£442.69",
      imageUrl: carImg1,
    },
    {
      cardName: "Tuna & Veggies",
      description: "92 kcal",
      price: "£146.69",
      imageUrl: carImg1,
    },
    {
      cardName: "Chicken, Egg ",
      description: "68 kcal",
      price: "£14.69",
      imageUrl: carImg1,
    },
    {
      cardName: "Tuna Niçoise",
      description: "476 kcal",
      price: "£642.69",
      imageUrl: carImg1,
    },
  ];

  const handleScroll = () => {
    const position = window.scrollY;
    console.log("scroller", position);

    if (position > 100) {
      setScrollPosition(position);
    } else {
      setScrollPosition(0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <HeaderComponent />
      <CardItem
        imageUrl={
          "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"
        }
        description={"adasd"}
      />
      <SubNavBarComponent isScroller={scrollPosition > 400 ? true : false} />

      <div className="landing-section2">
        <Typography className="landing-section2-des1">
          Adults need around 2000 kcal a day
        </Typography>

        <Typography className="landing-section2-des2" variant="h6" gutterBottom>
          Popular With Other People
        </Typography>
      </div>

      <div className="middle-section">
        <div style={{ width: 1000 }}>
          <FooodItemComponent initialCards={initialCards} />
        </div>
        <div>
          <h2>chg</h2>
          <h2>chg</h2>
          <h2>chg</h2>

          <h2>chg</h2>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
