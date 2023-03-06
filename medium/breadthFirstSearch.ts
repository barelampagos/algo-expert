
export class Node {
    name: string;
    children: Node[];
  
    constructor(name: string) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name: string): Node {
      this.children.push(new Node(name));
      return this;
    }
  
    breadthFirstSearch(array: string[]) {
      let queue: Node[] = [];
      queue.push(this);
  
      while (queue.length > 0) {
        let curr: Node | undefined = queue.shift();
  
        if (curr !== undefined) {
          console.log(curr.name);
    
          for (let child of curr.children) {
            queue.push(child);
          }
    
          array.push(curr.name);
        }
        // console.log(queue);
      }
      
      return array;
    }
  }
  