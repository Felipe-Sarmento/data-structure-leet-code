import { BinarySearch } from "../../abstract/binary-search";

export class BinarySearchRecursiveImplementation implements BinarySearch {
  search(array: number[], target: number, left: number, right: number): number {
    if (left > right) {
      return -1;
    }

    const mid = Math.floor(left + (right - left) / 2);

    if (array[mid] === target) {
      return mid;
    }

    if (array[mid] < target) {
      return this.search(array, target, mid + 1, right);
    } else {
      return this.search(array, target, left, mid - 1);
    }
  }
}
