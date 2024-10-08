export default function cleanSet(set, startString) {
  // Check if startString is an empty string
  if (startString === '') {
    return '';
  }

  // Use Array.from to convert the Set to an Array and then filter and map accordingly
  return Array.from(set)
    .filter(value => value.startsWith(startString)) // Filter values that start with startString
    .map(value => value.slice(startString.length))   // Remove startString from the values
    .join('-');                                       // Join the results with '-'
}
