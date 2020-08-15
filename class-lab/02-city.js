/* Create an object, which will hold area, population, country and postal code
Loop through all the keys and print them with their values */
let atlanta = {
	name: "Atlanta",
	area: 347,
	population: 420003,
	country: "USA",
	postCode: 30309,
};
function cities(aCity) {
	let entries = Object.entries(aCity);
	for (let [key, value] of entries) {
		console.log(`${key} -> ${value}`);
	}
}

cities(atlanta);
