import { DoublyLinkedList } from "./doubly-linked-list";

describe("Doubly Linked List", () => {
  it("should insert two numbers and check the last one", () => {
    const doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.insertEnd(1);
    doublyLinkedList.insertEnd(2);
    expect(doublyLinkedList.getAll()).toEqual([1, 2]);
  });

  it("should insert two numbers and check the first one", () => {
    const doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.insertEnd(1);
    doublyLinkedList.insertStart(2);
    expect(doublyLinkedList.getAll()).toEqual([2, 1]);
  });

  it("should insert a number in the middle of the list", () => {
    const doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.insertEnd(1);
    doublyLinkedList.insertEnd(2);
    doublyLinkedList.insertEnd(4);
    doublyLinkedList.insertEnd(5);

    doublyLinkedList.insertAt(2, 3);

    expect(doublyLinkedList.getAll()).toEqual([1, 2, 3, 4, 5]);
  });

  it("should remove the last number", () => {
    const doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.insertEnd(1);
    doublyLinkedList.insertEnd(2);
    doublyLinkedList.insertEnd(3);

    expect(doublyLinkedList.removeLast()).toBe(3);
    expect(doublyLinkedList.getAll()).toEqual([1, 2]);
  });

  it("should remove the first number", () => {
    const doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.insertEnd(1);
    doublyLinkedList.insertEnd(2);
    doublyLinkedList.insertEnd(3);

    expect(doublyLinkedList.removeFirst()).toBe(1);
    expect(doublyLinkedList.getAll()).toEqual([2, 3]);
  });

  it("should remove a number in the middle of the list", () => {
    const doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.insertEnd(1);
    doublyLinkedList.insertEnd(2);
    doublyLinkedList.insertEnd(3);
    doublyLinkedList.insertEnd(4);
    doublyLinkedList.insertEnd(5);

    expect(doublyLinkedList.removeAt(2)).toBe(3);
    expect(doublyLinkedList.getAll()).toEqual([1, 2, 4, 5]);
  });

  it("should fail to remove from empty list", () => {
    const doublyLinkedList = new DoublyLinkedList();
    expect(() => doublyLinkedList.removeLast()).toThrow("List is empty");
    expect(() => doublyLinkedList.removeFirst()).toThrow("List is empty");
    expect(() => doublyLinkedList.removeAt(0)).toThrow("List is empty");
  });

  it("should search for a number in the list", () => {
    const doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.insertEnd(1);
    doublyLinkedList.insertEnd(2);
    doublyLinkedList.insertEnd(3);
    doublyLinkedList.insertEnd(4);
    doublyLinkedList.insertEnd(5);

    expect(doublyLinkedList.search(3)).toBe(2);
    expect(doublyLinkedList.search(6)).toBe(-1);
  });

  it("should get a number from the list", () => {
    const doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.insertEnd(1);
    doublyLinkedList.insertEnd(2);
    doublyLinkedList.insertEnd(3);
    doublyLinkedList.insertEnd(4);
    doublyLinkedList.insertEnd(5);

    expect(doublyLinkedList.get(2)).toBe(3);
  });
});
