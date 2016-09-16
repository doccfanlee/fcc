function sumFibs(num) {
    var sum = 0;
    for (var i = 1; fibs(i) <= num; i++) {
        if (fibs(i) % 2 === 1)
            sum += fibs(i);
    }

    return sum;
}

function fibs(n) {
    if (n === 1 || n === 2)
        return 1;

    var sum = 0;
    var first = 1;
    var second = 1;
    for (var i = 3; i <= n; i++) {
        sum = first + second;
        first = second;
        second = sum;
    }

    return sum;
}