/*
17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the
dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can
invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop
a name from your list, print
a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you
actually have an empty list at the end
of your program. 
*/
let guest_list = ["kamran", "hassan", "popo"];
console.log(
  `Hi! ${guest_list[0]} hope so you are doing good, I am giving a dinner party and you are cordially invited!!`
);
console.log(
  `Hi! ${guest_list[1]} hope so you are doing good, I am giving a dinner party and you are cordially invited!!`
);
console.log(
  `Hi! ${guest_list[2]} hope so you are doing good, I am giving a dinner party and you are cordially invited!!`
);
console.log(
  `Hi! ${guest_list[2]} is unavailable due to some activities and will not be able to attend the party`
);
let modified_list = guest_list.splice(2, 1, "tahir");
console.log(modified_list);
console.log(guest_list);

console.log(
  `Hi! ${guest_list[0]} hope so you are doing good, I am giving a dinner party and you are cordially invited!!`
);
console.log(
  `Hi! ${guest_list[1]} hope so you are doing good, I am giving a dinner party and you are cordially invited!!`
);
console.log(
  `Hi! ${guest_list[2]} hope so you are doing good, I am giving a dinner party and you are cordially invited!!`
);
console.log("The dinner table is extended for 3 more guests capacity");
let begin_addGuest = guest_list.unshift("asjad"); // Adding new guest at the beginning
let middle_addGuest = guest_list.splice(2, 0, "asim"); //Adding new guest at the middle of array
let end_addGuest = guest_list.push("amir"); // Adding new guest at the end of array
console.log(guest_list);
console.log(
  `Hi! ${guest_list[0]} hope so you are doing good, I am giving a dinner party and you are cordially invited!!`
);
console.log(
  `Hi! ${guest_list[1]} hope so you are doing good, I am giving a dinner party and you are cordially invited!!`
);
console.log(
  `Hi! ${guest_list[2]} hope so you are doing good, I am giving a dinner party and you are cordially invited!!`
);
console.log(
  `Hi! ${guest_list[3]} hope so you are doing good, I am giving a dinner party and you are cordially invited!!`
);
console.log(
  `Hi! ${guest_list[4]} hope so you are doing good, I am giving a dinner party and you are cordially invited!!`
);
console.log(
  `Hi! ${guest_list[5]} hope so you are doing good, I am giving a dinner party and you are cordially invited!!`
);
console.log(`...........................................................................................................
due to the unavailability of the dinner table maximum 2 guests canbe invited
`);
let removeGuest1= guest_list.pop()
console.log(`Hi ${removeGuest1} sorry I can’t invite you to the dinner`);
let removeGuest2= guest_list.pop()
console.log(`Hi ${removeGuest2} sorry I can’t invite you to the dinner`);
let removeGuest3= guest_list.pop()
console.log(`Hi ${removeGuest3} sorry I can’t invite you to the dinner`);
let removeGuest4= guest_list.pop()
console.log(`Hi ${removeGuest4} sorry I can’t invite you to the dinner`);
console.log(`Hi ${guest_list[0]}  you are still on the list and invited for the dinner`);
console.log(`Hi ${guest_list[1]}  you are still on the list and invited for the dinner`);
guest_list.pop();
guest_list.pop();
console.log(guest_list);


