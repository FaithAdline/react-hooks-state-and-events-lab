// __tests__/ShoppingList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ShoppingList from '../components/ShoppingList'; // Adjust the import path as needed

const sampleItems = [
  { id: 1, name: 'Yogurt', category: 'Dessert', inCart: false },
  { id: 2, name: 'Pomegranate', category: 'Produce', inCart: false },
  { id: 3, name: 'Lettuce', category: 'Produce', inCart: false },
  { id: 4, name: 'String Cheese', category: 'Dessert', inCart: false },
  { id: 5, name: 'Cookies', category: 'Dessert', inCart: false },
];

test('displays only items that match the selected category', () => {
  render(<ShoppingList items={sampleItems} />);
  
  // Select the "Produce" category
  const select = screen.getByRole('combobox');
  fireEvent.change(select, { target: { value: 'Produce' } });
  
  // Ensure that only items in the "Produce" category are displayed
  const items = screen.getAllByRole('listitem');
  expect(items).toHaveLength(2);
});


