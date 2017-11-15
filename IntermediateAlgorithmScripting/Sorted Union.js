function unite(arr1, arr2, arr3) {

    var args = Array.from(arguments);
    var retArr = [];

    args.forEach(function (arr) {

        arr.forEach(function (element) {

            if (!retArr.includes(element)) {
                retArr.push(element);
            }

        });

    });

    return retArr;
}

/** Another method */
function uniteUnique(arr) {
  var args = Array.from(arguments);
  return args.reduce(function(pre, cur){
    cur.forEach(function(element){
      if(!pre.includes(element))
        pre.push(element);
    });
    return pre;
  });
}