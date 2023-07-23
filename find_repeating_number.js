/// this challenge was about finding the first repeating number in an array
/// ex: [1,2,3,6,7,1,1] would return 1

let find_repeating_number = (array_of_numbers) => {
  // validation check
  if (array_of_numbers.some(isNaN)) {
    console.log("invalid array dip shit");
    return null;
  }

  // variable setting
  let array_values = {};
  let smallest_index = null;

  // THIS STEP IS ALL EXTRA STUFF BECAUSE YOU DON'T NEED ALL THE NUMBERS THAT REPEAT JUST THE FIRST ONE, CHECK YOUR REFACTORED FUNCTION

  // check for duplicates and set duplicates to true with index
  for (let i = 0; i < array_of_numbers.length; i++) {
    array_values[array_of_numbers[i]] = array_values.hasOwnProperty([
      array_of_numbers[i],
    ])
      ? (array_values[array_of_numbers[i]] = [true, i])
      : (array_values[array_of_numbers[i]] = false);
  }

  // find the smallest index (essentially finding the FIRST repeating number)
  for (let key in array_values) {
    let value = array_values[key];
    if (value) {
      smallest_index === null
        ? (smallest_index = value[1])
        : value[1] < smallest_index
        ? (smallest_index = value[1])
        : smallest_index;
    }
  }

  /// find the number that matches the smallest index
  for (let key in array_values) {
    let value = array_values[key];
    if (value[1] === smallest_index) return key;
  }
};

let find_repeating_number_refactored = (array_of_numbers) => {
  // validation check
  if (array_of_numbers.some(isNaN)) {
    console.log("invalid array dip shit");
    return null;
  }

  // variable setting
  let array_values = {};

  // check for duplicates and set duplicates to true with index
  for (let i = 0; i < array_of_numbers.length; i++) {
    if (array_values.hasOwnProperty([array_of_numbers[i]])) {
      return array_of_numbers[i];
    }
    array_values[array_of_numbers[i]] = { index: i };
  }
};

console.log(find_repeating_number_refactored([1, 2, 5, 3, 2, 5, 6, 7, 8, 1]));

console.log(find_repeating_number_refactored([5, 2, 3, 3, 2, 5, 6, 7, 8, 1]));

console.log(find_repeating_number_refactored([1, 2, 3, 5, 8, 7, 4, 5]));

console.log(find_repeating_number_refactored([1, 2, 5, 3]));
