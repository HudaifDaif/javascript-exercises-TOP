const reverseString = function (str) {
	let reversedString = "";

	let i = str.length - 1;
	while (i >= 0) {
		reversedString += str[i];
		i--;
	}
	return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
