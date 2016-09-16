function findLongestWord(str) {

  var tempArr = str.split(/\s/);
  
  var maxLength = 0;
  tempArr.forEach(function(current){
    maxLength = Math.max(maxLength, current.length);
  });
  
  return maxLength;
}