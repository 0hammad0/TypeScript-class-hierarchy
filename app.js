"use strict";
class Vehicle {
    constructor(_name, _model, _year, _rented, _price) {
        this._name = _name;
        this._model = _model;
        this._year = _year;
        this._rented = _rented;
        this._price = _price;
    }
    // Getter
    get name() {
        return this._name;
    }
    get year() {
        return this._year;
    }
    get model() {
        return this._model;
    }
    get rented() {
        return this._rented;
    }
    // Setter
    set rented(newRented) {
        this._rented = newRented;
    }
    get price() {
        return this._price;
    }
    rent() {
        if (this.rented) {
            console.log(`${this.name} ${this.model} ${this.year} is already rented.`);
        }
        else {
            this.rented = true;
            console.log(`${this.name} ${this.model} ${this.year} has been rented.`);
        }
    }
    return() {
        if (!this.rented) {
            console.log(`${this.name} ${this.model} ${this.year} has not been rented.`);
        }
        else {
            this.rented = false;
            console.log(`${this.name} ${this.model} ${this.year} has been returned.`);
        }
    }
}
class Car extends Vehicle {
    constructor(name, model, year, rented, price, topSpeed) {
        super(name, model, year, rented, price);
        this.topSpeed = topSpeed;
    }
    getRentalRates() {
        return this.price * 0.8;
    }
}
class Truck extends Vehicle {
    constructor(name, model, year, rented, price, topSpeed) {
        super(name, model, year, rented, price);
        this.topSpeed = topSpeed;
    }
    getRentalRates() {
        return this.price * 0.9;
    }
}
class Bike extends Vehicle {
    constructor(name, model, year, rented, price, topSpeed) {
        super(name, model, year, rented, price);
        this.topSpeed = topSpeed;
    }
    getRentalRates() {
        return this.price * 0.7;
    }
}
// Car
const car = new Car("Honda", "City", 2021, false, 2000, 150);
console.log(car);
console.log(car.rent());
console.log(car.return());
// Truck
const truck = new Truck("Volvo", "FH16", 2021, true, 10000, 50);
console.log(truck);
console.log(truck.rent());
console.log(truck.return());
// Bike
const bike = new Bike("Honda", "CD70", 2023, true, 1000, 100);
console.log(bike);
console.log(bike.rent());
console.log(bike.return());
