/* You will receive an ​array ​with ​JSON strings.
You have to parse these strings and combine them into ​one object​. Every string from the array will hold ​terms​ and a
definition. ​If you receive the ​same term​ ​twice​ replace it with the ​new definition​. Print every term and definition in that dictionary on new line in format:
Term: ${term} => Definition: ${definition}
Don't forget to sort the dictionary ​alphabetically​ by the terms as in real dictionaries. 

1. Setup the function, call with arguments. 
2. JSON Strings are objects! After we parse() them. JSON has its own methods...like parse()
3. 
*/

function myDictionary(someArray) {
	let newDictionary = {};
	for (let word of someArray) {
		let thing = JSON.parse(word);
		let entries = Object.entries(thing);
		for (let [key, value] of entries) {
			console.log(`${key}: ${value}`);
		}
	}
	console.log(newDictionary);
}

myDictionary([
	'{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
	'{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
	'{"Boiler":"A fuel-burning apparatus or container for heating water."}',
	'{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
	'{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
