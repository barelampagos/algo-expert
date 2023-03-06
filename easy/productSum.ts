// Input: [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
// Output: 12 // calculated as: 5 + 2 + 2 * (7 - 1) + 3 + 2 * (6 + 3 * (-13 + 8) + 4)
type SpecialArray = Array<number | SpecialArray>;

export function productSum(array: SpecialArray) {
  return productSumWithDepth(array, 1);
}

export function productSumWithDepth(array: SpecialArray, depth: number) {
  let sum: number = 0;

  for (let obj of array) {
    if (Array.isArray(obj)) {
      sum += productSumWithDepth(obj, depth + 1);
    } else {
      // Number
      sum += obj;
    }
  }

  return sum * depth;
}