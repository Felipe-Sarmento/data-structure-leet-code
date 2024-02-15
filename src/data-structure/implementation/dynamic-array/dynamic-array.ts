import { List } from "../../abstract/list";

export class DynamicArray implements List<number> {
  array: number[];

  constructor() {
    this.array = [];
  }

  isEmpty(): boolean {
    return this.array.length === 0;
  }

  insertEnd(value: number): void {
    this.array.push(value);
  }

  insertStart(value: number): void {
    this.array = [value, ...this.array];
  }

  insertAt(index: number, value: number): void {
    this.array = this.array
      .slice(0, index)
      .concat([value])
      .concat(this.array.slice(index, this.array.length));
    this.array[index] = value;
  }

  removeLast(): number {
    if (this.array.length === 0) {
      throw new Error("Array is empty");
    } else {
      return this.array.pop() as number;
    }
  }

  removeFirst(): number {
    if (this.array.length === 0) {
      throw new Error("Array is empty");
    } else {
      return this.array.shift() as number;
    }
  }

  removeAt(index: number): number {
    if (this.array.length === 0) {
      throw new Error("Array is empty");
    } else {
      return this.array.splice(index, 1)[0];
    }
  }

  search(value: number): number {
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] === value) {
        return i;
      }
    }
    return -1;
  }

  get(index: number): number {
    if (index < 0 || index >= this.array.length) {
      throw new Error("Index out of bounds");
    }
    return this.array[index];
  }

  getAll() {
    return this.array;
  }
}
