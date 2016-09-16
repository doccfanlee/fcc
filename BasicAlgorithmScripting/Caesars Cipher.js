function rot13(str) { // LBH QVQ VG!

    var charCode = 0;
    var retStr = "";
    for (var i = 0; i < str.length; i++) {
        charCode = str.charCodeAt(i);
        if (charCode < 65 || charCode > 90) {
            retStr += str[i];
            continue;
        }

        charCode += 13;

        if (charCode > 90) {
            charCode = charCode - 90 + 64;
        }

        retStr += String.fromCharCode(charCode);

    }

    return retStr;
}