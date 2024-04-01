import { useEffect, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenuData } from "../../redux/slice/foodMenuSlice";
import LandingPage from "../landingPage/LandingPage";
import { AppDispatch } from "../../redux/store/store";

interface MainPageProps {}

const MainPage: FC<MainPageProps> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const foodMenu = useSelector((state: any) => state.foodMenu);

  useEffect(() => {
    dispatch(fetchMenuData());
  }, [dispatch]);

  console.log("Food Menu Data:", foodMenu);

  return (
    <>
      <LandingPage />
    </>
  );
};

export default MainPage;
