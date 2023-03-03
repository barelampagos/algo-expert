// Input: [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]
// Out: True

// Monotonic: entirely non-increasing/non-decreasing
export function isMonotonic(array: number[]) {
    let isMonotonicArray: boolean = true;
    let isDecreasing: boolean = false;
    let isIncreasing: boolean = false;
  
    let prev: number | undefined = undefined;
    
    for (let num of array) {
      console.log(prev, num, isDecreasing, isIncreasing);
      
      if (prev === undefined) {
        prev = num;
        continue;
      }
    
      if (num < prev) {
        isDecreasing = true;
      }
  
      if (num > prev) {
        isIncreasing = true;
      }
  
      if (isDecreasing && isIncreasing) {
        isMonotonicArray = false;
        break;
      }
  
      prev = num;
    }
    
    return isMonotonicArray;
  }
  