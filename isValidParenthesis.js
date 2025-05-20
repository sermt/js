export function isValidParenthesis(str) {
  const CleanedString = str.replace(/\s+/g, "");
  const stringLength = CleanedString.length;

  if (stringLength <= 1) return true;

  const openBrackets = ["(", "{", "["];
  const closeBrackets = [")", "}", "]"];
  const matchingBrackets = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stack = [];
  for (let i = 0; i < stringLength; i++) {
    const currentChar = CleanedString[i];
    if (openBrackets.includes(currentChar)) {
      stack.push(currentChar);
    } else if (closeBrackets.includes(currentChar)) {
      if (stack.length === 0) {
        return false;
      }
      const lastOpenBracket = stack.pop();
      if (matchingBrackets[lastOpenBracket] !== currentChar) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(isValidParenthesis("(){}[]")); // true
console.log(isValidParenthesis("({[()]})")); // true
console.log(isValidParenthesis("({[}])")); // false
console.log(isValidParenthesis("({[}])")); // false
