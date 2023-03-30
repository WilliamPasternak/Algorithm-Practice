function insertionSort(arr){
	let currentVal;
    // loop through the array, starting at the second element (index 1)
    for(let i = 1; i < arr.length; i++){
    // store the current element (the one we are trying to insert) in a variable
        currentVal = arr[i];
        
        for(let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

insertionSort([2,1,9,76,4])



