export default function groceriesList() {
  // Create a new Map with the grocery items
  const groceries = new Map();
  
  // Set the grocery items and their quantities
  groceries.set('Apples', 10);
  groceries.set('Tomatoes', 10);
  groceries.set('Pasta', 1);
  groceries.set('Rice', 1);
  groceries.set('Banana', 5);
  
  // Return the Map
  return groceries;
