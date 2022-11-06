function factorial(n){
    if(n === 0 || n === 1) return 1
    else{
        return n * factorial(n - 1)
    }
}

// Memoizing the results
const memoize = (fn) => {
    let cache = {};
    return (...args) => {
      let n = args[0];
      if (n in cache) {
        return cache[n];
      }
      else {
        let result = fn(n);
        cache[n] = result;
        return result;
      }
    }
  }
  const factorial = memoize(
    (x) => {
      if (x === 0) {
        return 1;
      }
      else {
        return x * factorial(x - 1);
      }
    })