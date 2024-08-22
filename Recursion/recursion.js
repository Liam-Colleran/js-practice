// Introduction to Recursion
// https://csx.codesmith.io/units/recursion/intro-recursion

let counter = 0;

function recurse() {
    if (counter === 2) return 'done';
    counter ++;
    return recurse()
}

recurse()