function addByX(input) {
    let num = input;
    function addToNum(x) {
      return num + x;
    }
    return addToNum;
  }
  
  const addByTwo = addByX(1);
  
  // Now call addByTwo with an input of 1 and log the output
  console.log(addByTwo(1));
  
  // Now call addByTwo with an input of 2 and log the output
  console.log(addByTwo(2));  