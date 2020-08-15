class Car {
	constructor(brand, year, miles) {
		this.carname = brand;
		this.caryear = year;
		this.carmiles = miles;
	}
}

theSameCar = new Car("Ford", 2020, 20000);

var thisCar = {
	carname: "Beige Tesla",
	caryear: 2022,
	carmiles: ["I'm a km", 9],
};

//myOtherCar = new Car("Beige Tesla", 2022, 0);

console.log(mycar);
/*  {
  carname: 'Beige Tesla',
  caryear: 2022,
  carmiles: [ "I'm a km", 9 ]
} */

//console.log(myOtherCar);
//console.log(myOtherCar);
