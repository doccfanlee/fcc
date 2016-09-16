
function diffArray(arr1, arr2) {
  var newArr = [];

  newArr = arr1.filter(function(val){
    return !arr2.includes(val);
  });

  return newArr.concat(arr2.filter(function(val){
    return !arr1.includes(val);
  }));
    
}