function every(collection, pre) {
    // Is everyone being true?
    var ret = collection.every(function (obj) {
        if (obj.hasOwnProperty(pre) && obj[pre] !== '' && obj[pre] !== 0 && obj[pre] !== undefined && obj[pre] !== null && !Object.is(NaN, obj[pre])) {
            console.log("the property of " + obj[pre] + " is: " + pre);
            console.log("the type of " + obj[pre] + " is: " + typeof (obj[pre]));
            console.log("the value of " + obj[pre] + " is: " + obj[pre]);
            return true;
        } else {
            return false;
        }
    });
    return ret;
}