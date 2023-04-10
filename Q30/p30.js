"use strict";
/*
30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are
writing code that will print a greeting to each user
after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status
report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
*/
let usernames = ['riz', 'harry', 'asad', 'admin', 'tayyab'];
/*
for (let username of usernames) {
    if (username === 'admin') {
      console.log(`Hello ${username}, would you like to see a status report?`);
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }
  */
for (let i = 0; i < usernames.length; i++) {
    if ('admin' === usernames[i]) {
        console.log(`Hello ${usernames[i]}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
    }
}
