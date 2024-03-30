import { Button, Typography } from "@mui/material";
import * as React from "react";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import MiniCardComponent from "./minicard";
import StarRateIcon from "@mui/icons-material/StarRate";
import DeliverooIcon from "../../../assets/images/images.png";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import ToastImg from "../../../assets/images/toastImg.jpeg";
interface Props {
  imageUrl: string;
  description: string;
}

const CardItem: React.FC<Props> = ({ imageUrl, description }) => {
  return (
    <div className="card">
      <div className="image">
        <img src={ToastImg} alt="Image" className="img-prop" />
      </div>
      <div className="description">
        <div>
          <Typography className="Typography-h1" variant="h4" gutterBottom>
            Tossed - St Martin's Lane
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Chicken·Salads·Healthy
          </Typography>
          <Typography
            variant="subtitle1"
            className="Typography-h3"
            gutterBottom
          >
            0.20 miles away·Opens at 11:00 on Monday·£7.00 minimum·£0.49
            delivery
          </Typography>
          <div className="card-h3-section">
            <ErrorOutlineOutlinedIcon className="exclamation-icon"  />
            <div className="responsive-txt-subtitle-1">
              <Typography  variant="subtitle1" gutterBottom>
                Info
              </Typography>
              <Typography
                variant="subtitle1"
                className="Typography-h3"
                gutterBottom
              >
                Map, allergens and hygiene rating
              </Typography>
            </div>
            <ChevronRightOutlinedIcon className="arrow" />
          </div>

          <MiniCardComponent
            Icon={{
              arrowIcon: ChevronRightOutlinedIcon,
              leftIcon: StarRateIcon,
            }}
            type={"star"}
          />
        </div>

        <div className="deliver-change">
          <div className="deliver-change-c1">
            <img
              src={DeliverooIcon}
              alt="Deliveroo Icon"
              className="deliverImg"
            />
            <Typography variant="subtitle1" gutterBottom>
              Deliver{" "}
              <a href="" className="common-theme">
                Change
              </a>
            </Typography>
          </div>

          <Button variant="outlined" className="common-btn-outlined-gray">
            <div className="common-btn-container">
              <SupervisorAccountOutlinedIcon
                className="btn-icn"
                style={{ marginRight: "5px", height: "20px" }}
              />
              <Typography className="common-btn-tygraphy">
                {" "}
                Start group order
              </Typography>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
