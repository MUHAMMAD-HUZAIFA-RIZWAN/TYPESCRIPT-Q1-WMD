"use strict";
/*
24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to
try more comparisons, write more tests. Have at least one True and one False result for each of the
following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array
*/
// Case of Equality
let nam = 'john';
console.log("'is the name is john?' Yes! That is true");
console.log(nam == 'john');
// Case of Inequality
let str_val = 'Checkin';
if (str_val === 'Checking') {
    console.log('It is correct');
    console.log(str_val === 'Checking');
}
else {
    console.log('It is false');
    console.log(str_val === 'false');
}
//  Tests using the lower case function
let case_detect = 'CONVENTION'.toLocaleLowerCase();
console.log(case_detect === 'CONVENTION');
console.log(case_detect === 'convention');
// Numerical comparison
let num_compare = 5;
if (num_compare > 5) {
    console.log('The Number is greator than 5');
    console.log(num_compare > 5);
}
else if (num_compare < 5) {
    console.log('The Number is less than 5');
    console.log(num_compare > 5);
}
else if (num_compare === 5) {
    console.log("The number is equal to 5");
    console.log(num_compare == 5);
}
else {
    console.log("NAN");
}
const numbers = 103;
if (numbers % 2 == 0 && numbers >= 0) {
    console.log('The entered number is greator or equal to 0 and is even');
    console.log(numbers % 2 == 0 && numbers >= 0);
}
else {
    console.log('The entered number is odd');
    console.log(numbers % 2 != 0);
}
let item_arr = ['usman', 'shan', 'asad', 'asif'];
for (let i = 0; i < +item_arr.length; i++) {
    if ('asad' === item_arr[i]) {
        console.log('Name  exists in the array');
    }
}
const cars_name = ['toyota', 'honda', 'bmw'];
let cars_found = false;
for (let i = 0; i <= cars_name.length; i++) {
    if ('audi' === cars_name[i]) {
        cars_found = true;
        console.log('found in the array');
        break;
    }
}
if (cars_found == false) {
    console.log("car is not found");
}
