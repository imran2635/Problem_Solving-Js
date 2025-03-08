// [10, 20, 7, 99, 2, 15, 3, 10]// find the maximum value in the array

function findMinimum(array) {
  let minValue = array[0];
  for (let i = 1; i < array.length; i++) {
    if (minValue >= array[i]) {
      minValue = minValue;
    } else {
      minValue = array[i];
    }
  }
  return minValue;
}

console.log(
  "Minimum value: " + findMinimum([2, 20, 7, 99, 2, 15, 3, 0, 400, 22])
);
