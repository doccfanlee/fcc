function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var pi = 3.14159265;
    var retArr = [];
    arr.forEach(function (obj) {
        var tempObj = new Object();
        tempObj.name = obj.name;
        tempObj.orbitalPeriod = Math.round(2 * pi * Math.sqrt(Math.pow((earthRadius + obj.avgAlt), 3) / GM));
        retArr.push(tempObj);
    });

    return retArr;
}