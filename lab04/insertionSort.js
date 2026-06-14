
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
