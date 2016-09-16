function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins

    var regEx = /[A-Z]?[a-z]+/g;
    var matchArr = [];
    function replacer(match) {
        matchArr.push(match);
    }
    str.replace(regEx, replacer);
    var retString = matchArr.join('-').toLowerCase();
    return retString;
}