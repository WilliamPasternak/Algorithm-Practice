Bubble Sort

Write a function that takes in an array of integers and returns a sorted version of that array. Use the
Bubble Sort algorithm to sort the array.
If you're unfamiliar with Bubble Sort, we recommend watching the Conceptual Overview section of this question's video explanation before starting to code.

// Time: O(n^2) Space: O(1)
function bubbleSort(array) {
  let isSorted = false
  while(!isSorted){
    isSorted = true
    for(let i = 0; i < array.length -1; i++){
      if(array[i] > array[i + 1]){
        swap(i,i+1,array)
        isSorted = false
      }
    }
  }
  return array
}

function swap(i,j,array){
  [array[i],array[j]] = [array[j],array[i]]  
}


// Slight Optimization with counter variable so we don't need to check sorted numbers.

// Time: O(n^2) Space: O(1)
function bubbleSort(array) {
   let isSorted = false
   let counter = 0
   while(!isSorted){
     isSorted = true
     for(let i = 0 ; i < array.length - 1 - counter; i++){
      if(array[i] > array[i + 1]){
        swap(i,i+1,array)
        isSorted = false
      }
     }
     counter++
   }
   return array
}

function swap(i,j,array){
  [array[i],array[j]] = [array[j], array[i]]
}
