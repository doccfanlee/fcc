function permAlone(str) {
  
  var num = 0;
  
  function PermutationGenerator(pre, str){
  var n = str.length;
  if (n === 0) {
    if (pre.match(/([a-z])\1+/) === null)
      num++;
  } else {
    for(var i = 0; i < n; i++){
      PermutationGenerator(pre + str.charAt(i), str.substring(0, i) + str.substring(i+1));
    }
  }
}
  PermutationGenerator("", str);
  return num;
}
