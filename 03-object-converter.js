/* Write a function, that receives a string in JSON format and converts it to object
Print the entries of the object */

let anObject = `{
  "name": "George", "age": 40, "town": "Atlanta" }`;
console.log(anObject);

function objConverter(someJSON) {
	let newObject = JSON.parse(someJSON);
	//	console.log(newObject);
	for (const [key, value] of Object.entries(newObject)) {
		console.log(`${key}: ${value}`);
	}
}

objConverter(anObject);
