function binaryAgent(str) {
  var matchArr = str.match(/[01]+/g);
  var matchInt = matchArr.map(function(val){
    return String.fromCharCode(Number.parseInt(val,2));
  });
    
  return matchInt.join('');
}