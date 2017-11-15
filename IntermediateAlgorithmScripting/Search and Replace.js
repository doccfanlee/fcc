function myReplace(str, before, after) {

    var firstCapitalizedAfter = after;
    if (IsFirstCapitalized(before) && !IsFirstCapitalized(after))
        firstCapitalizedAfter = after[0].toUpperCase() + after.slice(1);

    var regEx = new RegExp(before);
    var retStr = str.replace(regEx, firstCapitalizedAfter);
    return retStr;
}

function IsFirstCapitalized(str) {
    if (str.charCodeAt(0) >= 65 && str.charCodeAt(0) <= 90)
        return true;
}

/** second method */

function myReplace(str, before, after) {
  var strArray = str.split(' ');
  var afterNormalized = after;
  if(/^[A-Z]/.test(before) !== /^[A-Z]/.test(after)){
    if(/^[A-Z]/.test(before)){
      afterNormalized = after[0].toUpperCase() + after.slice(1);
    } else {
      afterNormalized = after[0].toLowerCase() + after.slice(1);
    }
  }
  
  var regExp = new RegExp(before);
 return str.replace(regExp,afterNormalized);

}