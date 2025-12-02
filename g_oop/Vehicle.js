// Create a class called Vehicle
class Vehicle {
  // constructor (keyword) - only allows one constructor in JavaScript
  // this (keyword)
  // a constructor is called when a new instance of the class is created
  constructor(make, model, year, distanceTraveled) {
    //the 'this' is used to refer to the class 'Vehicle' make, model, year etc
    this.make = make; //property
    this.model = model; //property
    this.year = year; //property
    this.distanceTraveled = distanceTraveled ? distanceTraveled : 0; // property, default value for all new instance
  }

  // method common to all vehicles
  travel(distance) {
    this.distanceTraveled += distance;
    console.log(
      `The ${this.year} ${this.make} ${this.model} has been driven ${distance} units (km).`
    );
  }

  //method to ge the total distance travelled
  getTotalDistance() {
    return this.distanceTraveled;
  }

  calcFuelConsumed(){
    return 10 * this.distanceTraveled;
  }

}


/* 
const myTransport = new Vehicle("Toyota", "Raize", "2022"); // myTransport is an object
myTransport.travel(100); // yesterday 100km
myTransport.travel(50); // today 50km

console.log(
  `My transport has travelled a total of ${myTransport.getTotalDistance()} km.`
);

const myTransport2 = new Vehicle("Honda", "Vezel", "2013", 50); // myTransport is an object
myTransport2.travel(10); // yesterday 100km
myTransport2.travel(10); // today 50km

console.log(
  `My transport has travelled a total of ${myTransport2.getTotalDistance()} km.`
);

 */

// module.exports = Vehicle; // class Vehicle is exported
export default Vehicle; // Modern (ES6+) approach to export a JS file