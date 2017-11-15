
function convertToRoman(num) {
  
  var NumToRomanMap = {
    1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX', 10: 'X', 20: 'XX', 30: 'XXX', 40: 'XL', 50: 'L', 60: 'LX', 70: 'LXX', 80: 'LXXX', 90: 'XC', 100: 'C', 200: 'CC', 300: 'CCC', 400: 'CD', 500: 'D', 600: 'DC', 700: 'DCC', 800: 'DCCC', 900: 'CM', 1000: 'M', 2000: 'MM', 3000: 'MMM'
  };
  
  if (num > 4000)
    console.log('cannot convert number equal to or bigger than 4000');
  
  var numStr = Number(num).toString();
  var retArr = [];
  for(var i = numStr.length - 1; i >= 0; --i){
    var coef = Math.pow(10, (numStr.length - i -1));
    retArr.unshift(NumToRomanMap[numStr[i]*coef]);
  }
 return retArr.join('');
}