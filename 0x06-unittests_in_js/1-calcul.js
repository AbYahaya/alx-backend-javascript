function calculateNumber(type, a, b) {
  // Round the input numbers a and b
  a = Math.round(a);
  b = Math.round(b);

  // Perform the operation based on the value of type
  if (type === 'SUM') {
    return a + b;
  } else if (type === 'SUBTRACT') {
    return a - b;
  } else if (type === 'DIVIDE') {
    // Check for division by zero
    if (b === 0) {
      return 'Error';
    }
    return a / b;
  }
}

module.exports = calculateNumber;
