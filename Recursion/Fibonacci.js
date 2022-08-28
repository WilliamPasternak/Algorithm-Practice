function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}
// Base Case: N <= 2 is the first 2 numbers in the Fibonacci Sequence
// Recursive Call: n is the sum of 2 numbers immediately before it (n -1) & (n -2)