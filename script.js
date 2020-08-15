let myString = "Ron";

let myObj = {
	name: "Ron",
};

myString += " Someone";

//console.log(myString);
//console.log(myObj.name);

myString = "Not Ron";
myObj["newKey"] = "This is a new key";
console.log(myObj);

myObj["name"] = "Not Ron again.";
console.log(myObj);
//console.log(myString);
