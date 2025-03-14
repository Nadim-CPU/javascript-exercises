
const repeatString = function(input, num) {
    var output = '';
    if (num < 0) {
        return 'ERROR';
    }
    for (let i = 0; i < num; i++) {
        
        output += input;
    }
    return output;
};


// Do not edit below this line
module.exports = repeatString;
