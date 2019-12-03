// CLOSE
// PREV
// NEXT
// easy
// codewriting
// 300
// You are given an array of integers representing coordinates of obstacles situated on a straight line.
// Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.
// Find the minimal length of the jump enough to avoid all the obstacles.
// Example
// For inputArray = [5, 3, 6, 7, 9], the output should be
// avoidObstacles(inputArray) = 4.
// Check out the image below for better understanding:
// Input/Output
// [execution time limit] 4 seconds (js)
// [input] array.integer inputArray
// Non-empty array of positive integers.
// Guaranteed constraints:
// 2 ≤ inputArray.length ≤ 1000,
// 1 ≤ inputArray[i] ≤ 1000.
// [output] integer
// The desired length.

const checkNoCollisions = (targets, jump) => targets.every((target) => !!(target % jump));

const avoidObstacles = (inputArray) => {
  const { length } = inputArray;
  let incrementor = 0;
  let jumpVal = false;
  while (!jumpVal) {
    if (checkNoCollisions(inputArray, incrementor)) {
      jumpVal = true;
      break;
    }
    incrementor += 1;
  }
  return incrementor;
};

console.log(avoidObstacles([5, 3, 6, 7, 9]));
