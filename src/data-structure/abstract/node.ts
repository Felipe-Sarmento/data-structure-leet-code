export class LinkedListNode {
  data: number;
  next: LinkedListNode | null;
  prev?: LinkedListNode | null;

  constructor(value: number) {
    this.data = value;
    this.next = null;
  }
}
