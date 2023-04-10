/*
. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called
famous_person. Then compose your message and store it in a new variable called message. Print your
message. 
*/

// let authorName= 'John Keats';
// console.log(`${authorName} once said, "A thing of beauty is a joy of forever"`);

let famous_person='John Keats';
let message = `once said, "A thing of beauty is a joy of forever"`;
console.log(` ${famous_person}  ${message} `);

// Extra Practice
//Implementing the lowercase, uppercase and the title case for this scenario
let combinedString= famous_person + message;
console.log(combinedString.toLowerCase()); //Lowercase implement
console.log(combinedString.toUpperCase()); //Uppercase implement

// Title case implementation using map() function

function titleCaseImplement(input:string){
    return input.split(' ').map(function(doc:string){return doc.charAt(0).toUpperCase() + doc.substr(1).toLowerCase()}).join(' ')
}
console.log(titleCaseImplement(combinedString));
