function pair(str) {
  var retArr = [];
  var tempArr = [];
  for(var i = 0; i < str.length; i++){
    tempArr = [];
    switch(str[i]){
      case 'A':
        tempArr.push('A');
        tempArr.push('T');
        break;
      case 'T':
        tempArr.push('T');
        tempArr.push('A');
        break;
      case 'C':
        tempArr.push('C');
        tempArr.push('G');
        break;
       case 'G':
        tempArr.push('G');
        tempArr.push('C');
        break;            
    }
    
    retArr.push(tempArr);
  }
  return retArr;
}