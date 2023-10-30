// Create a function that takes in a n (number) as a parameter and returns first n Fibonacci numbers - use recursion
// 

function fibonacci(n) {
    switch (n){
        case 0:
            return [];
        case 1:
            return [0];
        case 2:
            return [0, 1];
        default:
        const fibSeries = fibonacci(n - 1);
      fibSeries.push(fibSeries[fibSeries.length - 1] + fibSeries[fibSeries.length - 2]);
      return fibSeries;
    }   
  }
  
  console.log(fibonacci(10));

  