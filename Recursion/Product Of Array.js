productOfArray
Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

function productOfArray(arr){
    if(arr.length === 0) return 1 
    return arr[0] * productOfArray(arr.slice(1))
}

// Explanation:
// If array is empty, return 1 
// Else, return the first element of the array, multiplied by the first element of a new array, made from the original, (missing the first element)