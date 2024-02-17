export interface Queue<T> {
  enqueue(value: T): void;

  dequeue(): T;

  peek(): T;

  isEmpty(): boolean;
}

export interface DoubleEndedQueue<T> extends Queue<T> {
  enqueueFront(value: T): void;

  dequeueBack(): T;
}
