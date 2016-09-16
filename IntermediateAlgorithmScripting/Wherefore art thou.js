function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    var cond = true;
    collection.forEach(function (obj) {
        cond = true;
        for (var prop in source) {
            if (!obj.hasOwnProperty(prop) || (obj[prop] !== source[prop])) {
                cond = false;
            }
        }
        if (cond === true) {
            arr.push(obj);
        }
    });

    // Only change code above this line
    return arr;
}