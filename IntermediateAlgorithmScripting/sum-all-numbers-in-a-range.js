function sumAll(arr) {
  arr.sort((a,b) => a - b);
  let result = 0;
  for(let i = arr[0]; i <= arr[1]; i++){
     console.log(result = result + i);
  }
  return result;
}

console.log(sumAll([1, 4]));
