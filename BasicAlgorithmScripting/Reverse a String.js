function reverseString(str) {
  var tempArr = [];
  for(var i = 0; i < str.length; i++){
    tempArr.push(str[i]);
  }
 
  return tempArr.reverse().join('');
}