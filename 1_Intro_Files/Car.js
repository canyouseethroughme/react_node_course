class Car {
  cars = [];
  addCar(carName) {
    this.cars.push(carName);
  }
  addCarEngine(carEngine) {
    this.cars.push(carEngine);
  }
  addVehicleCondition(carCondition) {
    this.cars.push(carCondition);
  }
  addVehiclePrice(carPrice) {
    this.cars.push(carPrice);
  }
}
const car = new Car();
car.addCar("Tesla");
car.addCarEngine("Electric");
car.addVehicleCondition("Brand new");
car.addVehiclePrice("300.000kr");

console.log("====================================");
console.log(car.cars);
console.log("====================================");
