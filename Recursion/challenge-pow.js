function pow(base, exponent, total = 1) {
	if (exponent === 0) return total;
  total = total * base;
  exponent --;
  return pow(base, exponent, total);
}


  // Base case: check if exponent equals 0, if so, return total
  // Total equals itself times base
  // Decrement exponent
  // Return pow passed base, exponent, and total


// To check if you've completed the challenge, uncomment these console.logs!
console.log(pow(2, 4)); // -> 16
console.log(pow(3, 5)); // -> 243