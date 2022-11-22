
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(size) {
  // write a for loop that only goes to the 7th number of the #
  
  let triangle = ''
  let counter = '#'
   for(var i = 0; i < size; i++){
    console.log(triangle += counter);
   }
   
  }
  
  ////////////////////////////////////////////////////////////////////////////////
  // fizzBuzz ////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  
  function fizzBuzz() {
    for ( var num = 1; num <= 15; num++)
    if (num % 3 == 0 && num % 5 == 0)
      console.log("fizzbuzz");
    else if (num % 3 == 0)
      console.log("fizz");
    else if (num % 5 == 0)
      console.log("buzz");
    else 
      console.log(num);
  }
  
    
  
  
  ////////////////////////////////////////////////////////////////////////////////
  // drawChessboard //////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function drawChessboard(size) {
    //this is the variable setting
  
  var board = "";//this is the empty string we're going to add either ' ' , '#' or newline
  
  for (var y = 0; y < size; y++) {   /*in the outer loop we add newline to seperate rows*/
   for (var x = 0; x < size; x++) {/*every inner loop rappresents a line, and alternatively it's adding either ' ' or '#' to the string that's being populated*/
     if ((x + y) % 2 == 0)
       board += " ";
     else
       board += "#";
   }
   board += "\n";
  }
  
  console.log(board);
  
  }
  
  
  ////////////////////////////////////////////////////////////////////////////////
  // DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  
  if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    module.exports = {
       triangles,
      fizzBuzz,
      drawChessboard,
    };
  }