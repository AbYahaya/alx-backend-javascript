// Export a const instance of WeakMap
export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  // Check if the endpoint is already in the WeakMap
  if (!weakMap.has(endpoint)) {
    // If not, initialize it with a count of 0
    weakMap.set(endpoint, 0);
  }
  
  // Increment the count for the endpoint
  const count = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, count);

  // Check if the count is 5 or more, and throw an error if it is
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }

  // Return the current count (optional)
  return count;
}
