// Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing
// the Roman Numeral representation of that integer.
// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and
// skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC.
// 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

/// Example
/// solution(1000); // should return 'M'

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

let convert_to_roman = (input) => {
  if (typeof input !== "number") return undefined;

  let roman_chars_rules = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };

  const roman_char_array = Object.entries(roman_chars_rules);

  let romanNumString = "";

  for (let i = roman_char_array.length - 1; i >= 0; i--) {
    let key = roman_char_array[i][0];
    let count = 0;
    if (input >= key) {
      count += Math.floor(input / key);
      input -= count * key;
    }
    romanNumString += new Array(count)
      .fill(roman_chars_rules[roman_char_array[i][0]])
      .join("");
  }
  return romanNumString;
};

// let thousands = input > 1000 ? Math.round(input / 1000) : 0;
// input -= thousands * 1000;
// romanNumString += new Array(thousands).fill("M").join(',');

//// Better solution

// function solution(number){
//     // convert the number to a roman numeral
//   var  roman = {M:1000,CM:900, D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 }

//   var ans = '';
//   while(number>0){
//       for(a in roman){
//           if(roman[a]<=number){ ans += a; number-=roman[a]; break;}

//       }
//   }
//   return ans;
//   }
