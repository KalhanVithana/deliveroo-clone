import React, { useState } from 'react';
import { Card, CardContent, Typography, IconButton, CardActions, Box, CardMedia } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

interface FoodListComponentProps {
  initialCards: { cardName: string; description: string; price: string; imageUrl: string }[];
  Title:String
  size:number
}

const FoodListComponent: React.FC<FoodListComponentProps> = ({ initialCards ,Title,size}) => {
  const [cards, setCards] = useState(initialCards.slice(0, 6));

  return (
   <>
     <Typography
              className="landing-section2-des3"
              variant="h6"
              gutterBottom
            >
              {Title}
            </Typography>
   <div className="foodList">
      <div className="leftList">
        {cards.slice(0, size).map((card, index) => (
          <Card className="foodList-card" sx={{ display: 'flex' ,margin:5 ,opacity:card.description === 'Currenty sold out' ? 0.5 :""}}>
          <div className='foodList-div-1'>
          <Box sx={{ display: 'flex', flexDirection: 'column' }} >
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="subtitle1" className='food-title'>
               {card?.cardName}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
              {card?.description}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
              {card?.price}
              </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            
            </Box>
          </Box>
          </div>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={card.imageUrl}
            alt="Live from space album cover"
            className='foodlist-img-width'
          />
          <CardActions className="foodlist-cardActions">
            <IconButton>
              <AddIcon />
            </IconButton>
          </CardActions>
        </Card>
        
        ))}
      </div>
      <div className="rightList">
        {cards.slice(size).map((card, index) => (
          <Card className="foodList-card" sx={{ display: 'flex' ,margin:5 ,opacity:card.description === 'Currenty sold out' ? 0.5 :""}}>
          <div className='foodList-div-1'>
          <Box sx={{ display: 'flex', flexDirection: 'column' }} >
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="subtitle1" className='food-title'>
               {card?.cardName}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
              {card?.description}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
              {card?.price}
              </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            
            </Box>
          </Box>
          </div>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={card.imageUrl}
            alt="Live from space album cover"
            className='foodlist-img-width'
          />
          <CardActions className="foodlist-cardActions">
            <IconButton>
              <AddIcon />
            </IconButton>
          </CardActions>
        </Card>
        ))}
      </div>
    </div></>
  );
};

export default FoodListComponent;
