/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!
const newID = oldID + 1000000000;
//
const ageIsValid = Number.isInteger(currentAge);
//
const randomNumber = Math.random() * 20;

const randomInteger = Math.floor(randomNumber);


const randomUserID = randomInteger + 1000000001;
// 1000000000 is wrong, as the desired range is 1000000001 to 1000000020.

// Also, the solution branch uses "const" rather than "let" for each of the above.
