import { Stack } from "../../abstract/stack";

export class StackArray implements Stack<number> {
  private items: number[] = [];

  push(value: number): void {
    this.items.push(value);
  }
  pop(): number {
    if (this.items.length === 0) throw new Error("Stack is empty");

    return this.items.pop();
  }
  peek(): number {
    if (this.items.length === 0) throw new Error("Stack is empty");

    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}
