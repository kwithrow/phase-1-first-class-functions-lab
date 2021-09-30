const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
}

 const returnLastTwoDrivers = function (drivers) {
     return drivers.slice(2, 4);
 }

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiply) {
    return function (amount) {
        return multiply * amount;
    }
}

const fareDoubler = (amount) => amount * 2;
const fareTripler = amount => amount * 3;

const selectDifferentDrivers = (drivers, desiredDrivers) => desiredDrivers(drivers);