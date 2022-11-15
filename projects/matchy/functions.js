/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create a function name it search and put a array called animals inside
function search(array, string){
    //looping over the array to acces the objects
      for(var  i = 0; i < array.length; i ++){
        // array[i] = object and storing it 
        var animalObject = array[i];
        console.log(animalObject, string);
        //using the Object.values to return a object that exsist
        if (Object.values(animalObject).includes(string)){
        console.log("this string passs");
        return array[i];
      }
      }
      return null;
    }
//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(array,name,replacement){
    for(let i = 0; i < array.length;i++){
var objectLoop = array[i];
if(Object.values(objectLoop).includes(name)){
    animals[i]= replacement
}
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(array, name){
    for(let i = 0; i < array.length;i++){
        var objectLoop = array[i];
        if(Object.values(objectLoop).includes(name)){
            return animals.splice(i);

        } 
        }


}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals,animal){
    for (var i = 0; i < animals.length; i++){
      //store the object that was looped over 
      var objectLooped = animals[i];
  //const animalExists = animals.find((a) => a.name === animal.name);
  /*if the stored object of animals dosent equal the new object and 
  the animal name is > o and the animal species is greater than 0 
  then push the new animal object*/
  // use a if statement to compare the name length, the species length, and the loops 
  if ((objectLooped.name !== animal.name) && (animal.name.length > 0) && (animal.species.length > 0)) {
      animals.push(animal);}
      //else the object exsist return it 
     else  if(Object.values(objectLooped).includes(animal)){
    } 
    else if ((objectLooped.name === animal.name) && (animal.name.length > 0) && (animal.species.length > 0)){
    return " already defined";
    }
    }
    return animals.push(animal);
}
/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
