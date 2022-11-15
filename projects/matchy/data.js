/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = 'cat'; 
animal["name"]= 'Penny';
animal.noise= [];
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = 'purr';
noises.push('hiss');
noises.unshift('happyMeow');
noises[3]= 'sadMeow';
console.log(noises.length);
console.log(noises.length-1);
console.log(noises);
//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises;
noises.push('cry');
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * dot and bracket notation
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * bracket notation 
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals= [];
animals.push(animal);
console.log(animals);
var duck = { species: 'duck', name: 'Jerome', noises: 
['quack', 'honk', 'sneeze', 'woosh'] }
animals.push(duck);
console.log(animals);
var goose ={ species: 'goose', name: 'Jammie', noises: 
['pitter- patter', 'honk', 'sneeze', 'woosh'] }
animals.push(goose);
var mouse = { species: 'mouse', name: 'mickey', noises: 
['pitter- patter', 'squeak', 'sniffel', 'skitter'] }
animals.push(mouse);
console.log(animals);
console.log(animals.length);
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//assinging the friends to a data structure of an array because it can easily hold objects
var friends = [];

function getRandom (animals){
  //Math.random(animals);
 //return Math.floor(Math.random()* animals.length);
  return animals[Math.floor(Math.random()* animals.length -1)]
}
 animal["friends"] = friends;
 console.log(friends);
// create another index

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}