// 1. Name of the current day e.g. Sunday

let todate = new Date();
console.log("todate", todate);

let week = {
    timeZone: 'Asia/Jerusalem',
    weekday: 'long'
};

let today = todate.toLocaleDateString('en-US', week);
console.log("today", today);

// // 2. Current day of the month e.g. 31

let day = todate.getDate();
console.log("day", day);

// // 3. Current month e.g January

let month = todate.toLocaleDateString('en-US', {month:'long'});
console.log("month", month);


// // 4. Current Year e.g 2021
let year = todate.getFullYear();
console.log("year", year);

