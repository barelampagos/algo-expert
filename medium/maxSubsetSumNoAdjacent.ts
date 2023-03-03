// Input: "array": [75, 105, 120, 75, 90, 135]
// Out: 330 // 75 + 120 + 135
// # Dynamic Programming
export function maxSubsetSumNoAdjacent(array: number[]) {
    let result: number = 0;
    let sumArray: number[] = new Array(array.length);
  
    for (let i = 0; i < array.length; i++) {
      if (i === 0) {
        sumArray[0] = array[0];
      } else if (i === 1) {
        sumArray[i] = Math.max(array[0], array[1]);
      } else {
        sumArray[i] = Math.max(sumArray[i - 1], sumArray[i - 2] + array[i]);
      }
        
      result = Math.max(sumArray[i], result);
      console.log(result);
    }
    
    return result;
  }
  