/* 
Write a function that calculates the circle area by a given radius
as an argument. Print the area as it is calculated and then print
it rounded to two decimal places
*/

function circleArea(radius) {
    let circleArea = Math.PI * radius * radius;
    console.log(circleArea);
    console.log(circleArea.toFixed(2));
}   

circleArea(1);
circleArea(2);
circleArea(7);
