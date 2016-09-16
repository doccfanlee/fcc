function mutation(arr) {
  var left = arr[0].toLowerCase();
  var right = arr[1].toLowerCase();
  console.log('left string is ' + left);
  console.log('right string is ' + right);
  
  for(var i = 0; i < right.length; i++) {
    if(left.indexOf(right[i]) === -1) {
      console.log(right[i]);
      return false;
    }
  }
  return true;
}