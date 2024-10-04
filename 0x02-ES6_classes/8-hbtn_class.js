export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Override default valueOf() method for casting to a number
  valueOf() {
    return this._size;
  }

  // Override default toString() method for casting to a string
  toString() {
    return this._location;
  }
}
