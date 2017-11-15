function updateInventory(arr1, arr2) {
<<<<<<< HEAD
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
=======
    // All inventory must be accounted for or you're fired!
  var retArr = [];
    arr2.forEach(function(val){
      var tempArr = [];
      tempArr = arr1.filter(function(element){
        return element[1] === val[1];
      });
      if(tempArr === []){
        retArr.push(val);
      } else {
        retArr.push([tempArr[0]+val[0], val[1]]);
      }

    });
    return retArr;
>>>>>>> e6eb0cafb1a27e44cb5435b5edf82a84521213d9
}

// Example inventory lists
var curInv = [
<<<<<<< HEAD
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
=======
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
>>>>>>> e6eb0cafb1a27e44cb5435b5edf82a84521213d9
