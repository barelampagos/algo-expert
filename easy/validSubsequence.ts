export function isValidSubsequence(array: number[], sequence: number[]) {
    let result: boolean = false;
    let sequencePtr: number = 0;
    console.log(array);
    console.log(sequence);
    
    for (let num of array) {
      console.log(num, sequence[sequencePtr], sequencePtr)
      if (num === sequence[sequencePtr]) {
        // console.log('MATCH');
        sequencePtr++;
      }
  
      if (sequencePtr >= sequence.length) {
        break;
      }
    }
    
    return sequencePtr >= sequence.length;
  }
  