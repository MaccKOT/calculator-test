// https://github.com/qbunt/romans
import romans from "romans";

function calculator(input) {
	let left;
	let sign = "";
	let right;
	[left, sign, right] = input.split(" ");
	let isRoman = false;
	let isInteger = false;

	//проверки на корректность ввода
	if (left === "" || sign === "" || right === "") throw new Error();
	// if (sign !== "+" || sign !== "-" || sign !== "*" || sign !== "/")
	// 	throw new Error();
	if (input.split(" ").length > 3) throw new Error();

	//проверка на корректность римских цифр
	const regexForRomanDigits =
		/^M{0,3}(?:C[MD]|D?C{0,3})(?:X[CL]|L?X{0,3})(?:I[XV]|V?I{0,3})$/i;
	if (
		regexForRomanDigits.test(left) === true &&
		regexForRomanDigits.test(right) === true
	)
		isRoman = true;
	else {
		left = parseInt(left);
		right = parseInt(right);
		isInteger = true;
		if (Number.isNaN(left) || Number.isNaN(right)) throw new Error();
	}

	if (isRoman) {
		left = romans.deromanize(left);
		right = romans.deromanize(right);
	}

	//проверка на деление на ноль
	if (sign === "/" && right === 0) throw new Error("Divide by zero");

	let result = null;
	if (sign === "+") result = left + right;
	if (sign === "-") result = left - right;
	if (sign === "/") result = Math.floor(left / right);
	if (sign === "*") result = left * right;

	if (result <= 0 && isRoman) return ""; // в римских цифрах нет нуля и отрицательных чисел
	if (isRoman) return romans.romanize(result);

	return result.toString();
}

export default calculator;

// console.log(calculator("10 - 1"));
// console.log(calculator("II + V"));
