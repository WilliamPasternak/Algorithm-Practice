// Given two strings, write a function to determine if the second string is an anagram of the first.
// Frequency Counter Algorithm

function isAnagram(firstStr, secondStr) {
  // Check Edge Cases (Untruthy Values & Different Lengths)
  if (!firstStr || !secondStr) return false;
  if (firstStr.length !== secondStr.length) return false;
  // Build a hashtable to track frequency
  const lookup = {};
  // Add each item to firstStr or increment if present
  for (first of firstStr) {
     lookup[first] = ((lookup[first] || 0 ) + 1);
  }
  // Check for secondStr values in lookup, decrement if present 
  for (second of secondStr) {
    if (!lookup[second]) return false;
    lookup[second] -= 1;
  }
  return true;
}