const {readFileSync, writeFileSync} = require('fs')

// Reading the data from the files aready there
const first = readFileSync('./TextFiles/text1.txt', 'utf8')
const second = readFileSync('./TextFiles/text2.txt' , 'utf-8')
console.log(first,second)

// Writes in a file. Will create one if not there
writeFileSync(
    './TextFiles/written.txt', 
    `Here is the result : ${first}, ${second}`, 
    {flag : 'a'}
)
//Flag : a is for appending in the file. Witout this it will overwrite and delete everything previosly there