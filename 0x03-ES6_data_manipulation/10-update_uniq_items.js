export default function updateUniqueItems(groceries) {
  // Check if the argument is a Map
  if (!(groceries instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate through the map entries
  for (const [key, value] of groceries) {
    // If the quantity is 1, update it to 100
    if (value === 1) {
      groceries.set(key, 100);
    }
  }

  // Return the updated map
  return groceries;
}
