// Closure, Scope & Execution Context
// https://csx.codesmith.io/units/closures/intro-closures

function createFunction() {
    function multiplyBy2 (num) {
        return num*2;
    }
    return multiplyBy2;
}

const secondLabel = createFunction; // Stores definition under new label

const generatedFunc = createFunction(); // Stores output of createFunction; We store nothing until the function is run and the output is stored

const result = generatedFunc(3);