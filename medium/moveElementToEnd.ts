export function moveElementToEnd(array: number[], toMove: number) {
    let startPtr: number = 0;
    let endPtr: number = array.length - 1;
    
    while (startPtr <= endPtr) {
      // Set pointers and walk in until valid swap indexes
      while (array[endPtr] === toMove && endPtr >= 0) {
        endPtr--;
      }
      
      while (array[startPtr] !== toMove && startPtr < array.length) {
        startPtr++;
      }
      
      // Swap
      if (startPtr < endPtr) {
        array[startPtr] = array[endPtr];
        array[endPtr] = toMove;
      }
    }
    console.log('DONE: ' + array);
    
    return array;
  }
  
  //  A
  // [2, 1, 2, 2, 2, 3, 4, 2]
  
  //           A        X
  // [4, 1, 3, 2, 2, 2, 2, 2]
  // "toMove": 2