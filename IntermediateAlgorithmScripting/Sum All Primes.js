function sumPrimes(num) {
  var sum = 0;
  for(var i = 2; i<= num; i++){
    if (IsPrime(i))
      sum += i;
  }
  return sum;
}

function IsPrime(num){
  for(var i = 2; i <= Math.ceil(Math.sqrt(num)); i++){
    if (num % i === 0 && i !== num)
      return false;
  }
  return true;
}