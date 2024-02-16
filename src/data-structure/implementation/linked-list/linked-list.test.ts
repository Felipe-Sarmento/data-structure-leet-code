import { LinkedList } from "./linked-list";

describe("Linked List", () => {
  it("should insert two numbers and check the last one", () => {
    const linkedList = new LinkedList();
    linkedList.insertEnd(1);
    linkedList.insertEnd(2);
    expect(linkedList.getAll()).toEqual([1, 2]);
  });

  it("should insert two numbers and check the first one", () => {
    const linkedList = new LinkedList();
    linkedList.insertEnd(1);
    linkedList.insertStart(2);
    expect(linkedList.getAll()).toEqual([2, 1]);
  });

  it("should insert a number in the middle of the list", () => {
    const linkedList = new LinkedList();
    linkedList.insertEnd(1);
    linkedList.insertEnd(2);
    linkedList.insertEnd(4);
    linkedList.insertEnd(5);

    linkedList.insertAt(2, 3);

    expect(linkedList.getAll()).toEqual([1, 2, 3, 4, 5]);
  });

  it("should remove the last number", () => {
    const linkedList = new LinkedList();
    linkedList.insertEnd(1);
    linkedList.insertEnd(2);
    linkedList.insertEnd(3);

    expect(linkedList.removeLast()).toBe(3);
    expect(linkedList.getAll()).toEqual([1, 2]);
  });

  it("should remove the first number", () => {
    const linkedList = new LinkedList();
    linkedList.insertEnd(1);
    linkedList.insertEnd(2);
    linkedList.insertEnd(3);

    expect(linkedList.removeFirst()).toBe(1);
    expect(linkedList.getAll()).toEqual([2, 3]);
  });

  it("should remove a number in the middle of the list", () => {
    const linkedList = new LinkedList();
    linkedList.insertEnd(1);
    linkedList.insertEnd(2);
    linkedList.insertEnd(3);
    linkedList.insertEnd(4);
    linkedList.insertEnd(5);

    expect(linkedList.removeAt(2)).toBe(3);
    expect(linkedList.getAll()).toEqual([1, 2, 4, 5]);
  });

  it("should fail to remove from empty list", () => {
    const linkedList = new LinkedList();
    expect(() => linkedList.removeLast()).toThrow("List is empty");
    expect(() => linkedList.removeFirst()).toThrow("List is empty");
    expect(() => linkedList.removeAt(0)).toThrow("List is empty");
  });

  it("should search for a number in the list", () => {
    const linkedList = new LinkedList();
    linkedList.insertEnd(1);
    linkedList.insertEnd(2);
    linkedList.insertEnd(3);
    linkedList.insertEnd(4);
    linkedList.insertEnd(5);

    expect(linkedList.search(3)).toBe(2);
    expect(linkedList.search(6)).toBe(-1);
  });

  it("should get a number from the list", () => {
    const linkedList = new LinkedList();
    linkedList.insertEnd(1);
    linkedList.insertEnd(2);
    linkedList.insertEnd(3);
    linkedList.insertEnd(4);
    linkedList.insertEnd(5);

    expect(linkedList.get(2)).toBe(3);
  });
});
