function slasher(arr, howMany) {
  // it doesn't always pay to be first

  if (arr.length <= howMany ){
    return [];
  }
  
  var retArr = arr.filter(function(element, index){
    return index >= howMany;
  });
  return retArr;
}