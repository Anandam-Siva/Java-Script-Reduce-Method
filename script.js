var arr = [10, 23, 25, 27, 98, 1522, 112, 224];

var bigNumber = arr.reduce(function (acc, ele) {
    if (acc > ele) {
        return acc;
    }
    else {
        return ele;
    }
}, arr[0]);
console.log(bigNumber);

var summation = arr.reduce(addition, 0)
function addition(accum, elem) {
    return accum + elem;
}
console.log(summation);

var multipliction = arr.reduce((accumu, eleme) => { return accumu * eleme }, 1); // we can use the arrow function also
console.log(multipliction);
