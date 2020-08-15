// /* Division to 2, 3 and 4
// Write a function to find ​statistics about division to 2, 3 and 4​:
// • Receives a count ​n ​and ​n ​integers (as array)
// • Finds in​ percentages ​how many of these integers can divide without a remainder to​ 2​,​ 3​ and ​4 • Prints the percentages, formatted to the​ second ​decimal digit */

// function main(n, arrayOfNums) {
// 	var byTwo = 0;
// 	var byThree = 0;
// 	var byFour = 0;

// 	for (var i = 0; i < n; i++) {
// 		if (arrayOfNums[i] % 2 === 0) {
// 			byTwo++;
// 		}

// 		if (arrayOfNums[i] % 3 === 0) {
// 			byThree++;
// 		}

// 		if (arrayOfNums[i] % 4 === 0) {
// 			byFour++;
// 		}
// 	}

// 	byTwo = ((byTwo / n) * 100).toFixed(2) + "%";
// 	byThree = ((byThree / n) * 100).toFixed(2) + "%";
// 	byFour = ((byFour / n) * 100).toFixed(2) + "%";

// 	console.log(byTwo);
// 	console.log(byThree);
// 	console.log(byFour);
// }

// main(3, [3, 6, 9]);

/* Division to 2, 3 and 4
Write a function to find ​statistics about division to 2, 3 and 4​:
• Receives a count ​n ​and ​n ​integers (as array)
• Finds in​ percentages ​how many of these integers can divide without a remainder to​ 2​,​ 3​ and ​4 • Prints the percentages, formatted to the​ second ​decimal digit */
function main(n, arrayOfNums) {
	const dividers = [2, 3, 4];
	const results = {};
	const len = dividers.length;
	for (var i = 0; i < n; i++) {
		for (var j = 0; j < len; j++) {
			const isZeroRemainder = arrayOfNums[i] % dividers[j] === 0;
			const val = dividers[j];
			if (!results[val]) results[val] = 0;
			if (isZeroRemainder) results[val]++;
		}
	}
	for (var j = 0; j < len; j++) {
		const percent = ((results[dividers[j]] / n) * 100).toFixed(2);
		console.log(`${percent}%`);
	}
}
main(3, [3, 6, 9]);
