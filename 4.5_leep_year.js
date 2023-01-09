// every year that is divisible by 4 is a leap year except for the
// ones that are also divisible by 100 unless it is divisible by 400.
// Example: 2012 is the leap year 2100 is not But 2400 is.


const isLeapYear = (year) => {
    return (year % 4 === 0) ? (year % 100 === 0) ? (year % 400 === 0) : true : false;
}

let yearToCheck = prompt("Enter a year to check if it's a leap year:")
console.log(`${yearToCheck} ${isLeapYear(yearToCheck)? "was" : "wasn't" } a leap year`);