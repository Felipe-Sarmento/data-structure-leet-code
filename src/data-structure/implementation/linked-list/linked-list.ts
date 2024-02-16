import { List } from "../../abstract/list";
import { LinkedListNode } from "../../abstract/node";

export class LinkedList implements List<number> {
  head: LinkedListNode | null = null;
  size: number;

  isEmpty(): boolean {
    return this.size === 0;
  }

  insertEnd(value: number): void {
    const newNode = new LinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  insertStart(value: number): void {
    const newNode = new LinkedListNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  insertAt(index: number, value: number): void {
    if (index < 0 || index > this.size) {
      throw new Error("Index out of bounds");
    }
    if (index === 0) {
      this.insertStart(value);
      return;
    }
    if (index === this.size) {
      this.insertEnd(value);
      return;
    }
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current!.next;
    }
    const newNode = new LinkedListNode(value);
    newNode.next = current!.next;
    current!.next = newNode;
    this.size++;
  }

  removeLast(): number {
    if (!this.head) {
      throw new Error("List is empty");
    }
    let current = this.head;
    let previous = current;
    while (current.next) {
      previous = current;
      current = current.next;
    }
    previous.next = null;
    this.size--;
    return current.data;
  }
  removeFirst(): number {
    if (!this.head) {
      throw new Error("List is empty");
    }
    const current = this.head;
    this.head = current.next;
    this.size--;
    return current.data;
  }
  removeAt(index: number): number {
    if (index < 0 || index >= this.size) {
      throw new Error("Index out of bounds");
    }
    if (index === 0) {
      return this.removeFirst();
    }
    if (index === this.size - 1) {
      return this.removeLast();
    }
    let current = this.head;
    let previous = current;
    for (let i = 0; i < index; i++) {
      previous = current;
      current = current!.next;
    }
    previous!.next = current!.next;
    this.size--;
    return current!.data;
  }
  search(value: number): number {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.data === value) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }
  get(index: number): number {
    if (index < 0 || index >= this.size) {
      throw new Error("Index out of bounds");
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current!.next;
    }

    return current!.data;
  }

  getAll(): number[] {
    const result: number[] = [];
    if (!this.head) {
      return result;
    }
    let current = this.head;
    while (current !== null) {
      result.push(current.data);
      current = current.next;
    }
    return result;
  }
}
