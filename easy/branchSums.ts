class BinaryTree {
    value: number;
    left: BinaryTree | null;
    right: BinaryTree | null;
  
    constructor(value: number) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  export function branchSums(root: BinaryTree): number[] {
    let result: number[] = [];
    branchSumsRec(root, result, 0);
    return result;
  }
  
  // Recursive DFS 
  export function branchSumsRec(root: BinaryTree, result: number[], sum: number) {
    if (root.left === null && root.right === null) {
      result.push(sum + root.value);
      return;
    }
  
    if (root.left !== null) {
      branchSumsRec(root.left, result, sum + root.value);
    }
    if (root.right !== null) {
      branchSumsRec(root.right, result, sum + root.value);
    }
  }
  