// 1. Array exercises:
// a. example array: [1,6,23,8,4,8,3,7]
let exampleArray = [1,6,23,8,4,8,3,7];
console.log ('a). Nasza przykładowa tablica to: ' + exampleArray)
// b. Create a function that takes in an array of numbers and returns sum of all elements
function sumEl(eArray){
    let sum=0;
    for (let el of eArray){
        sum+=el;
        }
    console.log("b). Sum of all elements "+ eArray+" is: "+sum)
}
sumEl(exampleArray);
// c. Create a function that takes in an array of numbers and returns sum of first and last element
const sumEdges=(eArray)=>console.log("c). Sum of first and last element: "+ eArray[0]+" and "+ eArray[eArray.length-1]+" is "+ Number(eArray[0]+eArray[eArray.length-1]));
sumEdges(exampleArray);
// d. Create a function that takes in an array and returns its copy in reverse order (DON’T use .reverse() method!)
function reverseArray(eArray){
let reversedArray=[];
    for (let i=0;i<eArray.length;i++){
    reversedArray.push(eArray[eArray.length-1-i]);
    }
console.log("d). Reversed array is: "+reversedArray);
}
reverseArray(exampleArray);
// e. Create a function that takes two parameters - array of numbers, and number of attempts. 
// Choose random numbers from the array based on the number of attempts and return the lowest among them.
function lowestFromAttempts(eArray, attempts=3){
let randomNumbArr=[];
let lowest = eArray[0];
for (let i=0;i<attempts;i++){
    randomNumbArr.push(eArray[Math.floor(Math.random()*eArray.length)]);
    lowest>randomNumbArr[i]?lowest=randomNumbArr[i]:null;
}
console.log("e). The lowest value in the array "+randomNumbArr+" is: "+ lowest);
}
lowestFromAttempts(exampleArray, 4);
// f. Create a function that takes in an array and returns it in random order
function mixArray(eArray){
    let mixedArray=[...Array(eArray.length)];
    let candidate=Math.floor(Math.random()*eArray.length);
   for (let i=0; i<eArray.length; i++)
    {if (mixedArray[candidate]==undefined)
        {mixedArray[candidate]=eArray[i]} 
        else{
           do {candidate=Math.floor(Math.random()*eArray.length)}
           while (mixedArray[candidate]!==undefined);
           mixedArray[candidate]=eArray[i]
        };
    }
console.log('f). Array in random order is: '+ mixedArray);
}
mixArray(exampleArray);

// g. Calculate the sum of the odd items [1,6,23,8,4,98,3,7,3,98,4,98]
function calculateOddItems(eArray){
let oddArray = [];
let sumOdd=0;
for (el of eArray) {
    el%2!==0?oddArray.push(el):null;
}
for (el of oddArray) {
sumOdd+=el;
}
console.log('g). Sum of odd items in an array is: '+ sumOdd);
}
calculateOddItems(exampleArray);
// h. With  a given start value of 0. 
// Iterate the array and add even items and subtract odd ones. [1,6,23,8,4,98,3,7,3,98,4,98]
function unusefull () {
    let longarray = [1,6,23,8,4,98,3,7,3,98,4,98];
    let result = 0;
   
    for (el of longarray) {
        el%2!==0?result-=el:result+=el;
    }
    console.log('h). Adding even items and subtract odd ones in an array '+longarray+' is: '+ result);
    }    
unusefull();