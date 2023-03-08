export function bubbleSort(array: number[]) {
    let didSwap: boolean = true;
    // Sort list in ASC order
    // Multiple iterations
    // Swap numbers & place num in right place
  
    // At each number, check if current number and next one 
    // Is current number in right spot ? If not, swap the numbers
    // Check if we did any swaps? re iterate : done
    while (didSwap) {
      didSwap = false;
      
      for (let i = 0; i < array.length; i++) {
        let curr: number = array[i];
        if (curr > array[i + 1]) {
          array[i] = array[i + 1];
          array[i + 1] = curr;
          didSwap = true;
        }
  
        //console.log(array);
      }
    }
    
    return array;
  }
  