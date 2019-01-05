/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs(maxFibValue) {
  var sum = 0;
  var a = 1,
    b = 0,
    temp;

  while (b <= maxFibValue) {
    temp = a;
    a = a + b;
    b = temp;

    if (b % 2 === 0 && b <= maxFibValue) {
      sum += b;
    }
  }
  return sum;
}

//gives fib number we need
//find fib numbers up to the number given

//   for (var i = 0; i <= maxFibValue; i++) {
// if (maxFibValue % 2 === 0) {
//   sum += i;
//   }
// }
// do your work here

// bonus round
function _highestFibonacciNumber(maxFibValue) {
  var highest = 0;
  var a = 1,
    b = 0,
    temp;

  while (b <= maxFibValue) {
    temp = a;
    a = a + b;
    b = temp;

    if (b <= maxFibValue) {
      highest = b;
    }
  }
  return highest;
}
//how to make "highest" into largest fib number
//define your base case, validate your input

//do your work here
/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs: _sumFibs,
  highestFibonacciNumber: _highestFibonacciNumber
};
