class Car {
  // Write code under this line
  constructor(maxSpeed, speed, isOn, distance, price) {
    this.maxSpeed = maxSpeed;
    this.speed = speed;
    speed = 0;
    this.isOn = isOn;
    isOn = false;
    this.distance = distance;
    distance = 0;
    this.price = price;
  }
  static getSpecs(car) {
    return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}`;
  }
  get price() {
    return this._price;
  }
  set price(value) {
    this._price = value;
  }
  turnOn() {
    return (this.isOn = true);
  }
  turnOff() {
    return (this.isOn = false);
  }
  accelerate(value) {
    this.speed <= this.maxSpeed
      ? (this.speed = this.speed + value)
      : (this.speed = this.maxSpeed);
  }
  decelerate(value) {
    if (this.speed !== 0) {
      return (this.speed -= value);
    }
  }
  drive(hours) {
    if (this.isOn === true) return (this.distance += hours * this.speed);
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
