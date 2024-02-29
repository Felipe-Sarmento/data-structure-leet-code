import { BinarySearch } from "../../abstract/binary-search";
import { BinarySearchRecursiveImplementation } from "./binary-search.recursive";

let binarySearch: BinarySearch;

beforeAll(() => {
  binarySearch = new BinarySearchRecursiveImplementation();
});

describe("Binary Search", () => {
  it("should return the index of the number", () => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(binarySearch.search(nums, 4, 0, nums.length - 1)).toEqual(3);
  });

  it("should return the index of the number", () => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(binarySearch.search(nums, 7, 0, nums.length - 1)).toEqual(6);
  });

  it("should return -1 if the number is not in the list", () => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(binarySearch.search(nums, 10, 0, nums.length - 1)).toEqual(-1);
  });
});
