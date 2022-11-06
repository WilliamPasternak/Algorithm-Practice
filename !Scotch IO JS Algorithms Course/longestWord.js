function longestWord(text) {
    let wordArray = text.split(' ')
    let maxLength = 0
    let result = ''

    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i].length > maxLength) {
            maxLength = wordArray[i].length
            result = wordArray[i]
        }
    }

    return result
}

function longestWord(text) {
    var result = text.split(' ').reduce((maxLengthWord, currentWord) => {
        if (currentWord.length > maxLengthWord.length) {
            return currentWord
        } else {
            return maxLengthWord
        }
    }, "")
    return result
}

/* Within the reducer function, we compare the length of the current word with the length of our accumulator variable maxLengthWord which is set to an empty string at the start. 

Whenever the length of the current word is greater, we return the current word as the new accumulator value.

At the end of the reduction, result now holds the longest word in the sentence and is returned accordingly.
 */