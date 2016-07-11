/*
* @Author: Karlo Espiritu
* @Date:   2016-07-06 23:55:09
* @Last Modified by:   Karlo Espiritu
* @Last Modified time: 2016-07-07 00:00:08
*/

'use strict';

function quickSort(inputArr) {

  let len   = inputArr.length,
      left  = [],
      right = [],
      pivot

  if (len === 0) {
      return inputArr;
  }

  pivot = inputArr[0];

  // partition values into upper and lower
  // start at second element, since we are using first element as the pivot
  for (let i = 1; i < len; i++) {

      if (inputArr[i] <= pivot) {
          left.push(inputArr[i]);
      }
      else {
          right.push(inputArr[i]);
      }

  }

  left  = quickSort(left);
  right = quickSort(right);

  return left.concat(pivot, right);

};

var myArray = [34, 24, 1, 16, 81, 55, 90, 3, 4];

// [1, 2, 3, 4, 4, 5, 6, 8, 9]
console.log(JSON.stringify(quickSort(myArray)));