// const Vehicle = require("./Vehicle.js");
import Vehicle from "./Vehicle.js";

// Create a child class from Vehicle class
class Car extends Vehicle {   //INHERITS the vehicle class


  // constructor
  constructor(make, model, year) {
    super(make, model, year); // * super (keyword) - INHERITANCE: The 'super()' call executes the parent's (Vehicle's) constructor
    this.airbag = true; //property airbag is unique to cars
  }

  // a static method of a class can be used without instantiation
  static welcomeStatement(msg){
    console.log(msg);
  }

  // Polymorphism
  drive(distance) {
    super.travel(distance); // Astraction - drive method hides the implementation (travel)
    console.log(
      `Driving complete. Status: ${
        this.airbag ? "Safety Check Passed." : "Airbag absent"
      }`
    );
  }

  // checkSafetyFeature() is only found in Car class
  checkSafetyFeature() {
    return this.airbag;
  }

  carFuelConsumed() {
    return 12 * this.distanceTraveled;
  }

  // IMPLICIT INHERITANCE methods inherited here in Car class (from Vehicle class) include:
  // - travel()
  // - getTotalDistance() - Abstraction, where we do not see the implementation of getTotalDistance(), yet we can invoke it
  // - distanceTraveled - Encapsulation, where the state of the property is managed by the parent class
}

// Instantiate a new instance of a Car called myNewCar

// Static Method (e.g. performing initialisation tasks that DOES NOT affect the class itself)
Car.welcomeStatement("\n********************\n Welcome Car Owner!\n********************\n");

const myNewCar = new Car("Honda", "Civic", 2024);
myNewCar.drive(200);
console.log(`Does my new car have safety features: ${myNewCar.checkSafetyFeature()}`);
console.log(`My new car is drive ${myNewCar.getTotalDistance()} km.`);
console.log(`Total fuel comsumed for  car: ${myNewCar.carFuelConsumed()}.`); //for your own car
console.log(`Total fuel comsumed for vehicle: ${myNewCar.calcFuelConsumed()}.`); //based on Vehicle

const mySecondNewCar = new Car("Toyota", "Vios", 2015);
mySecondNewCar.drive(100);
console.log(mySecondNewCar.getTotalDistance());


// module.exports = Car;
export default Car; //export car class that can be use later
