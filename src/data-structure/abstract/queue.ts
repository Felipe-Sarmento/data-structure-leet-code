export interface Queue<T> {
  enqueue(value: T): void;

  dequeue(): T;

  peek(): T;

  isEmpty(): boolean;
}
