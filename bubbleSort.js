function bubbleSort(arr) {
  let n = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 1; i < n; i++) {
      if (arr[i - 1] > arr[i]) {
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]]; // swap
        swapped = true;
      }
    }
    n--; // optimización: el último ya está en su lugar
  } while (swapped);
  return arr;
}

console.log(bubbleSort([3, 1, 2.5, 40, 0.5, 6]));
