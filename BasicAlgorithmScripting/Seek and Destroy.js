/**orignal version
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
*/

function destroyer(arr) {
  // Remove all the values
 var args = Array.prototype.slice.call(arguments);
  args.splice(0, 1);
  console.log(arr);
  return arr.filter(function(element) {
    return args.indexOf(element) === -1;
  });
}