// Introduction to Recursion
// https://csx.codesmith.io/units/recursion/intro-recursion

function recurse(counter = 0) {
    if (counter === 2) return 'done';
    const newCounter = counter + 1;
    return recurse(newCounter);
}

recurse();