function spinalCase(str) {
    var regEx = /[A-Z]?[a-z]+/g;
    var matchArr = [];
    function replacer(match) {
        matchArr.push(match);
    }
    str.replace(regEx, replacer);
    return matchArr.join('-').toLowerCase();
}

/** another method */

function spinalCase(str) {
  var retStr = str.match(/[A-Z]?[a-z]+/g);
  return retStr.join('-').toLowerCase();
}