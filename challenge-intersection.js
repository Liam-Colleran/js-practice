function intersection(arrays) {
    let acc = arrays.pop();
    
        while (arrays.length) {
        const current = arrays.pop();
        const newArray = [];
        
        current.forEach((element) => {
          if (acc.includes(element)) {
            newArray.push(element);
          }
        });
        
          acc = newArray;
      }
    return acc;
  }

// Pop array and store as acc
    
    // Loop through array of arrays
        // Pop current array and store as current
        // Create new array
    
        // Loop through current and compare with acc
            // If element is in both then store in new array
        
        // Set acc equal to new array
    
// Return acc
  
  
  // Uncomment these to check your work!
   const arr1 = [5, 10, 15, 20];
   const arr2 = [15, 88, 1, 5, 7];
   const arr3 = [1, 10, 15, 5, 20];
   console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]