function chunkArray(array, size) {
    // Array to store results in
    let result = []
    // Move i, (the starting point) up by size each time.
    for (let i = 0; i < array.length; i += size) {
    // Each loop, make a sub array that goes from i to i + size of chunk
        let chunk = array.slice(i, i + size)
        result.push(chunk) 
    }
    return result
}