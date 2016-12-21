/**
 * All Codes below are Lifetime Warranted by Tomi since 21/12/2016.
 */


// console.log(toDegrees(45));


let radius = 1.414;
let angle = 135;


let {offsetX, offsetY}  = {offsetX: (radius * Math.sin(toRadians(angle))).toFixed(3), offsetY: (radius * Math.cos(toRadians(angle))).toFixed(3)};

console.log(offsetX);
console.log(offsetY);

// console.log(Math.sin(30));
//
// console.log();


function toRadians(angle) {
    return angle * (Math.PI / 180);
}


function toDegrees(angle) {
    return angle * (180 / Math.PI);
}