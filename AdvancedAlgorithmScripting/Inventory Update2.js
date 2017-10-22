function updateInventory(arr1, arr2) {
  // All inventory must be accounted for or you're fired!
  var retArr = arr1;

  arr2.forEach(function (arr2Val, index) {
    var arr1Id = arr1.findIndex(function (arr1Val) {
      return arr2Val[1] === arr1Val[1];
    });
    if (arr1Id < 0) {
      retArr.push(arr2Val);
    } else {
      retArr[arr1Id] = [arr1[arr1Id][0] + arr2Val[0], arr1[arr1Id][1]];
    }
  });
  /* another way to update inventory
    for(var i = 0; i < arr2.length; i++){
      for(var j = 0; j < arr1.length; j++){
        if(arr2[i][1] === arr1[j][1]){
          retArr[j][0] = arr2[i][0] + arr1[j][0];
          break;
        } else {
          if(j === arr1.length - 1){
            retArr.push(arr2[i]);
            break;
          }
        }
      }
    }
    */

  retArr.sort(function (a, b) {
    var nameA = a[1].toUpperCase(); // ignore upper and lowercase
    var nameB = b[1].toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });

  return retArr;
}