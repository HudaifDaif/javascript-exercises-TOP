const removeFromArray = function (...theArgs) {
	let targetArray = arguments[0];
	let result = [];
	for (let i = 1; i < theArgs.length; i++) {
		let arg = theArgs[i];

		for (let j = 0; j < targetArray.length; j++) {
			if (targetArray[j] === arg) {
				const x = targetArray.splice(j, 1);
			}
		}
	}
	return targetArray;
};

// Do not edit below this line
module.exports = removeFromArray;
