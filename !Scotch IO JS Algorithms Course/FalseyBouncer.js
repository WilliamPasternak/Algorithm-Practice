function falsyBouncer(array) {
    let result =[]
    //loop through with each array value
    for (value of array){
    // push into result if truthy
        if(value){
            result.push(value)
        }
    }
    return result
}
