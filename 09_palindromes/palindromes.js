const palindromes = function (str) {
	if (
		str.replace(/[^a-zA-Z]/g, "").toLowerCase() ===
		str
			.replace(/[^a-zA-Z]/g, "")
			.toLowerCase()
			.split("")
			.reverse()
			.join("")
	) {
		return true;
	} else {
		return false;
	}
};

// Do not edit below this line
module.exports = palindromes;
