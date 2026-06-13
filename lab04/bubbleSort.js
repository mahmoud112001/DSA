/**
 * Bubble Sort — O(n²) time, O(1) space
 * Simple comparison sort; efficient only for nearly sorted data.
 */

/**
 * Sorts an array of numbers in-place using bubble sort.
 * Returns the same array, sorted ascending.
 * @param {number[]} arr
 * @returns {number[]}
 */
function bubbleSort(arr) {
  const length = arr.length;

  for (let pass = 0; pass < length - 1; pass++) {
    let swappedThisPass = false;

    for (let i = 0; i < length - 1 - pass; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swappedThisPass = true;
      }
    }

    // Early exit: array is already sorted
    if (!swappedThisPass) break;
  }

  return arr;
}

// --- Example usage ---
const unsorted = [64, 34, 25, 12, 22, 11, 90];
console.log("Input: ", [...unsorted]);
console.log("Sorted:", bubbleSort(unsorted));

module.exports = { bubbleSort };
