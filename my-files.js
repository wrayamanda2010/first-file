const { red, yellow, cyan } = require('chalk')
const path = require('path')
const fs = require('fs')

const filename = path.join(__dirname, 'test.txt')

// console.log(yellow(filename))

// fs.readdir(__dirname, (err, files) => {
//   if (err) {
//     console.log(red(err))
//   }
//   else {
//     console.log(files)
//   }
// })
// console.log(yellow('Hello!'))

// fs.readFile(filename, 'utf8', (err, data) => {
//   if (err) {
//     return console.log(err)
//   }
//
//   const lines = data
//     .split('\n')
//     .filter(x => x.length > 0)
//     .map((el, idx) => `${idx}: ${el}`)
//
//   console.log(lines)
// })

// try {
//   const syncContents = fs.readFileSync('klsjdflksdjflkdsjfldksfj', 'utf8')
//   console.log(cyan(syncContents))
// }
// catch (err) {
//   console.log(red(err))
// }

// fs.unlink(filename, (err) => {
//   if (err) {
//     console.log(red(err))
//   }
//   else {
//     console.log('file has been anhilated')
//   }
// })

function addFruit(type, count, filename='things.csv') {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      console.log(red(err))
    }
    else {
      const lines = data
        .split('\n')
        .filter(x => x.length > 0)
        .map(x => x.split(','))

      const fruits = {}
      lines.forEach(x => fruits[x[0]] = x[1])
      fruits[type] = count

      const newLines = []
      Object.keys(fruits).forEach(key => {
        newLines.push(`${key},${fruits[key]}`)
      })

      const writeMe = newLines.join('\n')
      fs.writeFile(filename, writeMe, 'utf8', (err) => {
        if (err) {
          console.log(err)
        }
      })
    }
  })
}

addFruit('Apples', 210)
