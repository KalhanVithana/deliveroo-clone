import React from 'react';
import { render, screen } from '@testing-library/react';
import FoodItemComponent from '../../components/common/FoodItem/foodItemComponent';

describe('FoodItemComponent', () => {
  const initialCards = [
    {
      cardName: 'Test Card 1',
      description: 'Test Description 1',
      price: '$10',
      imageUrl: 'test-url-1.jpg',
    },
    {
      cardName: 'Test Card 2',
      description: 'Test Description 2',
      price: '$15',
      imageUrl: 'test-url-2.jpg',
    },
    
  ];

  test('renders FoodItemComponent with initial cards', () => {
    render(<FoodItemComponent initialCards={initialCards} />);
    // Check if cards are rendered with correct data
    expect(screen.getByText('Test Card 1')).toBeInTheDocument();
    expect(screen.getByText('Test Description 1.')).toBeInTheDocument();
    expect(screen.getByText('$10.')).toBeInTheDocument();
    expect(screen.getByAltText('Test Card 1')).toBeInTheDocument();

    expect(screen.getByText('Test Card 2')).toBeInTheDocument();
    expect(screen.getByText('Test Description 2.')).toBeInTheDocument();
    expect(screen.getByText('$15.')).toBeInTheDocument();
    expect(screen.getByAltText('Test Card 2')).toBeInTheDocument();
  });

  // Add more test cases as needed
});
