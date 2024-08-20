function countBy(array, callback) {
    const output = {};
    
    array.forEach((element) => {
      if (output.hasOwnProperty(callback(element))) {
        output[callback(element)] ++
      } else
        output[callback(element)] = 1
    });
    
    return output
  }
  
  
    // Create empty output object
    
    // For each element in array
          // If (key: result of (callback(element))) exists in output
            // Increment (key: result of (callback(element))) in output
          // Else
              // Add (key: result of (callback(element))) with value 0 to output
    
    // Return output
  
  
  // Uncomment these to check your work!
  function evenOdd(n) {
    if (n % 2 === 0) return 'even';
    else return 'odd';
  }
  const nums = [1, 2, 3, 4, 5];
  console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }