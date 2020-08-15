/* Create a class with name ​Vehicle​ that has the following properties:
● type​–astring
● model​–astring
● parts​–anobjectthatcontains:
o engine​ ​– number (quality of the engine) * power​ – number
o quality​ – engine ​*​ power
● fuel​–anumber
● drive​​–afunctionthatreceivesfuellossanddecreasesthefuelofthevehiclebythatnumber

The ​constructor​ should receive the ​type​, the ​model​, the ​parts​ ​as an​ object ​and the ​fuel In judge post your ​class​ (​Note: all names should be as described​)

1. Set up ... your function! And ... wait for it ... the call! 
2. It will be a bit of thinking to setup the function and arguments, go ahead and start building out your class. Your function call will pass in all of your vehicle values! 
3. Look at the docs! Once you get one key/value working (test with console log) the rest are copy and paste. 
4. The drive method is just a simple function that subtracts the fuel used from the fuel. 
5. You'll pass in just one new argument for the drive method. You can already access this.fuel! 
6. Test, test and test! Use console.log to view the new object once the class creates it. Console.log object keys or this.whateverYouWant. Own your code, break stuff! 
7. All of these parts of the instructions should happen outside of your class: 

let someCar = new Vehicle(type, model, parts, fuel);
	someCar.drive(100);
	console.log(someCar.fuel);
  console.log(someCar.parts.quality);
  
*/

function vehicleClass(type, model, parts, fuel, drive) {
	class Vehicle {
		constructor(type, model, parts, fuel) {
			// BC parts is an object, parts.engine, parts.power etc exist.
			this.type = type;
			this.model = model;
			this.parts = {
				engine: parts.engine,
				power: parts.power,
				quality: parts.engine * parts.power,
			};
			this.fuel = fuel;
			this.drive = function (fuelToUse) {
				// use function, myCar.drive(100)
				return (this.fuel -= fuelToUse);
			};
		}
	}
	let someCar = new Vehicle(type, model, parts, fuel);
	let newCar = new Vehicle(type, model, parts, fuel);
	console.log(newCar);
	// someCar.drive(100); // 100 = fuel to use
	// console.log(someCar.fuel);
	// console.log(someCar.parts.quality);
}

vehicleClass(
	"Time Machine", // name
	"2042", // year
	{
		// engine object
		engine: 6,
		power: 100,
	},
	200 // fuel
); // don't pass in methods like drive
