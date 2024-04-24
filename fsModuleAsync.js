// Use of err and result in Async 

const {readFile, writeFile} = require('fs')

readFile('./TextFiles/text1.txt', 'utf-8', (err, result) => {
    if(err) {
        console.log(err)
        return;
    }
    const first = result
    readFile('./TextFiles/text2.txt' , 'utf-8' , (err, result) =>{
        if(err) {
            console.log(err)
            return;
        }
        second = result
        writeFile('./TextFiles/written.txt' , 
        `Here is the result : ${first} and ${second}`, {flag : 'a'} ,
        (err, result) => {
            if (err){
                console.log(err)
                return;
            }
            console.log(result)
        })
    })
})