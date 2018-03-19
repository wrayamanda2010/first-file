const {red, yellow} =  require("chalk")
const path = require("path")
const fs = require("fs")


const filename = path.join(__dirname, "test.txt")
// console.log(yellow(filename))
//
// fs.readdir(__dirname, (err, files) =>{
//   console.log(files)
// })
//
// console.log(yellow("hello!"))


fs.readFile(filename,"utf8", (err, data) => {
  if(err){
    return console.log(red(err))
  }
  const lines = data.split('\n').filter(x => x.length > 0)
  
  console.log(lines)

})
