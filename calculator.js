function romanToInt(roman) {
	const romanNumerals = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};
	let result = 0;
	for (let i = 0; i < roman.length; i++) {
		const currentSymbol = romanNumerals[roman[i]];
		const nextSymbol = romanNumerals[roman[i + 1]];
		if (nextSymbol && currentSymbol < nextSymbol) {
			result -= currentSymbol;
		} else {
			result += currentSymbol;
		}
	}
	return result;
}

function intToRoman(num) {
	const romanNumerals = [
		{ value: 1000, numeral: "M" },
		{ value: 900, numeral: "CM" },
		{ value: 500, numeral: "D" },
		{ value: 400, numeral: "CD" },
		{ value: 100, numeral: "C" },
		{ value: 90, numeral: "XC" },
		{ value: 50, numeral: "L" },
		{ value: 40, numeral: "XL" },
		{ value: 10, numeral: "X" },
		{ value: 9, numeral: "IX" },
		{ value: 5, numeral: "V" },
		{ value: 4, numeral: "IV" },
		{ value: 1, numeral: "I" },
	];

	if (Number.isNaN(num)) {
		return "";
	}
	let romanNumeral = "";
	for (const romanNumeralElement of romanNumerals) {
		while (num >= romanNumeralElement.value) {
			romanNumeral += romanNumeralElement.numeral;
			num -= romanNumeralElement.value;
		}
	}
	return romanNumeral;
}

function parseOperands(input) {
	//

	return ["", "", ""];
}

function calculator(string) {
	// код пишите внутри этой функции
}
