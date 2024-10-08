export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);  // Create an ArrayBuffer of the specified length
  const view = new DataView(buffer);  // Create a DataView to manipulate the buffer

  if (position >= length || position < 0) {
    throw new Error('Position outside range');  // Throw an error if the position is invalid
  }

  view.setInt8(position, value);  // Set the Int8 value at the specified position

  return view;
}
