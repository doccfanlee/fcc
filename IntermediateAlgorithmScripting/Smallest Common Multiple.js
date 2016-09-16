/* Use Euclid's Algorithm to find the Greatest Common Divisor(GCD) */
function smallestCommons(arr) {
    var bigger = 0;
    var smaller = 0;
    if (arr[0] > arr[1]) {
        bigger = arr[0];
        smaller = arr[1];
    } else {
        bigger = arr[1];
        smaller = arr[0];
    }

    var tempGCD = 0;
    var LCM = smaller;
    for (var i = smaller + 1; i <= bigger; i++) {
        tempGCD = GCD2(i, LCM);
        LCM = i * LCM / tempGCD;
    }

    return LCM;
}

function GCD2(num1, num2) {
    var bigger = 0;
    var smaller = 0;
    if (num1 > num2) {
        bigger = num1;
        smaller = num2;
    } else {
        bigger = num2;
        smaller = num1;
    }

    var remainder = 0;
    do {
        remainder = bigger % smaller;
        bigger = smaller;
        smaller = remainder;
    } while (remainder !== 0);

    return bigger;
}