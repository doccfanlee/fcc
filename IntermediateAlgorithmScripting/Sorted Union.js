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