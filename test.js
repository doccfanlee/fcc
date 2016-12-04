function updateInventory(arr1, arr2) {
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
}

// Example inventory lists
var curInv = [
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