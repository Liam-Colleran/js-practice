function once(callback) {
    let called = false;
    let result
    
    function passInput(input) { // Could use ...inputs for multiple params passed
      if (!called) {
        result = callback(input);
        called = true;
      }
      return result
    }
    return passInput;
  }
  
  
    // Define called as false
    // Declare result
    
    // Create new function with input param
        // If NOT called
            // Set result equal to input passed to callback
            // Set called to true
          // Return result
    
    // Return new function
  
  
  const addByTwoOnce = once(function(num) {
    return num + 2;
  });
  
  // UNCOMMENT THESE TO TEST YOUR WORK!
  console.log(addByTwoOnce(5));  //should log 7
  console.log(addByTwoOnce(10));  //should log 7
  console.log(addByTwoOnce(9001));  //should log 7