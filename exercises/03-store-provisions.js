/* You will receive ​two arrays​. The first array represents a current ​stock​ of the local store. The second array will contain ​products​ which the store has ​ordered​ for delivery.
The following information applies to both arrays:
Every ​even​ index will hold the ​name​ of the ​product​ and on every ​odd​ index will hold the ​quantity​ of that product​. The second array could contain products that are ​already in​ the local store. If that happens ​increase​ the quantity​ for the given product .You should store them into an ​object​, and print them in the following format: (​product -> quantity)
All of the arrays values will be ​strings. */

function storePro(stock, ordered) {
	let results = {
		chips: 5,
		coke: 9,
	};

	for (var i = 0; i < stock.length; i++) {
		results[stock.shift()] = Number(stock.shift());
	}
	console.log(results);

	for (var j = 0; j < ordered.length; j + 2) {
		newInventory = ordered.shift();
		newInventoryCount = Number(ordered.shift());
		if (!results[newInventory]) {
			results[newInventory] = newInventoryCount;
		} else {
			results[newInventory] += newInventoryCount;
			// Go to the object results key newInventory and add the value to the current value.
		}
	}
	for (const key in results) {
		console.log(`${key} -> ${results[key]}`);
	}
}
storePro(
	["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
	["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
