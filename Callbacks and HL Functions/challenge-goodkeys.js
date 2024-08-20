function goodKeys(obj, callback) {
    const output = [];
    
      for (let [key, value] of Object.entries(obj)) {
        if (callback(value)) {
          output.push(key);
      };
    };
    
    return output;
  };
  
  
    // Create empty output array
    
    // Loop through obj
        // If element passed to callback returns true
            // Push element to output
    
    // Return output
  
  
  // Uncomment these to check your work!
  const sunny = { mac: 'priest', dennis: 'calculator', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
  function startsWithBird(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
  console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']