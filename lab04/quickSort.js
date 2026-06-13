/**
 * Quick Sort — O(n log n) average, O(n²) worst case, O(log n) space
 * In-place, divide-and-conquer sort using Lomuto partition scheme.
 */

/**
 * Partitions arr[low..high] around a pivot (last element).
 * Elements smaller than pivot move left; larger move right.
 * Returns the final index of the pivot.
 * @param {number[]} arr
 * @param {number}   low
 * @param {number}   high
 * @returns {number} Pivot's final index
 */
function partitionAroundPivot(arr, low, high) {
  const pivotValue = arr[high];
  let smallerElementBoundary = low - 1;

  for (let current = low; current < high; current++) {
    if (arr[current] <= pivotValue) {
      smallerElementBoundary++;
      [arr[smallerElementBoundary], arr[current]] = [arr[current], arr[smallerElementBoundary]];
    }
  }

  const pivotIndex = smallerElementBoundary + 1;
  [arr[pivotIndex], arr[high]] = [arr[high], arr[pivotIndex]];
  return pivotIndex;
}

/**
 * Recursively sorts arr[low..high] in-place.
 * @param {number[]} arr
 * @param {number}   low
 * @param {number}   high
 */
function quickSortRange(arr, low, high) {
  if (low >= high) return;

  const pivotIndex = partitionAroundPivot(arr, low, high);
  quickSortRange(arr, low, pivotIndex - 1);
  quickSortRange(arr, pivotIndex + 1, high);
}

/**
 * Sorts an array of numbers in-place using quick sort.
 * Returns the same array, sorted ascending.
 * @param {number[]} arr
 * @returns {number[]}
 */
function quickSort(arr) {
  quickSortRange(arr, 0, arr.length - 1);
  return arr;
}

// --- Example usage ---
const unsorted = [10, 80, 30, 90, 40, 50, 70];
console.log("Input: ", [...unsorted]);
console.log("Sorted:", quickSort(unsorted));

module.exports = { quickSort };
