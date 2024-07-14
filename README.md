# TS-Playground Script Usage Guide

## Requirements

- [Bun](https://bun.sh/)

## How to Use

1. **Place your TypeScript files** in the `./problems` directory. Ensure they export a default function for the script to execute.

2. **Run the script** using the following command structure:

   ```sh
   bun run index.ts <file-name-without-extension> [arguments...]

## Example

1. A function exported as default (+ you have to use the "parse" function for given arguments) :
    ```ts
    import { parse } from "..";

    function twoSum(nums: number[], target: number): number[] {
      nums = parse(nums);
      target = parse(target);
      const indices = new Map<number, number>();

      for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (indices.has(complement)) return [indices.get(complement)!, i];
        indices.set(nums[i], i);
      }
    
      return [];
    }

    export default twoSum;
    

2. Usage in the terminal
   
    ```sh
    bun run index.ts twoSum "[1, 2, 3, 4]" "6"
