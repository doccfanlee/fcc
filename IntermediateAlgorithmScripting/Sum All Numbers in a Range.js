function sumAll(arr) {

    var minVal = 0;
    var maxVal = 0;

    if (arr[0] > arr[1]) {
        minVal = arr[1];
        maxVal = arr[0];
    } else {
        minVal = arr[0];
        maxVal = arr[1];
    }

    var sum = 0;

    for (var i = minVal; i <= maxVal; i++) {
        sum += i;
    }

    return sum;
}