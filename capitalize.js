// Capitalize string.
export function capitalizeWord(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => capitalizeWord(word))
    .join(" ");
}
