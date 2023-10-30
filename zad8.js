// Implement merge sort

let exampleArray = [1, 6, 23, 8, 4, 8, 3, 7];

function toSingleArrays(arr) {
    if (arr.length <= 1) {
        return [arr];
    }
    let index = Math.floor(arr.length / 2);
    let arr1 = arr.slice(0, index);
    let arr2 = arr.slice(index);
    console.log(arr1 + '  ' + arr2);
    return toSingleArrays(arr1).concat(toSingleArrays(arr2));
}

function merge(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);
    console.log(left + '  ' + right);
    return mergeArrays(merge(left), merge(right));
}

function mergeArrays(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i][0] < arr2[j][0]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    return result.concat(arr1.slice(i), arr2.slice(j));
}

let singleArrays = toSingleArrays(exampleArray);
let mergedArray = merge(singleArrays);
console.log(mergedArray);

