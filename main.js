const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('Enter the filename: ', (filename) => {
  rl.question('Enter the word to remove: ', (word) => {
    // Read the file asynchronously
    fs.readFile(filename, 'utf-8', (err, data) => {
      if (err) {
        console.error(`Error reading file: ${err.message}`)
        rl.close()
        return
      }

      // Split the file content into an array of words
      const words = data.split(' ')

      // Filter out the specified word
      const filteredWords = words.filter((item) => item !== word)

      // Join the filtered words back into a string
      const updatedContent = filteredWords.join(' ')

      // Write the modified content back to the same file
      fs.writeFile(filename, updatedContent, (err) => {
        if (err) {
          console.error(`Error writing to file: ${err.message}`)
        } else {
          console.log(`The word "${word}" has been removed from the file.`)
        }

        // Close the readline interface after completing the file operation
        rl.close()
      })
    })
  })
})
