"use strict";
/*
10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to
each. If you don’t have anything specific to write
*/
let strName = "he was driving the bus"; //Declare the variable string
console.log(strName.toLowerCase()); //convert and print the string in lowercase
console.log(strName.toUpperCase()); //convert and print the string in uppercase
function title_casee(value) {
    return value
        .split(" ")
        .map(function (word) {
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    })
        .join(" "); // Joining the string
}
console.log(title_casee(strName)); //will print the input string as a title case
