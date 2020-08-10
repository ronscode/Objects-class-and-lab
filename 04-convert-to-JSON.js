function convertJSON(name, lastName, hairColor) {
	let person = {
		name,
		lastName,
		hairColor,
	};

	console.log(JSON.stringify(person));
}

convertJSON("Jones", "George", "Brown");
