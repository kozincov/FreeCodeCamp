function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line
const newArr = anim.slice(beginSlice, endSlice);
console.log(newArr);
return newArr;

  // Only change code above this line
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);