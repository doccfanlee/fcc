function pairwise(arr, arg) {
    if (Object.keys(arr).length === 0)
        return 0;

    var ret = [];

    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === arg && !ret.includes(i) && !ret.includes(j)) {
                ret.push(i);
                ret.push(j);
                break;
            }

        }
    }

    var num = ret.reduce(function (prev, current) {
        return prev + current;

    });

    return num;
}