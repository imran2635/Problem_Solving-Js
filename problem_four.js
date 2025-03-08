// findMinimum([2, 20, 7, 99, 2, 15, 3, 0, 400, 22], "max/min")
findValue([2, 20, 7, 99, 2, 15, 3, 0, 400, 22], "max");
findValue([2, 20, 7, 99, 2, 15, 3, 0, 400, 22], "min");

// findMinAndMax([2, 20, 7, 99, 2, 15, 3, 0, 400, 22]);

function findValue(array, type) {
  let value = array[0];
  for (let i = 1; i < array.length; i++) {
    if (type == "max") {
      if (value >= array[i]) {
        value = value;
      } else {
        value = array[i];
      }
    } else {
      if (value <= array[i]) {
        value = value;
      } else {
        value = array[i];
      }
    }
  }

  console.log("Value: " + value);
  return value;
}
