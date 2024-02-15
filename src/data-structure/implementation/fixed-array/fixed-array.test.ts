import { FixedArray } from "./fixed-array";

describe("Fixed Array", () => {
  it("should insert two numbers and check the last one", () => {
    const fixedArray = new FixedArray(5);
    fixedArray.insertEnd(1);
    fixedArray.insertEnd(2);
    expect(fixedArray.getAll()).toEqual([1, 2]);
  });

  it("should insert two numbers and check the first one", () => {
    const fixedArray = new FixedArray(2);
    fixedArray.insertEnd(1);
    fixedArray.insertStart(2);
    expect(fixedArray.getAll()).toEqual([2, 1]);
  });

  it("should insert a number in the middle of the array", () => {
    const fixedArray = new FixedArray(5);
    fixedArray.insertEnd(1);
    fixedArray.insertEnd(2);
    fixedArray.insertEnd(4);
    fixedArray.insertEnd(5);

    fixedArray.insertAt(2, 3);

    expect(fixedArray.getAll()).toEqual([1, 2, 3, 4, 5]);
  });

  it("should fail to insert in full array", () => {
    let fixedArray = new FixedArray(0);
    expect(() => fixedArray.insertEnd(1)).toThrow("Array is full");

    fixedArray = new FixedArray(1);
    fixedArray.insertEnd(1);
    expect(() => fixedArray.insertEnd(1)).toThrow("Array is full");
    expect(() => fixedArray.insertStart(1)).toThrow("Array is full");

    fixedArray = new FixedArray(2);
    fixedArray.insertEnd(1);
    fixedArray.insertEnd(3);

    expect(() => fixedArray.insertAt(1, 2)).toThrow("Array is full");
  });

  it("should remove the last number", () => {
    const fixedArray = new FixedArray(3);
    fixedArray.insertEnd(1);
    fixedArray.insertEnd(2);
    fixedArray.insertEnd(3);

    expect(fixedArray.removeLast()).toBe(3);
    expect(fixedArray.getAll()).toEqual([1, 2]);
  });

  it("should remove the first number", () => {
    const fixedArray = new FixedArray(5);
    fixedArray.insertEnd(1);
    fixedArray.insertEnd(2);
    fixedArray.insertEnd(3);

    expect(fixedArray.removeFirst()).toBe(1);
    expect(fixedArray.getAll()).toEqual([2, 3]);
  });

  it("should remove a number in the middle of the array", () => {
    const fixedArray = new FixedArray(5);
    fixedArray.insertEnd(1);
    fixedArray.insertEnd(2);
    fixedArray.insertEnd(3);
    fixedArray.insertEnd(4);
    fixedArray.insertEnd(5);

    expect(fixedArray.removeAt(2)).toBe(3);
    expect(fixedArray.getAll()).toEqual([1, 2, 4, 5]);
  });

  it("should fail to remove from empty array", () => {
    const fixedArray = new FixedArray(0);
    expect(() => fixedArray.removeLast()).toThrow("Array is empty");
    expect(() => fixedArray.removeFirst()).toThrow("Array is empty");
    expect(() => fixedArray.removeAt(0)).toThrow("Array is empty");
  });

  it("should search for a number in the array", () => {
    const fixedArray = new FixedArray(5);
    fixedArray.insertEnd(1);
    fixedArray.insertEnd(2);
    fixedArray.insertEnd(3);
    fixedArray.insertEnd(4);
    fixedArray.insertEnd(5);

    expect(fixedArray.search(3)).toBe(2);
    expect(fixedArray.search(6)).toBe(-1);
  });

  it("should get a number from the array", () => {
    const fixedArray = new FixedArray(5);
    fixedArray.insertEnd(1);
    fixedArray.insertEnd(2);
    fixedArray.insertEnd(3);
    fixedArray.insertEnd(4);
    fixedArray.insertEnd(5);

    expect(fixedArray.get(2)).toBe(3);
  });
});
