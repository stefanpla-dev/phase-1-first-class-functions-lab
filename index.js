// Code your solution in this file!
const returnFirstTwoDrivers = function (arr) {return arr.slice(0,2);}
const returnLastTwoDrivers = function (arr) {return arr.slice(-2);}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function (int) {return int*multiplier;}
}

const fareDoubler = function (int) {
    const doubleTime = createFareMultiplier(2);
    return doubleTime(int);
}

const fareTripler = function (int) {
    const tripleTime = createFareMultiplier(3);
    return tripleTime(int);
}

function selectDifferentDrivers(arr,functionPlaceholder) {
    return functionPlaceholder(arr);
}
