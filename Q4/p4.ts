/*
Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its
author. Your output should look something like the
following, including the quotation marks: 

Albert Einstein once said, “A person who never made a mistake never tried anything new.”
*/

let authorName= 'John Keats';
console.log(`${authorName} once said, "A thing of beauty is a joy of forever"`);

//Implementing the Title Case scenario on this case
function tit_case(txt:string){
   return txt.split(' ').map(function(word){
        return word.charAt(0).toUpperCase()+word.substr(1).toLowerCase()
    }).join(' ');
}
let newtext= "Albert Einstein once said, “A person who never made a mistake never tried anything new";
;
console.log(tit_case(newtext));
