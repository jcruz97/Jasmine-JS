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
    array.split("").reverse().join("").split(" ").reverse().join("");
    return newArr;
}

let everyPossiblePair = (array) => {
    return 'Write your method here';
}

let allElementsExceptFirstThree = (array) => {
    return 'Write your method here';
}

let addElementToBeginning = (array, element) => {
    return 'Write your method here';
}

let sortByLastLetter = (array) => {
    return 'Write your method here';
}

let getFirstHalf = (string) => {
    return 'Write your method here';
}

let makeNegative = (number) => {
    return 'Write your method here';
}

let numberOfPalindromes = (array) => {
    return 'Write your method here';
}

let shortestWord = (array) => {
    return 'Write your method here';
}

let longestWord = (array) => {
    return 'Write your method here';
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
    return 'Write your method here';
}

let squareRoot = (number) => {
    return 'Write your method here';
}

let factorial = (number) => {
    return 'Write your method here';
}

let findAnagrams = (string) => {
    return 'Write your method here';
}

let convertToCelsius = (number) => {
    return 'Write your method here';
}

let letterPosition = (array) => {
    return 'Write your method here';
}
