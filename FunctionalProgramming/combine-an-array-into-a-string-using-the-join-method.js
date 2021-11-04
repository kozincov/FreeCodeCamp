function sentensify(str) {
  // Only change code below this line
  let newArr = str.split(/\W/).join(" ");
  return newArr;
  // Only change code above this line
}

console.log(sentensify("May-the-force-be-with-you"));
