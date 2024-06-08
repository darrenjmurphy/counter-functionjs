function createCounter(n) {
    let count = n;
    return function() {
      return count++;
    };
  }
  
  // Example usage:
  const counter = createCounter(5);
  console.log(counter()); // 5
  console.log(counter()); // 6
  console.log(counter()); // 7
  console.log(counter()); // 8