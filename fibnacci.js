// fibonacci series
// 0 1 1 2 3 5 8 13 21 34 55.......

function fibonnacci(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
    // [0, 1, 1, 2, 3]
    console.log(fib);
  }
  console.log(fib);
}

fibonnacci(11);
