function pair(str) {
  var retArr = [];
  var tempArr = [];
  for(var i = 0; i < str.length; i++){
    tempArr = [];
    tempArr.push(str[i]);
    switch(str[i]){
      case 'A':
        tempArr.push('T');
        break;
      case 'T':
        tempArr.push('A');
        break;
      case 'C':
        tempArr.push('G');
        break;
       case 'G':
        tempArr.push('C');
        break;            
    }
    retArr.push(tempArr);
  }
  return retArr;
}

/** second method */

function pairElement(str) {
  var strArray = [];
  for(var i = 0; i < str.length; ++i){
    strArray.push(str[i]);
  }
  
  return strArray.map(function(element, index){
      var temp = '';
      switch(element) {
        case 'A': temp = 'T';
          break;
        case 'T': temp = 'A';
          break;
        case 'C': temp = 'G';
          break;
        case 'G': temp = 'C';
          break;
      }
      var elementArray = [];
          elementArray.push(element,temp);
    return elementArray;
  });
}