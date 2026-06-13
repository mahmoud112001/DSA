/**
 * Insertion Sort — O(n²) time, O(1) space
 * Stable, in-place sort. Efficient for small or nearly sorted arrays.
 */

/**
 * Sorts an array of numbers in-place using insertion sort.
 * Returns the same array, sorted ascending.
 * @param {number[]} arr
 * @returns {number[]}
 */
function insertionSort(arr) {
  for (let unsortedStart = 1; unsortedStart < arr.length; unsortedStart++) {
    const elementToInsert = arr[unsortedStart];
    let sortedIndex = unsortedStart - 1;

    // Shift elements right until we find the correct insertion point
    while (sortedIndex >= 0 && arr[sortedIndex] > elementToInsert) {
      arr[sortedIndex + 1] = arr[sortedIndex];
      sortedIndex--;
    }

    arr[sortedIndex + 1] = elementToInsert;
  }

  return arr;
}

// --- Example usage ---
const unsorted = [12, 11, 13, 5, 6];
console.log("Input: ", [...unsorted]);
console.log("Sorted:", insertionSort(unsorted));

module.exports = { insertionSort };
