const getNthElement = (index, array) => {
    // your code here
    n = index
    n2 = array.length

    if (n < n2) {
        let valueAtIndex = array[n];
        return valueAtIndex;
    }

    if (n > n2 - 1) {
        newIndex = n - (n2)
        valueAtNewIndex = array[newIndex]
        return valueAtNewIndex
    }
};


const arrayToCSVString = array => {
    // your code here
    let csvString = array.toString()
    return csvString
};

const csvStringToArray = string => {
    // your code here
    return string.split(/[ ,]+/)
};

const addToArray = (element, array) => {
    // your code here
    n = element
    array.push(n)
    console.log(array);


};

const addToArray2 = (element, array) => {
    // your code here
    n = element
    var newArray = array.slice();
    newArray.push(n)
    return newArray;
};

const removeNthElement = (index, array) => {
    // your code here
    n = index
    var removed = array.splice(n, 1);
    return removed;
};

const numbersToStrings = numbers => {
    // your code here
    const string = numbers.toString()
    const stringArray = string.split(',')
    return stringArray;
};

const uppercaseWordsInArray = strings => {
    // your code here
    string = strings.toString();
    upperCase = string.toUpperCase();
    const upperCaseArray = upperCase.split(',')
    return upperCaseArray;
};

const reverseWordsInArray = strings => {
    // your code here

    input = strings.toString();
    whitespace = input.replace(/,/g, ' '); //adds whitespace separator
    var output = whitespace.split(" ").map( //split into words and iterate via map
        s => s.split("").reverse().join("") //split individual words into characters and then reverse the array of character and join it back
    ).join(" "); //join the individual words

    return output.split(/[ ,]+/);

};

const onlyEven = numbers => {
    // your code here
    var even = numbers.filter(number => number % 2 == 0);
    return even
};

const removeNthElement2 = (index, array) => {
    // your code here
    n = index
    var createdArray = array.slice();
    createdArray.splice(n, 1);
    return createdArray;
};

const elementsStartingWithAVowel = strings => {
    // your code here
    let startWithVowel = strings.filter(str => /^[aeiou]/i.test(str));
    return startWithVowel;
};

const removeSpaces = string => {
    // your code here
    withoutSpaces = string.replace(/\s/g, '')
    return withoutSpaces;
};

const sumNumbers = numbers => {
    // your code here
    let sum = 0
    for (let n of numbers)
        sum += n
    return sum
};

const sortByLastLetter = strings => {
    // your code here
    let stringified = strings.toString();
    const sortByLast = (stringified = "") => {
        const arr = stringified.split(',');
        const sorter = (a, b) => {
            return a[a.length - 1].charCodeAt(0) - b[b.length - 1].charCodeAt(0);
        };
        arr.sort(sorter);
        const sortedString = arr.join(',');
        return sortedString.split(/[ ,]+/);
    };
    return (sortByLast(stringified));

};

module.exports = {
    getNthElement,
    arrayToCSVString,
    csvStringToArray,
    addToArray,
    addToArray2,
    removeNthElement,
    numbersToStrings,
    uppercaseWordsInArray,
    reverseWordsInArray,
    onlyEven,
    removeNthElement2,
    elementsStartingWithAVowel,
    removeSpaces,
    sumNumbers,
    sortByLastLetter
};