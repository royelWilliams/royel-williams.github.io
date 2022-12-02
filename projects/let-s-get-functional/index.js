// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./royel-williams.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */
var maleCount = function(array) {
    let males=_.filter(array,function(customer,index,array){
        //return true if the input customer is male 
        return customer.gender === 'male'; 
    })
    return males.length;
    
};

var femaleCount = function(array){
    return _.reduce(array, function(acc, current){
// number of female customers 
// if true add one to accumulator 
if( current.gender === 'female'){
    return acc += 1;
}
else{
    return acc;
}
},0)
};

var oldestCustomer = function(array){
    let oldest = _.reduce(array, function(acc, current){
        // determine if the acc is older than the current customer 
    if(acc.age > current. age){
        return acc;
    }
    else{
        return current;
    }
    },'')
 // return the name of the oldest customer object 
 return age.name   
};

var youngestCustomer = function(array){
    let youngest = _.reduce(array, function(acc, current){
if(acc.age < current.age){
    return acc;
}
else{
    return current;
}
    },'')
    return age.name;
};

var averageBalance = function(array){
      let average = _.reduce(array, function(acc, current){
            let bal = parseInt(current.balance.replace(/[^\w\s]/gi, ""),10);
             acc += bal; 
             return acc;
         },0);
         let sam = (total/(array.length*100));
         return sam;
        };
    

var firstLetterCount = function(array, letter){
let first = _.reduce(array, function(acc, current){
    if(curr.name[0].toLowerCase() === letter.toLowerCase()){
        acc = acc + 1;
    }
     return acc;
    
    
        }, 0);
    
    };
var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
