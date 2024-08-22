function cascade(number, index = 0) {
    const num = String(number);
    const numLen = num.length;
    if (index === numLen * 2) return;
    if (index < numLen) {
      console.log(Number(num.slice(0, numLen - index)));
    } else if (index === numLen) {
      return cascade(number, index + 1);
    } else {
      console.log(Number(num.slice(0, index - numLen + 1)));
    }
    return cascade(number, index + 1);
  }
  
  
    // Base case: if index is equal to length of number times 2, return String(number)
    // Define num as String(number)
    // If index is less than length of num
        // Console log num.slice(0, num.length - index)
    // Else
        // Console log num.slice(0, index - num.length + 1)
    // Return cascade passed number and index + 1
  
  
  // // Uncomment to test your work!
  cascade(1111)
  // should print
  /*
  111
  11
  1
  11
  111
  */