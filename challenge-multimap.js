function multiMap(values, callbacks) {
    const output = {};
    
    values.forEach((value) => {
      let results = [];
      
      callbacks.forEach((callback) => {
        results.push(callback(value));
      });
      
      output[value] = results;
    });
    
    return output;
  }
  
  
    // Create empty output object
    
    // For each element in values
        // Create empty results array
    
        // For each callback in callbacks
            // Push the result of the element passed to the callback to results
    
        // Add (key: element) with (value: results array) to output
    
    // Return object
  
  
  // Uncomment these to check your work!
   function uppercaser(str) { return str.toUpperCase(); }
   function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
   function repeater(str) { return str + str; }
   const items = ['catfood', 'glue', 'beer'];
   const functions = [uppercaser, capitalize, repeater];
   console.log(multiMap(items, functions)); 
   /* should log: { 
   catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], 
   glue: ['GLUE', 'Glue', 'glueglue'], 
   beer: ['BEER', 'Beer', 'beerbeer'] }
   */