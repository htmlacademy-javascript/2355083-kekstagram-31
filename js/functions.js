const checkLength=(str, len) =>str.length <= len ? true:false;

console.log(checkLength('проверяемая строка', 20));
console.log(checkLength('проверяемая строка', 18));
console.log(checkLength('проверяемая строка', 10));



const checkPolindrom = (str) => {
	str = str.toLowerCase().replaceAll(' ', '')
	for (let i = 0; i < Math.floor(str.length / 2); i++) {
		if (str[i] !== str[(str.length - 1) - i]) return false;
	}
	return true;
}

console.log(checkPolindrom(' A bc Ed e  Cb a   '));
console.log(checkPolindrom('топот'));
console.log(checkPolindrom('ДовОд'));
console.log(checkPolindrom('Кекс'));
console.log(checkPolindrom('Лёша на полке клопа нашёл '));


const ejectDigit = (data) => {
	if (typeof (data) == "number") return Math.abs(data);
	if (data.match(/[0-9]/g) !== null) return Number(data.match(/[0-9]/g).join(''));
	return NaN;
}

console.log(ejectDigit('2023 год'));
console.log(ejectDigit('ECMAScript 2022'));
console.log(ejectDigit('1 кефир, 0.5 батона'));
console.log(ejectDigit('агент 007'));
console.log(ejectDigit('а я томат'));
console.log(ejectDigit(-0));