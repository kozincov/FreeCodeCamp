const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
let newArr = arr.slice().sort((a,b) => a - b);
console.log(newArr);
return newArr;
  // Only change code above this line
}

nonMutatingSort(globalArray);
