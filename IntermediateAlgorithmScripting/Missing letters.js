function fearNotLetter(str) {

  var retStr;
  var charCodeAtBegin = str.charCodeAt(0);
  var charCodeAtEnd = str.charCodeAt(str.length - 1);
  var tempChar;
  for (var i = 0; i < charCodeAtEnd - charCodeAtBegin + 1; i++) {
    tempChar = String.fromCharCode(charCodeAtBegin + i);
    if (str.search(tempChar) === -1)
      retStr = tempChar;

  }
  return retStr;
}

/** another method */

function fearNotLetter(str) {

  var retArr;
  for (var i = 1, j = 1; i < str.length; ++i, ++j) {
    while (str[i] !== String.fromCharCode(str.charCodeAt(0) + j)) {
      retArr = String.fromCharCode(str.charCodeAt(0) + j);
      j++;
    }
  }

  return retArr;
}