// Fastest Solution
   function palindromeChecker(text) {
    // Loop through the first half of text string
    for (let i = 0; i < text.length/2; i++) {
        // Check i-th char from front, and i-th char from back
      if (text[i] !== text[text.length - 1 - i]) {
          return false;
      }
    }
    return true;
   }

// Intuitive Solution
function palindromeChecker(text) {
    let reversedText = text.toLowerCase()
        .split('').reverse().join('')
    return text === reversedText
}