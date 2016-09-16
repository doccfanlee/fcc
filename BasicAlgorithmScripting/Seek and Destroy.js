function destroyer(arr) {
  // Remove all the values
  var args = Array.prototype.slice.call(arguments, 1);
  console.log('args is '+ args);
  var orgArr = arguments[0];
  console.log('arguments[0] is ' + orgArr);
  var retArr = orgArr.filter(function(element, index){
    if(!args.includes(element)){
      return element;
    }
  });
  console.log("retArr is " + retArr);
  return retArr;
}