export function smallestDifference(arrayOne: number[], arrayTwo: number[]) {
    let result: number[] = [-1, -1];
    let minDiff: number = Number.MAX_SAFE_INTEGER;
    let sortedArrOne: number[] = [...arrayOne].sort((a,b) => a < b ? -1 : 1);
    let sortedArrTwo: number[] = [...arrayTwo].sort((a,b) => a < b ? -1 : 1);
    // console.log(arrayOne, arrayTwo)
    // console.log(sortedArrOne, sortedArrTwo)
  
    let onePtr = 0;
    let twoPtr = 0;
  
    while (onePtr < sortedArrOne.length && twoPtr < sortedArrTwo.length) {
      let num1 = sortedArrOne[onePtr];
      let num2 = sortedArrTwo[twoPtr];
      let numOneLarger = num1 > num2;
      let absDiff = numOneLarger ? num1 - num2 : num2 - num1;
      //console.log(num1, num2, absDiff);
    
      if (absDiff < minDiff) {
        //console.log('UPDATE', num1, num2, absDiff);
    
        minDiff = absDiff;
        result[0] = num1;
        result[1] = num2;
  
        if (absDiff === 0) {
          break;
        }
      }
  
      if (numOneLarger) {
        twoPtr++;
      } else {
        onePtr++;
      }
    }
    
    return result;
  }
  