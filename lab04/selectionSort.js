/**
 * Selection Sort — O(n²) time, O(1) space
 * In-place sort; always performs exactly n*(n-1)/2 comparisons.
 * Not stable by default.
 */

/**
 * Finds the index of the minimum value in arr[startIndex..end].
 * @param {number[]} arr
 * @param {number}   startIndex
 * @returns {number}
 */
function indexOfMinimum(arr, startIndex) {
  let minIndex = startIndex;

  for (let i = startIndex + 1; i < arr.length; i++) {
    if (arr[i] < arr[minIndex]) minIndex = i;
  }

  return minIndex;
}

/**
 * Sorts an array of numbers in-place using selection sort.
 * Returns the same array, sorted ascending.
 * @param {number[]} arr
 * @returns {number[]}
 */
function selectionSort(arr) {
  for (let sortedBoundary = 0; sortedBoundary < arr.length - 1; sortedBoundary++) {
    const minIndex = indexOfMinimum(arr, sortedBoundary);

    if (minIndex !== sortedBoundary) {
      [arr[sortedBoundary], arr[minIndex]] = [arr[minIndex], arr[sortedBoundary]];
    }
  }

  return arr;
}

// --- Example usage ---
const unsorted = [64, 25, 12, 22, 11];
console.log("Input: ", [...unsorted]);
console.log("Sorted:", selectionSort(unsorted));

module.exports = { selectionSort };
