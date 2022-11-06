// Below has decrease in time but an increase in space complexity

const uniqSort = function(arr) {
    const breadcrumbs = {};
    let result = []

    for(let i = 0; i < arr.length; i++){
        if(!breadcrumbs[arr[i]]){
            result.push(arr[i])
            breadcrumbs[arr[i]] = true;
        }
    }

    return result.sort((a, b) => a - b);
};

console.log(uniqSort([4,2,2,3,2,2,2]),'[2,3,4]'); 
console.log(uniqSort([1,5,2,1]),'[1,2,5]'); 
