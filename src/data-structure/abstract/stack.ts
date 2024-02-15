export interface Stack<T> {
  push(value: T): void;

  pop(): T;

  peek(): T;

  isEmpty(): boolean;
}
