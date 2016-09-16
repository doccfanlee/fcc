function where(arr, num) {
  // Find my place in this sorted array.
  if(!arr.includes(num)){
    arr.push(num);
  }
  
  console.log("arr is " + arr);

  var retArr = arr.sort(compareNumbers).indexOf(num,0);
  console.log("After sort arr is " + arr);
   console.log("retArr is " + retArr);
  return retArr;
}

function compareNumbers(a, b) {
  return a - b;
}