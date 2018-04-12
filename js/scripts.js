var a = 2;
var b = 3;
var a = prompt("Type value a");
var b = prompt("Type value b");
var value = (a * a) - (2 * a * b) - (b * b);
console.log("Result is: "+ value); 

if (value > 0) {
    console.log("Result positive")
} else if (value < 0) {
    console.log("Result negative")
} else {
    console.log("Result equals zero")
}
