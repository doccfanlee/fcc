'use esversion:6';
function addTogether() {

    var args = [...arguments];
    if (arguments.length === 2) {
        if (!Number.isInteger(args[0]) || !Number.isInteger(args[1]))
            return undefined;
        return args[0] + args[1];
    }

    if (arguments.length === 1) {
        if (!Number.isInteger(arguments[0]))
            return undefined;

        return function (y) {
            if (!Number.isInteger(arguments[0]))
                return undefined;
            return args[0] + y;
        };
    }

}