
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!

    var curInvObj = {};
    var newInvObj = {};
    var retArr = [];

    for (var i = 0; i < arr1.length; i++){
        curInvObj[arr1[i][1]] = arr1[i][0];
    }
    for (var i = 0; i < arr2.length; i++){
        newInvObj[arr2[i][1]] = arr2[i][0];
    }

    for(var prop in newInvObj){
        if(curInvObj.hasOwnProperty(prop)){
            curInvObj[prop] = curInvObj[prop] + newInvObj[prop];
        } else {
            curInvObj[prop] = newInvObj[prop];
        }
    }

    for(var prop in curInvObj) {
        retArr.push(prop);
    }
    var sortedArr = retArr.sort();

    retArr = sortedArr.map(function(prop){
        return [curInvObj[prop], prop];
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

$(document).ready(function () {
    // Example cash-in-drawer array:
    // [["PENNY", 1.01],
    // ["NICKEL", 2.05],
    // ["DIME", 3.10],
    // ["QUARTER", 4.25],
    // ["ONE", 90.00],
    // ["FIVE", 55.00],
    // ["TEN", 20.00],
    // ["TWENTY", 60.00],
    // ["ONE HUNDRED", 100.00]]
    console.log(
        updateInventory(curInv, newInv)
    );
});