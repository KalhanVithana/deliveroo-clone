import { useState, type FC, useEffect } from "react";
import SubNavBarComponent from "../../components/header/subNavBar/subNavBarComponent";
import HeaderComponent from "../../components/header/headerComponent";
import CardItem from "../../components/common/cards/cardItem";
import FooodItemComponent from "../../components/common/FoodItem/foodItemComponent";
import carImg1 from "../../assets/images/toastImg.jpeg";
import { Typography } from "@mui/material";
import FoodList from "../../components/common/cards/foodListComponent";
import EmptyCardComponent from "../../components/common/cards/emptyCardComponent";

interface LandingPageProps {}

const LandingPage: FC<LandingPageProps> = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const initialCards = [
    {
      cardName: "The Italian",
      description: "646 kcal",
      price: "£12.69",
      imageUrl: "https://img.freepik.com/free-photo/top-view-fruit-plate-with-watermelon-greengage-plum-grape-peach-apricot-strawberry-melon-cherry_141793-2434.jpg",
    },
    {
      cardName: "Chipotle salad",
      description: "524 kcal",
      price: "£13.69",
      imageUrl: "https://img.freepik.com/free-photo/top-view-delicious-fruit-composition-fresh-sliced-mellow-fruits-dark-background-ripe-fresh-mellow-health-diet_140725-116255.jpg?size=626&ext=jpg&ga=GA1.1.87170709.1707782400&semt=ais",
    },
    {
      cardName: "Salmon Greens",
      description: "554 kcal",
      price: "£12.69",
      imageUrl: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJ1aXQlMjBwbGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      cardName: "Chicken ",
      description: "92 kcal",
      price: "£126.69",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkpVsW6O4hvuNxYd7tqO9pF-8FNKYMiHfr8A&usqp=CAU",
    },
    {
      cardName: "Buffalo chicken",
      description: "68 kcal",
      price: "£14.69",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvijk8zDRlC1B9sfEreY4Hs2ryMral4G5qri8Lk9n5hJ_7WFE4YzYMtfN3oxV9g50tkwI&usqp=CAU",
    },
    {
      cardName: "Superfood salad",
      description: "56 kcal",
      price: "£442.69",
      imageUrl: "https://images.unsplash.com/photo-1467453678174-768ec283a940?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZydWl0JTIwcGxhdGV8ZW58MHx8MHx8fDA%3D",
    },
    {
      cardName: "Tuna & Veggies",
      description: "92 kcal",
      price: "£146.69",
      imageUrl: "https://images.unsplash.com/photo-1563208276-13fee6108415?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      cardName: "Chicken, Egg ",
      description: "68 kcal",
      price: "£14.69",
      imageUrl: "https://media.istockphoto.com/id/1171579928/photo/eating-healthy-breakfast-yogurt-bowl-with-granola-and-fruits.jpg?s=612x612&w=0&k=20&c=Ct_s5lO4EY7vyydlLARukmqxRPSvJlpFBStk5A1IqUw=",
    },
    {
      cardName: "Tuna Niçoise",
      description: "476 kcal",
      price: "£642.69",
      imageUrl: "https://images.pexels.com/photos/12320125/pexels-photo-12320125.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  ];

  const plattersArr = [
    {
      cardName: "avocado chicken caesar platter",
      description: "Currenty sold out",
      price: "£12.69",
      imageUrl: "https://img.freepik.com/free-photo/top-view-fruit-plate-with-watermelon-greengage-plum-grape-peach-apricot-strawberry-melon-cherry_141793-2434.jpg",
    },
    {
      cardName: "parmesan chicken salad platter",
      description: "Currenty sold out",
      price: "£13.69",
      imageUrl: "https://img.freepik.com/free-photo/top-view-delicious-fruit-composition-fresh-sliced-mellow-fruits-dark-background-ripe-fresh-mellow-health-diet_140725-116255.jpg?size=626&ext=jpg&ga=GA1.1.87170709.1707782400&semt=ais",
    },
    {
      cardName: "halloumi & roasted veg salad platter",
      description: "Currenty sold out",
      price: "£12.69",
      imageUrl: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJ1aXQlMjBwbGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
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

          <FoodList initialCards={plattersArr} Title={"Platters"} size={2}/>
          <FoodList initialCards={initialCards} Title={"New daily Specials"}  size={3}/>
          <FoodList initialCards={initialCards} Title={"Create your own"}  size={3}/>
          <FoodList initialCards={initialCards} Title={"Salads"}  size={3}/>
        </div>
        <div style={{ marginBottom: '50px' }}> {/* Adjust the margin bottom as needed */}
    <EmptyCardComponent />
  </div>
      </div>
      <h1>Fooot</h1>
    </>
  );
};

export default LandingPage;
