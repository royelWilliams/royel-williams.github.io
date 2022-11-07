// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
    
// you can simply call the string that is in the parameters and then call a .length
 return string.length;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
// call the string and use the toLowerCase to make all of the strings lower
var makeSmall = string.toLowerCase();
return makeSmall;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
// use toUpperCase to make all of the strings upper
var makeBig = string.toUpperCase();
return makeBig
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    // split the string 
    var spliter = string. split(' ');
    // join the string into a whole again using dashes 
    var joining = spliter.join('-')
// make the string all in one case
var small = joining.toLowerCase();
// return everything put together 
return small;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
     // YOUR CODE BELOW HERE //
// lowerCase everything so that we wont have any issues down the line
var lower = string.toLowerCase();
 // get access to the first character in each string and compare them using a if statement
//
if(lower[0] !== char.toLowerCase()){
return false
}
else{
    return true;
}
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
// make all of the characters in the same case
var later = string.toLowerCase();
  console.log(later[later.length - 1]);
// find the last character in the string, use it in if statement to prove that the last letter does equal the character given 
if (later[later.length- 1] === char.toLowerCase()){
  console.log(later[later.length- 1]);
    return true;
}
else{ 
  return false; 
}


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

// combine string one with string two and return them both 
return stringOne. concat(stringTwo);
    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
   
// combine the strings using a .join ()
var next = Array.from(arguments);
next.join('');
return next.join('');

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
// compare string one to string  two and make sure they are different 
if(stringOne.length > stringTwo.length){
    return stringOne;
}
// else return the other string  
else{
    return stringTwo;
}
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // lowrcase both strings so they are in the same case when coding 
    var string1 = stringOne.toLowerCase();
    var string2 = stringTwo.toLowerCase();
    // make a if statement  using the .localeCompare method returns a number indicating
    // whether a reference string comes before, or after, or is the same as the given string in sort order. 
    if(string2 > string1){
      return 1;
    }
else if(string1 > string2){
  return -1;
}    
    else{
      return 0;
    }


    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //make sure both of the strings are in the same case before continueing to make things easier 
    var string1 = stringOne.toLowerCase();
    var string2 = stringTwo.toLowerCase();
    // there should be a if statement to test which is hidher vs which is lower and the else being the 0 
    if(string1 > string2){
      return 1;
    }
else if(string2 > string1){
  return -1;
}    
    else{
      return 0;
    }



    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
