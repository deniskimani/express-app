const { check } = require("prettier")

function negate(a) {
    // your code here
    return !a
};

function both(a, b) {
    // your code here
    if (a && b) {
        return true
    }
    if (a && !b) {
        return false
    }
    if (!a && b) {
        return false
    }
    if (!a && !b) {
        return false
    }
};

function either(a, b) {
    // your code here
    if (a || b) {
        return true
    } else {
        return false
    }

};

function none(a, b) {
    // your code here
    if (!a && !b) {
        return true
    }
    if (a || b) {
        return false
    }
};

function one(a, b) {
    // your code here
    if (a && b) {
        return false
    }
    if (a && !b) {
        return true
    }
    if (!a && b) {
        return true
    }
    if (!a && !b) {
        return false
    }


};

function truthiness(a) {
    // your code here
    truthy = Boolean(a)
    return truthy
};

function isEqual(a, b) {
    // your code here
    equality = Object.is(a, b)
    return equality
};

function isGreaterThan(a, b) {
    // your code here
    if (a > b) {
        return true
    } else {
        return false
    }
};

function isLessThanOrEqualTo(a, b) {
    // your code here
    if (a <= b) {
        return true
    } else {
        return false
    }
};

function isOdd(a) {
    // your code here
    let checkForOdd = a % 2
    if (checkForOdd > 0) {
        return true
    } else {
        return false
    }
};

function isEven(a) {
    // your code here
    checkForEven = a % 2
    if (checkForEven === 0) {
        return true
    } else {
        return false
    }
};

function isSquare(a) {
    // your code here
    let squareChecker = Math.sqrt(a)
    let wholeSquare = squareChecker % 1

    if (wholeSquare === 0) {
        return true
    } else {
        return false
    }
};

function startsWith(char, string) {
    // your code here
    let firstLetter = string.charAt(0)
    if (firstLetter === char) {
        return true
    } else {
        return false
    }
};

function containsVowels(string) {
    // your code here
    vowels = [string.match(/[aeiou]/ig)];
    vowelString = vowels.toString()
    vowelCount = vowelString.length
    if (vowelCount > 0) {
        return true
    } else {
        return false
    }
};

function isLowerCase(string) {
    // your code here
    return string === string.toLowerCase() && string != string.toUpperCase();
};

module.exports = {
    negate,
    both,
    either,
    none,
    one,
    truthiness,
    isEqual,
    isGreaterThan,
    isLessThanOrEqualTo,
    isOdd,
    isEven,
    isSquare,
    startsWith,
    containsVowels,
    isLowerCase
};