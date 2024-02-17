import { Queue } from "../../abstract/queue";
import { LinkedListNode } from "../../abstract/node";

export class QueueLinkedList implements Queue<number> {
  private head: LinkedListNode | null = null;
  private size: number = 0;

  enqueue(value: number): void {
    if (this.isEmpty()) {
      this.head = new LinkedListNode(value);
    } else {
      let current = this.head;
      while (current?.next) {
        current = current.next;
      }
      current!.next = new LinkedListNode(value);
    }
    this.size++;
  }

  dequeue(): number {
    if (this.isEmpty()) throw new Error("Queue is empty");

    const data = this.head!.data;
    this.head = this.head!.next;
    this.size--;
    return data;
  }

  peek(): number {
    if (this.isEmpty()) throw new Error("Queue is empty");

    return this.head!.data;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }
}
