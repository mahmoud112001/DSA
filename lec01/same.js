function CFC(array) {
  // create frequency counter
  let counter = {};
  for (let value of array) {
    counter[value] = (counter[value] || 0) + 1;
  }
  return counter;
}


function same(array1, array2) {
  //length check
  if (array1.length !== array2.length) {
    console.log("the length not equal");
    return false;
  }
  // make the CFC
  let objarr1 = CFC(array1);
  let objarr2 = CFC(array2);

  for (let key in objarr1) {
    let squaredKey = key * key;
    // howa mawgod aslan wala l2a  ?
    if (!(squaredKey in objarr2)) {
      console.log(`${squaredKey} not found in ${array2}`);
      return false;
    }
    //tb lw magwod howa mtekarr zy ba3d wala l2a ?
    if (objarr2[squaredKey] !== objarr1[key]) {
      console.log(`${squaredKey} is found in ${array2}
but the freq of ${squaredKey} not ${objarr2[key]}`);
      return false;
    }

  }
  return true;
}

console.log(same([-1, 2, 3, 2,0], [4, 1, 9, 4,0])); // true case 
console.log(same([1, 2, 3, 2], [4, 1, 9])); // false the length not equal 
console.log(same([1, 2, 3, 2], [2, 4, 9, 4])); // false not found a value 
console.log(same([2, 2, 3, 2], [2, 4, 9, 4])); // false not the same feq
console.log(same([1, 2, 3], [1, 9, 9]));