function factorial(n) {
  if (n == 0) {
    return 1;
  }
  console.log(n);
  return n * factorial(n - 1);
  //   5* 4* 3 * 2 * factorial(1)
}

console.log(`Factorial result: ${factorial(5)}`);
