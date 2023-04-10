/*
43. Unchanged Magicians: Start with your work from Exercise 40. Call the
function make_great() with a copy of the array of magicians’ names. Because the
original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name.
*/

let magician_name: string[] = ["alpha", "bravo", "charlie", "huff"];
function make_great(magician_name: string[]) {
  for (let i = 0; i < magician_name.length; i++) {
    magician_name[i] = `The Great to ${magician_name[i]}`;
  }
  return magician_name;
}
function show_magicians(magician_name: string[]) {
  for (let j = 0; j < magician_name.length; j++) {
    console.log(magician_name[j]);
  }
}
show_magicians(magician_name);
magician_name = make_great(magician_name);

show_magicians(magician_name);
