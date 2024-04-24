//Gets all the variables and stores it as objects.
const names = require('./names.js')
const sayName = require('./sayName.js') //Importing the function here

console.log(names) // Printing everything that went into names while importing
sayName(names.name1) //Getting what we need out of names
sayName(names.name2)
sayName(names.moreNames.name) 

require('./Add.js') //If there is a function in the other module it will run with require like here