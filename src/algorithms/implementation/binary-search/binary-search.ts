import { BinarySearch } from "../../abstract/binary-search";

export class BinarySearchImplementation implements BinarySearch {
  search(array: number[], target: number, left: number, right: number): number {
    while (left <= right) {
      const mid = Math.floor(left + (right - left) / 2);
      console.log(mid);

      if (array[mid] === target) {
        return mid;
      }

      if (array[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return -1;
  }
}
