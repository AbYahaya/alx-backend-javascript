const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function() {
  // Test for SUM
  it('should add 1.4 and 4.5 after rounding to 1 and 5, and return 6', function() {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
  });

  // Test for SUBTRACT
  it('should subtract 4.5 from 1.4 after rounding to 1 and 5, and return -4', function() {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });

  // Test for DIVIDE
  it('should divide 1.4 by 4.5 after rounding to 1 and 5, and return 0.2', function() {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });

  // Test for division by zero
  it('should return "Error" when dividing by 0', function() {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });

  // Additional test cases for edge cases
  it('should add 1.5 and 2.5 after rounding to 2 and 3, and return 5', function() {
    assert.strictEqual(calculateNumber('SUM', 1.5, 2.5), 5);
  });

  it('should subtract -1.5 from -2.5 after rounding to -2 and -3, and return 1', function() {
    assert.strictEqual(calculateNumber('SUBTRACT', -1.5, -2.5), 1);
  });

  it('should divide -2.5 by 2.5 after rounding to -2 and 3, and return -0.666...', function() {
    assert.strictEqual(calculateNumber('DIVIDE', -2.5, 2.5), -0.6666666666666666);
  });

  it('should divide 3.5 by 0.1 after rounding to 4 and 0, and return "Error"', function() {
    assert.strictEqual(calculateNumber('DIVIDE', 3.5, 0), 'Error');
  });
});
