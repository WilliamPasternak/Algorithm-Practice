const vowels = ["a", "e", "i", "o", "u"]

 function vowelsCounter(text) {
     let counter = 0;
     // Loop through text to test if each character is a vowel
     for (let letter of text.toLowerCase()) {
         if (vowels.includes(letter)) {
             counter++
         }
     }
     return counter
 }