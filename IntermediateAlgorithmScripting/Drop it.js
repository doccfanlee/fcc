function dropElements(arr, func) {
    // Drop them elements.

    var retArr = [];
    var index = arr.findIndex(func);
    if (index < 0)
        return retArr;
    return arr.slice(index);
}
