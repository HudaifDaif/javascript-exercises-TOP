const findTheOldest = function (people) {
	let eldest = {
		name: "",
		yearOfBirth: 0,
		yearOfDeath: 0,
	};
	for (person of people) {
		if (person.yearOfDeath === undefined) {
			person.yearOfDeath = new Date().getFullYear();

			if (
				person.yearOfDeath - person.yearOfBirth >
				eldest.yearOfDeath - eldest.yearOfBirth
			) {
				eldest = person;
			}
		}

		if (
			person.yearOfDeath - person.yearOfBirth >
			eldest.yearOfDeath - eldest.yearOfBirth
		) {
			eldest = person;
		}
	}

	return eldest;
};

// Do not edit below this line
module.exports = findTheOldest;

// ! Date().getFullYear()
