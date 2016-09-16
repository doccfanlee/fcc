function palindrome(str) {
  // Remove non-alphanumeric characters
  console.log("str: " +str);
  var normalizedStr = str.replace(/[^0-9A-Za-z]/g, '').toLowerCase();
  console.log("normalizedStr: " +normalizedStr);
  
  var ret = true;
  for ( var i = 0; i <= normalizedStr.length-1 -i; i++) {
     if (normalizedStr[i] !== normalizedStr[normalizedStr.length-1 -i]){
       ret = false;
       break;
     }      
  }
  
  return ret;
}
