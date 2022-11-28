  // Given an array of integers and a number, write a function called maxSubarraySum, 
//  which finds the maximum sum of a subarray with the length of the number passed to the function. 

  function maxSubarraySum(arr, n){
  let maxSum = 0;
  let tempSum = 0;
  // Edge Case: If array length is shorter than num requested, return null
  if (arr.length < n) return null;

  // Add up the first n numbers in arr. Store as maxSum
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  // Start new loop after the first n elements.
  for (let i = n; i < arr.length; i++) {
  // From tempSum, subtract first element, add the next element.
    tempSum = tempSum - arr[i - n] + arr[i];
  // Update maxSum with highest total between maxSum or tempSum
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
