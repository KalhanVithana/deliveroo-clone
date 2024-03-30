import { Typography } from "@mui/material";
import * as React from "react";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

interface Props {
  imageUrl?: string;
  Icon: { arrowIcon: React.ElementType; leftIcon: React.ElementType };
  type:string
}

const MiniCardComponent: React.FC<Props> = ({ imageUrl, Icon,type }) => {
    const { arrowIcon: ArrowIcon, leftIcon: LeftIcon } = Icon;
  return (
    <div className="card-h3-section">
    <LeftIcon className= {type == 'star' ? 'star-icon' : "exclamation-icon"}/>
  <div  className="responsive-txt-subtitle-2">
  <Typography variant="subtitle1" className= {type == 'star' ? 'star-icon-txt' : ""} gutterBottom>
    4.7 Excellent
  </Typography>
  <Typography
    variant="subtitle1"
    className="Typography-h3"
    gutterBottom
  >
    See all 500 reviews
  </Typography>
</div>
<ArrowIcon className="arrow"/>
  </div>

  );
};

export default MiniCardComponent;
