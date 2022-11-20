const ftoc = function (degF) {
	ftocConverted = (degF - 32) * (5 / 9);

	if (ftocConverted % 1 === 0) {
		return ftocConverted;
	} else return parseFloat(ftocConverted.toFixed(1));
};

const ctof = function (degC) {
	ctofConverted = (degC * 9) / 5 + 32;

	if (ctofConverted % 1 === 0) {
		return ctofConverted;
	} else return parseFloat(ctofConverted.toFixed(1));

	// (x * 9) / 5 + 32;
};

// Do not edit below this line
module.exports = {
	ftoc,
	ctof,
};
