// Reverse string.
export function reverseString(str) {
  return str.split("").reverse().join("");
}

// Reverse array.
export function reverseArray(arr) {
  return arr.toReversed((a, b) => a - b);
}
