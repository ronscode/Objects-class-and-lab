function storePro(stock, ordered) {
	let results = {};

	for (var i = 0; i < stock.length; i++) {
		results[stock.shift()] = stock.shift();
	}
	console.log(results);

	for (var j = 0; j < ordered.length; j++) {
		newInventory = ordered.shift();
		newInventoryCount = ordered.shift();
		if (!results[newInventory]) {
			results[newInventory] = newInventoryCount;
		} else {
			results[newInventory] = results[newInventory] + newInventoryCount;
		}
		// if (!results[val]) results[val] = 0;
		// if (isZeroRemainder) results[val]++;
	}
	console.log(results);
}
storePro(
	["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
	["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
