const _ = require('lodash')

testArray = [6, 3, 1, 8];


/** zad 1 */
function avg(items) {
    return _.mean(items)
}

console.log(avg(testArray))

/** zad 2 */
function min(items) {
    return _.min(items)
}
function max(items) {
    return _.max(items)
}
console.log(min(testArray))
console.log(max(testArray))

