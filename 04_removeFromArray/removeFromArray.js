const removeFromArray = function(array, num) {
    var identifiedIndex;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === num) {
            identifiedIndex = i;
            delete array[identifiedIndex];
            for (let i = identifiedIndex; i < array.length; i++) {
                if (i + 1 <= array.length) array[i] = array[i + 1];
            }
        }
    }
    array.length--;
    return array;
};

console.log(removeFromArray([2, 3, 4 ,5], 3));

// Do not edit below this line
module.exports = removeFromArray;
