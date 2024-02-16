export interface List<T> {
  isEmpty(): boolean;

  insertEnd(value: T): void;

  insertStart(value: T): void;

  insertAt(index: number, value: T): void;

  removeLast(): T;

  removeFirst(): T;

  removeAt(index: number): T;

  search(value: T): number;

  get(index: number): T;

  getAll(): T[];
}
