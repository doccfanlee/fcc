function steamroller(arr) {
  // I'm a steamroller, baby
  function flattenFn(toFlattenArr){
    return toFlattenArr.reduce(function(prev, current){
      return prev.concat(Array.isArray(current)? flattenFn(current):current);
    },[]);
  }
  
  var retArr = flattenFn(arr);
  
  return retArr;
}