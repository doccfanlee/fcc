function translate(str) {
  var retStr;
  var indexOfFirstVowel = str.search(/[aeiou]/i);
  if (indexOfFirstVowel === 0){
    retStr = str.concat('way');
  } else {
    retStr = str.slice(indexOfFirstVowel) + str.slice(0,indexOfFirstVowel) + 'ay';
  }
  return retStr;
}
