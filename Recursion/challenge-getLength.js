function getLength(array, len = 0) {
	if (!array[len]) return len;
  return getLength(array, len + 1);
}


	// Base case: check if array at index len exists, if not, return len
	// Increment len
	// Return getLength with array and new len arg


// To check if you've completed the challenge, uncomment these console.logs!
console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5])); // -> 5
console.log(getLength([])); // -> 0