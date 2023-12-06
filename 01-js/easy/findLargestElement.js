/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(arr) {
    
    if (arr.length === 0) {
        // Handle the case when the array is empty
        return undefined;
      }
    
      let largestElement = arr[0];
    
      for (let i = 1; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
          // Skip non-numeric elements
          continue;
        }
    
        if (arr[i] > largestElement) {
          largestElement = arr[i];
        }
      }
    
      return largestElement;
}

module.exports = findLargestElement;