import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color); // Call the constructor of the parent Car class
    this._range = range; // Set the range property
  }

  cloneCar() {
    return new Car(); // Return a new instance of Car instead of EVCar
  }
}
