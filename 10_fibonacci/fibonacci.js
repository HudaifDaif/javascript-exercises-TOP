const fibonacci = function (num) {
	let a = 0;
	let b = 1;

	// num = parseInt(num);

	if (num < 0) {
		return "OOPS";
	} else if (num == 1) {
		return 1;
	} else
		for (i = 1; i < num; i++) {
			result = a + b;
			a = b;
			b = result;
		}
	return result;
};

// Do not edit below this line
module.exports = fibonacci;
