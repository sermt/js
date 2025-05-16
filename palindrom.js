// Palindrome string.
export function palindromeString(str) {
    return str === str.split('').reverse().join('');
}