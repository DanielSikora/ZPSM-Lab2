const _ = require('lodash')

testArray = [6, 3, 1, 8];

/** zad 1 */
function avg(items) {
    return _.mean(items)
}

console.log(avg(testArray))