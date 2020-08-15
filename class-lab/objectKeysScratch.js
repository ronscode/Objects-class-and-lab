let name;

let person = {
	name: "Peter",
	age: 20,
	hairColor: "black",
	sayHello: function () {
		return "Hola guys, my name is " + this.name + person.name;
	},
}; // an object
console.log(person.sayHello());
//let sh = person.name;
//console.log(sh);
// console.log(person.name);
// person.name = "Batman";
// console.log(person.name);
console.log(person);

// let pets = {
// 	breed: "Cat",
// 	qualites: "Mini lion",
// };

// person.name = "Peter";
// person["lastName"] = "Parker";
// //person.lastName = "Parker";
// person.occupation = "Super Hero";
// person.age = 20;
// person.hairColor = "black";

// console.log(person.lastName);

// person.lastName = "Zaphod";

// console.log("The same person now is " + person.lastName);
// console.log(person.occupation);
// console.log(person);

catCreator(["Mellow 2", "Tom 5"]);
