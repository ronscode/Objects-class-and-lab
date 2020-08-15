/* Create an object that has first name, last name and age Print the entries of a given object */

let peterPan = {
	firstName: "Peter",
	lastName: "Pan",
	age: 20,
	kayak: "The best",
};

let jackSparrow = {
	firstName: "Jack",
	lastName: "Sparrow",
	age: "unknown",
	boat: "Queen Mary",
};

function personInfo(person) {
	for (key in person) {
		console.log(`${key}: ${person[key]}`);
	}
}

personInfo(peterPan);
personInfo(jackSparrow);
