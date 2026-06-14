function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
    
  }

  let lookup = {};

  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    lookup[char] = (lookup[char] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];

    if (!lookup[char]) {
      return false;
    } else {
      lookup[char] -= 1;
    }
  }

  return true;
}

console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram("rat","car")); // false
console.log(validAnagram('awesome', 'awesom')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true