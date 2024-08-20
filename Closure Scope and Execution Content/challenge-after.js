function after(toBeCalled, callback) {
    let timesCalled = 0
    let result
    
    function passInput(...args) {
      timesCalled ++;
      
      if (timesCalled >= toBeCalled) {
        result = callback(...args);
      }
      return result;
    }
    return passInput;
  }
  
      // Let timesCalled equal 0
      // Define empty result
  
      // Declare new function
          // Increment timesCalled
  
          // Check if timesCalled is more than or equal to toBeCalled
              // Set result equal to ...args passed to callback
  
          // Return result
  
      // Return new function
  
  const called = function(string) { return('hello ' + string); };
  const afterCalled = after(3, called);
  
  // UNCOMMENT THESE LINES TO TEST YOUR WORK
  console.log(afterCalled('world')); // -> undefined is printed
  console.log(afterCalled('world')); // -> undefined is printed
  console.log(afterCalled('world')); // -> 'hello world' is printed