import { StackArray } from "./stack-array";

describe("Stack", () => {
  it("should insert two numbers and check the top one", () => {
    const stack = new StackArray();
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toEqual(2);
  });

  it("should pop the last number", () => {
    const stack = new StackArray();
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toEqual(2);
    expect(stack.peek()).toEqual(1);
  });

  it("should fail to remove from empty list", () => {
    const stack = new StackArray();
    stack.push(1);
    stack.push(2);

    stack.pop();
    stack.pop();

    expect(() => stack.pop()).toThrow("Stack is empty");
  });
});
