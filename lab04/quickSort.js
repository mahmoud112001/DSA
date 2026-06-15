
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

function quickSortRange(arr, low, high) {
  if (low >= high) return;

  const pivotIndex = partitionAroundPivot(arr, low, high);
  quickSortRange(arr, low, pivotIndex - 1);
  quickSortRange(arr, pivotIndex + 1, high);
}


function quickSort(arr) {
  quickSortRange(arr, 0, arr.length - 1);
  return arr;
}

// --- Example usage ---
const unsorted = [10, 80, 30, 90, 40, 50, 70];
console.log("Input: ", [...unsorted]);
console.log("Sorted:", quickSort(unsorted));
module.exports = { quickSort };
