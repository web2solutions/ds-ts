class SinglyLinkedListNode {
  data: number;
  next: SinglyLinkedListNode | null;

  constructor(nodeData: number) {
      this.data = nodeData;
      this.next = null;
  }
};
class SinglyLinkedList {
  nodes: SinglyLinkedListNode[] = []
  
  constructor (nodes?: SinglyLinkedListNode) {
      if(typeof nodes !== 'undefined') this.populate(nodes)
  }
  
  populate (nodes: SinglyLinkedListNode) {
    this.insertFirst(nodes.data)
    if (nodes.next === null) return;
    this.populate(nodes.next)
  }
  
  get head (): SinglyLinkedListNode | null {
      return this.nodes[0] || null
  }
  
  get tail (): SinglyLinkedListNode | null {
      return this.nodes[this.size -1] || null
  }
  
  insertAt (index: number, data: number) {
      const previous: SinglyLinkedListNode = this.nodes[index - 1] || null
      const next: SinglyLinkedListNode = this.nodes[index] || null
      const node: SinglyLinkedListNode = { data, next }

      if (previous) {
          previous.next = node
      }
      
      this.nodes.splice(index, 0, node)
      return this.nodes[index]
  }
  
  insertFirst (data: number) {
      this.insertAt(0, data)
  }
  
  insertNode (data: number) {
      this.insertAt(0, data)
  }
  
  insertLast (data: number) {
      this.insertAt(this.size, data)
  }
  
  removeAt (index: number) {
      const previous: SinglyLinkedListNode = this.nodes[index - 1] || null
      const next: SinglyLinkedListNode = this.nodes[index + 1] || null
      

      if (previous) {
          previous.next = next
      }
      
      this.nodes.splice(index, 1)
  }
  
  get size (): number {
      return this.nodes.length
  }

  clear() { 
    this.nodes = []
  }

  reverse (): void {
      const copy = [...this.nodes]
      const tamanho = this.size
      this.clear()
      for(let position = tamanho - 1; position >= 0; position--) {
          this.insertLast(copy[position].data)
      }
  }

  get values (): Array<number|string> {
    return this.nodes.map(node => node.data)
  }
}