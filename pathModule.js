const path = require('path')

console.log(path.sep) //Separates the path

const filePath = path.join('/Connecting Modules', '/main.js') //Joins the files and folders
console.log(`File Path : ${filePath}`)

const base = path.basename(filePath) //Tells us the base in the path
console.log(`base name : ${base}`)

const absolute = path.resolve(__dirname, 'Connecting Modules', 'main.js') //Creates a path for us
console.log(absolute)