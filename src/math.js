function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}
function isEven(n){
    return n % 2 === 0 ? true : false;
}

function isOdd(n){
    return n % 2 !== 0 ? true : false;
}

module.exports = { add, subtract, multiply, isEven, isOdd };