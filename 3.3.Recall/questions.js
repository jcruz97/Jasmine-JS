let selectElementsStartingWithA = (array) => {
    let newArr = array.filter((elements) => elements.startsWith("a"));
    return newArr;
}

let selectElementsStartingWithVowel = (array) => {
    let newArr = array.filter(words => words.match("^[aieou].*"))
    return newArr;
}

let removeNullElements = (array) => {
    let newArr = array.filter(elements => elements!=null)
    return newArr;
}

let removeNullAndFalseElements = (array) => {
    let newArr = array.filter(elements => elements || elements===0)
    return newArr;
}

let reverseWordsInArray = (array) => {
    let newArr = [];
    array.forEach(element => {
        newArr.push(element.split('').reverse().join(''));
    });
    return newArr;
}

let everyPossiblePair = (array) => {

    let newArr = [];
    array.sort();
    for (let i=1; i<array.length; i++){
        for (let j=0; j<i; j++) {
            newArr.push([array[j], array[i]]);    
        }         
    }
    return newArr;    
}

let allElementsExceptFirstThree = (array) => {
    array.splice(0,3);
    return array;
}

let addElementToBeginning = (array, element) => {
    array.unshift(element);
    return array;
}

let sortByLastLetter = (array) => {
    array.sort((a, b) => a.slice(-1).localeCompare(b.slice(-1)));
    return array;
}

let getFirstHalf = (string) => {
    let strg = string.substring(0,3)
    return strg;
}

let makeNegative = (number) => {
    return -(Math.abs(number));
}

let numberOfPalindromes = (array) => {
    return 'Write your method here';
}

let shortestWord = (array) => {
    let shortest = array[0];
    for (let i = 1; i < array.length; i++) {
        array[i].length < shortest.length && (shortest = array[i]);
    }
    return shortest;
}

let longestWord = (array) => {
    let longest = array[0];
    for (let i = 1; i < array.length; i++) {
        array[i].length > longest.length && (longest = array[i]);
    }
    return longest;
}

let sumNumbers = (array) => {
    return 'Write your method here';
}

let repeatElements = (array) => {
    return 'Write your method here';
}

let stringToNumber = (string) => {
    return 'Write your method here';
}

let calculateAverage = (array) => {
    return 'Write your method here';
}

let getElementsUntilGreaterThanFive = (array) => {
    return 'Write your method here';
}

let convertArrayToObject = (array) => {
    return 'Write your method here';
}

let getAllLetters = (array) => {
    return 'Write your method here';
}

let swapKeysAndValues = (object) => {
    return 'Write your method here';
}

let sumKeysAndValues = (object) => {
    return 'Write your method here';
}

let removeCapitals = (string) => {
    return 'Write your method here';
}

let roundUp = (number) => {
    return 'Write your method here';
}

let formatDateNicely = (date) => {
    return 'Write your method here';
}

let getDomainName = (string) => {
    return 'Write your method here';
}

let titleize = (string) => {
    return 'Write your method here';
}

let checkForSpecialCharacters = (string) => {
    return /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(string);
}

let squareRoot = (number) => {
    return 'Write your method here';
}

let factorial = (number) => {
    function factorial(n) {
        return (n != 1) ? n * factorial(n - 1) : 1;
    }
    return factorial(number);
}

let findAnagrams = (string) => {
    return 'Write your method here';
}

let convertToCelsius = (number) => {

    return Math.round((number-32)*(5/9));
}

let letterPosition = (array) => {
    let newArr = [];
    array.forEach(element => {
        if (element.charCodeAt() < 96 && element.charCodeAt() > 64){
            newArr.push(element.charCodeAt()-64);
        } else {
            newArr.push(element.charCodeAt()-96);
        }
    });
    return newArr;
}
