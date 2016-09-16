function sym(args) {

    var argsArr = [];
    for (var i = 0; i <= arguments.length; i++) {
        argsArr[i] = arguments[i];
    }

    function rmDup(arrDup) {
        var retSet = new Set(arrDup);
        return [...retSet];
    }

    function diffArray(arr1, arr2) {
        var newArr = [];
        newArr = arr1.filter(function (val) {
            return !arr2.includes(val);
        });
        return newArr.concat(arr2.filter(function (val) {
            return !arr1.includes(val);
        }));
    }

    function symDiff2(arrA, arrB) {
        var uniArrA = rmDup(arrA);
        var uniArrB = rmDup(arrB);
        return diffArray(uniArrA, uniArrB);
    }

    return argsArr.reduce(function (prev, current) {
        return symDiff2(prev, current);
    });
}