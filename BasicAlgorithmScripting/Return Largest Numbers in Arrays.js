
function largestOfFour(arr) {
  // You can do this!
  console.log("new test:");
 return arr.map(function(val){
    return val.reduce(function(prev,current){
      return Math.max(prev,current);
    });
  }); 
}