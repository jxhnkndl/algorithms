// Write code to create a function that returns the factorial of `num`

var factorial = function(num) {
  var product = 1;
  
  if (num === 0) {
    return 1;
  }

  for (var i = 1; i <= num; i++) {
    product *= i;
  }

  return product;
};
