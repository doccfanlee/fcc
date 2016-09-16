function factorialize(num) {
  var ret = 1;
  for(var i = 2; i <= num; i++){
    ret *= i;
  }
  return ret;
}
