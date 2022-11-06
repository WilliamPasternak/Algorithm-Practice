function whereIBelong(arr, num) {
    // Count number of smaller numbers. Count winds up being index where num belongs
    let counter = 0
    for (i = 0; i < arr.length; i++) {
        if (num > arr[i]) {
            counter++;
        }
    } 
    return counter
}