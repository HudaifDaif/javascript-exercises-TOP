const add = function (num1, num2) {
	return num1 + num2;
};

const subtract = function (num1, num2) {
	return num1 - num2;
};

const sum = function (sumArray) {
	let result = 0;
	for (const n of sumArray) {
		result += n;
	}
	return result;
};

const multiply = function (muliplyArray) {
	let array = arguments[0];

	if (array[0] === undefined) {
		return 0;
	}
	let result = 1;
	for (const n of muliplyArray) {
		result = result * n;
	}
	return result;
};

const power = function (num, index) {
	let result = 1;
	if (num == 0 || index == 0) {
		return 0;
	}
	for (i = index; i > 0; i--) {
		result *= num;
	}
	return result;
};

const factorial = function (num) {
	if (num === 0) {
		return 1;
	} else {
		let result = 1;
		for (let i = num; i > 0; i--) {
			result *= i;
		}
		return result;
	}
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
