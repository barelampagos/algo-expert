export function twoNumberSum(array: number[], targetSum: number) {
    let sumMap = new Map<number, number>();
    let result: number[] = [];
  
    for (let num of array) {
      if (sumMap.has(num)) {
        result.push(num);
        result.push(sumMap.get(num)!);
        break;
      } else {
        sumMap.set(targetSum - num, num);
      }
    }
    
    return result;
  }
  