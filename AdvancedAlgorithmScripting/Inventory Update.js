function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!

    var curInvObj = {};
    var newInvObj = {};
    var retArr = [];

    for (var i = 0; i < arr1.length; i++) {
        curInvObj[arr1[i][1]] = arr1[i][0];
    }
    for (var i = 0; i < arr2.length; i++) {
        newInvObj[arr2[i][1]] = arr2[i][0];
    }

    for (var prop in newInvObj) {
        if (curInvObj.hasOwnProperty(prop)) {
            curInvObj[prop] = curInvObj[prop] + newInvObj[prop];
        } else {
            curInvObj[prop] = newInvObj[prop];
        }
    }

    for (var prop in curInvObj) {
        retArr.push(prop);
    }
    var sortedArr = retArr.sort();

    retArr = sortedArr.map(function (prop) {
        return [curInvObj[prop], prop];
    });

    return retArr;
}