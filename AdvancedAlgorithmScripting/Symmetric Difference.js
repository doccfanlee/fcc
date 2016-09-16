
function sym(args) {

  var argsArr = [];
  var retArr = [];

  for (var i = 0; i <= arguments.length; i++) {
    argsArr[i] = arguments[i];
  }

  function removeDup(arrDup) {
    var retA = [];
    arrDup.forEach(function (val) {
      if (!retA.includes(val))
        retA.push(val);
    });

    return retA;
  }

  function intersectionArr(arrC, arrD) {
    return arrC.filter(function (val) {
      return arrD.includes(val);
    });
  }

  function setDiff(arrA, arrB) {
    return arrA.filter(function (val) {
      return !arrB.includes(val);
    });
  }

  function symDiff2(arrA, arrB) {
    var uniArrA = removeDup(arrA);
    var uniArrB = removeDup(arrB);

    var intersectArrAB = intersectionArr(uniArrA, uniArrB);
    var symA = setDiff(uniArrA, intersectArrAB);
    var symB = setDiff(uniArrB, intersectArrAB);

    return symA.concat(symB);

  }

  /*
  retArr = argsArr.reduce(function(prev, current){
    
    return symDiff2(prev, current);
    
  });
    */
  retArr = argsArr[0];

  for (var j = 1; j < argsArr.length - 1; j++) {
    retArr = symDiff2(retArr, argsArr[j]);
  }


  return retArr;
}