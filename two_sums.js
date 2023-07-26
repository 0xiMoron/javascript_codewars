function twoSum(numbers, target) {
  // ...
  let found = false;
  let initialIndex = 0;

  while (!found) {
    let wantedNum = target - numbers[initialIndex];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] === wantedNum) {
        found = true;
        return [initialIndex, i];
      }
    }
    initialIndex++;
    if (initialIndex >= numbers.length) {
      found = true;
      return null;
    }
  }
}

console.log(twoSum([1, 2, 3], 4));
console.log(twoSum([1234, 5678, 9012], 14690));
