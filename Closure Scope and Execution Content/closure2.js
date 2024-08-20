function outer() {
    let counter = 0;
    function incrementCounter () {
        counter ++;
    }
    return incrementCounter;
}

const myNewFunction = outer();
myNewFunction();
myNewFunction();

const anotherFunction = outer();
anotherFunction();
anotherFunction();

// Backpack is called the closure
// P.L.S.R.D. - Persistent Lexical Scoped Reference Data
// V.E. Variable Enviroment