
function mergeSortedHalves(left, right) {
  const merged = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      merged.push(left[leftIndex]);
      leftIndex++;
    } else {
      merged.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return merged.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const midpoint = Math.floor(arr.length / 2);
  const sortedLeft = mergeSort(arr.slice(0, midpoint));
  const sortedRight = mergeSort(arr.slice(midpoint));

  return mergeSortedHalves(sortedLeft, sortedRight);
}

// --- Example usage ---
const unsorted = [38, 27, 43, 3, 9, 82, 10];
console.log("Input: ", unsorted);
console.log("Sorted:", mergeSort(unsorted));

module.exports = { mergeSort };
