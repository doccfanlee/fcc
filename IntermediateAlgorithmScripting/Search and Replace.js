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