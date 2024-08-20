function censor() {
    const cache = {};
      
      function checkString(...args) {
        if (args.length === 2) {
          cache[args[0]] = args[1];
        } else {
          let text = args[0];
          for (let x in cache) {
            text = text.replaceAll(x, cache[x]);
          }
          return text;
        }
      }
      return checkString;
    }
    
    
      // Create empty cache obj
      
      // Create new function that accepts either one or two args
          // If two args are passed
              // Add (key: first arg) with (value: second arg) to cache
          // Else
              // For key in cache
                  // Replace all instances of key with the keys value in arg
      
      // Return new function
    
    
    // Uncomment these to check your work!
    const changeScene = censor();
    changeScene('dogs', 'cats');
    changeScene('quick', 'slow');
    console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); 
    // should log: 'The slow, brown fox jumps over the lazy cats.'