// Callbacks & Higher Order Functions
// https://csx.codesmith.io/units/callbacks/intro-callbacks-video

function copyArrayAndManipulate(array, instructions) {
    let output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(instructions(array[i]));
    }
    return output;
}

function multiplyBy2(input) {
    return input * 2;
}

console.log(copyArrayAndManipulate([1, 2, 3], multiplyBy2))