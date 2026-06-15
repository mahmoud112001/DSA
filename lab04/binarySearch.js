

function binarySearch(sortedArr, target) {
  let low = 0;
  let high = sortedArr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const midValue = sortedArr[mid];
    if (midValue === target) return mid;
    if (midValue < target) low = mid + 1;
    else high = mid - 1;
  }

  return -1;
}

// --- Example usage ---
const sorted = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
console.log("Array:", sorted);
console.log("Search 23 → index:", binarySearch(sorted, 23)); // 5
console.log("Search 99 → index:", binarySearch(sorted, 99)); // -1

module.exports = { binarySearch };
