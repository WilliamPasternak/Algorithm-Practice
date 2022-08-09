/* Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target. */

function averagePair(arr,target){
 // Set pointers
 let left = 0;
 let right = arr.length - 1;
 while(left < right){
      // Check if the average of any 2 values equals the target average
      if((arr[left] + arr[right]) / 2 === target){
         return true;
     }
     // If the numbers used are too big, reduce the right number
     else if((arr[left] + arr[right]) / 2 > target){
         right--;
     }
     // If the numbers used are too small, increase the left number.
     else if((arr[left] + arr[right]) / 2 < target){
         left++;
     }

 }
 return false;
}