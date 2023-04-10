"use strict";
/*
16. More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing
people that you found a
bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.
*/
let guest_list = ["kamran", "hassan", "popo"];
console.log(`Hi! ${guest_list[0]} hope so you are doing good, I am giving a dinner party and you are cordially invited!!`);
console.log(`Hi! ${guest_list[1]} hope so you are doing good, I am giving a dinner party and you are cordially invited!!`);
console.log(`Hi! ${guest_list[2]} hope so you are doing good, I am giving a dinner party and you are cordially invited!!`);
console.log(`Hi! ${guest_list[2]} is unavailable due to some activities and will not be able to attend the party`);
let modified_list = guest_list.splice(2, 1, "tahir");
console.log(modified_list);
console.log(guest_list);
console.log(`Hi! ${guest_list[0]} hope so you are doing good, I am giving a dinner party and you are cordially invited!!`);
console.log(`Hi! ${guest_list[1]} hope so you are doing good, I am giving a dinner party and you are cordially invited!!`);
console.log(`Hi! ${guest_list[2]} hope so you are doing good, I am giving a dinner party and you are cordially invited!!`);
console.log("The dinner table is extended for 3 more guests capacity");
let begin_addGuest = guest_list.unshift("asjad"); // Adding new guest at the beginning
let middle_addGuest = guest_list.splice(2, 0, "asim"); //Adding new guest at the middle of array
let end_addGuest = guest_list.push("amir"); // Adding new guest at the end of array
console.log(guest_list);
console.log(`Hi! ${guest_list[0]} hope so you are doing good, I am giving a dinner party and you are cordially invited!!`);
console.log(`Hi! ${guest_list[1]} hope so you are doing good, I am giving a dinner party and you are cordially invited!!`);
console.log(`Hi! ${guest_list[2]} hope so you are doing good, I am giving a dinner party and you are cordially invited!!`);
console.log(`Hi! ${guest_list[3]} hope so you are doing good, I am giving a dinner party and you are cordially invited!!`);
console.log(`Hi! ${guest_list[4]} hope so you are doing good, I am giving a dinner party and you are cordially invited!!`);
console.log(`Hi! ${guest_list[5]} hope so you are doing good, I am giving a dinner party and you are cordially invited!!`);
