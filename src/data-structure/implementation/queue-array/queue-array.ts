import { Queue } from "../../abstract/queue";

export class QueueArray implements Queue<number> {
  private items: number[] = [];

  enqueue(value: number): void {
    this.items.push(value);
  }
  dequeue(): number {
    if (this.isEmpty()) throw new Error("Queue is empty");

    return this.items.shift()!;
  }
  peek(): number {
    if (this.isEmpty()) throw new Error("Queue is empty");

    return this.items[0];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}
