import React from 'react';
import { Card, CardContent, Typography, IconButton, Button } from '@mui/material';
import { ShoppingCart as ShoppingCartIcon } from '@mui/icons-material';

const EmptyCardComponent: React.FC = () => {
  return (
    <Card className="emptyCard">
      <div  className='emptyCard-div'>

      <CardContent className="emptyCardContent">
        <IconButton className="shoppingCartIcon">
          <ShoppingCartIcon />
        </IconButton>
        <Typography variant="body1" className="emptyCardText">
          Your cart is empty
        </Typography>
      </CardContent>
      </div>
      <Button variant="contained" color="secondary" className="bottomButton">
        Go To Checkout
      </Button>
    </Card>
  );
};

export default EmptyCardComponent;
