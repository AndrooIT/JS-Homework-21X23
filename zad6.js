//Implement binary search
let exampleArray = [1,6,23,8,4,8,3,7];

function binarySearch(item, a=exampleArray){
  let itemPosition;
  a.sort((a,b)=>a-b);
  let indexDiv =0;
  do {
  indexDiv = Math.floor(a.length/2);
  a[indexDiv]==item?itemPosition=indexDiv:null;
  a[indexDiv]>item?a=a.slice(0,indexDiv):a=a.slice(indexDiv+1,a.lenght);
  }
  while (a.length>1);
  return itemPosition?console.log('Item znaleziono'):console.log('Itemu nie znaleziono')
}
binarySearch(5);