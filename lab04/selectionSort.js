
function indexOfMinimum(arr, startIndex) {
  let minIndex = startIndex;

  for (let i = startIndex + 1; i < arr.length; i++) {
    if (arr[i] < arr[minIndex]) minIndex = i;
  }

  return minIndex;
}


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
