import { List } from "../../abstract/list";

export class FixedArray implements List<number> {
  array: number[];

  private size: number;

  constructor(initialLength: number) {
    this.array = new Array(initialLength);
    this.size = 0;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  insertEnd(value: number): void {
    if (this.size === this.array.length) {
      throw new Error("Array is full");
    } else {
      this.array[this.size] = value;
      this.size++;
    }
  }

  insertStart(value: number): void {
    if (this.size === this.array.length) {
      throw new Error("Array is full");
    } else {
      for (let i = this.size; i > 0; i--) {
        this.array[i] = this.array[i - 1];
      }
      this.array[0] = value;
      this.size++;
    }
  }

  insertAt(index: number, value: number): void {
    if (this.size === this.array.length) {
      throw new Error("Array is full");
    } else {
      for (let i = this.size; i > index; i--) {
        this.array[i] = this.array[i - 1];
      }
      this.array[index] = value;
      this.size++;
    }
  }

  removeLast(): number {
    if (this.size === 0) {
      throw new Error("Array is empty");
    } else {
      this.size--;
      const deleted = this.array[this.size];
      this.array = this.array.slice(0, this.size);
      return deleted;
    }
  }

  removeFirst(): number {
    if (this.size === 0) {
      throw new Error("Array is empty");
    } else {
      const value = this.array[0];
      this.size--;
      this.array = this.array.slice(1, this.size + 1);
      return value;
    }
  }

  removeAt(index: number): number {
    if (this.size === 0) {
      throw new Error("Array is empty");
    } else {
      const value = this.array[index];
      this.size--;
      this.array = this.array
        .slice(0, index)
        .concat(this.array.slice(index + 1, this.size + 1));
      return value;
    }
  }

  search(value: number): number {
    for (let i = 0; i < this.size; i++) {
      if (this.array[i] === value) {
        return i;
      }
    }
    return -1;
  }

  get(index: number): number {
    if (index < 0 || index >= this.size) {
      throw new Error("Index out of bounds");
    }
    return this.array[index];
  }

  getAll() {
    return this.array;
  }
}
