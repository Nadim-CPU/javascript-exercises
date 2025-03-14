const reverseString = function(input) {
    var reverse = '';
    var inputLength = input.length;

    for (let i = inputLength - 1; i >= 0 ; i--) {
        reverse += input[i];
    }

    return reverse;
};


// Do not edit below this line
module.exports = reverseString;
