/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const stack = [], ops = { "*": 1, "/": 1, "+": 1, "-": 1 };
  let num = 0, op = "+";
  for (let ind = 0; ind < s.length; ind++) {
    char = s[ind];
    if (/\d/g.test(char))
      num = (num * 10) + (+char);
    if ((char < "0" || char > "9") && char !== " " || ind === s.length - 1) {
      if (op === "+")
        stack.push(num);
      else if (op === "-")
        stack.push(-num);
      else if (op === "*") {
        const top = stack.at(-1);
        stack.pop();
        stack.push(num * top);
      }
      else if (op === "/") {
        const top = stack.at(-1);
        stack.pop();
        stack.push((top / num) | 0);
      }
      op = char;
      num = 0;
    }
  }
  return stack.reduce((sum, num) => sum + num, 0);
}