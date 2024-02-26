/*
Write a function which receives 4 digits and 
returns the latest time of day that can be built with those digits.
The time should be in HH:MM format.

Examples:
  digits: 1, 9, 8, 3 => result: "19:38"
  digits: 9, 1, 2, 5 => result: "21:59" ("19:25" is also a valid time, but 21:59 is later)

Notes:
  Result should be a valid 24-hour time, between 00:00 and 23:59.
  Only inputs which have valid answers are tested.
*/


// Solution

const latestClock = (a, b, c, d) => {
  const validTimeReg = /(?:[01]\d|2[0-3]):[0-5]\d/;
  
  const allCombos = [];
  const makeCombos = (dgts, str = '') => {
    !dgts.length && validTimeReg.test(str) && allCombos.push(str);
    dgts.length === 2 && (str += ':');
    dgts.forEach((dgt, idx) => makeCombos(dgts.filter((_, i) => i !== idx), str + dgt));
  }
  
  makeCombos([a, b, c, d]);
  
  return allCombos.sort().at(-1) || '';
}

// or