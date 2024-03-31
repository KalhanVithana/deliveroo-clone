import React, { useState } from 'react';
import { Card, CardContent, Typography, IconButton, CardActions } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';

interface FoodItemComponentProps {
  initialCards: { cardName: string; description: string; price: string; imageUrl: string }[];
}

const FoodItemComponent: React.FC<FoodItemComponentProps> = ({ initialCards }) => {
  const [cards, setCards] = useState(initialCards.slice(0, 6));
  const [isEnd, setIsEnd] = useState(initialCards.length <= 6);

  const handleMove = () => {
    if (isEnd) {
      setCards(initialCards.slice(0, 6));
      setIsEnd(false);
    } else {
      const remainingCards = initialCards.slice(cards.length);
      const nextCards = remainingCards.slice(0, 6);
      setCards(nextCards);
      setIsEnd(nextCards.length < 6);
    }
  };

  return (
    <div className="foodItemComponent">
      {cards.map((card, index) => (
        <Card key={index} className="foodItemCard">
          <CardContent>
            <img src={card.imageUrl} alt={card.cardName} className="foodItemImage" />
            <Typography className='card-title-1' variant="body2">
              {card.cardName}
            </Typography>
            <div className='crd-des-p1'>
              <Typography className='card-description' variant="body2">
                {card.description}.
              </Typography>
              <Typography className='card-description' variant="body2">
                {card.price}.
              </Typography>
            </div>
          </CardContent>
          <CardActions className="cardActions">
            <IconButton>
              <AddIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
      <IconButton onClick={handleMove}>
        {isEnd ? <ArrowBackIcon className="foodItemArrow" /> : <ArrowForwardIcon className="foodItemArrow" />}
      </IconButton>
    </div>
  );
};

export default FoodItemComponent;
