import { DynamicArray } from "./dynamic-array";

describe("Dynamic Array", () => {
  it("should insert two numbers and check the last one", () => {
    const dynamicArray = new DynamicArray();
    dynamicArray.insertEnd(1);
    dynamicArray.insertEnd(2);
    expect(dynamicArray.getAll()).toEqual([1, 2]);
  });

  it("should insert two numbers and check the first one", () => {
    const dynamicArray = new DynamicArray();
    dynamicArray.insertEnd(1);
    dynamicArray.insertStart(2);
    expect(dynamicArray.getAll()).toEqual([2, 1]);
  });

  it("should insert a number in the middle of the array", () => {
    const dynamicArray = new DynamicArray();
    dynamicArray.insertEnd(1);
    dynamicArray.insertEnd(2);
    dynamicArray.insertEnd(4);
    dynamicArray.insertEnd(5);

    dynamicArray.insertAt(2, 3);

    expect(dynamicArray.getAll()).toEqual([1, 2, 3, 4, 5]);
  });

  it("should remove the last number", () => {
    const dynamicArray = new DynamicArray();
    dynamicArray.insertEnd(1);
    dynamicArray.insertEnd(2);
    dynamicArray.insertEnd(3);

    expect(dynamicArray.removeLast()).toBe(3);
    expect(dynamicArray.getAll()).toEqual([1, 2]);
  });

  it("should remove the first number", () => {
    const dynamicArray = new DynamicArray();
    dynamicArray.insertEnd(1);
    dynamicArray.insertEnd(2);
    dynamicArray.insertEnd(3);

    expect(dynamicArray.removeFirst()).toBe(1);
    expect(dynamicArray.getAll()).toEqual([2, 3]);
  });

  it("should remove a number in the middle of the array", () => {
    const dynamicArray = new DynamicArray();
    dynamicArray.insertEnd(1);
    dynamicArray.insertEnd(2);
    dynamicArray.insertEnd(3);
    dynamicArray.insertEnd(4);
    dynamicArray.insertEnd(5);

    expect(dynamicArray.removeAt(2)).toBe(3);
    expect(dynamicArray.getAll()).toEqual([1, 2, 4, 5]);
  });

  it("should fail to remove from empty array", () => {
    const dynamicArray = new DynamicArray();
    expect(() => dynamicArray.removeLast()).toThrow("Array is empty");
    expect(() => dynamicArray.removeFirst()).toThrow("Array is empty");
    expect(() => dynamicArray.removeAt(0)).toThrow("Array is empty");
  });

  it("should search for a number in the array", () => {
    const dynamicArray = new DynamicArray();
    dynamicArray.insertEnd(1);
    dynamicArray.insertEnd(2);
    dynamicArray.insertEnd(3);
    dynamicArray.insertEnd(4);
    dynamicArray.insertEnd(5);

    expect(dynamicArray.search(3)).toBe(2);
    expect(dynamicArray.search(6)).toBe(-1);
  });

  it("should get a number from the array", () => {
    const dynamicArray = new DynamicArray();
    dynamicArray.insertEnd(1);
    dynamicArray.insertEnd(2);
    dynamicArray.insertEnd(3);
    dynamicArray.insertEnd(4);
    dynamicArray.insertEnd(5);

    expect(dynamicArray.get(2)).toBe(3);
  });
});
