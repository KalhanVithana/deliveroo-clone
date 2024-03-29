import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { Button, Typography } from "@mui/material";
import SearchBarComponent from "../common/searchBar/SearchBarComponent";
import DeliverooIcon from "../../assets/images/deliveroo.svg";

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
              anchor="top"
              open={isDrawerOpen}
              onClose={toggleDrawer}
              ModalProps={{
                container: document.querySelector("body"),
                style: { position: "absolute", height: "50vh" },
              }}
            >
              <div style={{ padding: "20px" }}>
                <SearchBarComponent />
              </div>
            </Drawer>
            <SearchBarComponent />
          </div>
          <div className="header-button">
            <Button variant="outlined" className="outlined-gray" id="index-1">
              <Typography className="btn-tygraphy"> £0.00</Typography>
            </Button>
            <Button variant="outlined" className="outlined-gray" id="index-2">
              <Typography className="btn-tygraphy">
                {" "}
                Sign up or log in
              </Typography>
            </Button>
            <Button variant="outlined" className="outlined-gray">
              <Typography className="btn-tygraphy"> Account</Typography>
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderComponent;
