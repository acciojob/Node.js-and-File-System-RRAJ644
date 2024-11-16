const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('Enter the filename: ', (filename) => {
  rl.question('Enter the word to remove: ', (word) => {
    // TODO: Implement this function

    fs.readFile(filename, 'utf-8', (err, data) => {
      if (err) {
        console.error(`Error reading file: ${err.message}`)
        rl.close()
        return
      }

      const words = data.split(' ')
      const filteredWords = words?.filter((item) => item !== word)
      const updatedContent = words.join(' ')

      fs.writeFile(filename, updatedContent, (err) => {
        if (err) {
          console.error(`Error writing to file: ${err.message}`)
        } else {
          console.log(`The word "${word}" has been removed from the file.`)
        }
        rl.close()
      })
    })

    rl.close()
  })
})
