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
    //implement _.filter()to return array of only male customers 
    let males=_.filter(array,function(customer,index,array){
        //return true if the input customer is male 
        return customer.gender === 'male'; 
    })
    return males.length;
    };
    
    var femaleCount = function(array){
        //implemwnt _.reduce() to return the number of female customers 
         return _.reduce(array,function(acc,current,index,array){
            //determine if customer is female 
            if(current.gender === "female"){
                acc += 1;//acc= acc + 1;
            }
            return acc;
        },0)
    };
    
    var oldestCustomer = function(array){
       let age = _.reduce(array, function (acc, current){
        if(acc.age > current.age){
          return acc;
        }
            return current;
            
       }, '')
        return age.name
    };
            
    var youngestCustomer = function(array){
        let age =  _.reduce(array, function (acc, current){
            if(current.age > acc.age){
                return acc
            }
            else{
                return current
            }
           
           },"");
           return age.name
    }
    var averageBalance = function(array){
         let total = _.reduce(array, function(acc, current){
            let bal = parseInt(current.balance.replace(/[^\w\s]/gi, ""),10);
             acc += bal; 
             return acc;
         },0);
         let mark = (total/(array.length*100));
         return mark;
        }
    
    
        
    var firstLetterCount = function(array, letter){
         return _.reduce(array,function(acc, curr){
    if(curr.name[0].toLowerCase() === letter.toLowerCase()){
        acc = acc + 1;
    }
     return acc;
    
    
        }, 0);
    }
    
    var friendFirstLetterCount = function(array,customer,letter){
           //store the friends in a room who meet the criteria(object)
           var customerFriends= {};
           // loop through the customers to get their friends 
           for(let i = 0;i < array.length; i++){
            //if name matches name 
            // current customer matches customer in parameter
            if(array[i].name === customer)
         customerFriends = array[i];
           }
           return _.reduce(customerFriends.friends,function(acc, curr){
            if(curr.name[0].toLowerCase() === letter.toLowerCase()){
                acc = acc + 1;
            }
             return acc;
            
            
                }, 0);
            //}
           // if customer friends(first letter) meet requirements(letter passed in) add them to object
           //reduce 
        }
    
    
    var friendsCount = function(array,name){
    // look at the customers who have other customers as their friends 
    var fcustomers = [];
    //go through the customers array 
    //for(let i= 0; i <array.length; i++){
    //match a name to a name thats being put in 
    //if(friends[i].name === name){
    //fcustomers = array[i];
    
     let custom = _.reduce(array, function(acc,element){
        //trying the customers names 
        for(let i= 0; i < element.friends.length; i++){
            //match a name to a name thats being put in 
            if(element.friends[i].name === name){
                acc = element.name;
               fcustomers.push(acc);
            }
        }
     });
     return fcustomers;
    }
    
    
    var topThreeTags = function(array){
        // create an array to hold all tags in
         let arrTags = []
    // use reduce to reduuce down our tags into one array
    
    let newTags =  _.reduce(array,function(prev,curr,i){
       // create a condition for the case of us having a tags array
         if(curr.tags !== undefined){
             // push the tags into an array so it can be an array of array tags
             arrTags.push(curr.tags)
             // flatten the nested arrays
         }
         // concat the tags into one big array of tags
          return  [].concat(...arrTags);
    });
    
    // use reduce to 
    
    let tags = _.reduce(newTags,function(prev,curr){
              console.log(prev);
              // we want to check the conditions that the tag exist if it doesnt we'll set it equal to one
              // if it does exist we want to create the key in our object and increment by 1 eveytime we hit the tag
              if(prev[curr] === undefined){
                  prev[curr] = 1;
              } else {
                  prev[curr] += 1;
              } return prev;
    },{});
    
    
    // create a newArray and iterate over our tags object to make our object an array by pushing it
    var newArray = [];
    _.each(tags,function(count,word){
       newArray.push([word,count]);
    });
    
    // sort our array from highest to lowest by using b - a
    newArray.sort(function(a,b){
      return b[1] - a[1];
    });
    
    
    // console.log(newArray);
    // create a new array to push the sorted array into that array
    var sortedArray = [];
    // loop through array to keep the first three elements
    for(var i = 0; i < 3; i++){
        sortedArray.push(newArray[i][0]);
        // return our new array with the top three tags
    } return sortedArray;
    
    };
    
    
    
    
    
    
    var genderCount = function(array){
      
        // need a key of female with 
        // need a key of male
        // need a key of non-binary
          let male = 0;
       let female = 0;
       let nonBinary = 0;
       // use reduce to return a summary of genderCount
       return  _.reduce(array, function(prev, curr, i){
           // checking our condition that we have the genders and to add to our counter variable if we do
           if (curr.gender === "male"){
               male += 1;
           } else if (curr.gender === "female"){
               female += 1;
           } else{
               nonBinary += 1;
           }
           // returning our final object with the keys which will tack on our final counter values
           return {
               male,
               female,
               "non-binary": nonBinary
           };
       }, 0);
    };
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
