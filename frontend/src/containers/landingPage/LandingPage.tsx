import { useState, FC, useEffect, useMemo, useRef } from "react";
import SubNavBarComponent from "../../components/header/subNavBar/subNavBarComponent";
import HeaderComponent from "../../components/header/headerComponent";
import CardItem from "../../components/common/cards/cardItem";
import FooodItemComponent from "../../components/common/FoodItem/foodItemComponent";
import carImg1 from "../../assets/images/toastImg.jpeg";
import { Typography } from "@mui/material";
import FoodList from "../../components/common/cards/foodListComponent";
import EmptyCardComponent from "../../components/common/cards/emptyCardComponent";
import mockAPI from "../../utils/api";
import { useDispatch, useSelector } from "react-redux";
import { addFoodMenu } from "../../redux/slice/foodMenuSlice";

interface LandingPageProps {}

const LandingPage: FC<LandingPageProps> = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const dispatch = useDispatch();
  const _FetchData = useSelector((state: any) => state.foodMenu.foodMenu);
  const memoizedFetchData = useMemo(() => _FetchData, [_FetchData]);

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

  useEffect(() => {
    console.log("_FetchData", memoizedFetchData);
  }, [memoizedFetchData]);

  return (
    <>
      <CardItem
        imageUrl={
          "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"
        }
        description={"adasd"}
      />
      <SubNavBarComponent isScroller={scrollPosition > 400 ? true : false} scrollPosition ={scrollPosition} />

      <div className="landing-section2">
        <Typography className="landing-section2-des1">
          Adults need around 2000 kcal a day
        </Typography>

        <Typography className="landing-section2-des2" variant="h6" gutterBottom>
          Popular With Other People
        </Typography>
      </div>

      <div className="middle-section">
        {memoizedFetchData && memoizedFetchData.length ? (
          <div>
            <FooodItemComponent initialCards={memoizedFetchData[0].foodItems} />
            <FoodList
              initialCards={memoizedFetchData[0]._plattersData}
              Title={"Platters"}
              size={2}
            />

            <FoodList
              initialCards={memoizedFetchData[0].createYourOwnData}
              Title={"New daily Specials"}
              size={3}
            />
            <FoodList
              initialCards={memoizedFetchData[0].saladsData}
              Title={"Create your own"}
              size={3}
            />
            <FoodList
              initialCards={memoizedFetchData[0].gymFoodData}
              Title={"Gym Food"}
              size={3}
            />
            {/* <FoodList
              initialCards={memoizedFetchData[0].hotPowerBowlsData
              }
              Title={"hot Power Bowls"}
              size={3}
            />
            <FoodList
              initialCards={memoizedFetchData[0].rainbowWrapsData
              }
              Title={"rain bow wraps"}
              size={3}
            /> */}
          </div>
        ) : (
          <div style={{ width: 1000 }}> Loading</div>
        )}

        <EmptyCardComponent />
        <div style={{ marginBottom: "50px" }}> </div>
      </div>
    </>
  );
};

export default LandingPage;
