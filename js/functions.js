function checkLength(str, len) {
  if (str.length <= len) {
    return true;
  }
  return false;
}

checkLength('проверяемая строка', 20);
checkLength('проверяемая строка', 18);
checkLength('проверяемая строка', 10);

function checkPolindrom(str){
  str = str.toLowerCase().replaceAll(' ', '');
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[(str.length - 1) - i]) {
      return false;
    }
  }
  return true;
}

checkPolindrom(' A bc Ed e  Cb a   ');
checkPolindrom('топот');
checkPolindrom('ДовОд');
checkPolindrom('Кекс');
checkPolindrom('Лёша на полке клопа нашёл ');

function ejectDigit(data){
  if (typeof (data) === 'number') {
    return Math.abs(data);
  }
  if (data.match(/[0-9]/g) !== null) {
    return Number(data.match(/[0-9]/g).join(''));
  }
  return NaN;
}

ejectDigit('2023 год');
ejectDigit('ECMAScript 2022');
ejectDigit('1 кефир, 0.5 батона');
ejectDigit('агент 007');
ejectDigit('а я томат');
ejectDigit(-0);
