/* You’re tasked to create and print ​objects​ from a text table.
You will receive the input as an ​array​ of strings, where each string represents a table row, with values on the row
separated by pipes ​"​ | ​" ​and spaces.
The table will consist of exactly 3 columns ​"T​own​"​,​ "​Latitude​" ​and​ "​Longitude​"​. The ​latitude​ and ​longitude columns will always contain ​valid numbers​. Check the examples to get a better understanding of your task.
The ​output​ should be ​objects​. Latitude and longitude must be parsed to ​numbers and formatted to the second
decimal point​! 

1. Setup function and call with arguments
2. Make a class to create a town object with name, lat and long. (sorta optional!)
3. Use a "for of" loop to cyle through each town string
4. Split each string by " | " and you'll have the town name, lat and long (in an array)
5. Don't forget to make lat and long a Number()
6. Console log the output in the format on the screen. 


*/

function towns(someArray) {
	class Town {
		constructor(townName, lat, lng) {
			this.townName = townName;
			this.lat = lat;
			this.lng = lng;
		}
	}
	for (town of someArray) {
		let townArr = town.split(" | ");
		//console.log( townArr);
		let townName = townArr[0];
		let townLat = Number(townArr[1]).toFixed(2);
		let townLng = Number(townArr[2]).toFixed(2);
		let someTown = new Town(townName, townLat, new Town("ATL", 20, -20));
		console.log(someTown);
	}
}

towns(["Atlanta | 33.753746 | -84.386330", "Beijing | 39.913818 | 116.363625"]);
