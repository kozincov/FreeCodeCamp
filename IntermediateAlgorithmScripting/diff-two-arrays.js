function diffArray(arr1, arr2) {
  var newArr = [];
  function addArr(one,two){
  for(var i = 0; i < one.length; i++){
  if(two.indexOf(one[i]) === -1){
    newArr.push(one[i]);
  }
  }
  }
addArr(arr1,arr2);
addArr(arr2,arr1);
  return newArr;
}

console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]));