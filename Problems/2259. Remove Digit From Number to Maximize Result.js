/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function (number, digit) {
  const arr = [], len = number.length;
  for (let ind = 0; ind < len; ind++)
    if (number[ind] === digit) arr.push(BigInt(number.slice(0, ind) + number.slice(ind + 1)));
  return String(arr.reduce((max, num) => max > num ? max : num));
};