import { QueueLinkedList } from "./queue-linked-list";

describe("Queue", () => {
  it("should insert two numbers and check the top one", () => {
    const queue = new QueueLinkedList();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.peek()).toEqual(1);
  });

  it("should dequeue", () => {
    const queue = new QueueLinkedList();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toEqual(1);
    expect(queue.peek()).toEqual(2);
  });

  it("should fail to remove from empty list", () => {
    const queue = new QueueLinkedList();
    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toEqual(2);

    expect(() => queue.dequeue()).toThrow("Queue is empty");
  });
});
