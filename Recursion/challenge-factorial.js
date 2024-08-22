function factorial(num, total = 1) {
	if (num === 1) return total;
  total *= num;
  return factorial(num - 1, total)
}


	// Base case: if num equals one, return total
	// Total equals itself times num
	// Return the function passing num decremented and the new total


// To check if you've completed the challenge, uncomment these console.logs!
console.log(factorial(4)); // -> 24
console.log(factorial(6)); // -> 720