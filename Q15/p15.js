"use strict";
/*
15. Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitations. You’ll have to think of
someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the
end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with
the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still
in your list.
*/
let guest_list = ['kamran', 'hassan', 'popo'];
console.log(`Hi! ${guest_list[0]} hope so you are doing good, I am giving a dinner party and you are cordially invited!!`);
console.log(`Hi! ${guest_list[1]} hope so you are doing good, I am giving a dinner party and you are cordially invited!!`);
console.log(`Hi! ${guest_list[2]} hope so you are doing good, I am giving a dinner party and you are cordially invited!!`);
console.log(`Hi! ${guest_list[2]} is unavailable due to some activities and will not be able to attend the party`);
let modified_list = guest_list.splice(2, 1, 'tahir');
console.log(modified_list);
console.log(`Hi! ${guest_list[0]} hope so you are doing good, I am giving a dinner party and you are cordially invited!!`);
console.log(`Hi! ${guest_list[1]} hope so you are doing good, I am giving a dinner party and you are cordially invited!!`);
console.log(`Hi! ${guest_list[2]} hope so you are doing good, I am giving a dinner party and you are cordially invited!!`);
// console.log(`Hi! ${modified_list[0]} hope so you are doing good, I am giving a dinner party and you are cordially invited!!`);
// console.log(`Hi! ${modified_list[1]} hope so you are doing good, I am giving a dinner party and you are cordially invited!!`);
// console.log(`Hi! ${modified_list[2]} hope so you are doing good, I am giving a dinner party and you are cordially invited!!`);
