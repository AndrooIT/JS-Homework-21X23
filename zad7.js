// Implement selection sort
let exampleArray = [1, 6, 23, 8, 4, 8, 3, 7];

function selectionSort(arr = exampleArray) {
  let sortedArr = [];
  let smallest = 0;
  let iterations=arr.length;
  for (let i = 0; i < iterations; i++) {
    smallest = arr[0];
    for (let j = 0; j < arr.length; j++) {
      arr[j] < smallest ? (smallest = arr[j]) : null;
    }
    sortedArr.push(smallest);
    arr.splice(arr.indexOf(smallest), 1);
  }
  return console.log(sortedArr);
}
selectionSort([6,2,5,7,8,9,1,5,11]);
