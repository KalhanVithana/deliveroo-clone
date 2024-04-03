import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { Button, Typography } from "@mui/material";
import SearchBarComponent from "../common/searchBar/searchBarComponent";
import DeliverooIcon from "../../assets/images/deliveroo.svg";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";

interface Props {
  placeholder?: string;
  onChange?: (value: string) => void;
}


const HeaderComponent: React.FC<Props> = ({
  placeholder = "Search",
  onChange,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // onChange(event.target.value);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="header-items">
          <div className="logo-container">
            <img src={DeliverooIcon} alt="Deliveroo Icon" />
            <h1>Deliveroo</h1>
          </div>
          <div>
            <IconButton onClick={toggleDrawer} className="sm-search">
              <SearchIcon />
            </IconButton>
            <Drawer
              anchor="right" 
              open={isDrawerOpen}
              onClose={toggleDrawer}
            >
              <div style={{ width: "250px", padding: "20px" }}>
                <Typography variant="h6">Account</Typography>
        
              </div>
            </Drawer>
            <SearchBarComponent />
          </div>
          <div className="header-button">
            <Button
              variant="outlined"
              className="outlined-gray"
              id="index-1"
           
            >
              <div className="btn-container">
                <ShoppingBasketOutlinedIcon
                  className="btn-icn"
                  style={{ marginRight: "5px", height: "20px" }}
                />
                <Typography className="btn-tygraphy"> £0.00</Typography>
              </div>
            </Button>
            <Button
              variant="outlined"
              className="outlined-gray"
              id="index-2"
              
            >
              <div className="btn-container" onClick={()=> {
                
                window.location.href = '/';
              }}>
                <HouseOutlinedIcon
                  className="btn-icn"
                  style={{ marginRight: "5px", height: "20px" }}
                />
                <Typography className="btn-tygraphy">
                  {" "}
                  Sign up or log in
                </Typography>
              </div>
            </Button>
            <Button
              variant="outlined"
              className="outlined-gray"
              onClick={toggleDrawer}
            >
              <div className="btn-container">
                <Person2OutlinedIcon
                  className="btn-icn"
                  style={{ marginRight: "5px", height: "20px" }}
                />
                <Typography className="btn-tygraphy"> Account</Typography>
              </div>
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderComponent;
