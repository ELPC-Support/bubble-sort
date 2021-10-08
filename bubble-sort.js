/**
 * Copyright (c) Epic Loot
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";
const assert = require('assert').strict;

 /**
  * Uses a bubble sort algorithm to sort an array in place.
  * https://en.wikipedia.org/wiki/Bubble_sort 
  * @param {[String]} array 
  */
function bubbleSort(array) {

  //  Step 1: set the table
  let outer = array.length - 1;
  let inner = 0;
  let temp, left, right = "";

  while (outer > 0) {  // Step 2: continue the outer loop?

    // Step 3: reset
    inner = 0;

    while (inner < outer) { // Step 4: continue the inner loop?

      // Step 5: update left and right
      left = array[inner];
      right = array[inner + 1];

      // Step 6: swap?
      if (left > right) {
        temp = left;
        array[inner] = right;
        array[inner+1] = temp;
      }

      // Step 7: march inner right
      inner += 1;
    } 
    
    // Step  8: march outer left
    outer -= 1;
  } 
}

/**
 * Tests
 */

// ----------------
// Test 1: Reversed
// ----------------

// create the reversed list
let reversed = ["H", "G", "F", "E", "D", "C", "B", "A"];
console.log("reversed list", reversed);

// sort the reversed list
bubbleSort(reversed);
console.log("reversed list sorted by bubble", reversed);
assert.deepEqual(reversed, ["A", "B", "C", "D", "E", "F", "G", "H"], "bubble sort failed on reversed list");

// -----------------
// Test 2: Scrambled
// -----------------

// create the scrambled list
let scrambled = ["E", "H", "D", "C", "G", "A", "F", "B"];
console.log("scrambled list", scrambled);

// Sort the scrambled list
bubbleSort(scrambled);
console.log("scrambled list sorted by bubble", scrambled);
assert.deepEqual(scrambled, ["A", "B", "C", "D", "E", "F", "G", "H"], "bubble sort failed on scrambled list");

// --------------
// Test 3: Sorted
// --------------

// create the sorted list
let sorted = ["A", "B", "C", "D", "E", "F", "G", "H"];
console.log("sorted list", sorted);

// Sort the sorted list
bubbleSort(sorted);
console.log("sorted list sorted by bubble", sorted);
assert.deepEqual(sorted, ["A", "B", "C", "D", "E", "F", "G", "H"], "bubble sort failed on sorted list");

// -----------------
// Test 4: Misplaced
// -----------------

// create the misplaced list
let misplaced = ["A", "B", "D", "E", "F", "C", "G", "H"];
console.log("misplaced list", misplaced);

// Sort the misplaced list
bubbleSort(misplaced);
console.log("misplaced list sorted by bubble", misplaced);
assert.deepEqual(misplaced, ["A", "B", "C", "D", "E", "F", "G", "H"], "bubble sort failed on misplaced list");

// -----------------
// Test 5: Less
// -----------------

// create the less list
let less = ["F", "C", "H", "G"];
console.log("less list", less);

// Sort the less list
bubbleSort(less);
console.log("less list sorted by bubble", less);
assert.deepEqual(less, ["C", "F", "G", "H"], "bubble sort failed on less list");
