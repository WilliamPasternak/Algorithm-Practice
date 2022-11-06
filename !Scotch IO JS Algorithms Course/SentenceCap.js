function capSentence(text) {
// Converts all text to lowercase
    let wordsArray = text.toLowerCase().split(' ') 
    
    // Creates a new array, capitalizing the first letter of each word and concatenating the rest of the word
    let capsArray = wordsArray.map(word=>{
        return word[0].toUpperCase() + word.slice(1)
    })
    // Turns array to string and returns
    return capsArray.join(' ')
}

