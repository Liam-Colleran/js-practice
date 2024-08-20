function saveOutput(callback, password) {
  const container = {};
  const pass = password;
  
  function checkPass(arg) {
    if (arg == pass) {
      return container;
    } else {
      container[arg] = callback(arg);
      return callback(arg);
    }
  }
  return checkPass;
}


  // Create a obj to contain previous entries
  // Create pass const
  
  // Create a new function with one arg
  	// If arg equals pass
  		// Return obj
  	// Else
  		// Add (key: arg) with (value: arg passed to callback) to obj
  		// Return arg passed to callback
  
  // Return new function


// Uncomment these to check your work!
const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // should log: 4
console.log(multBy2AndLog(9)); // should log: 18
console.log(multBy2AndLog('boo')); // should log: { 2: 4, 9: 18 }