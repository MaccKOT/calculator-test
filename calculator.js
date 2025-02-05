import romans from "romans"; // https://github.com/qbunt/romans

function calculator(input) {
	let left;
	let sign = "";
	let right;
	let isRoman = false;

	[left, sign, right] = input.split(" ");

	//проверки на корректность ввода
	if (input.split(" ").length > 3) throw new Error();
	if (left === "" || sign === "" || right === "") throw new Error();
	if (!/^\+$|^\-$|^\*$|^\/$/.test(sign)) throw new Error();

	//проверка на корректность римских цифр
	const regexForRomanDigits =
		/^M{0,3}(?:C[MD]|D?C{0,3})(?:X[CL]|L?X{0,3})(?:I[XV]|V?I{0,3})$/i;
	if (
		regexForRomanDigits.test(left) === true &&
		regexForRomanDigits.test(right) === true
	) {
		isRoman = true;
		left = romans.deromanize(left);
		right = romans.deromanize(right);
	} else {
		left = parseInt(left);
		right = parseInt(right);
		if (Number.isNaN(left) || Number.isNaN(right)) throw new Error();
	}

	if (left > 10 || left <= 0 || right > 10 || right <= 0) throw new Error();

	let result = null;
	if (sign === "+") result = left + right;
	if (sign === "-") result = left - right;
	if (sign === "/") result = Math.floor(left / right);
	if (sign === "*") result = left * right;

	// в римских цифрах нет нуля и отрицательных чисел
	if (result <= 0 && isRoman) return "";
	if (isRoman) return romans.romanize(result);

	return result.toString();
}

export default calculator;

//console.log(calculator("3 % 4")); //error
//console.log(calculator("10 - 1")); // 9
//console.log(calculator("II + V")); //VII

// TODO! перевести на typescript
