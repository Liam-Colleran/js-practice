function hobbyTracker(hobbies) {
    const cache = {};
    
    hobbies.forEach((hobby) => {
      cache[hobby] = 0;
    });
    
    function addHobby(hobbyArg, num) {
      if (!hobbyArg&&!num) {
        Object.keys(cache).forEach((hobby) => {
          cache[hobby] = 0;
        });
        return "tracker has been reset!";
      } else {
        cache[hobbyArg] += num;
        return cache;
      }
    }
    
    return addHobby;
  }
  
  
    // Define cache as empty obj
    
    // For each hobby in hobbies
        // Add (key: hobby) with (value: 0)
    
    // Create new function with hobbyArg and num params
        // If NOT hobbyArg and num
            // For each hobby in cache
                // Set (key: hobby) equal to 0
            // Return "tracker has been reset!"
        // Else
            // Add value of num params to (key: hobby) in cache
            // Return cache
    
    // Return new function
  
  
  // Uncomment the code below to check your code:
  const updateHobbies = hobbyTracker(['yoga', 'baking', 'piano']);
  updateHobbies('yoga', 2);
  updateHobbies('baking', 4);
  updateHobbies('yoga', 1);
  console.log(updateHobbies('piano', 2)); // --> { yoga: 3, baking: 4, piano: 2 }
  console.log(updateHobbies()); // --> 'tracker has been reset!'
  console.log(updateHobbies('baking', 1)); // --> { yoga: 0, baking: 1, piano: 0}