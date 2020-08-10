function catCreator(arr) {
	class Cat {
		constructor(name, age) {
			this.name = name;
			this.age = age;
			this.meow = () => {
				console.log(`${name} age ${age} says Meow`);
			};
		}
	}
	let cats = [];
	for (let i = 0; i < arr.length; i++) {
		let catData = arr[i].split(" ");
		let [name, age] = [catData[0], catData[1]];
		cats.push(new Cat(name, age));
	}
	// TODO: Iterate through cats[] and invoke .meow() using for...of loop
	for (cat of cats) {
		cat.meow();
	}
}

var tom = {
	name: "Tom",
	age: 5,
};

//catCreator(["Mellow 2", "Tom 5"]);

class Dog {
	constructor(name, age, breed) {
		this.name = name;
		this.age = age;
		this.bark = () => {
			console.log(`${name} age ${age} says Woof!`);
		};
		this.breed = breed;
	}
}

let puppy = new Dog("Spot", 1, "Bichon Frise");
console.log(puppy);
puppy.bark();
