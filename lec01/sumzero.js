function sumZero(arr) {
  let sortarr = arr.sort((a, b) => a - b);
  let right = sortarr.length - 1;
  let left = 0;

  while (left < right) {
    let sum = sortarr[left] + sortarr[right];
    if (sum === 0) {
     console.log([sortarr[left], sortarr[right]]);
     return true;
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  if (left === right) {
    console.log("undefined");
  }
}
}
sumZero([-3, -2, -1, 0, 1, 2]); // [-3,3]
sumZero([-3, -2, -1, 0, 1, 3]); // [-3,3]
sumZero([-2, -3, -1, 0, 1, 3]); // [-3,3]
sumZero([-3, -1, -1, 0, 1, 3]); // [-3,3]

sumZero([-2, 0, 1, 3]); // undefined

sumZero([1, 2, 3]); // undefined
