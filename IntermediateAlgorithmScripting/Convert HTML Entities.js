function convert(str) {
    // &colon;&rpar;
    var retStr = '';
    for (var i = 0; i < str.length; i++) {

        switch (str[i]) {
            case '&':
                retStr += '&amp;';
                break;
            case '<':
                retStr += '&lt;';
                break;
            case '>':
                retStr += '&gt;';
                break;
            case '"':
                retStr += '&quot;';
                break;
            case "'":
                retStr += '&apos;';
                break;
            default:
                retStr += str[i];
        }
    }
    return retStr;
}

/** another method */
function convert(str) {
    return str.replace(/&/gi, '&amp;').replace(/</gi, '&lt;').replace(/>/gi, '&gt;').replace(/"/gi, '&quot;').replace(/'/gi, '&apos;');
}