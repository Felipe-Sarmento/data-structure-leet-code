import { LinkedListNode } from "../../abstract/node";
import { Stack } from "../../abstract/stack";

export class StackLinkedList implements Stack<number> {
  head: LinkedListNode | null = null;
  size: number = 0;

  push(value: number): void {
    if (this.isEmpty()) {
      this.head = new LinkedListNode(value);
    } else {
      const newNode = new LinkedListNode(value);
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }
  pop(): number {
    if (this.isEmpty()) throw new Error("Stack is empty");

    const toDelete = this.head;
    this.head = this.head!.next;
    this.size--;

    return toDelete.data;
  }
  peek(): number {
    if (this.isEmpty()) throw new Error("Stack is empty");

    return this.head!.data!;
  }

  isEmpty(): boolean {
    return this.size == 0;
  }
}
