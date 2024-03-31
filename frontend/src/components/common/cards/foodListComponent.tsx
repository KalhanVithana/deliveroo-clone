import React, { useState } from 'react';
import { Card, CardContent, Typography, IconButton, CardActions, Box, CardMedia } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

interface FoodListComponentProps {
  initialCards: { cardName: string; description: string; price: string; imageUrl: string }[];
  Title:String
}

const FoodListComponent: React.FC<FoodListComponentProps> = ({ initialCards ,Title}) => {
  const [cards, setCards] = useState(initialCards.slice(0, 6));

  return (
   <>
   <h1 style={{marginLeft:50}}>{Title}</h1>
   <div className="foodList">
      <div className="leftList">
        {cards.slice(0, 4).map((card, index) => (
          <Card sx={{ display: 'flex' ,margin:5}}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5">
                Live From Space
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                Mac Miller
              </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            
            </Box>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={card.imageUrl}
            alt="Live from space album cover"
          />
        </Card>
        ))}
      </div>
      <div className="rightList">
        {cards.slice(4).map((card, index) => (
          <Card sx={{ display: 'flex' ,margin:5}}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5">
                Live From Space
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                Mac Miller
              </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            
            </Box>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={card.imageUrl}
            alt="Live from space album cover"
          />
        </Card>
        ))}
      </div>
    </div></>
  );
};

export default FoodListComponent;
