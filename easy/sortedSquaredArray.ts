// In: [1, 2, 3, 5, 6, 8, 9]
// Out: [1, 4, 9, 25, 36, 64, 81]
export function sortedSquaredArray(array: number[]) {
    let result: number[] = [];
    let lowPtr: number = 0;
    let highPtr: number = array.length - 1;
  
    while (lowPtr <= highPtr) {
      // Find larger absolute value & add square to result
      let largerAbsPtr: number = Math.abs(array[lowPtr]) < Math.abs(array[highPtr]) ? highPtr : lowPtr;
      result.unshift(Math.pow(array[largerAbsPtr], 2));
    
      // Adjust pointer
      if (largerAbsPtr === lowPtr) {
        lowPtr++;
      } else {
        highPtr--;
      }
    }
    
    return result;
  }
  