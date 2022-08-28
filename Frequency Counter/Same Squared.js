/* Write a function which accepts two arrays. 
   The function should return true if every value in the array has it's corresponding value squared in the second array. 
   The frequency of values must be the same. */


// Use Frequency Counter Algorithm.
function sameSquared(firstArr,secondArr){
	  // Edge Cases: (Untruthy Values & Different Lengths)
		if(!firstArr || !secondArr) return false
		if (firstArr.length !== secondArr.length) return false
	  // Build a table to track frequency
		const lookup = {}
    // Loop over chars in first string. Add chars to lookup obj or if present increment.
		for (let value of firstArr) {
   		 lookup[value * value] = (lookup[value * value] || 0) + 1;
  		}
  	//Compare Array Values
  		// If the current value from secondArr is NOT inside lookup. Return False
  		// If current value IS inside lookup, decrement that entry. 
  	for (let secondValue of secondArr) {
      if (!lookup[secondValue]) return false;
      lookup[secondValue] -= 1;
      }
    return true
}