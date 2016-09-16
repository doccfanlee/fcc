
function telephoneCheck(str) {
  // Good luck!
  
  var regEx  = /^1?\s?\d{3}[-\s]?\d{3}[-\s]?\d{4}$|^1?\s?\(\d{3}\)[-\s]?\d{3}[-\s]?\d{4}$/;
      var ret = regEx.test(str);
  
  return ret;
}
