"use strict";
/* 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
uppercase, and titlecase.
*/
let p_name = "My name is huzaifa rizwan";
function title_case(text) {
    return text.split(' ').map((word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()).join(' ');
    ;
}
console.log(p_name.toLowerCase());
console.log(p_name.toUpperCase());
console.log(title_case(p_name));
// For the title case:: There is no direct function for it
// Step1: Split the string
// Step 2: Using the map function convert first letter to upper case and emaining to the lowercase in array
// Step 3: Join the array 
