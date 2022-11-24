const caesar = function (str, offset) {
	let result = "";
	let dist = offset;

	while (dist > 26) {
		dist -= 26;
	}

	offset = dist;

	for (let i = 0; i < str.length; i++) {
		shiftValue = str.charCodeAt(i) + offset;

		if (
			str.charCodeAt(i) < 65 ||
			str.charCodeAt(i) > 122 ||
			(str.charCodeAt(i) < 97 && str.charCodeAt(i) > 90)
		) {
			result += str[i];
		}

		// Capital letters
		else if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
			if (shiftValue >= 65 && shiftValue <= 90) {
				result += String.fromCharCode(shiftValue);
			} else if (offset > 0) {
				result += String.fromCharCode(shiftValue - 26);
			} else if (offset < 0) {
				result += String.fromCharCode(shiftValue + 26);
			}
		}

		// Lower case letters
		else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
			if (shiftValue >= 97 && shiftValue <= 122) {
				result += String.fromCharCode(shiftValue);
			} else if (offset > 0) {
				result += String.fromCharCode(shiftValue - 26);
			} else if (offset < 0) {
				result += String.fromCharCode(shiftValue + 26);
			}
		}
	}
	return result;
};

// Do not edit below this line
module.exports = caesar;
