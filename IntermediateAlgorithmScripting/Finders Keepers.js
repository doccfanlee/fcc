
function findElement(arr, func) {
  
  var num = arr.filter(func);

  return num[0];
}