/* Create a function which creates a ​register for heroes​, with their ​names​, ​level​, and ​items (​ if they have such).
The ​input​ comes as ​array of strings​. Each element holds data for a hero, in the following format:
“​{heroName} / {heroLevel} / {item1}, {item2}, {item3}...​”
You must store the data about every hero. The ​name​ is a ​string​, the ​level​ is a ​number ​and the items are all ​strings.
The ​output​ is all of the data for all the heroes you’ve stored ​sorted ascending by level ​and​ the items are sorted alphabetically​. The data must be in the following format for each hero:
Hero: {heroName}
level => {heroLevel}
Items => {item1}, {item2}, {item3} 

1. Write function and the call() with arguments. 
2. Create an empty array to store the hero objects.
3. Loop over each item in the array ("for of" or for loop or while loop whatever works.)
4. Create a temp variable inside the loop to store a new hero which is a string.
5. split() the string on the " / " to create an array. Now the hero name is index[0], level is index[1] etc..
6. Create a new class for making heros! For the items, make sure to split() the string of items into an array! Hint make sure to use the right index for the items string! 
7. Almost done now! 
8. push(someObj) to the array of heros
9. Create another loop and console log each value from the objects.
    HINT: Use template literals and .notation to access the keys, which gets the value! 
*/

function inventory(arrayOfStrings) {
	let myHeros = [];
	for (hero of arrayOfStrings) {
		let newHero = hero.split(" / ");

		let newHeroObj = {
			name: newHero[0],
			level: Number(newHero[1]),
			items: newHero[2].split(", "),
		};

		//	console.log(newHeroObj);
		myHeros.push(newHeroObj);
	}
	//console.log(myHeros[1].name);
	for (hero of myHeros) {
		console.log(`
	  Hero: ${hero.name}
	  level => ${hero.level}
	  Items => ${hero.items.join(", ")}`);
	}
}
inventory([
	"Isacc / 25 / Apple, GravityGun",
	"Derek / 12 / BarrelVest, DestructionSword",
	"Hes / 1 / Desolator, Sentinel, Antara",
]);
