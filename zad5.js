// 5. Create a function that:
// a. Checks if a given number is a prime number

function isPrime(number) {
  if (number <= 1) {
    return console.log("It is a prime number");
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return console.log("It is NOT a prime number");
    }
  }
  return console.log("It is a prime number");
}
isPrime(13);

// b. Takes in n (numbers) as a parameter and returns first n prime numbers
function firstPrimes(numberOfPrimes) {
  let arr = [];
  let number = 1;
  do {
    if (number <= 1) {
      arr.push(number);
      number += 1;
      continue;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        number += 1;
        continue;
      }
    }
    arr.push(number);
    number += 1;
  } while (arr.length !== numberOfPrimes);
  console.log(arr);
}
firstPrimes(40);
