/* You're tasked to create a list of employees and their personal numbers.
You will receive an array of strings. Each string is an employee ​name​ and to assign them a personal number you have to find the ​length of the name ​(whitespace included). Try to use an object​.

At the end print all the list employees in the following format:
​"Name: {employeeName} -- Personal Number: {personalNum}" // hint copy this for template literals into your console.log(``)


1. Set up your function and call with arguments. 
2. Create a new class (object factory) to make an employee. 
3. The class will create new objects that hold the name and number. 
4. Use a "for of" loop or other loop to go through all items in the array
5. Each string in the array is the name, the length of the string is the empNumber
6. Create a new variable inside your loop that uses the class to create a new object
HINT: 	let someEmp = new Employee(empName, empNum);
7. Console log the objects key values for the name and empNum

*/

var item = "Free tacos";

function listEmployees(someArr) {
	class Employee {
		constructor(name, empNum) {
			this.name = name;
			this.empNum = empNum;
		}
	}

	for (item of someArr) {
		let empName = item;
		let empNum = item.length;
		let someEmp = new Employee(empName, empNum);
		console.log(someEmp);
		console.log(`Name: ${someEmp.name} -- Personal Number: ${someEmp.empNum}`);
	}
}

listEmployees([
	"Silas Butler",
	"Adnaan Buckley",
	"Juan Peterson",
	"Brendan Villarreal",
]);
